import { useState } from "react";
import Sidebar from "./Sidebar";

function PageLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100">

      {/* Mobile Navbar */}
      <div className="md:hidden bg-purple-800 text-white p-4 flex justify-between items-center">

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

 {menuOpen && (
  <div className="md:hidden bg-purple-800 text-white">

    <Link
      to="/dashboard"
      className="block p-4 border-b border-white/10"
    >
      Dashboard
    </Link>

    <Link
      to="/upload"
      className="block p-4 border-b border-white/10"
    >
      Upload Resume
    </Link>

    <Link
      to="/history"
      className="block p-4"
    >
      Analysis History
    </Link>

  </div>
)}
      <div className="flex">

        {/* Desktop Sidebar */}
        <div className="hidden md:block">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 md:p-10">
          {children}
        </div>

      </div>

    </div>
  );
}

export default PageLayout;