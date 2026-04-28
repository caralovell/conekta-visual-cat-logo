import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import cmsDashboard from "@/assets/dashboard-mockup.png";
import player from "@/assets/android-media-player.jpg";
import totemMain from "@/assets/totem-main.jpg";
import totem1 from "@/assets/totem-1.jpg";
import totem2 from "@/assets/totem-2.jpg";
import totem3 from "@/assets/totem-3.jpg";
import totem4 from "@/assets/totem-4.jpg";

const catalogItems = [
  {
    src: totemMain,
    alt: "Tótem digital interactivo principal con anuncio",
    title: "Tótem Interactivo Premium",
    description:
      "Solución insignia de gran formato pensada para hubs de alto tráfico. Pantalla táctil de alta luminosidad, contenido dinámico y experiencia inmersiva para captar la atención del usuario.",
    sizeClass: "md:max-w-[520px] aspect-[4/5]",
  },
  {
    src: totem1,
    alt: "Tótem digital con anuncio en centro comercial",
    title: "Centros Comerciales",
    description:
      "Tótems orientados al retail con campañas segmentadas por franja horaria. Refuerza promociones, novedades y comunicación de marca en el punto de decisión.",
    sizeClass: "md:max-w-[420px] aspect-[3/4]",
  },
  {
    src: totem2,
    alt: "Tótem digital con anuncio en aeropuerto",
    title: "Aeropuertos y Transporte",
    description:
      "Pantallas robustas para entornos 24/7 con información operativa, wayfinding y publicidad de alto impacto. Diseñadas para soportar uso intensivo y condiciones exigentes.",
    sizeClass: "md:max-w-[480px] aspect-[4/5]",
  },
  {
    src: totem3,
    alt: "Tótem digital con anuncio en museo",
    title: "Espacios Culturales",
    description:
      "Experiencias interactivas para museos y exposiciones. Contenido multimedia, multi-idioma y accesibilidad integrada para enriquecer la visita.",
    sizeClass: "md:max-w-[400px] aspect-[3/4]",
  },
  {
    src: totem4,
    alt: "Tótem digital con anuncio en oficina corporativa",
    title: "Entornos Corporativos",
    description:
      "Comunicación interna, reservas de salas y dashboards en tiempo real. Diseño elegante que se integra en el lenguaje visual de cualquier oficina.",
    sizeClass: "md:max-w-[460px] aspect-square",
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
            Soluciones personalizadas que consiguen acercar tu marca a los usuarios de forma fácil y sencilla, creando
            una experiencia única.
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
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </motion.div>

                <div className={imageLeft ? "md:order-2" : "md:order-1"}>
                  <span className="inline-block text-xs uppercase tracking-[0.25em] text-accent font-bold mb-3">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{item.title}</h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

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
