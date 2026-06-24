import {
  LayoutDashboard,
  Upload,
  History,
  LogOut,
} from "lucide-react";

import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-72 min-h-screen bg-gradient-to-b from-purple-950 via-purple-900 to-violet-800 text-white p-6">

      <h1 className="text-3xl font-bold mb-10">
        ResumeForge
      </h1>

      <div className="space-y-3">

        <Link
          to="/dashboard"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10"
        >
          <LayoutDashboard size={20} />
          Dashboard
        </Link>

        <Link
          to="/upload"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10"
        >
          <Upload size={20} />
          Upload Resume
        </Link>

        <Link
          to="/history"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10"
        >
          <History size={20} />
          Analysis History
        </Link>

      </div>

    </div>
  );
}

export default Sidebar;