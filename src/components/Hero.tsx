import React, { useState, useEffect } from "react";
import Button from "./Button";
import { Star, Search, MapPin, Loader2, Globe } from "lucide-react";
import { API_BASE_URL, AUDIT_TOOL_URL } from "../utils/config";
import { useDebounce } from "../hooks/useDebounce";
import type {
  SelectedGBP,
  PlacesSuggestion,
  PlacesAutocompleteResponse,
  PlacesDetailsResponse,
  AuditRedirectData,
} from "../types/places";

type AnalysisStep = "search" | "confirm";

const Hero: React.FC = () => {
  // State
  const [step, setStep] = useState<AnalysisStep>("search");
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedBusiness, setSelectedBusiness] = useState<SelectedGBP | null>(
    null,
  );

  // API states
  const [suggestions, setSuggestions] = useState<PlacesSuggestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingDetails, setIsLoadingDetails] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Debounce search term
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  // Fetch suggestions when debounced search term changes
  useEffect(() => {
    if (
      debouncedSearchTerm &&
      debouncedSearchTerm.length >= 2 &&
      step === "search"
    ) {
      fetchSuggestions(debouncedSearchTerm);
    } else {
      setSuggestions([]);
      setShowDropdown(false);
    }
  }, [debouncedSearchTerm, step]);

  // Fetch autocomplete suggestions
  const fetchSuggestions = async (query: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}/places/autocomplete`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input: query }),
      });

      const data: PlacesAutocompleteResponse = await response.json();

      if (data.success) {
        setSuggestions(data.suggestions);
        setShowDropdown(data.suggestions.length > 0);
      } else {
        setError(data.error || "Failed to fetch suggestions");
        setSuggestions([]);
      }
    } catch (err) {
      setError("Network error. Please try again.");
      setSuggestions([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch place details when a suggestion is selected
  const fetchPlaceDetails = async (placeId: string) => {
    setIsLoadingDetails(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}/places/${placeId}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const data: PlacesDetailsResponse = await response.json();

      if (data.success && data.place) {
        setSelectedBusiness(data.place);
        setSearchTerm(data.place.name);
        setShowDropdown(false);
        setStep("confirm");
      } else {
        setError(data.error || "Failed to get business details");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setIsLoadingDetails(false);
    }
  };

  // Handlers
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setError(null);
  };

  const selectSuggestion = (suggestion: PlacesSuggestion) => {
    fetchPlaceDetails(suggestion.placeId);
  };

  const startAnalysis = () => {
    if (!selectedBusiness) return;

    // Create redirect data
    const redirectData: AuditRedirectData = {
      domain: selectedBusiness.websiteUri || selectedBusiness.domain || "",
      practice_search_string: selectedBusiness.practiceSearchString,
    };

    // Base64 encode the data
    const encodedData = btoa(JSON.stringify(redirectData));

    // Redirect to audit tool with autostart
    const auditUrl = `${AUDIT_TOOL_URL}?autostart=true&data=${encodeURIComponent(encodedData)}`;
    window.location.href = auditUrl;
  };

  const resetSearch = () => {
    setStep("search");
    setSelectedBusiness(null);
    setSearchTerm("");
    setSuggestions([]);
    setError(null);
  };

  // --- Render Steps ---

  const renderSearchStep = () => (
    <div className="animate-fade-in w-full max-w-2xl mx-auto relative z-20 px-4 sm:px-0">
      <div className="relative group">
        <div className="absolute inset-0 bg-alloro-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-50"></div>
        <div className="relative bg-white p-2 rounded-2xl shadow-xl border border-slate-100 flex flex-col sm:flex-row items-center gap-2 sm:gap-0">
          <div className="flex items-center w-full sm:w-auto flex-grow">
            {isLoading ? (
              <Loader2
                className="ml-4 text-alloro-500 shrink-0 animate-spin"
                size={24}
              />
            ) : (
              <Search className="ml-4 text-slate-400 shrink-0" size={24} />
            )}
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search for your business..."
              className="w-full px-4 py-3 sm:py-4 text-base sm:text-lg outline-none text-slate-900 placeholder:text-slate-400 bg-transparent"
              autoComplete="off"
            />
          </div>
          <Button
            onClick={() => searchTerm && setShowDropdown(true)}
            className="hidden sm:flex shrink-0"
            disabled={isLoading}
          >
            Analyze Practice
          </Button>
        </div>

        {/* Mobile Button */}
        <Button
          onClick={() => searchTerm && setShowDropdown(true)}
          className="sm:hidden w-full mt-3 shadow-lg py-3.5 text-base"
          disabled={isLoading}
        >
          Analyze Practice
        </Button>

        {/* Error Message */}
        {error && (
          <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
            {error}
          </div>
        )}

        {/* Dropdown Results - positioned above */}
        {showDropdown && suggestions.length > 0 && (
          <div className="absolute bottom-full left-0 right-0 mb-3 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-50 animate-in fade-in slide-in-from-bottom-2 mx-2 sm:mx-0 max-h-80 overflow-y-auto">
            {suggestions.map((suggestion) => (
              <button
                key={suggestion.placeId}
                onClick={() => selectSuggestion(suggestion)}
                disabled={isLoadingDetails}
                className="w-full text-left px-4 sm:px-6 py-4 hover:bg-slate-50 transition-colors flex items-start gap-4 border-b border-slate-50 last:border-0 disabled:opacity-50"
              >
                <div className="w-10 h-10 rounded-full bg-alloro-50 flex items-center justify-center flex-shrink-0 mt-0.5 text-alloro-600">
                  {isLoadingDetails ? (
                    <Loader2 size={18} className="animate-spin" />
                  ) : (
                    <MapPin size={18} />
                  )}
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm sm:text-base">
                    {suggestion.mainText}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500">
                    {suggestion.secondaryText}
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* No Results - positioned above */}
        {showDropdown &&
          suggestions.length === 0 &&
          searchTerm.length >= 2 &&
          !isLoading && (
            <div className="absolute bottom-full left-0 right-0 mb-3 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-50 mx-2 sm:mx-0">
              <div className="p-6 text-center text-slate-500 text-sm sm:text-base">
                No businesses found. Try a different search term.
              </div>
            </div>
          )}
      </div>
    </div>
  );

  const renderConfirmStep = () => (
    <div className="animate-fade-in max-w-xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-100 overflow-hidden relative z-20 mx-4 sm:mx-auto">
      <div className="h-1.5 sm:h-2 bg-alloro-500 w-full"></div>
      <div className="p-6 sm:p-8">
        <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 mb-8">
          <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-alloro-600 shrink-0">
            <MapPin size={24} />
          </div>
          <div className="text-left flex-1 min-w-0">
            <div className="font-bold text-slate-900 text-base sm:text-lg">
              {selectedBusiness?.name}
            </div>
            <div className="text-sm text-slate-500 mt-1">
              {selectedBusiness?.formattedAddress}
            </div>
            <div className="flex flex-wrap items-center gap-3 mt-3 text-xs font-medium text-slate-400">
              {selectedBusiness?.rating && (
                <>
                  <span className="flex items-center gap-1">
                    <Star
                      size={12}
                      className="fill-yellow-400 text-yellow-400"
                    />
                    {selectedBusiness.rating.toFixed(1)}
                    {selectedBusiness.reviewCount > 0 && (
                      <span className="text-slate-300">
                        ({selectedBusiness.reviewCount})
                      </span>
                    )}
                  </span>
                  <span>•</span>
                </>
              )}
              {selectedBusiness?.category && (
                <span>{selectedBusiness.category}</span>
              )}
              {selectedBusiness?.domain && (
                <>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-alloro-600">
                    <Globe size={12} />
                    {selectedBusiness.domain}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <Button
            onClick={startAnalysis}
            fullWidth
            className="py-3.5 sm:py-4 text-base sm:text-lg shadow-xl shadow-alloro-500/20"
          >
            Start the Audit!
          </Button>
          <button
            onClick={resetSearch}
            className="py-3 text-slate-400 hover:text-slate-600 text-sm font-medium transition-colors"
          >
            Search again
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative pt-32 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-40 overflow-hidden min-h-[600px] lg:min-h-[700px] flex flex-col justify-center">
      {/* Background Gradient Mesh */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-20%] right-[-10%] w-[500px] sm:w-[800px] h-[500px] sm:h-[800px] bg-alloro-50/50 rounded-full blur-3xl opacity-60 animate-pulse-slow"></div>
        <div className="absolute top-[20%] left-[-10%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-blue-50/30 rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

        {step === "search" ? (
          <>
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight mb-6 sm:mb-8 leading-[1.15] sm:leading-[1.1]">
              Stop guessing why <br className="hidden md:block"/>
              <span className="relative inline-block">
                <span className="relative z-10 text-alloro-500">revenue slips through</span>
                <span className="absolute bottom-1 sm:bottom-2 left-0 w-full h-2 sm:h-3 bg-alloro-100/50 -z-10 transform -rotate-1"></span>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mt-4 sm:mt-6 max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl text-slate-600 leading-relaxed mb-8 sm:mb-12 px-2">
              Alloro connects to your practice data and shows exactly where you're losing money — so you can fix it this week, not next quarter.
            </p>

            {/* Search Interface */}
            {renderSearchStep()}
          </>
        ) : (
          <>
            {/* Minified Headline for confirm step */}
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 sm:mb-10 animate-fade-in">
              Practice <span className="text-alloro-500">Analyzer</span>
            </h2>

            {renderConfirmStep()}
          </>
        )}
      </div>
    </section>
  );
};

export default Hero;
