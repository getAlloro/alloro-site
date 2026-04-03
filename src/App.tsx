import { Routes, Route } from "react-router-dom";

// Marketing pages (new)
import HomePage from "./pages/marketing/HomePage";
import AboutPage from "./pages/marketing/AboutPage";
import HowItWorks from "./pages/marketing/HowItWorks";
import PricingPage from "./pages/marketing/PricingPage";
import ProductPage from "./pages/marketing/ProductPage";
import RisePage from "./pages/marketing/RisePage";
import Story from "./pages/marketing/Story";
import WhoItsFor from "./pages/marketing/WhoItsFor";
import Blog from "./pages/marketing/Blog";
import GoogleBusinessProfileScore from "./pages/marketing/blog/GoogleBusinessProfileScore";
import TheSecondJobProblem from "./pages/marketing/blog/TheSecondJobProblem";
import WhyYourCompetitorKeepsShowingUp from "./pages/marketing/blog/WhyYourCompetitorKeepsShowingUp";

// Utility pages (kept)
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AlloroProtect from "./pages/AlloroProtect";
import Success from "./pages/Success";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Routes>
        {/* Marketing */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/rise" element={<RisePage />} />
        <Route path="/story" element={<Story />} />
        <Route path="/who-its-for" element={<WhoItsFor />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/google-business-profile-score" element={<GoogleBusinessProfileScore />} />
        <Route path="/blog/the-second-job-problem" element={<TheSecondJobProblem />} />
        <Route path="/blog/why-your-competitor-keeps-showing-up" element={<WhyYourCompetitorKeepsShowingUp />} />

        {/* Utility */}
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/alloro-protect" element={<AlloroProtect />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </div>
  );
}

export default App;
