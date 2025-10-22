import React from "react";

interface RecipeCardProps {
  name: string;
  time: string;
  temperature: string;
  instructions: string;
  imageSrc?: string; // Caminho resolvido pelo Vite
}

// Função auxiliar para gerar srcset, assumindo que o Vite resolve o caminho base
const generateSrcSet = (src: string) => {
  if (!src.endsWith('.jpg')) return undefined;
  
  // Assumindo que existem variantes - 200w e 400w
  const base = src.replace(/\.jpg$/, '');
  return `${base}-200w.jpg 200w, ${base}-400w.jpg 400w, ${src} 600w`;
};


export const RecipeCard = ({ name, time, temperature, instructions, imageSrc }: RecipeCardProps) => {
  const srcset = imageSrc ? generateSrcSet(imageSrc) : undefined;

  return (
    <div className="p-6 rounded-lg border border-border bg-card shadow-[var(--shadow-card)] hover:shadow-lg transition-all duration-300">
      {imageSrc && (
        <div className="w-full h-32 bg-muted rounded-lg mb-4 overflow-hidden">
          <img 
            src={imageSrc} 
            alt={name}
            className="w-full h-full object-cover"
            width="400"
            height="128"
            loading="lazy"
            decoding="async"
            sizes="(max-width: 768px) 100vw, 33vw"
            srcSet={srcset}
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