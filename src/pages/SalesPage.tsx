import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StickyButton } from "@/components/sales/StickyButton";
import { ValueCard } from "@/components/sales/ValueCard";
import { RecipeCard } from "@/components/sales/RecipeCard";
import { CheckCircle, Clock, Users, Utensils, Award, Shield, DollarSign, Zap } from "lucide-react";
import heroKitMockup from "@/assets/hero-kit-mockup.jpg";
import crispSystemInfographic from "@/assets/crisp-system-infographic.jpg";
import recipeCardsPreview from "@/assets/recipe-cards-preview.jpg";

const SalesPage = () => {
  const handleCTAClick = () => {
    // Aquí iría la lógica para redirigir al checkout
    console.log("Botón CTA clickeado");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Sticky */}
      <header className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border z-40">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="font-bold text-lg text-cta-primary">AirFryer Perfecta</div>
          <Button variant="cta" size="lg" onClick={handleCTAClick}>
            Quiero cocinar mejor hoy (US$ 7,00)
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-background to-cta-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                <span className="text-cta-primary">21 días para dominar tu AirFryer</span> – Kit Maestro de Recetas (Edición Premium)
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Domina tu AirFryer con más de 400 recetas exactas, menús listos y resultados infalibles: <strong>crujiente por fuera, jugoso por dentro</strong>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button variant="cta" size="xl" onClick={handleCTAClick} className="flex-1 sm:flex-none">
                  Quiero cocinar mejor hoy (US$ 7,00)
                </Button>
                <Button variant="outline" size="xl" className="flex-1 sm:flex-none">
                  Ver recetas de muestra
                </Button>
              </div>
              <div className="flex flex-wrap gap-4">
                <Badge variant="secondary" className="px-3 py-1">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Acceso inmediato
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  <DollarSign className="w-4 h-4 mr-2" />
                  Precio en USD
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
                alt="Kit de recetas AirFryer Perfecta con guías y tablas de tiempo" 
                className="w-full rounded-2xl shadow-[var(--shadow-hero)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dolor Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              ¿Te suena familiar?
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 bg-card rounded-lg border border-border">
                <p className="text-foreground font-medium">"Paso más tiempo buscando recetas que cocinando."</p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border">
                <p className="text-foreground font-medium">"Mi AirFryer deja la comida blanda o seca."</p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border">
                <p className="text-foreground font-medium">"Gasto demasiado en delivery entre semana."</p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border">
                <p className="text-foreground font-medium">"Termino repitiendo 5 recetas y me aburro."</p>
              </div>
            </div>
            <Button variant="cta-secondary" size="lg" onClick={handleCTAClick}>
              Quiero una solución simple y rápida →
            </Button>
          </div>
        </div>
      </section>

      {/* Sistema C.R.I.S.P. */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                ¿Por qué <span className="text-cta-primary">AirFryer Perfecta</span> funciona cuando otras recetas fallan?
              </h2>
              <p className="text-xl text-muted-foreground">
                Aplicamos el <strong>Sistema C.R.I.S.P.</strong>
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <img 
                  src={crispSystemInfographic} 
                  alt="Infográfico del Sistema C.R.I.S.P. con 5 pasos para cocinar perfecto" 
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-cta-primary text-cta-primary-foreground flex items-center justify-center font-bold text-xl">
                    C
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2"><strong>Clasificar:</strong></h3>
                    <p className="text-muted-foreground">recetas por objetivo (rápidas, proteicas, fit, postres) para decidir sin pensar.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-cta-primary text-cta-primary-foreground flex items-center justify-center font-bold text-xl">
                    R
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2"><strong>Reloj:</strong></h3>
                    <p className="text-muted-foreground"><strong>tiempos exactos</strong> por alimento (+ tablas para ajustar por modelo/capacidad).</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-cta-primary text-cta-primary-foreground flex items-center justify-center font-bold text-xl">
                    I
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2"><strong>Ingrediente:</strong></h3>
                    <p className="text-muted-foreground">sustitutos saludables y lista corta (sin ingredientes raros).</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-cta-primary text-cta-primary-foreground flex items-center justify-center font-bold text-xl">
                    S
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2"><strong>Sazonar:</strong></h3>
                    <p className="text-muted-foreground">combinaciones probadas para más sabor con menos aceite.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-cta-primary text-cta-primary-foreground flex items-center justify-center font-bold text-xl">
                    P
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2"><strong>Precalentar:</strong></h3>
                    <p className="text-muted-foreground">protocolo de 3–5 min para lograr la <strong>crocancia</strong> perfecta.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center p-8 bg-success-light rounded-lg border border-success/20">
              <p className="text-lg font-semibold text-foreground">
                <strong>Resultado:</strong> platos listos en <span className="text-success">10–15 minutos</span> con textura consistente, incluso si eres principiante.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prueba en 24h */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Prueba en 24 horas
              </h2>
              <p className="text-xl text-muted-foreground">
                Empieza hoy, sin curva de ensayo-error.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <RecipeCard
                name="Pollo parmesano"
                time="12 min"
                temperature="190°C"
                instructions="Voltear a mitad del tiempo para textura perfecta"
              />
              <RecipeCard
                name="Camarones al ajo"
                time="8 min"
                temperature="180°C"
                instructions="Jugosos por dentro, dorados por fuera"
              />
              <RecipeCard
                name="Chips de batata"
                time="10-12 min"
                temperature="200°C"
                instructions="Agitar a mitad para crocancia uniforme"
              />
            </div>

            <div className="text-center mt-12">
              <Button variant="cta" size="xl" onClick={handleCTAClick}>
                Quiero todas las recetas ahora (US$ 7,00)
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Lo que vas a recibir */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Lo que vas a recibir
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <ValueCard
                icon={<Utensils />}
                title="4 Colecciones Organizadas"
                description="400+ recetas por objetivo: Rápidas & Saludables, Proteínas & Comidas Familiares, Veggie & AirFryer Fit, Postres & Snacks"
                highlight={true}
              />
              <ValueCard
                icon={<Users />}
                title="Menús Semanales (4 semanas)"
                description="Planificación completa con listas de compras incluidas para que no tengas que pensar qué cocinar"
              />
              <ValueCard
                icon={<Clock />}
                title="Tablas de Tiempo/Temperatura"
                description="Ajustes exactos por modelo y capacidad de AirFryer. Sin más adivinanzas."
              />
              <ValueCard
                icon={<Zap />}
                title="Guía de Limpieza Exprés"
                description="Mantenimiento rápido para que tu AirFryer siempre funcione como el primer día"
              />
            </div>

            <div className="text-center">
              <p className="text-lg text-muted-foreground mb-6">
                ✓ Rapidez ✓ Variedad ✓ Bajo aceite ✓ Recetas "de diario" ✓ Listas de compras ✓ Texturas consistentes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bonos */}
      <section className="py-16 bg-value-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Bonos por tiempo limitado
              </h2>
              <Badge variant="destructive" className="text-lg px-4 py-2">
                Bonos 3 y 4 disponibles solo esta semana
              </Badge>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <ValueCard
                icon={<CheckCircle />}
                title="Bono 1: 10 Errores que arruinan tus recetas"
                description="Checklist visual para evitar los errores más comunes en la AirFryer"
                value="US$ 9"
              />
              <ValueCard
                icon={<Award />}
                title="Bono 2: 15 Postres Fit sin azúcar refinada"
                description="Dulces saludables que no sabotean tu alimentación"
                value="US$ 12"
              />
              <ValueCard
                icon={<Clock />}
                title="Bono 3: Calendario sencillo de cocina (30 días)"
                description="Organización diaria para que nunca te quedes sin ideas"
                value="US$ 9"
                highlight={true}
              />
              <ValueCard
                icon={<DollarSign />}
                title="Bono 4: Guía de compras inteligentes"
                description="Cómo ahorrar comprando los ingredientes correctos"
                value="US$ 9"
                highlight={true}
              />
            </div>

            <div className="text-center p-8 bg-value text-value-foreground rounded-xl">
              <p className="text-2xl font-bold mb-2">
                Valor total de los bonos: US$ 39
              </p>
              <p className="text-xl">
                Incluidos hoy: <span className="text-3xl font-bold">US$ 0</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué funciona */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Por qué funciona
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-card rounded-lg border border-border">
                <CheckCircle className="w-8 h-8 text-success mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Organización por objetivos</h3>
                <p className="text-muted-foreground">→ eliges en segundos.</p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border">
                <CheckCircle className="w-8 h-8 text-success mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Menús + listas</h3>
                <p className="text-muted-foreground">→ menos decisiones, más acción.</p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border">
                <CheckCircle className="w-8 h-8 text-success mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Tablas</h3>
                <p className="text-muted-foreground">→ tiempo/temperatura sin adivinar.</p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border">
                <CheckCircle className="w-8 h-8 text-success mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Enfoque saludable</h3>
                <p className="text-muted-foreground">→ menos aceite, más sabor.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Economía y valor */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Economía y valor
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Con 2 pedidos de delivery menos por semana
                </h3>
                <p className="text-xl text-muted-foreground mb-6">
                  ahorras <span className="font-bold text-success">US$ 80–120/mes</span>
                </p>
                <p className="text-lg text-foreground">
                  El kit cuesta <span className="font-bold text-cta-primary">US$ 7,00</span> y se paga <strong>hoy</strong>.
                </p>
              </div>
              <div className="p-8 bg-card rounded-xl border border-border shadow-lg">
                <h4 className="font-bold text-center text-foreground mb-6">Valor Total del Stack</h4>
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
                    <span className="font-bold text-cta-primary">US$ 7,00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Oferta Especial */}
      <section className="py-20 bg-gradient-to-br from-cta-primary/10 to-cta-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Oferta Especial de Hoy
            </h2>
            <div className="p-8 bg-card rounded-2xl border border-border shadow-xl mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                AirFryer Perfecta – Kit Maestro de Recetas (Edición Premium)
              </h3>
              <div className="text-6xl font-bold text-cta-primary mb-4">
                US$ 7,00
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                Acceso inmediato y actualizaciones del kit
              </p>
              <Button variant="cta" size="xl" onClick={handleCTAClick} className="w-full md:w-auto">
                Quiero mis recetas ahora (US$ 7,00)
              </Button>
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
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Garantía Doble 7×7 (sin riesgo)
              </h2>
              <p className="text-xl text-foreground mb-4">
                <strong>Pruébalo 7 días sin riesgo.</strong>
              </p>
              <p className="text-lg text-muted-foreground">
                Si no te ahorra tiempo en la cocina <strong>o</strong> no consigues buena textura, <strong>te devolvemos tu dinero</strong>. <strong>Sin preguntas.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Preguntas Frecuentes
              </h2>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-card rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-2">¿Sirve para cualquier modelo (3,5 L / 5,5 L)?</h3>
                <p className="text-muted-foreground">Sí. Indicamos ajustes por capacidad.</p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-2">¿Necesito ingredientes caros?</h3>
                <p className="text-muted-foreground">No: básicos del súper con sustitutos.</p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-2">¿Hay opciones sin gluten/fit?</h3>
                <p className="text-muted-foreground">Sí, están marcadas.</p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-2">¿Cuánto tardo en organizarme?</h3>
                <p className="text-muted-foreground">15 min con nuestro calendario de 30 días.</p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-2">¿Cómo recibo el material?</h3>
                <p className="text-muted-foreground">100% digital, acceso inmediato (PDF A4 y versión móvil).</p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-2">¿Hay reembolso?</h3>
                <p className="text-muted-foreground">Sí, Garantía Doble 7×7.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgencia final */}
      <section className="py-16 bg-destructive/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              ⏰ Últimas horas
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              <strong>Bonos 3 y 4 incluidos solo hasta el domingo</strong> o hasta agotar el lote de lanzamiento.
            </p>
            <Button variant="cta" size="xl" onClick={handleCTAClick}>
              Sí, quiero cocinar mejor hoy (US$ 7,00)
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-cta-primary to-cta-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              AirFryer Perfecta – Kit Maestro de Recetas
            </h2>
            <p className="text-xl mb-4">(Edición Premium)</p>
            <div className="text-5xl font-bold mb-8">US$ 7,00</div>
            <p className="text-xl mb-8">acceso inmediato</p>
            <Button 
              variant="secondary" 
              size="xl" 
              onClick={handleCTAClick}
              className="bg-white text-cta-primary hover:bg-white/90 font-bold"
            >
              Sí, quiero cocinar mejor hoy
            </Button>
          </div>
        </div>
      </section>

      {/* Sticky Button Mobile */}
      <StickyButton 
        text="Quiero el kit ahora" 
        price="US$ 7,00" 
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