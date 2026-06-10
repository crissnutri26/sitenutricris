import { Flame, Dumbbell, Scale, Leaf, Activity } from "lucide-react";
import { motion } from "framer-motion";
import { staggerItem, staggerContainer, sectionSoft } from "../lib/animations";

const especialidades = [
  {
    title: "Perda de Gordura",
    desc: "Redução de gordura com preservação de massa magra, sem extremismos.",
    icon: Flame,
    img: "/perda-gordura.webp",
  },
  {
    title: "Ganho de Massa",
    desc: "Estratégias nutricionais alinhadas ao treino para hipertrofia eficiente.",
    icon: Dumbbell,
    img: "/ganho-muscular.webp",
  },
  {
    title: "Recomposição Corporal",
    desc: "Perder gordura e ganhar músculo ao mesmo tempo, com método.",
    icon: Scale,
    img: "/recomposicao.webp",
  },
  {
    title: "Nutrição Funcional",
    desc: "Equilíbrio do organismo através de alimentos estratégicos.",
    icon: Leaf,
    img: "/nutricao-funcional.webp",
  },
  {
    title: "Saúde Hormonal",
    desc: "Suporte nutricional para equilíbrio hormonal e bem-estar.",
    icon: Activity,
    img: "/saude-hormonal.webp",
  },
];

export default function Especialidades() {
  return (
    <motion.section
      variants={sectionSoft}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      id="especialidades"
      className="relative py-20 md:py-28 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFF1F5] via-[#FFE4EC] to-[#FFD9E8]" />

      <div className="absolute top-[-80px] right-[-60px] w-[300px] h-[300px] bg-rosa/20 blur-[120px] rounded-full opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 text-center">
        <span className="inline-block text-xs px-3 py-1 rounded-full bg-white/70 text-rosa-dark uppercase tracking-wide">
          O que eu faço
        </span>

        <h2 className="mt-4 text-3xl md:text-4xl xl:text-5xl font-semibold text-rosa-dark leading-tight">
          Especialidades que <em className="text-rosa italic">transformam</em>
        </h2>

        <p className="mt-4 text-cinza max-w-xl mx-auto">
          Cada objetivo exige uma estratégia única. Aqui você encontra caminhos
          personalizados para evoluir com consistência e equilíbrio.
        </p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {especialidades.map((itemData, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="group relative rounded-2xl overflow-hidden bg-white/70 backdrop-blur-md border border-white/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:shadow-rosa-dark/30 flex flex-col"
            >
              <div className="relative overflow-hidden h-36 sm:h-40 md:h-52 lg:h-60">
                <img
                  src={itemData.img}
                  alt={itemData.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-lg bg-rosa/60 group-hover:bg-rosa/40 transition">
                    <itemData.icon size={18} className="text-rosa-dark" />
                  </div>

                  <h3 className="text-base font-semibold text-rosa-dark">
                    {itemData.title}
                  </h3>
                </div>

                <p className="text-sm text-cinza leading-relaxed">
                  {itemData.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
