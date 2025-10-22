import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ValueCard } from "@/components/sales/ValueCard";
import { RecipeCard } from "@/components/sales/RecipeCard";
import { CheckCircle, Clock, Users, Utensils, Award, Shield, DollarSign, Zap, Star, Timer, ThermometerSun, ChefHat, ShoppingCart } from "lucide-react";
import { lazy, Suspense } from "react";

// Lazy load heavy components
const Carousel = lazy(() => import("@/components/ui/carousel").then(module => ({ default: module.Carousel })));
const CarouselContent = lazy(() => import("@/components/ui/carousel").then(module => ({ default: module.CarouselContent })));
const CarouselItem = lazy(() => import("@/components/ui/carousel").then(module => ({ default: module.CarouselItem })));
const CarouselNext = lazy(() => import("@/components/ui/carousel").then(module => ({ default: module.CarouselNext })));
const CarouselPrevious = lazy(() => import("@/components/ui/carousel").then(module => ({ default: module.CarouselPrevious })));

// Lazy load images with low quality placeholders
const heroKitMockup = "/src/assets/hero-kit-mockup-new.jpg";
const recipePolloParmesano = "/src/assets/recipe-pollo-parmesano.jpg";
const recipeCamaronesAjo = "/src/assets/recipe-camarones-ajo.jpg";
const recipeChipsBatata = "/src/assets/recipe-chips-batata.jpg";

// Optimized carousel images - will be loaded on demand
const carouselImages = [
  "/src/assets/airfryer1.jpg",
  "/src/assets/airfryer2.jpg",
  "/src/assets/airfryer3.jpg",
  "/src/assets/airfryer4.jpg",
  "/src/assets/airfryer5.jpg",
  "/src/assets/airfryer6.jpg",
  "/src/assets/airfryer7.jpg",
  "/src/assets/airfryer8.jpg",
  "/src/assets/airfryer9.jpg",
  "/src/assets/airfryer10.jpg",
  "/src/assets/airfryer11.jpg",
  "/src/assets/airfryer12.jpg",
  "/src/assets/airfryer13.jpg",
  "/src/assets/airfryer14.jpg"
];

// Loading placeholder component
const ImagePlaceholder = ({ className = "" }) => (
  <div className={`bg-gray-200 animate-pulse rounded-lg ${className}`} />
);

