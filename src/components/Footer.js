
import React from 'react';

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Yassegoungbe S. Mickael Bonheur.
          </p>

          <p className="text-sm text-slate-500">
            Software & Data
          </p>

        </div>
      </div>
    </footer>
  );
}

export default Footer;

