import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Dashboard() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col md:flex-row">

      {/* Mobile Navbar */}
      <div className="md:hidden sticky top-0 z-50 bg-purple-800 text-white px-4 py-4 flex justify-between items-center shadow-lg">

        <h1 className="text-xl font-bold">
          ResumeForge
        </h1>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl"
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-purple-700 text-white px-4 py-4 shadow-lg">

          <Link
            to="/dashboard"
            onClick={closeMenu}
            className="block py-3 border-b border-white/20"
          >
            Dashboard
          </Link>

          <Link
            to="/upload"
            onClick={closeMenu}
            className="block py-3 border-b border-white/20"
          >
            Upload Resume
          </Link>

          <Link
            to="/history"
            onClick={closeMenu}
            className="block py-3 border-b border-white/20"
          >
            Analysis History
          </Link>

          <button
            onClick={logout}
            className="mt-4 w-full bg-white text-purple-700 py-2 rounded-lg font-semibold"
          >
            Logout
          </button>

        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden md:flex md:w-64 bg-gradient-to-b from-purple-900 to-violet-700 text-white p-6 flex-col">

        <h1 className="text-3xl font-bold mb-10">
          ResumeForge
        </h1>

        <div className="space-y-3">

          <Link
            to="/dashboard"
            className="block p-3 rounded-lg hover:bg-white/20"
          >
            Dashboard
          </Link>

          <Link
            to="/upload"
            className="block p-3 rounded-lg hover:bg-white/20"
          >
            Upload Resume
          </Link>

          <Link
            to="/history"
            className="block p-3 rounded-lg hover:bg-white/20"
          >
            Analysis History
          </Link>

        </div>

        <button
          onClick={logout}
          className="mt-10 bg-white text-purple-700 px-4 py-2 rounded-lg font-semibold"
        >
          Logout
        </button>

      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-10">

        <div className="mb-8">

          <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
            Dashboard
          </h1>

          <p className="text-gray-500 mt-2">
            Analyze resumes, review AI reports, and improve your profile for better opportunities.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="bg-white rounded-3xl shadow-md p-5 md:p-8">

            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              Upload Resume
            </h2>

            <p className="text-gray-600 mb-6">
              Upload your latest resume and receive AI-powered analysis and recommendations.
            </p>

            <Link
              to="/upload"
              className="bg-purple-700 text-white px-6 py-3 rounded-xl inline-block hover:bg-purple-800"
            >
              Upload Resume
            </Link>

          </div>

          <div className="bg-white rounded-3xl shadow-md p-5 md:p-8">

            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              Analysis History
            </h2>

            <p className="text-gray-600 mb-6">
              Review previous AI-generated resume reports and track improvements.
            </p>

            <Link
              to="/history"
              className="bg-purple-700 text-white px-6 py-3 rounded-xl inline-block hover:bg-purple-800"
            >
              View History
            </Link>

          </div>

        </div>

        <div className="bg-white rounded-3xl shadow-md p-5 md:p-8 mt-8">

          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            About ResumeForge
          </h2>

          <p className="text-gray-600 leading-7 md:leading-8">
            ResumeForge helps job seekers improve their resumes using AI-powered feedback.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;