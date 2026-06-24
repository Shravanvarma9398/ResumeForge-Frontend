import { Link, useNavigate } from "react-router-dom";

function Dashboard() {

const navigate = useNavigate();

const logout = () => {
localStorage.removeItem("token");
navigate("/");
};

return ( <div className="min-h-screen bg-slate-100 flex">


  <div className="w-64 bg-gradient-to-b from-purple-900 to-violet-700 text-white p-6">

    <h1 className="text-3xl font-bold mb-10">
      ResumeForge
    </h1>

    <div className="space-y-4">

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

  <div className="flex-1 p-10">

    <div className="mb-10">

      <h1 className="text-4xl font-bold text-gray-800">
        Dashboard
      </h1>

      <p className="text-gray-500 mt-2">
        Analyze resumes, review AI reports, and improve your profile for better opportunities.
      </p>

    </div>

    <div className="grid md:grid-cols-2 gap-6">

      <div className="bg-white rounded-3xl shadow-md p-8">

        <h2 className="text-2xl font-semibold mb-3">
          Upload Resume
        </h2>

        <p className="text-gray-600 mb-6">
          Upload your latest resume and receive AI-powered analysis and recommendations.
        </p>

        <Link
          to="/upload"
          className="
            bg-purple-700
            text-white
            px-6
            py-3
            rounded-xl
            inline-block
            hover:bg-purple-800
          "
        >
          Upload Resume
        </Link>

      </div>

      <div className="bg-white rounded-3xl shadow-md p-8">

        <h2 className="text-2xl font-semibold mb-3">
          Analysis History
        </h2>

        <p className="text-gray-600 mb-6">
          Review previous AI-generated resume reports and track improvements.
        </p>

        <Link
          to="/history"
          className="
            bg-purple-700
            text-white
            px-6
            py-3
            rounded-xl
            inline-block
            hover:bg-purple-800
          "
        >
          View History
        </Link>

      </div>

    </div>

    <div className="bg-white rounded-3xl shadow-md p-8 mt-8">

      <h2 className="text-2xl font-semibold mb-4">
        About ResumeForge
      </h2>

      <p className="text-gray-600 leading-8">
        ResumeForge helps job seekers improve their resumes using AI-powered feedback. Upload your resume, receive detailed analysis, identify improvement areas, and build a stronger profile for software engineering and technical roles.
      </p>

    </div>

  </div>

</div>

);
}

export default Dashboard;
