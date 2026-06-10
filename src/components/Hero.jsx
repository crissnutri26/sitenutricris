import { motion, useScroll, useTransform } from "framer-motion";

const stats = [
  { value: "6 anos", label: "deExperiência" },
  { value: "98%", label: "Taxa de satisfação" },
  { value: "+500", label: "Pacientes" },
];

export default function Hero() {
  const { scrollY } = useScroll();
  const yImage = useTransform(scrollY, [0, 500], [0, 80]);
  const yContent = useTransform(scrollY, [0, 500], [0, -40]);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative flex items-center min-h-[100svh] overflow-hidden bg-[#FDFAF9]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-rosa-dark via-rosa to-rosa-light" />

      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 20% 30%, rgba(232,180,184,0.4), transparent 40%)",
            "radial-gradient(circle at 80% 70%, rgba(139,175,138,0.4), transparent 40%)",
            "radial-gradient(circle at 30% 80%, rgba(232,180,184,0.35), transparent 40%)",
            "radial-gradient(circle at 20% 30%, rgba(232,180,184,0.4), transparent 40%)",
          ],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
      />

      <motion.div
        animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-rosa/20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ x: [0, -60, 0], y: [0, 40, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-verde/20 rounded-full blur-3xl z-0"
      />

      <motion.div
        style={{ y: yImage }}
        className="absolute inset-0 md:hidden z-0"
      >
        <img
          src="/pessoas.webp"
          alt="Pacientes"
          className="w-full h-full object-cover object-[50%_20%] opacity-20 transition-all duration-700"
        />
      </motion.div>

      <motion.div
        style={{ y: yImage }}
        className="hidden md:block absolute top-0 right-0 h-full w-[60%] z-10"
      >
        <img
          src="/pessoas.webp"
          alt="Pacientes"
          className="w-full h-full object-[65%_20%] transition-all duration-700"
        />
      </motion.div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-10 w-full h-full flex items-center">
        <div className="grid md:grid-cols-2 items-center">
          <motion.div
            style={{ y: yContent }}
            className="space-y-5 relative z-20 max-w-lg text-center md:text-left mx-auto md:mx-0"
          >
            <div className="inline-flex items-center gap-2 bg-rosa-light rounded-full px-4 py-1.5 mx-auto md:mx-0">
              <span className="w-2 h-2 rounded-full bg-verde-dark animate-pulse" />
              <span className="text-xs font-semibold tracking-wider text-verde-dark uppercase">
                Nutricionista Clínica
              </span>
            </div>

            <h1 className="font-display text-3xl md:text-5xl xl:text-[3.4rem] font-semibold leading-tight text-cinza-dark">
              Sua saúde,{" "}
              <span className="italic text-verde-dark">com ciência</span> e
              equilíbrio.
            </h1>

            <p className="text-base text-branco max-w-md mx-auto md:mx-0">
              Nutrição personalizada para quem busca resultados reais e
              duradouros.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2 items-center md:items-start">
              <motion.a
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.03 }}
                href="https://wa.me/5581981239275?text=Olá! Vim pelo site e Gostaria de agendar uma consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 md:px-6 md:py-3 rounded-full text-sm font-semibold bg-verde text-white shadow-md hover:shadow-lg transition-all mx-auto md:mx-0"
              >
                Agendar Consulta
              </motion.a>
            </div>

            <div className="flex gap-4 md:gap-6 pt-4 justify-center md:justify-start flex-wrap">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center bg-white/90 rounded-lg px-4 py-3 md:px-5 md:py-4 shadow-sm text-center border-verde-light border"
                >
                  <p className="font-display text-xl font-bold text-rosa-dark">
                    {s.value}
                  </p>
                  <p className="text-xs text-cinza-dark">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="hidden md:block" />
        </div>
      </div>
    </section>
  );
}
