import Navbar from "@/components/common/Navbar";
import SideRail from "@/components/common/SideRail";

export default function PublicLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-bg flex relative">
      {/* SideRail Fixed on Left */}
      <SideRail />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 md:pl-[64px]">
        <Navbar />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
