import { ReactNode } from "react";

interface ValueCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  value?: string;
  highlight?: boolean;
  image?: string;
}

export const ValueCard = ({ icon, title, description, value, highlight, image }: ValueCardProps) => {
  return (
    <div className={`p-6 rounded-lg border ${highlight ? 'border-cta-primary bg-gradient-to-br from-cta-primary/5 to-cta-secondary/5' : 'border-border bg-card'} shadow-[var(--shadow-card)]`}>
      {image && (
        <div className="mb-4">
          <img 
            src={image} 
            alt={`Ilustración para ${title}`} 
            className="w-full h-32 object-cover rounded-lg"
          />
        </div>
      )}
      <div className="flex items-start gap-4">
        {icon && (
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cta-primary/10 flex items-center justify-center text-cta-primary">
            {icon}
          </div>
        )}
        <div className="flex-1">
          <h3 className="font-semibold text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
          {value && (
            <div className="mt-2">
              <span className="text-value font-semibold">Valor: {value}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};