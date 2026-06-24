import Sidebar from "./Sidebar";

function PageLayout({ children }) {

  return (
    <div className="flex bg-slate-100">

      <Sidebar />

      <div className="flex-1 p-10">
        {children}
      </div>

    </div>
  );
}

export default PageLayout;