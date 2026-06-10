import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Como funciona a primeira consulta?",
    a: "Na primeira consulta faço uma avaliação completa do seu histórico, rotina e objetivos. A partir disso, desenvolvo um plano alimentar totalmente personalizado para sua realidade.",
  },
  {
    q: "As consultas são presenciais ou online?",
    a: "Atendo nas duas modalidades: presencialmente em consultório e online, com o mesmo cuidado e acompanhamento próximo.",
  },
  {
    q: "Em quanto tempo vejo resultados?",
    a: "Os primeiros sinais costumam aparecer nas primeiras semanas, como mais energia e melhor disposição. Resultados físicos variam conforme o objetivo e consistência.",
  },
  {
    q: "Preciso fazer exames antes?",
    a: "Não é obrigatório. Caso tenha exames recentes, eles ajudam bastante na análise. Se necessário, indico os ideais para o seu caso.",
  },
  {
    q: "O plano alimentar é restritivo?",
    a: "Não. Trabalho com equilíbrio e adaptação à sua rotina, criando um plano sustentável e prazeroso de seguir.",
  },
];

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="mb-4"
    >
      <div
        className={`
          group rounded-2xl p-5 transition-all duration-300
          bg-white/10 backdrop-blur-md border border-white/10
          hover:border-rosa/40 hover:bg-white/15
        `}
      >
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between gap-4 text-left"
        >
          <span className="font-medium text-base md:text-lg text-white">
            {faq.q}
          </span>

          <motion.div
            animate={{ rotate: open ? 180 : 0, scale: open ? 1.1 : 1 }}
            transition={{ duration: 0.25 }}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-rosa/20 text-rosa-light group-hover:bg-rosa-dark group-hover:text-white transition-all duration-300"
          >
            {open ? <Minus size={16} /> : <Plus size={16} />}
          </motion.div>
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <p className="mt-4 text-sm md:text-base text-white/70 leading-relaxed pr-2">
                {faq.a}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Faq() {
  return (
    <motion.section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-rosa-dark to-rosa" />

      <div className="absolute top-[-120px] left-[-80px] w-[400px] h-[400px] bg-[#FF4D8D]/30 rounded-full blur-[120px] opacity-40" />
      <div className="absolute bottom-[-120px] right-[-80px] w-[400px] h-[400px] bg-[#D946EF]/20 rounded-full blur-[120px] opacity-30" />

      <div className="relative z-10 max-w-3xl md:max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white/70 uppercase tracking-wide">
            Dúvidas
          </span>

          <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-white">
            Perguntas frequentes
          </h2>

          <p className="mt-3 text-white/70 max-w-lg mx-auto">
            Algumas respostas para te deixar mais segura antes de começar.
          </p>
        </div>

        <div>
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>

        <div className="text-center mt-14">
          <p className="text-sm text-white/60 mb-4">Ainda tem alguma dúvida?</p>

          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href="https://wa.me/5581981239275?text=Olá! Vim pelo site e gostaria de tirar uma dúvida"
            target="_blank"
            className="
              inline-flex items-center gap-2 px-6 py-3 rounded-full
              text-sm font-semibold
              bg-rosa-dark text-white
              shadow-md hover:shadow-xl
              transition-all duration-300
            "
          >
            Falar no WhatsApp
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
}
