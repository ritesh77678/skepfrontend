"use client"


import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionDemo() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Chapter 1</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Our flagship product combines cutting-edge technology with sleek
            design. Built with premium materials, it offers unparalleled
            performance and reliability.
          </p>
          <p>
            Key features include advanced processing capabilities, and an
            intuitive user interface designed for both beginners and experts.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Shipping Details</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            We offer worldwide shipping through trusted courier partners.
            Standard delivery takes 3-5 business days, while express shipping
            ensures delivery within 1-2 business days.
          </p>
          <p>
            All orders are carefully packaged and fully insured. Track your
            shipment in real-time through our dedicated tracking portal.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Return Policy</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            We stand behind our products with a comprehensive 30-day return
            policy. If you&apos;re not completely satisfied, simply return the
            item in its original condition.
          </p>
          <p>
            Our hassle-free return process includes free return shipping and
            full refunds processed within 48 hours of receiving the returned
            item.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export function Chapters({}){
    return (
        <div className="flex items-center justify-between bg-background py-2 px-3 rounded-2xl!">
            <div className="text-primary flex items-center gap-2 font-semibold">
                <CaretDown size={20} />
                <span>Chapter 1</span>
            </div>
            <DotsThree size={20}/>
        </div>
    )
}

export function Pages(){
    return (
        <div className=" flex items-center justify-between ml-[30px] border-l border-[#1B38603D]">
            <p className="text-primary flex items-center gap-2 font-semibold pl-4">
                Page 1
            </p>
        </div>
    )
}

// export function

import { CaretDown, DotsThree, Plus } from "phosphor-react";
export function SidebarComponent(){
    return (
        // <Sidebar/>
        <div
            className="w-[250px] bg-white border border-black p-2"
        >
            <div
                className="h-9 w-[234px] bg-[#2D3643] rounded-lg text-white flex items-center justify-center gap-1 font-semibold"
            >
                <Plus size={18}/>
                <span>Create</span>
            </div>
            <hr />
            <div className="flex justify-between items-center py-3 px-[15px]">
                <span className="text-secondary font-semibold">Welcome</span>
                <DotsThree size={20} />
            </div>
            <div>
                <Chapters/>
                <Pages/>
                <Pages/>
            </div>
            

        </div>
    )
}