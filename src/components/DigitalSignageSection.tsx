import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import cmsDashboard from "@/assets/dashboard-mockup.png";
import player from "@/assets/android-media-player.jpg";
import totemMain from "@/assets/totem-main.jpg";
import totem1 from "@/assets/totem-1.jpg";
import totem2 from "@/assets/totem-2.jpg";
import totem3 from "@/assets/totem-3.jpg";
import totem4 from "@/assets/totem-4.jpg";
import totem5 from "@/assets/totem-5.jpg";
import epaperDisplay from "@/assets/epaper-display.png";
import tabletTube from "@/assets/tablet-tube.png";
import tabletWallView from "@/assets/tablet-wall-view.png";
import tabletPortrait from "@/assets/tablet-portrait.png";
import tabletAngle from "@/assets/tablet-angle.png";
import tabletPlane from "@/assets/tablet-plane.png";

const catalogItems = [
  {
    src: totemMain,
    alt: "Tótem",
    title: "Tótem Square Lite",
    description:
      "Tótem elegante y tecnológico, fabricado en España con estructura de acero y aluminio que garantiza durabilidad y un acabado de alta calidad. Su diseño minimalista y su rendimiento lo convierten en una pieza distintiva que combina innovación, estilo y excelencia en cada detalle.",
    sizeClass: "md:max-w-[520px] aspect-[4/5]",
  },
  {
    src: totem1,
    alt: "Tótem",
    title: "Tótem Square Lite Eco",
    description:
      "Tótem sostenible fabricado con materiales reciclados, equivalente a unas 75 botellas de plástico, que combina diseño y responsabilidad ambiental. Incorpora panel acústico para mejorar el sonido y se produce con energía solar, reduciendo las emisiones a cero y ofreciendo una solución elegante y ecológica para cualquier espacio.",
    sizeClass: "md:max-w-[420px] aspect-[3/4]",
  },
  {
    src: totem2,
    alt: "Tótem",
    title: "Tótem Window",
    description:
      "Soporte de suelo compacto para monitores pequeños, con espacio para integrar un ordenador. Su diseño elegante y versátil se adapta fácilmente a distintos entornos, destacando por su sencillez y originalidad.",
    sizeClass: "md:max-w-[480px] aspect-[4/5]",
  },
  {
    src: totem3,
    alt: "Kiosko",
    title: "Kiosko Touch",
    description:
      "Kiosco de suelo con pantalla inclinada para mejorar la visibilidad y la interacción. Robusto, estable y versátil, permite integrar periféricos y adaptarse a múltiples usos como gestión de turnos o consulta de servicios.",
    sizeClass: "md:max-w-[300px] aspect-[847/1857]",
  },
  {
    src: totem4,
    alt: "Kiosko",
    title: "Kiosko Posh",
    description:
      'Atril versátil y elegante diseñado para una interacción visual intuitiva, adaptable en formato horizontal o vertical. Compacto y funcional, permite integrar pantallas de 32" a 55", siendo ideal para espacios como entradas, zonas de espera o áreas comerciales.',
    sizeClass: "md:max-w-[460px] aspect-square",
  },
  {
    src: totem5,
    alt: "Kiosko",
    title: "Kiosko Crew",
    description:
      "Soporte de suelo compacto para monitores de pequeño tamaño, con espacio para integrar un ordenador. Destaca por su diseño versátil, elegante y sencillo, adaptándose fácilmente a entornos como conferencias, exposiciones o zonas de paso.",
    sizeClass: "md:max-w-[400px] aspect-[3/4]",
  },
];

