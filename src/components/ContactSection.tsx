import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 section-gradient">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-lg mx-auto"
        >
          <p className="text-accent text-sm tracking-[0.2em] uppercase mb-3">Контакты</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Связаться со мной</h2>
          <p className="text-muted-foreground mb-10">
            Открыта для сотрудничества с анимационными студиями и продакшн-командами. Буду рада обсудить ваш проект!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="mailto:siyata35@gmail.com"
              className="glass-card-hover px-6 py-4 rounded-xl flex items-center gap-3 group"
            >
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span className="text-sm text-foreground">siyata35@gmail.com</span>
            </a>

            <a
              href="https://t.me/siyata_01"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card-hover px-6 py-4 rounded-xl flex items-center gap-3 group"
            >
              <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
              <span className="text-sm text-foreground">@siyata_01</span>
            </a>
          </div>

          <a
            href="mailto:siyata35@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-accent-foreground font-semibold transition-all duration-300 hover:scale-105 glow-accent"
          >
            Связаться со мной
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
