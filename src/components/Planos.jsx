import { motion } from "framer-motion";
import { useRef } from "react";
import { useSectionTransition } from "../lib/animations";

const planos = [
  {
    nome: "Essencial",
    desc: "Ideal para quem está começando sua jornada de saúde.",
    preco: "R$ 200 reais",
    periodo: "mensal",
    features: [
      "Atendimento online ou presencial",
      "Avaliação nutricional completa",
      "Plano alimentar personalizado",
      "1 retorno incluso",
      "Suporte via WhatsApp",
    ],
    cta: "Começar agora",
  },
  {
    nome: "Transformação",
    desc: "Para resultados reais e duradouros com acompanhamento próximo.",
    preco: "R$ 500 reais",
    destaque: true,
    periodo: "trimestral",
    features: [
      "Plano alimentar atualizado mensalmente",
      "3 atendimentos",
      "Avaliações físicas mensais",
      "Suporte contínuo no WhatsApp",
      "Suplementação orientada",
    ],
    cta: "Quero transformar",
  },
  {
    nome: "Performance",
    desc: "Para quem busca evolução máxima e acompanhamento completo.",
    preco: "R$ 1000 reais",
    periodo: "semestral",
    features: [
      "Tudo do plano Transformação",
      "Consultas mensais",
      "Protocolo pré e pós-treino",
      "Suporte prioritário",
    ],
    cta: "Falar sobre plano",
  },
];

export default function Planos() {
  const ref = useRef(null);
  const { opacity, scale } = useSectionTransition(ref);

  return (
    <motion.section
      ref={ref}
      style={{ opacity, scale }}
      id="planos"
      className="relative py-20 md:py-28 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-rosa-dark via-rosa to-rosa-light" />

      <div className="absolute top-[-120px] left-[-80px] w-[420px] h-[420px] bg-[#FF4D8D]/30 rounded-full blur-[120px] opacity-40" />

      <div className="absolute bottom-[-140px] right-[-100px] w-[420px] h-[420px] bg-[#D946EF]/20 rounded-full blur-[140px] opacity-30" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,77,141,0.08),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14 md:mb-16">
          <span className="inline-block text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white/70 uppercase tracking-wide">
            Investimento
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-white leading-tight">
            Planos de{" "}
            <span className="italic text-rosa-light">acompanhamento</span>
          </h2>

          <p className="mt-4 text-white/70 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Escolha o plano ideal para sua rotina e objetivo, com acompanhamento
            nutricional personalizado e suporte próximo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {planos.map((plano, i) => (
            <motion.div
              key={plano.nome}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.015 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.08 }}
              className={`group relative rounded-3xl p-6 flex flex-col overflow-hidden will-change-transform transition-all duration-300 ${plano.destaque ? "bg-white/95 shadow-xl" : "bg-white/75 backdrop-blur-md"}`}
            >
              <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-rosa/40 transition-colors duration-300" />

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-rosa/10 to-verde/10" />

              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-lg font-semibold text-cinza-dark">
                  {plano.nome}
                </h3>

                <p className="text-sm text-cinza-dark mt-2">{plano.desc}</p>

                <div className="mt-6">
                  <span className="text-3xl font-bold text-rosa-dark">
                    {plano.preco}
                  </span>
                  <span className="text-sm text-cinza-dark ml-2">
                    / {plano.periodo}
                  </span>
                </div>

                <ul className="mt-6 space-y-2 text-sm text-cinza-dark flex-1">
                  {plano.features.map((feat, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-verde-dark mt-[2px]">✓</span>
                      {feat}
                    </li>
                  ))}
                </ul>

                <motion.a
                  whileTap={{ scale: 0.96 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  href="https://wa.me/5581981239275?text=Olá! Vim pelo site e gostaria de saber mais sobre os planos."
                  target="_blank"
                  className={`mt-6 text-center py-3 rounded-full text-sm font-semibold transition-all duration-300 ${plano.destaque ? "bg-verde text-white shadow-md hover:shadow-xl" : "bg-rosa/20 text-rosa-dark hover:bg-rosa-dark  hover:text-white"}`}
                >
                  {plano.cta}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