const DigitalSignageSection = () => (
  <section id="digital-signage" className="py-12 md:py-16 bg-background">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">Digital Signage</h2>
        </div>
      </ScrollReveal>

      {/* Intro block */}
      <ScrollReveal delay={0.1}>
        <div className="max-w-4xl mx-auto text-center mb-10">
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Soluciones personalizadas diseñadas para mejorar la experiencia del huésped, facilitando una interacción
            intuitiva y creando estancias memorables que conectan con cada visitante.
          </p>
        </div>
      </ScrollReveal>

      {/* Catálogo: filas alternadas imagen + texto */}
      <div className="max-w-5xl mx-auto space-y-16 md:space-y-20 mb-20">
        {catalogItems.map((item, i) => {
          const imageLeft = i % 2 === 0;
          return (
            <ScrollReveal key={i} delay={0.05}>
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <motion.div
                  className={`relative rounded-2xl overflow-hidden shadow-2xl w-full ${item.sizeClass} mx-auto ${
                    imageLeft ? "md:order-1" : "md:order-2"
                  }`}
                  whileHover={{ scale: 1.015 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={item.src} alt={item.alt} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </motion.div>

                <div className={imageLeft ? "md:order-2" : "md:order-1"}>
                  <span className="inline-block text-xs uppercase tracking-[0.25em] text-accent font-bold mb-3">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{item.title}</h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      {/* ──────── Sección Tablets ──────── */}
      <ScrollReveal>
        <div className="max-w-3xl mx-auto mb-16">
          {/* Divider: 07 arriba, línea, TABLETS debajo */}
          <div className="text-center mb-8">
            <span className="block text-xs uppercase tracking-[0.25em] text-accent font-bold mb-2">07</span>
            <div className="h-px w-full bg-accent/60 mb-2" />
            <span className="block text-sm uppercase tracking-[0.35em] text-accent font-medium">Tablets</span>
          </div>

          {/* Layout: Tube izquierda + grid 2x2 derecha */}
          <div className="flex gap-3 items-stretch max-w-2xl mx-auto">
            {/* Tube — columna estrecha */}
            <div className="relative w-[110px] md:w-[130px] flex-shrink-0 self-end">
              <img src={tabletTube} alt="Tablet Tube" className="w-full h-auto object-contain" loading="lazy" />
              <span className="block text-center text-foreground font-semibold text-[10px] tracking-wide mt-2">
                Tube
              </span>
            </div>

            {/* Grid 2x2 */}
            <div className="grid grid-cols-2 gap-2.5 md:gap-3 flex-1">
              {[
                { src: tabletWallView, label: "Wall View" },
                { src: tabletPortrait, label: "Portrait" },
                { src: tabletAngle, label: "Angle" },
                { src: tabletPlane, label: "Plane" },
              ].map((tab) => (
                <motion.div
                  key={tab.label}
                  className="relative rounded-lg overflow-hidden bg-muted/10 aspect-[4/3]"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={tab.src}
                    alt={`Tablet ${tab.label}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute bottom-2 left-2 text-white font-semibold text-[10px] md:text-[11px] tracking-wide drop-shadow-lg">
                    {tab.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Sub-section: E-Paper (compact) */}
      <ScrollReveal>
        <div className="max-w-4xl mx-auto grid md:grid-cols-[1fr_auto] gap-6 items-center mb-8">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">E-Paper</h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Pantallas de papel electrónico a todo color para universidades: ideales para señalética de aulas, reservas
              de salas, horarios, calendarios académicos y comunicación interna, con bajo consumo y máxima visibilidad.
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="w-full max-w-[260px]"
            >
              <img
                src={epaperDisplay}
                alt="Pantalla de papel electrónico E-Paper"
                className="w-full h-auto object-contain"
                loading="lazy"
                width={1024}
                height={768}
              />
            </motion.div>
          </div>
        </div>
      </ScrollReveal>

      {/* Sub-section: Gestión de Contenido (compact) */}
      <ScrollReveal>
        <div className="max-w-4xl mx-auto grid md:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">Gestión de Contenido</h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Gestionar y mostrar contenidos digitales en pantallas ubicadas en espacios físicos como tiendas, oficinas,
              aeropuertos o centros comerciales
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="w-full max-w-[220px]"
            >
              <img
                src={cmsDashboard}
                alt="Panel de gestión de contenido"
                className="w-full h-auto object-contain"
                loading="lazy"
                width={1024}
                height={768}
              />
            </motion.div>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="w-full max-w-[140px]"
            >
              <img
                src={player}
                alt="Android media player"
                className="w-full h-auto object-contain"
                loading="lazy"
                width={1024}
                height={768}
              />
            </motion.div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default DigitalSignageSection;
