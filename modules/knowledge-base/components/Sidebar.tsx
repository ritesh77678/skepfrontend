"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Chapters({}) {
  return (
    <div className="flex items-center justify-between bg-background py-1.5 px-3 gap-1 rounded-lg">
      <div className="text-primary flex items-center gap-2 font-semibold">
        <CaretDown size={20} />
        <input className="document-input" type="text" value={"Chapter 1"} />
      </div>
      <div>
        <DotsThree size={20} />
      </div>
    </div>
  );
}

export function Pages() {
  return (
    <div className="w-[194px] pl-1.5 flex items-center relative border-l border-[#1B38603D]">
      <span className="bg-primary h-[5px] w-[5px] rounded-full absolute -left-[3px]"></span>
      {/* <p className=" flex items-center gap-2 justify-between font-semibold pl-4 bg-background h-full w-full rounded-md py-2 px-3">
              <span className="text-primary">Page 1</span>
              <DotsThree size={20}/>
            </p> */}

      <input className="document-input" type="text" value={"Page 1"} />
    </div>
  );
}

// export function

import { CaretDown, DotsThree, Plus } from "phosphor-react";
export function SidebarComponent() {
  return (
    // <Sidebar/>
    <div className="w-[250px] bg-white border border-black p-2">
      <div className="h-9 w-[234px] bg-[#2D3643] rounded-lg text-white flex items-center justify-center gap-1 font-semibold">
        <Plus size={18} />
        <span>Create</span>
      </div>
      <hr />
      <div className="flex justify-between items-center py-3 px-[15px]">
        <span className="text-secondary font-semibold">Welcome</span>
        <DotsThree size={20} />
      </div>
      <div>
        {/* <AccordionDemo/> */}
        <Chapters />
        <Pages />
        <Pages />
      </div>
    </div>
  );
}
