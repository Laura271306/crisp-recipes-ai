import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";

// Definindo os caminhos das imagens para importação dinâmica
const imagePaths = [
  { path: "@/assets/airfryer1.jpg", alt: "Volcanes de chocolate hechos en AirFryer" },
  { path: "@/assets/airfryer2.jpg", alt: "Pan de plátano hecho en AirFryer" },
  { path: "@/assets/airfryer3.jpg", alt: "Fideos con vegetales hechos en AirFryer" },
  { path: "@/assets/airfryer4.jpg", alt: "Bife jugoso hecho en AirFryer" },
  { path: "@/assets/airfryer5.jpg", alt: "Alitas de pollo glaseadas hechas en AirFryer" },
  { path: "@/assets/airfryer6.jpg", alt: "Papas fritas crujientes feitas em AirFryer" },
  { path: "@/assets/airfryer7.jpg", alt: "Pollo cremoso con champiñones hecho en AirFryer" },
  { path: "@/assets/airfryer8.jpg", alt: "Tostadas con champiñones hechas en AirFryer" },
  { path: "@/assets/airfryer9.jpg", alt: "Tostadas gratinadas hechas en AirFryer" },
  { path: "@/assets/airfryer10.jpg", alt: "Pollo con papas y vegetales feito em AirFryer" },
  { path: "@/assets/airfryer11.jpg", alt: "Pechuga de pollo jugosa hecha en AirFryer" },
  { path: "@/assets/airfryer12.jpg", alt: "Repollo caramelizado hecho en AirFryer" },
  { path: "@/assets/airfryer13.jpg", alt: "Palitos de mozzarella crujientes hechos en AirFryer" },
  { path: "@/assets/airfryer14.jpg", alt: "Aros de cebolla crujientes hechos en AirFryer" },
];

interface LazyCarouselSectionProps {
  handleCTAClick: () => void;
}

// Componente para carregar a imagem individualmente
const LazyImage = ({ path, alt, width, height, sizes }: { path: string, alt: string, width: string, height: string, sizes: string }) => {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    // Importação dinâmica da imagem
    import(/* @vite-ignore */ path)
      .then(module => setSrc(module.default))
      .catch(err => console.error("Failed to load image:", path, err));
  }, [path]);

  if (!src) {
    // Placeholder enquanto carrega
    return <div className="w-full h-64 bg-muted animate-pulse" style={{ width, height }}></div>;
  }

  return (
    <img 
      src={src} 
      alt={alt} 
      className="w-full h-64 object-cover"
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      sizes={sizes}
    />
  );
};


export const LazyCarouselSection = ({ handleCTAClick }: LazyCarouselSectionProps) => {
  return (
    <section className="py-16 bg-gradient-to-br from-cta-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Esto es lo que puedes lograr con tu AirFryer
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Resultados reales, crocancia perfecta en minutos
            </p>
          </div>
          
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {imagePaths.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Card className="overflow-hidden border-2 border-border">
                      <LazyImage 
                        path={item.path} 
                        alt={item.alt} 
                        width="400"
                        height="256"
                        sizes="(max-width: 768px) 90vw, 33vw"
                      />
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
          
          <div className="text-center mt-8">
            <p className="text-lg text-muted-foreground mb-4">
              <strong className="text-cta-primary">600+ recetas como estas</strong> te esperan
            </p>
            <Button variant="cta" size="2xl" onClick={handleCTAClick} className="w-full md:w-auto">
              Compra ahora (US$ 6,50)
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};