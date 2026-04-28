import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { Button } from "@/components/ui/button";
import LogopostLogo from "./LogopostLogo";
import asciresLogo from "@/assets/ascires-logo.png";

const ASCIRES_LOGO = asciresLogo;
const BUDGET_URL = "https://2ff6xv.share-eu1.hsforms.com/2vIt10PA2SWyd24cddBHzfg";

const BudgetSection = () => (
  <section className="py-10 md:py-14 bg-foreground relative overflow-hidden">
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.08]"
      style={{ background: "radial-gradient(circle, hsl(var(--accent)), transparent 60%)" }}
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />

    <div className="container mx-auto px-4 relative z-10 text-center">
      <ScrollReveal>
        <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3 leading-tight">
          ¿Quieres digitalizar tu espacio?
        </h2>
        <p className="text-primary-foreground/70 text-base max-w-lg mx-auto mb-6">
          Solicita tu presupuesto personalizado y descubre cómo la tecnología puede mejorar la experiencia.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <a href={BUDGET_URL} target="_blank" rel="noopener noreferrer">
          <Button variant="cta" size="default" className="text-base px-8 py-5 shadow-lg shadow-accent/30 group">
            Solicitar Presupuesto
            <span className="inline-block transition-transform group-hover:translate-x-1 ml-1">→</span>
          </Button>
        </a>
      </ScrollReveal>
    </div>
  </section>
);

export default BudgetSection;
