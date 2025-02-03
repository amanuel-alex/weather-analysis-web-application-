import React from "react";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { CommandIcon } from "lucide-react";
import { DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Command, CommandInput } from "@/components/ui/command";
import { VisuallyHidden } from "@/components/ui/dialog";

const SearchDialog: React.FC = () => {
  return (
    <div className="mr-3">
      <Dialog>
        <DialogTrigger>
          <Button
            variant="outline"
            className="border inline-flex items-center justify-center text-sm font-medium hover:dark:bg-[#131313] hover:bg-slate-100 ease-in-out duration-150"
          >
            <p className="text-sm text-muted-background">search here ...</p>
            <div className="flex items-center rounded-sm ml-[10rem] gap-2 command dark:bg-[#262626] bg-slate-200 py-[2px] pl-[5px] pr-[7px]">
              <CommandIcon />
              <span className="text-[9px]">F</span>
            </div>
          </Button>
        </DialogTrigger>
        <DialogContent className="p-0">
          <DialogTitle>Search Dialog</DialogTitle>

          <Command className="rounded-lg border shadow-sm">
            <CommandInput />
            <p>hello</p>
          </Command>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SearchDialog;
