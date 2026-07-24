"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Palette,
  Share2,
  Video,
  FileText,
  Search,
  Bot,
  BarChart3,
  MapPin,
  Target,
  X,
  ArrowLeft,
  ExternalLink,
  AtSign,
} from "lucide-react";

// Clients data for Social Media section
const clients = [
  {
    name: "JIET Jind",
    industry: "Education",
    color: "from-purple-500 to-pink-500",
    instagram: "https://www.instagram.com/jiet_jind",
    handle: "@jiet_jind"
  },
  {
    name: "Astro Vastu Kunj Bihari",
    industry: "Astrology & Vastu",
    color: "from-pink-500 to-red-500",
    instagram: "https://www.instagram.com/astro_vastu_kunjbihari",
    handle: "@astro_vastu_kunjbihari"
  },
  {
    name: "The Tap Studio",
    industry: "Digital Marketing",
    color: "from-red-500 to-orange-500",
    instagram: "https://www.instagram.com/thetap_studio",
    handle: "@thetap_studio"
  },
  {
    name: "Rajmahal Jind",
    industry: "Events & Banquet",
    color: "from-orange-500 to-yellow-500",
    instagram: "https://www.instagram.com/rajmahal_jind",
    handle: "@rajmahal_jind"
  },
  {
    name: "Life Care ENT",
    industry: "Healthcare",
    color: "from-green-500 to-teal-500",
    instagram: "https://www.instagram.com/lifecareent_jind",
    handle: "@lifecareent_jind"
  },
  {
    name: "Umrao Inn",
    industry: "Hotel & Restaurant",
    color: "from-teal-500 to-cyan-500",
    instagram: "https://www.instagram.com/umrao_inn",
    handle: "@umrao_inn"
  },
  {
    name: "JP Gold Jind",
    industry: "Jewellery",
    color: "from-yellow-500 to-amber-500",
    instagram: "https://www.instagram.com/jp_gold_jind",
    handle: "@jp_gold_jind"
  },
  {
    name: "Hunger Hub",
    industry: "Restaurant",
    color: "from-cyan-500 to-blue-500",
    instagram: null,
    handle: null
  },
];

// Creative posters
const posters = [
  { id: 1, title: "JIET Jind", src: "/posters/jiet1.jpeg", color: "from-purple-500 to-pink-500" },
  { id: 2, title: "JIET Jind", src: "/posters/jiet2.jpeg", color: "from-pink-500 to-red-500" },
  { id: 3, title: "JIET Jind", src: "/posters/jiet3.jpeg", color: "from-red-500 to-orange-500" },
  { id: 4, title: "JIET Jind", src: "/posters/jiet4.jpeg", color: "from-orange-500 to-yellow-500" },
  { id: 5, title: "Rockland", src: "/posters/Rockland1.jpeg", color: "from-green-500 to-teal-500" },
  { id: 6, title: "Rockland", src: "/posters/Rockland2.jpeg", color: "from-teal-500 to-cyan-500" },
  { id: 7, title: "Rockland", src: "/posters/Rockland3.jpeg", color: "from-cyan-500 to-blue-500" },
  { id: 8, title: "Rockland", src: "/posters/Rockland4.jpeg", color: "from-blue-500 to-indigo-500" },
];

// Placeholder scripts - User will add real scripts later
const scripts = [
  { id: 1, title: "Script 1", content: "Script content will be added here...", color: "from-purple-500 to-pink-500" },
  { id: 2, title: "Script 2", content: "Script content will be added here...", color: "from-pink-500 to-red-500" },
  { id: 3, title: "Script 3", content: "Script content will be added here...", color: "from-orange-500 to-yellow-500" },
];

