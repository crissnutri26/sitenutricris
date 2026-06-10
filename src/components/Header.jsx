import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { name: "Início", href: "#inicio" },
    { name: "Sobre", href: "#sobre" },
    { name: "Especialidades", href: "#especialidades" },
    { name: "Planos", href: "#planos" },
  ];

  const scrollTo = (href) => {
    setMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        className="fixed top-0 left-0 z-[60] h-[3px] transition-all duration-150"
        style={{ width: `${scrollProgress}%`, background: "#e8b4b8" }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "glass-header shadow-sm" : "bg-white/0"}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-20">
            <button
              onClick={() => scrollTo("#inicio")}
              className="flex flex-col"
            >
              <span className="font-primary text-3xl font-semibold text-black tracking-wide">
                Cristina <span className="text-rosa-light">Carvalho</span>
              </span>
              <span className="font-secondary text-sm tracking-[0.3em] uppercase text-cinza-dark">
                Nutricionista
              </span>
            </button>

            <nav className="hidden md:flex items-center gap-8">
              {links.map((l) => (
                <button
                  key={l.href}
                  onClick={() => scrollTo(l.href)}
                  className="relative text-sm font-medium tracking-wide transition-colors text-[#af2973] hover:opacity-70 before:absolute before:bottom-0 before:left-1/2 before:h-[2px] before:w-full before:bg-current before:-translate-x-1/2 before:scale-x-0 before:origin-center before:transition-transform before:duration-300 hover:before:scale-x-100"
                >
                  {l.name}
                </button>
              ))}

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
            </nav>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2"
            >
              {mobileOpen ? (
                <X size={24} className="text-cinza-dark" />
              ) : (
                <Menu size={24} className="text-cinza-dark" />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="md:hidden bg-[#FDFAF9]/75 backdrop-blur-xl border-t border-[#F1E4E6]overflow-hidden"
            >
              <div className="px-6 py-5 flex flex-col gap-3">
                {links.map((l) => (
                  <button
                    key={l.href}
                    onClick={() => scrollTo(l.href)}
                    className="relative text-left text-sm font-medium py-1.5 text-cinza-dark transition-colors duration-200 hover:text-rosa-dark"
                  >
                    {l.name}
                  </button>
                ))}

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
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
