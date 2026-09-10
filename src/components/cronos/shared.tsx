import { motion } from "framer-motion";
import type { ReactNode } from "react";

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative mx-auto w-full max-w-7xl px-6 py-16 md:py-24 lg:py-32 ${className}`}>
      {children}
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      className="mb-16 max-w-3xl"
    >
      <p className="text-display text-xs uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
      <h2 className="text-display mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
        {title}
      </h2>
      {description && <p className="mt-6 text-lg text-white/65">{description}</p>}
    </motion.div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <div className="relative overflow-hidden piano-bg pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <motion.div
        aria-hidden
        className="absolute -top-20 right-[-10%] h-[500px] w-[500px] rounded-full bg-primary/20 blur-[140px]"
        animate={{ x: [0, 60, -20, 0], y: [0, 40, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-display text-xs uppercase tracking-[0.3em] text-primary"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-display mx-auto mt-6 max-w-4xl text-3xl font-extrabold leading-[1.1] text-white break-words sm:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-8 max-w-2xl text-lg text-white/70"
          >
            {description}
          </motion.p>
        )}
      </div>
    </div>
  );
}
