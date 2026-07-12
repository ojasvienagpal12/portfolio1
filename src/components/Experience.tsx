"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, ArrowRight } from "lucide-react";

const experiences = [
  {
    period: "Aug 2025 - Present",
    company: "The Tap Social",
    position: "Social Media Manager",
    color: "from-purple-500 to-pink-500",
    highlights: [
      "Managing 20+ business accounts",
      "Content strategy & creative designing",
      "AI content creation & Meta Ads",
      "Performance analytics & reporting",
    ],
  },
  {
    period: "Feb 2025 - Mar 2025",
    company: "MERI Institute",
    position: "Digital Marketing Intern",
    color: "from-cyan-500 to-blue-500",
    highlights: [
      "Keyword research & SEO optimization",
      "On-Page & Off-Page SEO",
      "Google Analytics & Search Console",
      "Website content optimization",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0f0f1a 0%, #1a1a2e 50%, #0f0f1a 100%)" }}
      ref={ref}
    >
      {/* Background */}
      <div className="absolute inset-0 dots-pattern opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-2 text-white">PROFESSIONAL</h2>
          <h3 className="text-5xl md:text-6xl font-bold gradient-text-glow mb-4">
            EXPERIENCE
          </h3>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Building practical experience through real-world digital marketing projects
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass rounded-2xl p-6 md:p-8 card-hover"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${exp.color} flex items-center justify-center flex-shrink-0`}>
                  <Briefcase className="text-white" size={28} />
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                    <div>
                      <h4 className="text-2xl font-bold text-white">{exp.company}</h4>
                      <p className={`font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                        {exp.position}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar size={16} />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {exp.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-300">
                        <ArrowRight size={14} className="text-purple-400 flex-shrink-0" />
                        <span className="text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
