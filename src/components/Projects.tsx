"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Users, Eye, Camera, ExternalLink } from "lucide-react";

const clients = [
  {
    name: "JIET Jind",
    industry: "Education",
    color: "from-purple-500 to-pink-500",
    instagram: "https://www.instagram.com/jiet_jind"
  },
  {
    name: "Astro Vastu Kunj Bihari",
    industry: "Astrology & Vastu",
    color: "from-pink-500 to-red-500",
    instagram: "https://www.instagram.com/astro_vastu_kunjbihari"
  },
  {
    name: "The Tap Studio",
    industry: "Digital Marketing",
    color: "from-red-500 to-orange-500",
    instagram: "https://www.instagram.com/thetap_studio"
  },
  {
    name: "Rajmahal Jind",
    industry: "Events & Banquet",
    color: "from-orange-500 to-yellow-500",
    instagram: "https://www.instagram.com/rajmahal_jind"
  },
  {
    name: "Life Care ENT",
    industry: "Healthcare",
    color: "from-green-500 to-teal-500",
    instagram: "https://www.instagram.com/lifecareent_jind"
  },
  {
    name: "Umrao Inn",
    industry: "Hotel & Restaurant",
    color: "from-teal-500 to-cyan-500",
    instagram: "https://www.instagram.com/umrao_inn"
  },
  {
    name: "JP Gold Jind",
    industry: "Jewellery",
    color: "from-yellow-500 to-amber-500",
    instagram: "https://www.instagram.com/jp_gold_jind"
  },
  {
    name: "Hunger Hub",
    industry: "Restaurant",
    color: "from-cyan-500 to-blue-500",
    instagram: null
  },
];

const stats = [
  { icon: Users, value: "2402", newValue: "2457", label: "Followers Growth", color: "from-purple-500 to-pink-500" },
  { icon: Eye, value: "72.8K", newValue: "101.3K", label: "Views Growth", color: "from-cyan-500 to-blue-500" },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0f0f1a 0%, #1a1a2e 50%, #0f0f1a 100%)" }}
      ref={ref}
    >
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-2 text-white">MY</h2>
          <h3 className="text-5xl md:text-6xl font-bold gradient-text-glow mb-4">
            PROJECTS
          </h3>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Building strong digital presence through strategy, creativity & consistency
          </p>
        </motion.div>

        {/* Stats Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-3xl p-8 mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center">
              <TrendingUp className="text-white" size={24} />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-white">1 Month Growth</h4>
              <p className="text-gray-400">Galaxy Food Planet</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="glass rounded-2xl p-6"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                    <stat.icon className="text-white" size={28} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 line-through">{stat.value}</span>
                      <span className="text-green-400">→</span>
                      <span className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                        {stat.newValue}
                      </span>
                    </div>
                    <p className="text-gray-400">{stat.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Clients Grid with Instagram Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h4 className="text-2xl font-bold mb-8 text-center text-white flex items-center justify-center gap-3">
            <Camera className="text-pink-500" size={28} />
            Brands I&apos;ve Worked With
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
              >
                {client.instagram ? (
                  <a
                    href={client.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block glass rounded-xl p-4 card-hover group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${client.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <Camera className="text-white" size={20} />
                      </div>
                      <ExternalLink className="text-gray-500 group-hover:text-white transition-colors" size={16} />
                    </div>
                    <h5 className="font-bold text-white">{client.name}</h5>
                    <p className={`text-sm bg-gradient-to-r ${client.color} bg-clip-text text-transparent`}>
                      {client.industry}
                    </p>
                  </a>
                ) : (
                  <div className="glass rounded-xl p-4 card-hover group">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${client.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                      <Camera className="text-white" size={20} />
                    </div>
                    <h5 className="font-bold text-white">{client.name}</h5>
                    <p className={`text-sm bg-gradient-to-r ${client.color} bg-clip-text text-transparent`}>
                      {client.industry}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-3 gap-4 md:gap-8"
        >
          {[
            { value: "500+", label: "Creatives", color: "from-purple-500 to-pink-500" },
            { value: "20+", label: "Brands", color: "from-pink-500 to-red-500" },
            { value: "A+", label: "Certified", color: "from-cyan-500 to-blue-500" },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              className="glass rounded-2xl p-6 text-center card-hover"
            >
              <h4 className={`text-4xl md:text-5xl font-black bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-2`}>
                {item.value}
              </h4>
              <p className="text-gray-400">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
