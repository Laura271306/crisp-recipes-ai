import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import React from "react";

interface FAQItem {
  value: string;
  trigger: string;
  content: React.ReactNode; // Alterado para React.ReactNode
}

interface LazyAccordionProps {
  items: FAQItem[];
}

export const LazyAccordion = ({ items }: LazyAccordionProps) => {
  return (
    <Accordion type="single" collapsible className="w-full space-y-4">
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value} className="bg-card rounded-lg border border-border px-6">
          <AccordionTrigger className="font-semibold text-foreground">{item.trigger}</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};