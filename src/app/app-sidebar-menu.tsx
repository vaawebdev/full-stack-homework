"use client";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Book, FileDigit } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  {
    title: "Numbers",
    icon: FileDigit,
    href: "/numbers",
  },
  {
    title: "Grades",
    icon: Book,
    href: "/grades",
  },
];

export function AppSidebarMenu() {
  const pathname = usePathname();

  return (
    <SidebarMenu>
      {navigation.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton asChild isActive={item.href === pathname}>
            <Link href={item.href}>
              <item.icon />
              <span>{item.title}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
