import { Button } from "@/components/ui/button";

interface StickyButtonProps {
  text: string;
  price: string;
  onClick?: () => void;
}

export const StickyButton = ({ text, price, onClick }: StickyButtonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.open("https://pay.kiwify.com/0h3yyq8", "_blank");
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border p-4 z-50 md:hidden">
      <Button 
        className="w-full" 
        variant="cta" 
        size="2xl"
        onClick={handleClick}
      >
        {text} ({price})
      </Button>
    </div>
  );
};