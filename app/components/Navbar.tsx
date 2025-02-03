"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import ModeToggle from "../providers/selectTheme";
import { Github } from "lucide-react";
import SearchDialog from "@/app/components/searchDialog";

const Navbar: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center w-full py-4">
      <div className="left-side"></div>
      <div className="w-full search-container flex flex-shrink-0 sm:w-fit">
        <SearchDialog />
        <ModeToggle />
        <Button
          className="ml-2 source code items-center flex gap-2"
          onClick={() => {
            router.push("https://github.com");
          }}
        >
          <Github />
          Source Code
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
