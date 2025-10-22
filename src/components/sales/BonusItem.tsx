import { CheckCircle } from "lucide-react";
import React from "react";

interface BonusItemProps {
  content: string;
}

export const BonusItem: React.FC<BonusItemProps> = ({ content }) => {
  return (
    <div className="p-4 bg-card rounded-lg border border-border">
      <div className="flex items-start gap-3">
        <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
        <div>
          <p className="font-semibold text-foreground">{content}</p>
        </div>
      </div>
    </div>
  );
};