const skills = [
  {
    icon: Palette,
    name: "Creative Posters",
    highlight: "500+ Marketing Creatives",
    color: "from-purple-500 to-pink-500",
    clickable: true,
    action: "posters",
  },
  {
    icon: Share2,
    name: "Social Media",
    highlight: "20+ Brands Managed",
    color: "from-pink-500 to-red-500",
    clickable: true,
    action: "social",
  },
  {
    icon: Video,
    name: "Video Editing",
    highlight: "Reels & Promos",
    color: "from-red-500 to-orange-500",
    clickable: true,
    action: "videos",
  },
  {
    icon: FileText,
    name: "Content Strategy",
    highlight: "Scripts & Calendars",
    color: "from-orange-500 to-yellow-500",
    clickable: true,
    action: "content",
  },
  {
    icon: Search,
    name: "SEO Optimization",
    highlight: "On-Page & Off-Page",
    color: "from-green-500 to-teal-500",
    clickable: false,
    action: null,
  },
  {
    icon: Bot,
    name: "AI Marketing",
    highlight: "AI Content Creation",
    color: "from-teal-500 to-cyan-500",
    clickable: false,
    action: null,
  },
  {
    icon: BarChart3,
    name: "Analytics",
    highlight: "Google & Meta Insights",
    color: "from-cyan-500 to-blue-500",
    clickable: false,
    action: null,
  },
  {
    icon: MapPin,
    name: "Google Business",
    highlight: "Local SEO",
    color: "from-blue-500 to-indigo-500",
    clickable: false,
    action: null,
  },
  {
    icon: Target,
    name: "Meta Ads",
    highlight: "Campaign Management",
    color: "from-indigo-500 to-purple-500",
    clickable: false,
    action: null,
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeModal, setActiveModal] = useState<string | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveModal(null);
    };

    if (activeModal) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [activeModal]);

  const handleSkillClick = (skill: typeof skills[0]) => {
    if (skill.clickable && skill.action) {
      if (skill.action === "videos") {
        // Scroll to videos section
        document.getElementById("videos")?.scrollIntoView({ behavior: "smooth" });
      } else {
        setActiveModal(skill.action);
      }
    }
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden gradient-bg" ref={ref}>
      {/* Background */}
      <motion.div
        className="absolute right-0 top-20 w-96 h-96 bg-pink-600 blob opacity-20"
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-2 text-white">CREATIVE</h2>
          <h3 className="text-5xl md:text-6xl font-bold gradient-text-glow mb-4">
            SKILLS
          </h3>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto italic">
            &quot;Good content isn&apos;t just seen, it&apos;s saved, shared, and remembered.&quot;
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => handleSkillClick(skill)}
              className={`glass rounded-2xl p-6 card-hover group ${skill.clickable ? 'cursor-pointer' : ''}`}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <skill.icon className="text-white" size={28} />
              </div>
              <h4 className="font-bold text-white text-lg mb-1">{skill.name}</h4>
              <p className={`text-sm bg-gradient-to-r ${skill.color} bg-clip-text text-transparent font-medium`}>
                {skill.highlight}
              </p>
              {skill.clickable && (
                <p className="text-xs text-gray-500 mt-2">Click to view</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Posters Modal */}
      <AnimatePresence>
        {activeModal === "posters" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg overflow-y-auto"
            onClick={(e) => {
              if (e.target === e.currentTarget) closeModal();
            }}
          >
            {/* Fixed Header */}
            <div className="sticky top-0 z-10 bg-black/80 backdrop-blur-md border-b border-white/10">
              <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <button
                  onClick={closeModal}
                  className="flex items-center gap-2 text-white hover:text-purple-400 transition-colors font-semibold"
                >
                  <ArrowLeft size={24} />
                  <span>Back</span>
                </button>
                <h3 className="text-2xl font-bold gradient-text-glow">Creative Posters</h3>
                <button
                  onClick={closeModal}
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white hover:scale-110 transition-transform"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Posters Grid */}
            <div className="max-w-7xl mx-auto px-4 py-8">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {posters.map((poster, index) => (
                  <motion.div
                    key={poster.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="glass rounded-2xl overflow-hidden card-hover"
                  >
                    <img
                      src={poster.src}
                      alt={poster.title}
                      className="w-full h-auto object-cover"
                    />
                    <div className="p-3 text-center">
                      <p className="font-bold text-white">{poster.title}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Close Button */}
              <div className="text-center mt-10">
                <button
                  onClick={closeModal}
                  className="btn-outline text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 mx-auto"
                >
                  <ArrowLeft size={20} />
                  Back to Portfolio
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Social Media Modal */}
      <AnimatePresence>
        {activeModal === "social" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg overflow-y-auto"
            onClick={(e) => {
              if (e.target === e.currentTarget) closeModal();
            }}
          >
            {/* Fixed Header */}
            <div className="sticky top-0 z-10 bg-black/80 backdrop-blur-md border-b border-white/10">
              <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <button
                  onClick={closeModal}
                  className="flex items-center gap-2 text-white hover:text-purple-400 transition-colors font-semibold"
                >
                  <ArrowLeft size={24} />
                  <span>Back</span>
                </button>
                <h3 className="text-2xl font-bold gradient-text-glow">Clients&apos; Social Media</h3>
                <button
                  onClick={closeModal}
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white hover:scale-110 transition-transform"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Clients Grid */}
            <div className="max-w-7xl mx-auto px-4 py-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {clients.map((client, index) => (
                  <motion.div
                    key={client.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {client.instagram ? (
                      <a
                        href={client.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block glass rounded-2xl p-6 card-hover group"
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${client.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                            <AtSign className="text-white" size={28} />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-white text-lg">{client.name}</h4>
                            <p className={`text-sm bg-gradient-to-r ${client.color} bg-clip-text text-transparent`}>
                              {client.industry}
                            </p>
                          </div>
                          <ExternalLink className="text-gray-500 group-hover:text-white transition-colors" size={20} />
                        </div>
                        <div className="flex items-center gap-2 text-purple-400">
                          <AtSign size={16} />
                          <span className="font-medium">{client.handle}</span>
                        </div>
                      </a>
                    ) : (
                      <div className="glass rounded-2xl p-6 card-hover group">
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${client.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                            <AtSign className="text-white" size={28} />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-white text-lg">{client.name}</h4>
                            <p className={`text-sm bg-gradient-to-r ${client.color} bg-clip-text text-transparent`}>
                              {client.industry}
                            </p>
                          </div>
                        </div>
                        <p className="text-gray-500 text-sm">No Instagram available</p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Close Button */}
              <div className="text-center mt-10">
                <button
                  onClick={closeModal}
                  className="btn-outline text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 mx-auto"
                >
                  <ArrowLeft size={20} />
                  Back to Portfolio
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content/Scripts Modal */}
      <AnimatePresence>
        {activeModal === "content" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg overflow-y-auto"
            onClick={(e) => {
              if (e.target === e.currentTarget) closeModal();
            }}
          >
            {/* Fixed Header */}
            <div className="sticky top-0 z-10 bg-black/80 backdrop-blur-md border-b border-white/10">
              <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <button
                  onClick={closeModal}
                  className="flex items-center gap-2 text-white hover:text-purple-400 transition-colors font-semibold"
                >
                  <ArrowLeft size={24} />
                  <span>Back</span>
                </button>
                <h3 className="text-2xl font-bold gradient-text-glow">Content & Scripts</h3>
                <button
                  onClick={closeModal}
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white hover:scale-110 transition-transform"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Scripts Grid */}
            <div className="max-w-7xl mx-auto px-4 py-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {scripts.map((script, index) => (
                  <motion.div
                    key={script.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="glass rounded-2xl p-6 card-hover"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${script.color} flex items-center justify-center mb-4`}>
                      <FileText className="text-white" size={24} />
                    </div>
                    <h4 className="font-bold text-white text-lg mb-2">{script.title}</h4>
                    <p className="text-gray-400 text-sm">{script.content}</p>
                  </motion.div>
                ))}
              </div>

              {/* Close Button */}
              <div className="text-center mt-10">
                <button
                  onClick={closeModal}
                  className="btn-outline text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 mx-auto"
                >
                  <ArrowLeft size={20} />
                  Back to Portfolio
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
