interface RecipeCardProps {
  name: string;
  time: string;
  temperature: string;
  instructions: string;
  image?: string;
}

export const RecipeCard = ({ name, time, temperature, instructions, image }: RecipeCardProps) => {
  return (
    <div className="p-6 rounded-lg border border-border bg-card shadow-[var(--shadow-card)] hover:shadow-lg transition-all duration-300">
      {image && (
        <div className="w-full h-32 bg-muted rounded-lg mb-4 overflow-hidden">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover"
            width="400"
            height="128"
            loading="lazy"
          />
        </div>
      )}
      <h3 className="font-semibold text-foreground mb-2">{name}</h3>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Tiempo:</span>
          <span className="font-semibold text-cta-primary">{time}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Temperatura:</span>
          <span className="font-semibold text-cta-secondary">{temperature}</span>
        </div>
        <p className="text-muted-foreground mt-3">{instructions}</p>
      </div>
    </div>
  );
};