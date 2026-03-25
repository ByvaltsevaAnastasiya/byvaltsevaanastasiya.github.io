import { motion } from "framer-motion";

const skills = [
  "Autodesk Maya",
  "3D Animation",
  "Character Animation",
  "Acting Animation",
  "Blender",
  "ShotGrid / Jira",
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-accent text-sm tracking-[0.2em] uppercase mb-3">Навыки</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Инструменты и экспертиза</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Профессиональные инструменты для создания высококачественной персонажной анимации в продакшн-пайплайне.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-2xl mx-auto">
          {skills.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card-hover px-6 py-3 rounded-full cursor-default"
            >
              <span className="text-sm md:text-base font-medium text-foreground">{skill}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
