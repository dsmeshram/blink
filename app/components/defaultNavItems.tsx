// components/layout/defaultNavItems.tsx
import React from "react";
import {
  CalculatorIcon,
    CalendarDaysIcon,
  ChartPieIcon,
  CubeIcon,
  FolderOpenIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import { NavItem } from "./Sidebar";

export const defaultNavItems: NavItem[] = [
  {
    label: "Dashboard",
    href: "/",
    icon: <ChartPieIcon className="w-6 h-6" />,
  },
  {
    label: "Events",
    href: "/team",
    icon: <CalculatorIcon className="w-6 h-6" />,
  },
  {
    label: "Applications",
    href: "/calendar",
    icon: <CubeIcon className="w-6 h-6" />,
  },
];
