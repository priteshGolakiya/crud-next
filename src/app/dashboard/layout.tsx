import Navbar from "../ui/dashboard/navbar/navbar";
import Sidebar from "../ui/dashboard/sidebar/sidebar";

const DashboardLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-200">
      <aside className="w-full lg:w-64 bg-gradient-to-b from-blue-600 to-blue-800 text-white">
        <Sidebar />
      </aside>
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-md">
          <Navbar />
        </header>
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
