import Sidebar from "./components/Sidebar";
import DashboardContent from "./components/DashboardContent";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#f3f3f3] p-6 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <Sidebar />

        {/* Content */}
        <DashboardContent />
      </div>
    </div>
  );
}
