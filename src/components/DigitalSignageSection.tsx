import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

const catalogItems = [
  {
    src: totemMain,
    alt: "Tótem",
    title: "Tótem Square Lite",
    description:
      "Estructura de acero y aluminio fabricada en España. Diseño minimalista con acabado de alta calidad que combina innovación y estilo.",
    tag: "Tótem",
  },
  {
    src: totem1,
    alt: "Tótem",
    title: "Tótem Square Lite Eco",
    description:
      "Fabricado con materiales reciclados equivalentes a 75 botellas de plástico. Panel acústico integrado, producido con energía solar.",
    tag: "Tótem",
  },
  {
    src: totem2,
    alt: "Tótem",
    title: "Tótem Window",
    description:
      "Soporte de suelo compacto para monitores pequeños con espacio para integrar un ordenador. Sencillo y versátil.",
    tag: "Tótem",
  },
  {
    src: totem3,
    alt: "Kiosko",
    title: "Kiosko Touch",
    description:
      "Pantalla inclinada para mejorar visibilidad e interacción. Permite integrar periféricos para gestión de turnos o consultas.",
    tag: "Kiosko",
  },
  {
    src: totem4,
    alt: "Kiosko",
    title: "Kiosko Posh",
    description:
      'Atril adaptable en formato horizontal o vertical. Compatible con pantallas de 32" a 55", ideal para entradas y zonas de espera.',
    tag: "Kiosko",
  },
  {
    src: totem5,
    alt: "Kiosko",
    title: "Kiosko Crew",
    description: "Soporte compacto con diseño elegante, ideal para conferencias, exposiciones o zonas de paso.",
    tag: "Kiosko",
  },
];

const filters = ["Todos", "Tótem", "Kiosko"];

const DigitalSignageSection = () => {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [selectedItem, setSelectedItem] = useState(null);

  const filtered = activeFilter === "Todos" ? catalogItems : catalogItems.filter((item) => item.tag === activeFilter);

  return (
    <section id="digital-signage" className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">Digital Signage</h2>
          </div>
        </ScrollReveal>

        {/* Intro */}
        <ScrollReveal delay={0.1}>
          <div className="max-w-4xl mx-auto text-center mb-8">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Soluciones personalizadas diseñadas para mejorar la experiencia del huésped, facilitando una interacción
              intuitiva y creando estancias memorables que conectan con cada visitante.
            </p>
          </div>
        </ScrollReveal>

        {/* Filtros */}
        <ScrollReveal delay={0.15}>
          <div className="flex justify-center gap-2 mb-8">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => {
                  setActiveFilter(f);
                  setSelectedItem(null);
                }}
                className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase transition-all duration-300 ${
                  activeFilter === f
                    ? "bg-accent text-white shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Grid de productos */}
        <div className="max-w-5xl mx-auto mb-6">
          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <motion.div
                  key={item.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedItem(selectedItem?.title === item.title ? null : item)}
                >
                  <div className="relative rounded-xl overflow-hidden bg-muted/30 aspect-[4/5]">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

                    <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest font-semibold text-white/90 bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-full">
                      {item.tag}
                    </span>

                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-sm md:text-base font-bold text-white leading-tight">{item.title}</h3>
                      <p className="text-[11px] md:text-xs text-white/70 leading-snug mt-1 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Detalle expandido al hacer clic */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="max-w-3xl mx-auto mb-12 overflow-hidden"
            >
              <div className="bg-muted/40 rounded-2xl p-5 md:p-8 flex flex-col md:flex-row gap-5 items-center mt-4">
                <img
                  src={selectedItem.src}
                  alt={selectedItem.alt}
                  className="w-full md:w-44 h-52 md:h-60 object-cover rounded-xl flex-shrink-0"
                />
                <div>
                  <span className="text-xs uppercase tracking-widest text-accent font-bold">{selectedItem.tag}</span>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mt-1 mb-3">{selectedItem.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {selectedItem.description}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ──────── E-Paper (SIN CAMBIOS) ──────── */}
        <ScrollReveal>
          <div className="max-w-4xl mx-auto grid md:grid-cols-[1fr_auto] gap-6 items-center mb-8">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">E-Paper</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Pantallas de papel electrónico a todo color para universidades: ideales para señalética de aulas,
                reservas de salas, horarios, calendarios académicos y comunicación interna, con bajo consumo y máxima
                visibilidad.
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

        {/* ──────── Gestión de Contenido (SIN CAMBIOS) ──────── */}
        <ScrollReveal>
          <div className="max-w-4xl mx-auto grid md:grid-cols-[1fr_auto] gap-6 items-center">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">Gestión de Contenido</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Gestionar y mostrar contenidos digitales en pantallas ubicadas en espacios físicos como tiendas,
                oficinas, aeropuertos o centros comerciales
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
};

export default DigitalSignageSection;
