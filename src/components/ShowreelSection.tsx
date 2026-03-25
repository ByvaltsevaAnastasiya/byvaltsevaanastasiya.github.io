import { motion } from "framer-motion";

const ShowreelSection = () => {
  const showreelSrc = "/showreel-byvaltseva-anastasiya.mp4";

  return (
    <section id="showreel" className="py-24 md:py-32 section-gradient">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-accent text-sm tracking-[0.2em] uppercase mb-3">Showreel 2026</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Демонстрация работ</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Актёрская анимация, эмоции, тайминг и перформанс — всё, что делает персонажей живыми.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card p-2 md:p-3 rounded-2xl glow-accent">
            <div className="relative w-full rounded-xl overflow-hidden bg-secondary" style={{ paddingBottom: "56.25%" }}>
              <video
                className="absolute inset-0 w-full h-full object-cover"
                controls
                preload="metadata"
                playsInline
              >
                <source src={showreelSrc} type="video/mp4" />
                Ваш браузер не поддерживает встроенное видео.
              </video>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ShowreelSection;
