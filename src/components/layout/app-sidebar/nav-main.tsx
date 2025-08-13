import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { app, navItems } from "@/constants";
import { IconCircleDot } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import { useLocation } from "@tanstack/react-router";

export function NavMain() {
  const location = useLocation();
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarGroupLabel>{app.description}</SidebarGroupLabel>
        <SidebarMenu>
          {navItems.map((item) => {
            const isActive = location.pathname == item.url;
            return (
              <SidebarMenuItem key={item.title}>
                <Link to={item.url}>
                  <SidebarMenuButton
                    tooltip={item.title}
                    className={isActive ? "bg-background border" : ""}
                  >
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                    {isActive && (
                      <IconCircleDot className="ml-auto opacity-60" />
                    )}
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
