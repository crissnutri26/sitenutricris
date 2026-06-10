import { motion } from "framer-motion";
import { useRef } from "react";
import { useParallax, useSectionTransition } from "../lib/animations";

const diferenciais = [
  {
    title: "Atendimento próximo",
    desc: "Cuidado contínuo e humano",
  },
  {
    title: "Plano personalizado",
    desc: "Feito para você, não para a média",
  },
  {
    title: "Resultados consistentes",
    desc: "Sustentáveis no longo prazo",
  },
  {
    title: "Base científica",
    desc: "Decisões guiadas por evidências",
  },
];

export default function Sobre() {
  const ref = useRef(null);
  const { y } = useParallax(ref, 60);
  const { opacity, scale } = useSectionTransition(ref);

  return (
    <motion.section
      ref={ref}
      style={{ opacity, scale }}
      id="sobre"
      className="relative py-20 md:py-28 overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-gradient-to-br from-[#FFF6F8] via-[#FFE4EC] to-[#FFD6E4]"
      />

      <div className="absolute top-[-100px] left-[-80px] w-[300px] h-[300px] bg-rosa/20 rounded-full blur-[100px] opacity-40" />

      <div className="absolute bottom-[-100px] right-[-80px] w-[300px] h-[300px] bg-rosa-dark/10 rounded-full blur-[100px] opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div style={{ y }} className="relative">
            <div className="relative w-full h-[420px] md:h-[520px] rounded-3xl overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-white/20 z-10 pointer-events-none" />

              <img
                src="/draCristina.webp"
                alt="Dra. Cristina"
                className="
                  w-full h-full object-cover
                  object-[65%_20%] md:object-[60%_25%]
                  transition-transform duration-700
                  hover:scale-[1.03]
                "
              />
            </div>
          </motion.div>

          <div className="space-y-6">
            <span className="inline-block text-xs px-3 py-1 rounded-full bg-white/70 text-rosa-dark uppercase tracking-wide">
              Sobre mim
            </span>

            <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-rosa-dark leading-tight">
              Muito além de uma <span className="italic text-rosa">dieta</span>
            </h2>

            <p className="text-cinza leading-relaxed max-w-lg">
              Meu trabalho vai além de montar planos alimentares — eu ajudo você
              a construir uma relação mais leve, consciente e equilibrada com a
              sua alimentação e com o seu corpo.
            </p>

            <p className="text-cinza leading-relaxed max-w-lg">
              Cada estratégia é pensada de forma personalizada, respeitando sua
              rotina, preferências e objetivos — sem dietas restritivas ou
              soluções genéricas.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {diferenciais.map((item, i) => (
                <div
                  key={i}
                  className="
                    p-4 rounded-xl
                    bg-white/70 backdrop-blur-md
                    border border-white/50
                    hover:border-rosa/40 hover:bg-white
                    transition-all duration-300
                  "
                >
                  <p className="text-sm font-semibold text-rosa-dark">
                    {item.title}
                  </p>
                  <p className="text-xs text-cinza mt-1">{item.desc}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() =>
                document
                  .querySelector("#planos")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="
                mt-6 px-6 py-3 rounded-full text-sm font-semibold
                bg-rosa-dark text-white
                shadow-md hover:shadow-lg
                transition-all duration-300
              "
            >
              Agendar consulta →
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
