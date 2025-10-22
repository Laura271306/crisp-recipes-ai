import React, { useState, useEffect } from "react";

interface RecipeCardProps {
  name: string;
  time: string;
  temperature: string;
  instructions: string;
  imagePath?: string; // Alterado de 'image' para 'imagePath'
}

const LazyRecipeImage = ({ path, alt }: { path: string, alt: string }) => {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    if (path) {
      // Importação dinâmica da imagem
      import(/* @vite-ignore */ path)
        .then(module => setSrc(module.default))
        .catch(err => console.error("Failed to load recipe image:", path, err));
    }
  }, [path]);

  if (!src) {
    // Placeholder enquanto carrega
    return <div className="w-full h-32 bg-muted rounded-lg mb-4 animate-pulse"></div>;
  }

  return (
    <div className="w-full h-32 bg-muted rounded-lg mb-4 overflow-hidden">
      <img 
        src={src} 
        alt={alt}
        className="w-full h-full object-cover"
        width="400"
        height="128"
        loading="lazy"
        decoding="async"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
    </div>
  );
};

export const RecipeCard = ({ name, time, temperature, instructions, imagePath }: RecipeCardProps) => {
  return (
    <div className="p-6 rounded-lg border border-border bg-card shadow-[var(--shadow-card)] hover:shadow-lg transition-all duration-300">
      {imagePath && (
        <LazyRecipeImage path={imagePath} alt={name} />
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