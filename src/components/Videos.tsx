"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Play, Sparkles, MapPin, Utensils, Bot } from "lucide-react";

const videos = [
  {
    title: "AI Video - Life Care",
    description: "AI-powered promotional video showcasing healthcare services",
    src: "/videos/lifecare o bhai itni safai Ai Video.mp4",
    category: "AI Video",
    icon: Bot,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Jind City Airport",
    description: "Cinematic video of Jind city and airport views",
    src: "/videos/jind city jind airport.mp4",
    category: "City Video",
    icon: MapPin,
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Jind City Rainfall",
    description: "Beautiful rainfall moments captured in Jind city",
    src: "/videos/Jind city Rainfall(1).mp4",
    category: "City Video",
    icon: MapPin,
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Jindal Chips Store",
    description: "Promotional video for local food business",
    src: "/videos/jindal chips store namste mm hu.mp4",
    category: "Food & Restaurant",
    icon: Utensils,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Mango Promo Video",
    description: "Creative mango promotional content",
    src: "/videos/MANGO VIDEO.mp4",
    category: "Food & Restaurant",
    icon: Utensils,
    color: "from-yellow-500 to-orange-500",
  },
];

export default function Videos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="videos"
      className="py-24 relative overflow-hidden gradient-bg"
      ref={ref}
    >
      {/* Background */}
      <motion.div
        className="absolute left-0 top-20 w-96 h-96 bg-purple-600 blob opacity-20"
        animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <Sparkles className="text-purple-400" size={18} />
            <span className="text-purple-300 font-medium">Video Portfolio</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-2 text-white">MY</h2>
          <h3 className="text-5xl md:text-6xl font-bold gradient-text-glow mb-4">
            VIDEOS
          </h3>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Creative video content including AI-generated videos, city coverage & promotional content
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl overflow-hidden card-hover group"
            >
              {/* Video */}
              <div className="relative aspect-video bg-black">
                <video
                  src={video.src}
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                  playsInline
                />
                {/* Play overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${video.color} flex items-center justify-center`}>
                    <Play className="text-white ml-1" size={28} fill="white" />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${video.color} flex items-center justify-center`}>
                    <video.icon className="text-white" size={16} />
                  </div>
                  <span className={`text-sm font-medium bg-gradient-to-r ${video.color} bg-clip-text text-transparent`}>
                    {video.category}
                  </span>
                </div>
                <h4 className="text-white font-bold text-lg mb-2">{video.title}</h4>
                <p className="text-gray-400 text-sm">{video.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