const SalesPage = () => {
  const handleCTAClick = () => {
    window.open("https://pay.kiwify.com/0h3yyq8", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">

      {/* Micro-provas */}
      <section className="py-4 bg-success/10 border-b border-success/20">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm md:text-base text-foreground font-medium">
            ✓ Aprobado por principiantes • Resultados consistentes desde el primer uso
          </p>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-background to-cta-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                <span className="text-cta-primary">¿Cansada de que todo en tu Air Fryer quede blando y sin sabor?</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                <strong>Te entendemos. Aquí está la solución definitiva para activar el "Modo Chef" de tu freidora.</strong>
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="text-foreground">Verás tiempos/temperaturas claros en cada receta</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="text-foreground">Menos decisiones: menús y listas de compras</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="text-foreground">Acceso inmediato • Garantía 7 días</span>
                </div>
              </div>

              <p className="text-base md:text-lg text-muted-foreground mb-6">
                Con más de <strong className="text-cta-primary font-bold">600 recetas</strong> AirFryer por objetivo, garantizamos cero ensayo-error desde el primer día.
              </p>

              <Button variant="cta" size="2xl" onClick={handleCTAClick} className="w-full md:w-auto">
                Quiero crocancia hoy (US$ 5,50)
              </Button>
            </div>
            <div className="relative">
              <img 
                src={heroKitMockup} 
                alt="Kit Maestro de Recetas AirFryer Perfecta con tablas de tiempo y temperatura exactas" 
                className="w-full rounded-2xl shadow-[var(--shadow-hero)]"
                width="800"
                height="600"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
              <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-lg p-3 shadow-lg">
                <p className="text-sm font-medium text-foreground">📊 Tablas de tiempo exactas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carrossel de Resultados - Lazy Loaded */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-cta-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
                Esto es lo que puedes lograr con tu AirFryer
              </h2>
              <p className="text-base md:text-xl text-muted-foreground">
                Resultados reales, crocancia perfecta en minutos
              </p>
            </div>
            
            <Suspense fallback={<ImagePlaceholder className="h-64 w-full" />}>
              <Carousel className="w-full max-w-5xl mx-auto">
                <CarouselContent className="-ml-2 md:-ml-4">
                  {carouselImages.map((src, index) => (
                    <CarouselItem key={index} className="pl-2 md:pl-4 basis-4/5 md:basis-1/2 lg:basis-1/3">
                      <div className="rounded-xl overflow-hidden shadow-md">
                        <img 
                          src={src} 
                          alt={`Receta AirFryer ${index + 1}`} 
                          className="w-full h-48 md:h-64 object-cover"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
              </Carousel>
            </Suspense>
            
            <div className="text-center mt-8">
              <p className="text-base md:text-lg text-muted-foreground mb-4">
                <strong className="text-cta-primary">600+ recetas como estas</strong> te esperan
              </p>
              <Button variant="cta" size="2xl" onClick={handleCTAClick} className="w-full md:w-auto">
                Quiero cocinar así (US$ 5,50)
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Dor do Avatar */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10">
              Si te reconoces en esto, este kit es para ti:
            </h2>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-10">
              <div className="p-6 bg-card rounded-lg border border-border">
                <p className="text-foreground font-medium">"Mi AirFryer deja la comida <strong>blanda o seca</strong>."</p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border">
                <p className="text-foreground font-medium">"Paso más tiempo <strong>buscando</strong> que cocinando."</p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border">
                <p className="text-foreground font-medium">"Repito las mismas 5 recetas y me <strong>aburro</strong>."</p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border">
                <p className="text-foreground font-medium">"Termino pidiendo <strong>delivery</strong> entre semana."</p>
              </div>
            </div>
            <Button variant="cta" size="2xl" onClick={handleCTAClick} className="mt-4 w-full md:w-auto">
              Quiero una solución simple →
            </Button>
          </div>
          
          {/* Seção de Depoimentos - Simplificada e Acessível */}
          <section className="py-16 px-4 bg-gradient-to-b from-white to-green-50">
            <div className="container mx-auto">
              <div className="max-w-6xl mx-auto">
                
                {/* Título */}
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                    Lo que nuestros clientes dicen
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Mensajes reales de personas que transformaron su cocina
                  </p>
                </div>

                {/* Grid de Depoimentos Simplificado */}
                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  
                  {/* Depoimento 1 - Sofía */}
                  <div className="bg-white rounded-xl shadow-md border border-border p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                        S
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Sofía L.</p>
                        <p className="text-sm text-muted-foreground">Mamá de dos • Santiago, Chile</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-foreground font-medium">"¡Salvó mis cenas entre semana!"</p>
                      <p className="text-muted-foreground text-sm">
                        Mi freidora de aire era solo para papas fritas congeladas. Ahora hago pollo jugoso, vegetales crujientes y hasta postres en menos de 20 minutos. ¡Mi familia está comiendo más sano y delicioso que nunca!
                      </p>
                    </div>
                    
                    <div className="flex gap-1 mt-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                      ))}
                    </div>
                  </div>

                  {/* Depoimento 2 - Javier */}
                  <div className="bg-white rounded-xl shadow-md border border-border p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                        J
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Javier R.</p>
                        <p className="text-sm text-muted-foreground">Estudiante • Bogotá, Colombia</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-foreground font-medium">"Pensé que mi freidora no servía, ¡el que no servía era yo!"</p>
                      <p className="text-muted-foreground text-sm">
                        Estaba a punto de regalar mi Air Fryer. Las instrucciones son súper fáciles de seguir, a prueba de tontos. La semana pasada hice unas alitas de pollo que quedaron mejores que las de mi restaurante favorito.
                      </p>
                    </div>
                    
                    <div className="flex gap-1 mt-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                      ))}
                    </div>
                  </div>

                  {/* Depoimento 3 - Isabella */}
                  <div className="bg-white rounded-xl shadow-md border border-border p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                        I
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Isabella G.</p>
                        <p className="text-sm text-muted-foreground">Entusiasta del fitness • Quito, Ecuador</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-foreground font-medium">"Mucho más que solo papas fritas."</p>
                      <p className="text-muted-foreground text-sm">
                        Compré la Air Fryer para comer más saludable, pero estaba aburrida de comer siempre lo mismo. Este recetario me abrió un mundo de posibilidades. He probado recetas de pescado, panes, quiches y hasta el pack sin gluten es fantástico.
                      </p>
                    </div>
                    
                    <div className="flex gap-1 mt-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                      ))}
                    </div>
                  </div>

                </div>

                {/* Stats/Números */}
                <div className="grid grid-cols-3 gap-3 md:gap-4 mt-8 md:mt-12 text-center max-w-3xl mx-auto">
                  <div className="bg-white p-3 md:p-6 rounded-lg shadow-md border border-border">
                    <p className="text-2xl md:text-3xl font-bold text-success mb-1">500+</p>
                    <p className="text-xs md:text-sm text-muted-foreground leading-tight">Mensajes como estos</p>
                  </div>
                  <div className="bg-white p-3 md:p-6 rounded-lg shadow-md border border-border">
                    <p className="text-2xl md:text-3xl font-bold text-success mb-1">4.9★</p>
                    <p className="text-xs md:text-sm text-muted-foreground leading-tight">Valoración promedio</p>
                  </div>
                  <div className="bg-white p-3 md:p-6 rounded-lg shadow-md border border-border">
                    <p className="text-2xl md:text-3xl font-bold text-success mb-1">100%</p>
                    <p className="text-xs md:text-sm text-muted-foreground leading-tight">Recomiendan</p>
                  </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-8 md:mt-10">
                  <Button 
                    variant="cta" 
                    size="2xl" 
                    onClick={handleCTAClick} 
                    className="w-full md:w-auto"
                  >
                    Quiero resultados como estos
                  </Button>
                </div>

              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Solução + Mecanismo C.R.I.S.P. */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                ¿Por qué esto funciona cuando otras recetas fallan?
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Aplicamos el <strong className="text-cta-primary">Sistema C.R.I.S.P.</strong>:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 mb-10">
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <div className="w-12 h-12 bg-cta-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <ChefHat className="w-6 h-6 text-cta-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Clasificar</h3>
                <p className="text-sm text-muted-foreground">recetas por objetivo para decidir sin pensar</p>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <div className="w-12 h-12 bg-cta-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Timer className="w-6 h-6 text-cta-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Reloj</h3>
                <p className="text-sm text-muted-foreground"><strong>tiempos exactos</strong> por alimento + ajustes por capacidad</p>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <div className="w-12 h-12 bg-cta-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <ShoppingCart className="w-6 h-6 text-cta-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Ingrediente</h3>
                <p className="text-sm text-muted-foreground">sustitutos simples del súper</p>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <div className="w-12 h-12 bg-cta-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6 text-cta-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Sazonar</h3>
                <p className="text-sm text-muted-foreground">combinaciones probadas con menos aceite</p>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <div className="w-12 h-12 bg-cta-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <ThermometerSun className="w-6 h-6 text-cta-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Precalentar</h3>
                <p className="text-sm text-muted-foreground">protocolo 3–5 min para crocancia consistente</p>
              </div>
            </div>

            <div className="text-center p-6 md:p-8 bg-success-light rounded-lg border border-success/20">
              <p className="text-lg md:text-xl font-semibold text-foreground">
                <strong>Resultado:</strong> platos listos en <span className="text-cta-primary font-bold">10–15 min</span>, incluso si eres principiante.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prueba en 24h */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Cocina 3 platos perfectos hoy mismo:
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Sin curva de ensayo‑error. Solo sigue los tiempos.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <RecipeCard
                name="Pollo parmesano"
                time="12 min"
                temperature="190°C"
                instructions="voltear a mitad"
                image={recipePolloParmesano}
              />
              <RecipeCard
                name="Camarones al ajo"
                time="8 min"
                temperature="180°C"
                instructions="listo en una sola vez"
                image={recipeCamaronesAjo}
              />
              <RecipeCard
                name="Chips de batata"
                time="10-12 min"
                temperature="200°C"
                instructions="agitar a mitad"
                image={recipeChipsBatata}
              />
            </div>

            <div className="text-center mt-10">
              <Button variant="cta" size="2xl" onClick={handleCTAClick} className="w-full md:w-auto">
                Quiero tiempos exactos (US$ 5,50)
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Economía Estimada */}
      <section className="py-16 bg-gradient-to-br from-success-light to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                El kit se paga solo en el primer día
              </h2>
            </div>

            <div className="bg-card rounded-lg border-2 border-success/30 p-6 md:p-8 shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="pb-4 text-muted-foreground font-medium">Situación</th>
                      <th className="pb-4 text-muted-foreground font-medium text-right">Costo mensual</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-4 text-foreground">Delivery 2 veces/semana (US$ 12–15 por pedido)</td>
                      <td className="py-4 text-right font-semibold text-foreground">US$ 96–120</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-4 text-foreground">Kit Maestro AirFryer Perfecta (único pago)</td>
                      <td className="py-4 text-right font-bold text-cta-primary text-lg">US$ 5,50</td>
                    </tr>
                    <tr>
                      <td className="pt-4 text-foreground font-semibold">Ahorro estimado (primer mes)</td>
                      <td className="pt-4 text-right font-bold text-success text-xl">US$ 90–114</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 p-4 bg-success-light rounded-lg border border-success/20">
                <p className="text-center text-foreground font-medium">
                  💡 <strong>Si pides 2 veces/semana (US$ 12–15 por pedido), el kit se paga en el primer día.</strong>
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button variant="cta" size="2xl" onClick={handleCTAClick} className="w-full md:w-auto">
                Empezar a ahorrar hoy (US$ 5,50)
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Todo lo que recibes - Principal + Bônus */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Todo lo que recibes hoy
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Acceso inmediato a todo el contenido digital
              </p>
            </div>

            {/* Produto Principal */}
            <div className="mb-10">
              <div className="bg-gradient-to-br from-cta-primary/10 to-cta-primary/5 rounded-xl p-6 md:p-8 border-2 border-cta-primary/30 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-cta-primary rounded-full flex items-center justify-center">
                    <Utensils className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Produto Principal</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Coleção "Fundamentos + Guías Prácticas da Airfryer"</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Coleção "Receitas Rápidas & do Dia a Dia" (variadas)</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">365 recetas en tu freidora de aire</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Coleção "Proteínas & Comidas para a Família"</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Coleção "Veggie, Fit & Sem Glúten" (opções saudáveis)</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">15 Postres Fit</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Coleção "Postres & Snacks"</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bônus e Complementos */}
            <div>
              <div className="bg-value-light rounded-xl p-6 md:p-8 border-2 border-success/30">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Bônus e complementos</h3>
                    <Badge variant="destructive" className="text-xs mt-1">Incluidos por tiempo limitado</Badge>
                  </div>
                </div>

                <div className="mb-6 p-4 bg-warning/10 border border-warning/30 rounded-lg">
                  <p className="text-sm md:text-base text-foreground text-center">
                    ⚠️ <strong>Transparencia total:</strong> Los bonos adicionales están disponibles solo durante la promoción de lanzamiento. Después del lanzamiento, el kit volverá al precio regular de US$ 27 solo con el contenido principal.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Checklist "10 Errores que arruinan tus recetas en la Airfryer"</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">15 Postres Fit — dulce sin culpa</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Calendario sencillo de cocina (30 días)</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Guia de Compras Inteligentes / Economia mensal</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Guia Exprés: Limpeza e Manutenção</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Mis mejores recetas en freidora de aire</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Receta de la Freidora de Aire / Air Fryer Cookbook</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Libro de cocina AirFryer</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">El Libro de Cocina de la Freidora de Aire</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">100+ Recetas Airfryer</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">100 Deliciosas Recetas</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 text-center p-4 bg-success/10 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    🎁 Todo el contenido está en <strong className="text-foreground">español</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-10">
              <Button variant="cta" size="2xl" onClick={handleCTAClick} className="w-full md:w-auto">
                Quiero todo esto ahora (US$ 5,50)
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Universal y fácil de aplicar */}
      <section className="py-16 bg-gradient-to-br from-cta-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Universal y fácil de aplicar
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                El Método <strong className="text-cta-primary">C.R.I.S.P.</strong> funciona con todas las AirFryer
              </p>
            </div>

            <div className="space-y-6 md:space-y-8 mb-10">
              <div className="p-6 bg-card rounded-lg border border-border">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Tablas de tiempo/temperatura por alimento</h3>
                    <p className="text-sm text-muted-foreground">
                      Cada receta incluye tiempos base probados para los alimentos más comunes
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-card rounded-lg border border-border">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Guía rápida de ajuste por capacidad</h3>
                    <p className="text-sm text-muted-foreground">
                      Ajustes simples para 3,5 L / 4 L / 5,5 L+ según tu modelo
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-card rounded-lg border border-border">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Crocancia consistente sin ensayo-error</h3>
                    <p className="text-sm text-muted-foreground">
                      Uses la marca que uses, obtendrás resultados perfectos desde el día 1
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center p-6 md:p-8 bg-success-light rounded-lg border border-success/20">
              <p className="text-lg font-semibold text-foreground">
                🎯 Compatible con <strong className="text-cta-primary">todas las marcas:</strong> Philips, Ninja, Cosori, Instant Pot y más
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Economía y Valor */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Con 2 pedidos de delivery menos por semana
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                ahorras <span className="font-bold text-success">US$ 80–120/mes</span>. El kit cuesta <span className="font-bold text-cta-primary">US$ 5,50</span> y se paga <strong>hoy</strong>.
              </p>
            </div>

            <div className="p-6 md:p-8 bg-card rounded-xl border border-border shadow-lg">
              <h3 className="font-bold text-center text-foreground mb-6">Stack de Valor</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Colecciones (4)</span>
                  <span className="font-semibold">US$ 28</span>
                </div>
                <div className="flex justify-between">
                  <span>Menús + listas</span>
                  <span className="font-semibold">US$ 17</span>
                </div>
                <div className="flex justify-between">
                  <span>Tablas</span>
                  <span className="font-semibold">US$ 12</span>
                </div>
                <div className="flex justify-between">
                  <span>Guía de limpieza</span>
                  <span className="font-semibold">US$ 7</span>
                </div>
                <div className="flex justify-between">
                  <span>Bonos (4)</span>
                  <span className="font-semibold">US$ 39</span>
                </div>
                <hr className="border-border" />
                <div className="flex justify-between text-lg">
                  <span className="font-bold">Valor total:</span>
                  <span className="font-bold line-through text-muted-foreground">US$ 103</span>
                </div>
                <div className="flex justify-between text-2xl">
                  <span className="font-bold text-cta-primary">Hoy:</span>
                  <span className="font-bold text-cta-primary">US$ 5,50</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Oferta Especial */}
      <section className="py-16 bg-gradient-to-br from-cta-primary/10 to-cta-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10">
              AirFryer Perfecta – Kit Maestro de Recetas (Edición Premium)
            </h2>
            
            <div className="p-6 md:p-8 bg-card rounded-2xl border border-border shadow-xl mb-8">
              <div className="text-4xl md:text-6xl font-bold text-cta-primary mb-4">
                US$ 5,50
              </div>
              <p className="text-base md:text-lg text-muted-foreground mb-6">
                Acceso inmediato y actualizaciones del kit.
              </p>
              <Button variant="cta" size="2xl" onClick={handleCTAClick} className="w-full md:w-auto mb-4">
                Quiero mis recetas ahora (US$ 5,50)
              </Button>
              
              <div className="flex flex-wrap justify-center gap-3 mt-4">
                <Badge variant="secondary" className="px-3 py-1">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Acceso inmediato
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  <Shield className="w-4 h-4 mr-2" />
                  7 días de garantía
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Garantía */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-8 bg-success-light rounded-2xl border border-success/20">
              <Shield className="w-16 h-16 text-success mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Garantía Doble 7×7
              </h2>
              <p className="text-lg md:text-xl text-foreground">
                Si en 7 días no ahorras tiempo en la cocina o no mejoras la textura (crujiente por fuera, jugoso por dentro), <strong>te devolvemos el dinero. Sin preguntas.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Preguntas Frecuentes
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="bg-card rounded-lg border border-border px-6">
                <AccordionTrigger className="font-semibold text-foreground">¿Sirve para 3,5 L / 5,5 L?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">Sí. Indicamos ajustes por capacidad y potencia.</AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="bg-card rounded-lg border border-border px-6">
                <AccordionTrigger className="font-semibold text-foreground">¿Ingredientes caros?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">No: básicos del súper + sustitutos.</AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-card rounded-lg border border-border px-6">
                <AccordionTrigger className="font-semibold text-foreground">¿Opciones fit/sin gluten?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">Incluidas y <strong>marcadas</strong>.</AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-card rounded-lg border border-border px-6">
                <AccordionTrigger className="font-semibold text-foreground">¿Cuánto tardo en organizarme?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">15 min con el calendario de 30 días.</AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-card rounded-lg border border-border px-6">
                <AccordionTrigger className="font-semibold text-foreground">¿Formato y acceso?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">100% digital, PDF A4 y versión móvil. Acceso inmediato.</AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-card rounded-lg border border-border px-6">
                <AccordionTrigger className="font-semibold text-foreground">¿Reembolso?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">Garantía Doble 7×7 dentro de 7 días.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-br from-cta-primary to-cta-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AirFryer Perfecta – Kit Maestro de Recetas
            </h2>
            <p className="text-lg md:text-xl mb-2">(Edición Premium)</p>
            <div className="text-4xl md:text-5xl font-bold mb-6">US$ 5,50</div>
            <p className="text-lg md:text-xl mb-8">acceso inmediato</p>
            <Button 
              variant="cta" 
              size="2xl" 
              onClick={handleCTAClick}
              className="bg-white text-accent hover:bg-white/90 hover:text-accent w-full md:w-auto shadow-2xl"
            >
              Sí, quiero cocinar mejor hoy
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 AirFryer Perfecta. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SalesPage;