"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { BsLaptop } from "react-icons/bs";
import { useTheme } from "next-themes";

import { Button } from "@/app/components/shadcn/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/shadcn/ui/dropdown-menu";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative px-2 rounded-full w-9 h-9 bg-secondary dark:bg-primary"
        >
          <SunIcon className="w-4 h-4 transition-all scale-100 rotate-0 dark:-rotate-90 dark:scale-0 text-primary dark:text-secondary" />
          <MoonIcon className="absolute w-4 h-4 transition-all scale-0 rotate-90 dark:rotate-0 dark:scale-100 text-primary dark:text-secondary" />
          <span className="sr-only">Загвар солих</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-auto" align="end" forceMount>
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <SunIcon className="w-4 h-4 mr-2" />
          Гэрэлтэй
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <MoonIcon className="w-4 h-4 mr-2" />
          Харанхуй
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <BsLaptop className="w-4 h-4 mr-2" />
          Систем
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
