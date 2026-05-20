import { Link, useRouterState } from "@tanstack/react-router";
import {
  Home,
  Info,
  GraduationCap,
  Users,
  FileText,
  Sparkles,
  Newspaper,
  Mail,
  BookOpen,
  Target,
  Eye,
  Building2,
  ListChecks,
  FileCheck2,
  CalendarDays,
  Image as ImageIcon,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import logo from "@/assets/logo.png";

const groups = [
  {
    label: "Principal",
    items: [{ title: "Inicio", url: "/", icon: Home }],
  },
  {
    label: "Nosotros",
    items: [
      { title: "Historia", url: "/nosotros/historia", icon: BookOpen },
      { title: "Misión y Visión", url: "/nosotros/mision-vision", icon: Target },
      { title: "Instalaciones", url: "/nosotros/instalaciones", icon: Building2 },
    ],
  },
  {
    label: "Académico",
    items: [
      { title: "Primaria", url: "/primaria", icon: GraduationCap },
      { title: "Plana Docente", url: "/docentes", icon: Users },
    ],
  },
  {
    label: "Admisión",
    items: [
      { title: "Proceso", url: "/admision/proceso", icon: ListChecks },
      { title: "Requisitos", url: "/admision/requisitos", icon: FileCheck2 },
    ],
  },
  {
    label: "Vida Estudiantil",
    items: [
      { title: "Actividades", url: "/vida/actividades", icon: ImageIcon },
      { title: "Cronograma", url: "/vida/cronograma", icon: CalendarDays },
    ],
  },
  {
    label: "Más",
    items: [
      { title: "Noticias", url: "/noticias", icon: Newspaper },
      { title: "Contacto", url: "/contacto", icon: Mail },
    ],
  },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const pathname = useRouterState({ select: (r) => r.location.pathname });
  const isActive = (url: string) =>
    url === "/" ? pathname === "/" : pathname.startsWith(url);

  return (
    <Sidebar collapsible="icon" className="border-r">
      <SidebarHeader className="border-b">
        <Link to="/" className="flex items-center gap-3 px-2 py-3">
          <img
            src={logo}
            alt="Logo I.E. La Alborada 30225"
            className="h-10 w-10 shrink-0 object-contain"
          />
          {!collapsed && (
            <div className="flex flex-col leading-tight min-w-0">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                I.E. 30225
              </span>
              <span className="text-sm font-bold truncate">La Alborada</span>
            </div>
          )}
        </Link>
      </SidebarHeader>
      <SidebarContent>
        {groups.map((group) => (
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.url}>
                    <SidebarMenuButton asChild isActive={isActive(item.url)}>
                      <Link to={item.url} className="flex items-center gap-2">
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}