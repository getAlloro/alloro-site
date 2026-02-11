import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProofRow from "../components/ProofRow";
import FeatureCards from "../components/FeatureCards";
import GrowthTabs from "../components/GrowthTabs";
import ProblemRelief from "../components/ProblemRelief";
import ExamplePreview from "../components/ExamplePreview";
import CaseStudy from "../components/CaseStudy";
import LeadForm from "../components/LeadForm";
import Beliefs from "../components/Beliefs";
import TrustStack from "../components/TrustStack";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProofRow />
        <FeatureCards />
        <GrowthTabs />
        <ExamplePreview />
        <ProblemRelief />
        <CaseStudy />
        <LeadForm />
        <Beliefs />
        <TrustStack />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
