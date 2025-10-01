import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { StickyButton } from "@/components/sales/StickyButton";
import { ValueCard } from "@/components/sales/ValueCard";
import { RecipeCard } from "@/components/sales/RecipeCard";
import { CheckCircle, Clock, Users, Utensils, Award, Shield, DollarSign, Zap, Star, Timer, ThermometerSun, ChefHat, ShoppingCart } from "lucide-react";
import heroKitMockup from "@/assets/hero-kit-mockup.jpg";
import crispSystemInfographic from "@/assets/crisp-system-infographic.jpg";
import recipeCollectionsIndex from "@/assets/recipe-collections-index.jpg";
import recipeTimeTemperature from "@/assets/recipe-time-temperature.jpg";
import weeklyMenuShopping from "@/assets/weekly-menu-shopping.jpg";
import cleaningGuideVisual from "@/assets/cleaning-guide-visual.jpg";

const SalesPage = () => {
  const handleCTAClick = () => {
    // Aquí iría la lógica para redirigir al checkout
    console.log("Botón CTA clickeado");
  };

  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section V1 */}
      <section className="py-8 md:py-16 bg-gradient-to-br from-background to-cta-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                Método C.R.I.S.P.: <span className="text-cta-primary">crocancia en 10–15 min con tiempos exactos.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-6">
                <strong>600+ recetas AirFryer</strong> por objetivo. <strong>Cero ensayo-error desde el día 1.</strong>
              </p>
              
              <div className="space-y-3 mb-6">
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

              <Button variant="cta" size="xl" onClick={handleCTAClick} className="w-full md:w-auto mb-6">
                Quiero crocancia hoy (US$ 5,50)
              </Button>

              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="px-3 py-1">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Acceso inmediato
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  <Shield className="w-4 h-4 mr-2" />
                  Garantía 7 días
                </Badge>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroKitMockup} 
                alt="Kit Maestro de Recetas AirFryer Perfecta con tablas de tiempo y temperatura exactas" 
                className="w-full rounded-2xl shadow-[var(--shadow-hero)]"
              />
              <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-lg p-3 shadow-lg">
                <p className="text-sm font-medium text-foreground">📊 Tablas de tiempo exactas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dor do Avatar */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              Si te reconoces en esto, este kit es para ti:
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-8">
              <div className="p-4 md:p-6 bg-card rounded-lg border border-border text-left">
                <p className="text-foreground font-medium">"Mi AirFryer deja la comida <strong>blanda o seca</strong>."</p>
              </div>
              <div className="p-4 md:p-6 bg-card rounded-lg border border-border text-left">
                <p className="text-foreground font-medium">"Paso más tiempo <strong>buscando</strong> que cocinando."</p>
              </div>
              <div className="p-4 md:p-6 bg-card rounded-lg border border-border text-left">
                <p className="text-foreground font-medium">"Repito las mismas 5 recetas y me <strong>aburro</strong>."</p>
              </div>
              <div className="p-4 md:p-6 bg-card rounded-lg border border-border text-left">
                <p className="text-foreground font-medium">"Termino pidiendo <strong>delivery</strong> entre semana."</p>
              </div>
            </div>
            <Button variant="cta" size="xl" onClick={handleCTAClick} className="mt-4 w-full md:w-auto">
              Quiero una solución simple →
            </Button>
          </div>
        </div>
      </section>

      {/* Solução + Mecanismo C.R.I.S.P. */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                ¿Por qué esto funciona cuando otras recetas fallan?
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Aplicamos el <strong className="text-cta-primary">Sistema C.R.I.S.P.</strong>:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6 mb-8 md:mb-12">
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
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 md:mb-6">
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
              />
              <RecipeCard
                name="Camarones al ajo"
                time="8 min"
                temperature="180°C"
                instructions="listo en una sola vez"
              />
              <RecipeCard
                name="Chips de batata"
                time="10-12 min"
                temperature="200°C"
                instructions="agitar a mitad"
              />
            </div>

            <div className="text-center mt-8 md:mt-12">
              <Button variant="cta" size="xl" onClick={handleCTAClick} className="w-full md:w-auto">
                Quiero tiempos exactos (US$ 5,50)
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Ver por dentro - Carrossel */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Mira lo que recibes por dentro
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
              <div className="bg-card rounded-lg border border-border p-6">
                <img 
                  src={recipeCollectionsIndex} 
                  alt="Colecciones organizadas por objetivos: Rápidas & Saludables, Proteínas & Familia" 
                  className="w-full rounded-lg shadow-md mb-4"
                />
                <h3 className="font-bold text-foreground mb-2">Colecciones por objetivo</h3>
                <p className="text-sm text-muted-foreground">Rápidas & Saludables, Proteínas & Familia, Veggie & Fit, Postres & Snacks</p>
              </div>
              <div className="bg-card rounded-lg border border-border p-6">
                <img 
                  src={recipeTimeTemperature} 
                  alt="Receta con tiempos destacados y temperaturas exactas" 
                  className="w-full rounded-lg shadow-md mb-4"
                />
                <h3 className="font-bold text-foreground mb-2">Recetas con tiempos exactos</h3>
                <p className="text-sm text-muted-foreground">Temperaturas y tiempos destacados claramente</p>
              </div>
              <div className="bg-card rounded-lg border border-border p-6">
                <img 
                  src={weeklyMenuShopping} 
                  alt="Menús semanales con listas de compras organizadas" 
                  className="w-full rounded-lg shadow-md mb-4"
                />
                <h3 className="font-bold text-foreground mb-2">Menús de 4 semanas</h3>
                <p className="text-sm text-muted-foreground">+ listas de compras organizadas</p>
              </div>
              <div className="bg-card rounded-lg border border-border p-6">
                <img 
                  src={cleaningGuideVisual} 
                  alt="Guía visual de limpieza y mantenimiento de AirFryer" 
                  className="w-full rounded-lg shadow-md mb-4"
                />
                <h3 className="font-bold text-foreground mb-2">Guía exprés de limpieza</h3>
                <p className="text-sm text-muted-foreground">y mantenimiento rápido</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lo que vas a recibir */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Lo que vas a recibir
              </h2>
            </div>

            <div className="space-y-6 mb-8">
              <div className="p-6 bg-card rounded-lg border border-border">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <Utensils className="w-6 h-6 text-cta-primary" />
                  Colecciones (4)
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <div>• Rápidas & Saludables — 100+ recetas organizadas por objetivo</div>
                  <div>• Proteínas & Comidas Familiares</div>
                  <div>• Veggie & AirFryer Fit</div>
                  <div>• Postres & Snacks</div>
                </div>
              </div>

              <div className="p-6 bg-card rounded-lg border border-border">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <Clock className="w-6 h-6 text-cta-primary" />
                  Además recibes:
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>• Menús de 4 semanas + listas de compras</div>
                  <div>• Tablas tiempo/temperatura por alimento</div>
                  <div>• Guía exprés de limpieza/mantenimiento</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-base text-muted-foreground mb-6">
                ✓ rapidez ✓ variedad ✓ menos aceite ✓ resultados consistentes ✓ uso diario ✓ cero complicaciones
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bonos + Urgência Ética */}
      <section className="py-12 md:py-16 bg-value-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Bonos exclusivos por tiempo limitado
              </h2>
              <Badge variant="destructive" className="text-sm md:text-lg px-3 md:px-4 py-1 md:py-2">
                Bonos 3 y 4 incluidos solo esta semana
              </Badge>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
              <div className="p-4 md:p-6 bg-card rounded-lg border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">1. 10 Errores que arruinan tus recetas</h3>
                    <p className="text-sm text-muted-foreground mb-2">checklist visual</p>
                    <Badge variant="secondary" className="text-xs">Valor: US$ 9</Badge>
                  </div>
                </div>
              </div>

              <div className="p-4 md:p-6 bg-card rounded-lg border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">2. 15 Postres Fit sin azúcar refinada</h3>
                    <p className="text-sm text-muted-foreground mb-2">dulces saludables</p>
                    <Badge variant="secondary" className="text-xs">Valor: US$ 12</Badge>
                  </div>
                </div>
              </div>

              <div className="p-4 md:p-6 bg-card rounded-lg border border-cta-primary/30 bg-cta-primary/5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-cta-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-cta-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">3. Calendario sencillo (30 días)</h3>
                    <p className="text-sm text-muted-foreground mb-2">organización diaria</p>
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="text-xs">Valor: US$ 9</Badge>
                      <Badge className="text-xs bg-cta-primary text-white">Incluido hoy</Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 md:p-6 bg-card rounded-lg border border-cta-primary/30 bg-cta-primary/5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-cta-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-5 h-5 text-cta-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">4. Guía de compras inteligentes</h3>
                    <p className="text-sm text-muted-foreground mb-2">cómo ahorrar comprando correcto</p>
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="text-xs">Valor: US$ 9</Badge>
                      <Badge className="text-xs bg-cta-primary text-white">Incluido hoy</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button variant="cta" size="xl" onClick={handleCTAClick} className="w-full md:w-auto">
                Sí, quiero mis bonos hoy (US$ 5,50)
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Economía y Valor */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Con 2 pedidos de delivery menos por semana
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-6">
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

      {/* Oferta Especial de Hoy */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-cta-primary/10 to-cta-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              AirFryer Perfecta – Kit Maestro de Recetas (Edición Premium)
            </h2>
            
            <div className="p-6 md:p-8 bg-card rounded-2xl border border-border shadow-xl mb-8">
              <div className="text-4xl md:text-6xl font-bold text-cta-primary mb-4">
                US$ 5,50
              </div>
              <p className="text-base md:text-lg text-muted-foreground mb-6">
                Acceso inmediato y actualizaciones del kit.
              </p>
              <Button variant="cta" size="xl" onClick={handleCTAClick} className="w-full md:w-auto mb-4">
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

      {/* Garantía Doble 7×7 */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-6 md:p-8 bg-success-light rounded-2xl border border-success/20">
              <Shield className="w-12 md:w-16 h-12 md:h-16 text-success mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Pruébalo 7 días sin riesgo.
              </h2>
              <p className="text-lg md:text-xl text-foreground mb-4">
                Si no te ahorra tiempo <strong>o</strong> no mejoras textura, <strong>te devolvemos el dinero</strong>. <strong>Sin preguntas.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Objecciones Reales */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
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
      <section className="py-12 md:py-16 bg-gradient-to-br from-cta-primary to-cta-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AirFryer Perfecta – Kit Maestro de Recetas
            </h2>
            <p className="text-lg md:text-xl mb-2">(Edición Premium)</p>
            <div className="text-4xl md:text-5xl font-bold mb-6">US$ 5,50</div>
            <p className="text-lg md:text-xl mb-8">acceso inmediato</p>
            <Button 
              variant="secondary" 
              size="xl" 
              onClick={handleCTAClick}
              className="bg-white text-cta-primary hover:bg-white/90 font-bold w-full md:w-auto"
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
            © 2024 AirFryer Perfecta. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SalesPage;