import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import React from "react";

interface StickyButtonProps {
  onClick: () => void;
  price: string;
  text: string;
}

export const StickyButton: React.FC<StickyButtonProps> = ({ onClick, price, text }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-4 bg-card border-t border-border shadow-2xl">
      <Button 
        variant="cta" 
        size="2xl" 
        onClick={onClick} 
        className="w-full h-14 text-lg shadow-[var(--shadow-cta)] transition-transform duration-300 hover:scale-[1.01]"
      >
        <ShoppingCart className="w-5 h-5 mr-2" />
        {text} ({price})
      </Button>
    </div>
  );
};