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
              <div className="p-6 bg-card rounded-lg border border-border text-left">
                <p className="text-foreground font-medium">"Mi AirFryer deja la comida <strong>blanda o seca</strong>."</p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border text-left">
                <p className="text-foreground font-medium">"Paso más tiempo <strong>buscando</strong> que cocinando."</p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border text-left">
                <p className="text-foreground font-medium">"Repito las mismas 5 recetas y me <strong>aburro</strong>."</p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border text-left">
                <p className="text-foreground font-medium">"Termino pidiendo <strong>delivery</strong> entre semana."</p>
              </div>
            </div>
            <Button variant="cta" size="2xl" onClick={handleCTAClick} className="mt-4 w-full md:w-auto">
              Quiero una solución simple →
            </Button>
          </div>
          
          {/* Seção de Depoimentos Estilo WhatsApp - Optimized */}
          <section className="py-16 px-4 bg-gradient-to-b from-white to-green-50">
            <div className="container mx-auto">
              <div className="max-w-6xl mx-auto">
                
                {/* Título */}
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                    Lo que nos escriben nuestros clientes
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Mensajes reales de personas que transformaron su cocina
                  </p>
                </div>

                {/* Grid de Depoimentos WhatsApp - Simplified for performance */}
                <div className="grid md:grid-cols-1 gap-6 max-w-4xl mx-auto">
                  
                  {/* Depoimento 1 - Sofía */}
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                    {/* WhatsApp Header */}
                    <div className="bg-[#075E54] text-white px-4 py-3 flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center font-bold text-lg">
                        S
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-sm">Sofía L.</p>
                        <p className="text-xs opacity-80">en línea</p>
                      </div>
                    </div>
                    
                    {/* Mensagem */}
                    <div className="p-4 bg-[#ECE5DD]">
                      <div className="bg-white rounded-lg rounded-tl-none p-4 shadow-sm mb-2 relative">
                        <p className="text-gray-800 text-sm mb-3 leading-relaxed">
                          <span className="font-bold text-gray-900">¡Salvó mis cenas entre semana!</span>
                        </p>
                        <p className="text-gray-700 text-sm leading-relaxed mb-3">
                          Mi freidora de aire era solo para papas fritas congeladas. Intenté hacer otras cosas, pero siempre quedaban secas o blandas. Como mamá de dos niños, no tengo tiempo para experimentar y fallar.
                        </p>
                        <p className="text-gray-700 text-sm leading-relaxed mb-3">
                          Este recetario cambió todo. Ahora hago pollo jugoso, vegetales crujientes y hasta postres en menos de 20 minutos. ¡Mi familia está comiendo más sano y delicioso que nunca! Totalmente recomendado. 🙌
                        </p>
                        <div className="flex items-center justify-between mt-3">
                          <p className="text-xs text-gray-500 italic">
                            Mamá de dos • Santiago, Chile 🇨🇱
                          </p>
                          <span className="text-xs text-gray-400">15:42</span>
                        </div>
                        <div className="flex gap-1 mt-2">
                          <span>⭐</span>
                          <span>⭐</span>
                          <span>⭐</span>
                          <span>⭐</span>
                          <span>⭐</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Depoimento 2 - Javier */}
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                    {/* WhatsApp Header */}
                    <div className="bg-[#075E54] text-white px-4 py-3 flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center font-bold text-lg">
                        J
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-sm">Javier R.</p>
                        <p className="text-xs opacity-80">en línea</p>
                      </div>
                    </div>
                    
                    {/* Mensagem */}
                    <div className="p-4 bg-[#ECE5DD]">
                      <div className="bg-white rounded-lg rounded-tl-none p-4 shadow-sm mb-2 relative">
                        <p className="text-gray-800 text-sm mb-3 leading-relaxed">
                          <span className="font-bold text-gray-900">Pensé que mi freidora no servía, ¡el que no servía era yo!</span>
                        </p>
                        <p className="text-gray-700 text-sm leading-relaxed mb-3">
                          Estaba a punto de regalar mi Air Fryer. Todo lo que cocinaba era un desastre. Compré este ebook sin mucha fe y ¡wow! 😱
                        </p>
                        <p className="text-gray-700 text-sm leading-relaxed mb-3">
                          El problema no era el aparato, era que no tenía idea de los tiempos y temperaturas. Las instrucciones son súper fáciles de seguir, a prueba de tontos. La semana pasada hice unas alitas de pollo que quedaron mejores que las de mi restaurante favorito. ¡Increíble! 🔥
                        </p>
                        <div className="flex items-center justify-between mt-3">
                          <p className="text-xs text-gray-500 italic">
                            Estudiante • Bogotá, Colombia 🇨🇴
                          </p>
                          <span className="text-xs text-gray-400">18:23</span>
                        </div>
                        <div className="flex gap-1 mt-2">
                          <span>⭐</span>
                          <span>⭐</span>
                          <span>⭐</span>
                          <span>⭐</span>
                          <span>⭐</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Depoimento 3 - Isabella */}
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                    {/* WhatsApp Header */}
                    <div className="bg-[#075E54] text-white px-4 py-3 flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center font-bold text-lg">
                        I
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-sm">Isabella G.</p>
                        <p className="text-xs opacity-80">en línea</p>
                      </div>
                    </div>
                    
                    {/* Mensagem */}
                    <div className="p-4 bg-[#ECE5DD]">
                      <div className="bg-white rounded-lg rounded-tl-none p-4 shadow-sm mb-2 relative">
                        <p className="text-gray-800 text-sm mb-3 leading-relaxed">
                          <span className="font-bold text-gray-900">Mucho más que solo papas fritas.</span>
                        </p>
                        <p className="text-gray-700 text-sm leading-relaxed mb-3">
                          Compré la Air Fryer para comer más saludable, pero estaba aburrida de comer siempre lo mismo.
                        </p>
                        <p className="text-gray-700 text-sm leading-relaxed mb-3">
                          <span className="font-semibold text-cta-primary">Expres al Sabor</span> me abrió un mundo de posibilidades. He probado recetas de pescado, panes, quiches y hasta el pack sin gluten es fantástico. 💚
                        </p>
                        <p className="text-gray-700 text-sm leading-relaxed mb-3">
                          Las recetas son sabrosas y para nada aburridas. Por fin estoy usando mi freidora todos los días y disfrutando mi comida.
                        </p>
                        <div className="flex items-center justify-between mt-3">
                          <p className="text-xs text-gray-500 italic">
                            Entusiasta del fitness • Quito, Ecuador 🇪🇨
                          </p>
                          <span className="text-xs text-gray-400">12:08</span>
                        </div>
                        <div className="flex gap-1 mt-2">
                          <span>⭐</span>
                          <span>⭐</span>
                          <span>⭐</span>
                          <span>⭐</span>
                          <span>⭐</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

               {/* Stats/Números */}
                <div className="grid grid-cols-3 gap-3 md:gap-4 mt-8 md:mt-12 text-center max-w-3xl mx-auto">
                  <div className="bg-white p-3 md:p-6 rounded-lg shadow-md border border-border">
                    <p className="text-2xl md:text-3xl font-bold text-[#25D366] mb-1">500+</p>
                    <p className="text-xs md:text-sm text-muted-foreground leading-tight">Mensajes como estos</p>
                  </div>
                  <div className="bg-white p-3 md:p-6 rounded-lg shadow-md border border-border">
                    <p className="text-2xl md:text-3xl font-bold text-[#25D366] mb-1">4.9★</p>
                    <p className="text-xs md:text-sm text-muted-foreground leading-tight">Valoración promedio</p>
                  </div>
                  <div className="bg-white p-3 md:p-6 rounded-lg shadow-md border border-border">
                    <p className="text-2xl md:text-3xl font-bold text-[#25D366] mb-1">100%</p>
                    <p className="text-xs md:text-sm text-muted-foreground leading-tight">Recomiendan</p>
                  </div>
                </div>

               {/* CTA */}
                <div className="text-center mt-8 md:mt-10">
                  <Button 
                    variant="cta" 
                    size="2xl" 
                    onClick={handleCTAClick} 
                    className="w-full md:w-auto text-sm md:text-base"
                  >
                    <span className="block md:inline">
                      Quiero resultados como estos
                    </span>
                    <span className="block md:inline md:ml-1">
                      (US$ 5,50)
                    </span>
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

            {/* Producto Principal */}
            <div className="mb-10">
              <div className="bg-gradient-to-br from-cta-primary/10 to-cta-primary/5 rounded-xl p-6 md:p-8 border-2 border-cta-primary/30 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-cta-primary rounded-full flex items-center justify-center">
                    <Utensils className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Producto Principal</h3>
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
                    ⚠️ <strong>Transparencia total:</strong> Los bonos adicionales están disponibles solo durante la promoción de lanzamiento. Después del lanzamiento,<dyad-write path="vite.config.ts" description="Optimizing Vite config for better performance on mobile 4G">
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: 'es2015',
    minify: 'terser',
    cssMinify: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['@radix-ui/react-accordion', '@radix-ui/react-dialog', '@radix-ui/react-toast', '@radix-ui/react-slot'],
          'utils': ['clsx', 'tailwind-merge'],
          'icons': ['lucide-react'],
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i.test(assetInfo.name)) {
            return `assets/media/[name]-[hash][extname]`;
          }
          if (/\.(png|jpe?g|gif|svg|webp|avif)(\?.*)?$/i.test(assetInfo.name)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/\.(woff2?|eot|ttf|otf)(\?.*)?$/i.test(assetInfo.name)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
      },
    },
    terserOptions: {
      compress: {
        drop_console: mode === 'production',
        drop_debugger: mode === 'production',
        pure_funcs: mode === 'production' ? ['console.log', 'console.info'] : [],
      },
      mangle: {
        safari10: true,
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
}));