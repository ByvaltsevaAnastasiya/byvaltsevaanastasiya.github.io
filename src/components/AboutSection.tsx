import { motion } from "framer-motion";

const stats = [
  { value: "8+", label: "лет опыта" },
  { value: "Full-length", label: "& Series" },
  { value: "Character", label: "Acting" },
  { value: "Remote", label: "Pipeline" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 section-gradient">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-accent text-sm tracking-[0.2em] uppercase mb-3">Обо мне</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold">Анастасия Бывальцева</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3"
          >
            <div className="glass-card p-6 md:p-8 rounded-2xl">
              <p className="text-foreground/90 leading-relaxed mb-4">
                Профессиональный 3D-аниматор с 8-летним опытом создания анимации для полнометражных фильмов и сериалов. Специализируюсь на персонажной анимации, передаче эмоций и характера.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Работала в условиях строгих дедлайнов, создавая до 10–20 секунд анимации в день. Имею опыт удалённой работы и взаимодействия с командами через ShotGrid, Jira и другие системы.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 grid grid-cols-2 gap-3"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="glass-card p-4 rounded-xl text-center"
              >
                <p className="text-accent font-display font-bold text-lg">{stat.value}</p>
                <p className="text-muted-foreground text-xs mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
