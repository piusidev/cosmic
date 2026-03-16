import type { Meta, StoryObj } from "@storybook/react-vite";
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
  SidebarProvider,
  SidebarTrigger,
} from "@cosmic/ui";

const meta: Meta<typeof Sidebar> = {
  title: "UI/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

const navItems = [
  { label: "Home", href: "#" },
  { label: "Dashboard", href: "#" },
  { label: "Projects", href: "#" },
  { label: "Settings", href: "#" },
];

export const Default: Story = {
  render: () => (
    <SidebarProvider style={{ "--sidebar-width": "16rem" } as React.CSSProperties} className="h-[400px] border rounded-lg overflow-hidden">
      <Sidebar>
        <SidebarHeader className="p-3">
          <span className="font-semibold text-sm">Acme Inc.</span>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navItems.map((item) => (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton asChild>
                      <a href={item.href}>{item.label}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="p-3">
          <span className="text-xs text-muted-foreground">v1.0.0</span>
        </SidebarFooter>
      </Sidebar>
      <div className="flex flex-1 flex-col p-4 gap-2">
        <SidebarTrigger />
        <p className="text-sm text-muted-foreground">Main content area</p>
      </div>
    </SidebarProvider>
  ),
};
