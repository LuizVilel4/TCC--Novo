import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function AdminLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />

      <main className="min-h-screen w-full bg-[#f2f2f2]">
        <div className="p-4">
          <SidebarTrigger />
        </div>

        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
}
