import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import {
  LayoutDashboard,
  CalendarRange,
  Users,
  PawPrint,
  LogOut,
} from "lucide-react";

const items = [
  { title: "Dashboard", url: "/admin/dashboard", icon: LayoutDashboard },
  { title: "Agenda", url: "/admin/agenda", icon: CalendarRange },
  { title: "Clientes", url: "/admin/clientes", icon: Users },
  { title: "Pets", url: "/admin/pets", icon: PawPrint },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="px-3 py-4">
        <div className="text-lg font-bold text-[#008080]">PetCare+ Admin</div>
        <div className="text-xs text-[#808080]">Painel administrativo</div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={({ isActive }) =>
                        [
                          "flex items-center gap-2 rounded-md px-2 py-1.5",
                          isActive
                            ? "text-[#008080] font-semibold"
                            : "text-[#808080]",
                        ].join(" ")
                      }
                    >
                      <item.icon size={25} />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-3">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <NavLink
                to="/admin/login"
                className="flex items-center gap-2 text-[#808080]"
              >
                <LogOut size={25} />
                <span>Sair</span>
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
