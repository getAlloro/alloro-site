import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

interface HeaderProps {
  showBackToHome?: boolean;
}

const Header: React.FC<HeaderProps> = ({ showBackToHome = false }) => {
  const scrollToForm = () => {
    const element = document.getElementById('lead-capture');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-3 cursor-pointer group">
            <img
              src="https://app.getalloro.com/logo.png"
              alt="Alloro Logo"
              className="w-10 h-10 rounded-xl shadow-lg shadow-alloro-500/20 group-hover:scale-105 transition-transform"
            />
            <span className="font-bold text-2xl tracking-tight text-slate-900">Alloro</span>
          </Link>

          {/* CTA Section */}
          <div>
            {showBackToHome ? (
              <Link
                to="/"
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                ← Back to Home
              </Link>
            ) : (
              <Button
                onClick={scrollToForm}
                className="!py-2.5 !px-6 text-sm bg-slate-900 hover:bg-alloro-500 transition-colors"
              >
                Get Free Report
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;