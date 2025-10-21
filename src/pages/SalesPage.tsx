import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { StickyButton } from "@/components/sales/StickyButton";
import { RecipeCard } from "@/components/sales/RecipeCard";
import { TestimonialCard } from "@/components/sales/TestimonialCard";
import { CheckCircle, Timer, ThermometerSun, ChefHat, ShoppingCart, Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

import heroKitMockup from "@/assets/hero-kit-mockup-new.jpg";
import recipePolloParmesano from "@/assets/recipe-pollo-parmesano.jpg";
import recipeCamaronesAjo from "@/assets/recipe-camarones-ajo.jpg";
import recipeChipsBatata from "@/assets/recipe-chips-batata.jpg";
import airfryerDessert from "@/assets/airfryer1.jpg";
import airfryerBread from "@/assets/airfryer2.jpg";
import airfryerNoodles from "@/assets/airfryer3.jpg";
import airfryerSteak from "@/assets/airfryer4.jpg";
import airfryerChickenWings from "@/assets/airfryer5.jpg";

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
                fetchpriority="high"
              />
              <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-lg p-3 shadow-lg">
                <p className="text-sm font-medium text-foreground">📊 Tablas de tiempo exactas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carrossel de Resultados */}
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
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Card className="overflow-hidden border-2 border-border">
                      <img
                        src={airfryerDessert}
                        alt="Postres deliciosos en AirFryer"
                        className="w-full h-64 object-cover"
                        width="400"
                        height="256"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="p-4 bg-card">
                        <h3 className="font-bold text-foreground">Postres irresistibles</h3>
                        <p className="text-sm text-muted-foreground">Brownies, volcanes y más</p>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>

                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Card className="overflow-hidden border-2 border-border">
                      <img
                        src={airfryerBread}
                        alt="Pan casero hecho en AirFryer"
                        className="w-full h-64 object-cover"
                        width="400"
                        height="256"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="p-4 bg-card">
                        <h3 className="font-bold text-foreground">Pan de plátano perfecto</h3>
                        <p className="text-sm text-muted-foreground">25 min a 160°C</p>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>

                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Card className="overflow-hidden border-2 border-border">
                      <img
                        src={airfryerNoodles}
                        alt="Fideos con vegetales en AirFryer"
                        className="w-full h-64 object-cover"
                        width="400"
                        height="256"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="p-4 bg-card">
                        <h3 className="font-bold text-foreground">Fideos con hongos teriyaki</h3>
                        <p className="text-sm text-muted-foreground">15 min a 180°C</p>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>

                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Card className="overflow-hidden border-2 border-border">
                      <img
                        src={airfryerSteak}
                        alt="Bife jugoso en AirFryer"
                        className="w-full h-64 object-cover"
                        width="400"
                        height="256"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="p-4 bg-card">
                        <h3 className="font-bold text-foreground">Bife con cebollas caramelizadas</h3>
                        <p className="text-sm text-muted-foreground">12 min a 200°C</p>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>

                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Card className="overflow-hidden border-2 border-border">
                      <img
                        src={airfryerChickenWings}
                        alt="Alitas de pollo glaseadas en AirFryer"
                        className="w-full h-64 object-cover"
                        width="400"
                        height="256"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="p-4 bg-card">
                        <h3 className="font-bold text-foreground">Alitas glaseadas crujientes</h3>
                        <p className="text-sm text-muted-foreground">18 min a 190°C</p>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>

            <div className="text-center mt-10">
              <div className="bg-gradient-to-r from-cta-primary/10 via-cta-secondary/10 to-cta-primary/10 rounded-2xl p-8 border-2 border-cta-primary/30 shadow-xl">
                <p className="text-xl md:text-2xl font-bold text-foreground mb-6">
                  <span className="text-cta-primary">600+ recetas como estas</span> te esperan
                </p>
                <Button
                  variant="cta"
                  size="2xl"
                  onClick={handleCTAClick}
                  className="w-full md:w-auto shadow-2xl hover:scale-105 transition-transform duration-200"
                >
                  Quiero cocinar así (US$ 5,50)
                </Button>
              </div>
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
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Lo que dicen quienes ya transformaron su cocina
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Resultados reales de personas reales
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <TestimonialCard
                name="Sofía L., mamá de dos"
                title="Santiago, Chile"
                content="¡Salvó mis cenas entre semana! Mi freidora de aire era solo para papas fritas congeladas. Intenté hacer otras cosas, pero siempre quedaban secas o blandas. Como mamá de dos niños, no tengo tiempo para experimentar y fallar. Este recetario cambió todo. Ahora hago pollo jugoso, vegetales crujientes y hasta postres en menos de 20 minutos. ¡Mi familia está comiendo más sano y delicioso que nunca! Totalmente recomendado."
                rating={5}
              />
              <TestimonialCard
                name="Javier R., estudiante"
                title="Bogotá, Colombia"
                content="Pensé que mi freidora no servía, ¡el que no servía era yo! Estaba a punto de regalar mi Air Fryer. Todo lo que cocinaba era un desastre. Compré este ebook sin mucha fe y ¡wow! El problema no era el aparato, era que no tenía idea de los tiempos y temperaturas. Las instrucciones son súper fáciles de seguir, a prueba de tontos. La semana pasada hice unas alitas de pollo que quedaron mejores que las de mi restaurante favorito. ¡Increíble!"
                rating={5}
              />
              <TestimonialCard
                name="Isabella G., entusiasta del fitness"
                title="Quito, Ecuador"
                content="Mucho más que solo papas fritas. Compré la Air Fryer para comer más saludable, pero estaba aburrida de comer siempre lo mismo. Expres al Sabor me abrió un mundo de posibilidades. He probado recetas de pescado, panes, quiches y hasta el pack sin gluten es fantástico. Las recetas son sabrosas y para nada aburridas. Por fin estoy usando mi freidora todos los días y disfrutando mi comida."
                rating={5}
              />
            </div>
          </div>
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

      {/* Sticky Button Mobile */}
      <StickyButton
        text="Quiero el kit ahora"
        price="US$ 5,50"
        onClick={handleCTAClick}
      />

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
