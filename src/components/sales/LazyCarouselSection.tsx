import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React from "react";

// Usando import.meta.glob para carregar todas as imagens de airfryer de forma eficiente
const airfryerImages = import.meta.glob("@/assets/airfryer*.jpg", { eager: true, as: 'url' });

const carouselImages = [
  { src: airfryerImages['/src/assets/airfryer1.jpg'], alt: "Volcanes de chocolate hechos en AirFryer" },
  { src: airfryerImages['/src/assets/airfryer2.jpg'], alt: "Pan de plátano hecho en AirFryer" },
  { src: airfryerImages['/src/assets/airfryer3.jpg'], alt: "Fideos con vegetales hechos en AirFryer" },
  { src: airfryerImages['/src/assets/airfryer4.jpg'], alt: "Bife jugoso hecho en AirFryer" },
  { src: airfryerImages['/src/assets/airfryer5.jpg'], alt: "Alitas de pollo glaseadas hechas en AirFryer" },
  { src: airfryerImages['/src/assets/airfryer6.jpg'], alt: "Papas fritas crujientes hechas en AirFryer" },
  { src: airfryer7, alt: "Pollo cremoso con champiñones hecho en AirFryer" }, // Mantendo os imports originais que não seguem o padrão airfryer[N].jpg
  { src: airfryer8, alt: "Tostadas con champiñones hechas en AirFryer" },
  { src: airfryer9, alt: "Tostadas gratinadas hechas en AirFryer" },
  { src: airfryer10, alt: "Pollo con papas y vegetales feito em AirFryer" },
  { src: airfryer11, alt: "Pechuga de pollo jugosa hecha en AirFryer" },
  { src: airfryer12, alt: "Repollo caramelizado hecho en AirFryer" },
  { src: airfryer13, alt: "Palitos de mozzarella crujientes hechos en AirFryer" },
  { src: airfryer14, alt: "Aros de cebolla crujientes hechos en AirFryer" },
];

// Nota: Os imports originais de airfryer7 a airfryer14 parecem estar usando nomes de arquivos diferentes no sistema de arquivos (aifryer-X.jpg vs airfryerX.jpg).
// Para evitar quebrar o código, vou reverter a otimização de glob para as imagens que não seguem o padrão airfryer[N].jpg e garantir que todas as imagens sejam importadas corretamente.

// Revertendo para imports explícitos para garantir que todas as imagens sejam carregadas corretamente,
// já que a lista de arquivos fornecida no contexto inicial mostra nomes inconsistentes (airfryer1.jpg, aifryer-3.jpg, airfryer-7.jpg, etc.).
// A otimização de glob só funciona se os nomes forem consistentes.

// Vamos reescrever o arquivo usando imports explícitos, mas removendo os imports duplicados que não existem no contexto (aifryer-3.jpg, aifryer-5.jpg, aifryer-6.jpg)
// e usando apenas os que existem (airfryer1.jpg a airfryer14.jpg).

import airfryer1 from "@/assets/airfryer1.jpg";
import airfryer2 from "@/assets/airfryer2.jpg";
import airfryer3 from "@/assets/airfryer3.jpg";
import airfryer4 from "@/assets/airfryer4.jpg";
import airfryer5 from "@/assets/airfryer5.jpg";
import airfryer6 from "@/assets/airfryer6.jpg";
import airfryer7 from "@/assets/airfryer7.jpg";
import airfryer8 from "@/assets/airfryer8.jpg";
import airfryer9 from "@/assets/airfryer9.jpg";
import airfryer10 from "@/assets/airfryer10.jpg";
import airfryer11 from "@/assets/airfryer11.jpg";
import airfryer12 from "@/assets/airfryer12.jpg";
import airfryer13 from "@/assets/airfryer13.jpg";
import airfryer14 from "@/assets/airfryer14.jpg";

const carouselImages_optimized = [
  { src: airfryer1, alt: "Volcanes de chocolate hechos en AirFryer" },
  { src: airfryer2, alt: "Pan de plátano hecho en AirFryer" },
  { src: airfryer3, alt: "Fideos con vegetales hechos en AirFryer" },
  { src: airfryer4, alt: "Bife jugoso hecho en AirFryer" },
  { src: airfryer5, alt: "Alitas de pollo glaseadas hechas en AirFryer" },
  { src: airfryer6, alt: "Papas fritas crujientes hechas en AirFryer" },
  { src: airfryer7, alt: "Pollo cremoso con champiñones hecho en AirFryer" },
  { src: airfryer8, alt: "Tostadas con champiñones hechas en AirFryer" },
  { src: airfryer9, alt: "Tostadas gratinadas hechas en AirFryer" },
  { src: airfryer10, alt: "Pollo con papas y vegetales feito em AirFryer" },
  { src: airfryer11, alt: "Pechuga de pollo jugosa hecha en AirFryer" },
  { src: airfryer12, alt: "Repollo caramelizado hecho en AirFryer" },
  { src: airfryer13, alt: "Palitos de mozzarella crujientes hechos en AirFryer" },
  { src: airfryer14, alt: "Aros de cebolla crujientes hechos en AirFryer" },
];

interface LazyCarouselSectionProps {
  handleCTAClick: () => void;
}

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
              {carouselImages_optimized.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Card className="overflow-hidden border-2 border-border">
                      <img 
                        src={item.src} 
                        alt={item.alt} 
                        className="w-full h-64 object-cover"
                        width="400"
                        height="256"
                        loading="lazy"
                        decoding="async"
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