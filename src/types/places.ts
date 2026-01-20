/**
 * Types for Google Places API integration
 */

// Selected GBP from search dropdown
export interface SelectedGBP {
  placeId: string;
  name: string;
  formattedAddress: string;
  city: string;
  state: string;
  displayString: string;
  practiceSearchString: string;
  domain: string;
  websiteUri: string | null;
  phone: string | null;
  rating: number | null;
  reviewCount: number;
  category: string;
}

// Autocomplete suggestion from API
export interface PlacesSuggestion {
  placeId: string;
  mainText: string;
  secondaryText: string;
  description: string;
}

// API response types
export interface PlacesAutocompleteResponse {
  success: boolean;
  suggestions: PlacesSuggestion[];
  error?: string;
}

export interface PlacesDetailsResponse {
  success: boolean;
  place: SelectedGBP;
  error?: string;
}

// Base64 encoded data for redirect to audit tool
export interface AuditRedirectData {
  domain: string;
  practice_search_string: string;
}
