import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

function PageLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100">

      {/* Mobile Navbar */}
      <div className="md:hidden bg-purple-800 text-white px-4 py-4 flex justify-between items-center shadow-md sticky top-0 z-50">

        <h1 className="text-xl font-bold">
          ResumeForge
        </h1>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl"
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-purple-800 text-white shadow-lg">

          <Link
            to="/dashboard"
            onClick={() => setMenuOpen(false)}
            className="block p-4 border-b border-white/10"
          >
            Dashboard
          </Link>

          <Link
            to="/upload"
            onClick={() => setMenuOpen(false)}
            className="block p-4 border-b border-white/10"
          >
            Upload Resume
          </Link>

          <Link
            to="/history"
            onClick={() => setMenuOpen(false)}
            className="block p-4"
          >
            Analysis History
          </Link>

        </div>
      )}

      <div className="flex min-w-0">

        {/* Desktop Sidebar */}
        <div className="hidden md:block">
          <Sidebar />
        </div>

        {/* Main Content */}
        <main className="flex-1 min-w-0 p-3 md:p-8 overflow-x-hidden">
          {children}
        </main>

      </div>

    </div>
  );
}

export default PageLayout;
