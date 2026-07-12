"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Play, Sparkles, Video as VideoIcon, ChevronLeft, ChevronRight, Grid, X, ArrowLeft } from "lucide-react";

// Placeholder videos - User will add real videos later
const videos = [
  {
    title: "Video 1",
    description: "Video description will be added here",
    src: "/videos/video1.mp4",
    category: "Video",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Video 2",
    description: "Video description will be added here",
    src: "/videos/video2.mp4",
    category: "Video",
    color: "from-pink-500 to-red-500",
  },
  {
    title: "Video 3",
    description: "Video description will be added here",
    src: "/videos/video3.mp4",
    category: "Video",
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Video 4",
    description: "Video description will be added here",
    src: "/videos/video4.mp4",
    category: "Video",
    color: "from-orange-500 to-yellow-500",
  },
];

export default function Videos() {
  const ref = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showAll, setShowAll] = useState(false);

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowAll(false);
    };

    if (showAll) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [showAll]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const closeModal = () => {
    setShowAll(false);
  };

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
      <motion.div
        className="absolute right-0 bottom-20 w-80 h-80 bg-pink-600 blob opacity-20"
        animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <Sparkles className="text-purple-400" size={18} />
            <span className="text-purple-300 font-medium">Video Portfolio</span>
            <Play className="text-pink-400" size={18} />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-2 text-white">MY</h2>
          <h3 className="text-5xl md:text-6xl font-bold gradient-text-glow mb-4">
            VIDEOS
          </h3>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Creative video content including reels, promos & promotional content
          </p>
        </motion.div>

        {/* Horizontal Scroll Section */}
        <div className="relative mb-8">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform -ml-4"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform -mr-4"
          >
            <ChevronRight size={24} />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 px-4 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {videos.map((video, index) => (
              <motion.div
                key={video.title}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 w-80 md:w-96 glass rounded-2xl overflow-hidden card-hover group"
              >
                {/* Video Placeholder */}
                <div className={`relative aspect-video bg-gradient-to-br ${video.color} flex items-center justify-center`}>
                  <div className="text-center text-white">
                    <VideoIcon size={48} className="mx-auto mb-2" />
                    <p className="font-bold">Video Coming Soon</p>
                  </div>
                  {/* Category Badge */}
                  <div className={`absolute top-3 left-3 px-3 py-1 rounded-full bg-black/50 text-white text-xs font-bold flex items-center gap-1`}>
                    <VideoIcon size={12} />
                    {video.category}
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h4 className="text-white font-bold text-lg mb-2">{video.title}</h4>
                  <p className="text-gray-400 text-sm line-clamp-2">{video.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* More Videos Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <button
            onClick={() => setShowAll(true)}
            className="btn-primary text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 mx-auto"
          >
            <Grid size={20} />
            View All Videos
          </button>
        </motion.div>

        {/* All Videos Grid Modal */}
        <AnimatePresence>
          {showAll && (
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
                    <span>Back to Portfolio</span>
                  </button>
                  <h3 className="text-2xl font-bold text-white">All Videos</h3>
                  <button
                    onClick={closeModal}
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white hover:scale-110 transition-transform"
                  >
                    <X size={24} />
                  </button>
                </div>
              </div>

              {/* Videos Grid */}
              <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {videos.map((video, index) => (
                    <motion.div
                      key={video.title}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="glass rounded-2xl overflow-hidden card-hover"
                    >
                      <div className={`relative aspect-video bg-gradient-to-br ${video.color} flex items-center justify-center`}>
                        <div className="text-center text-white">
                          <VideoIcon size={48} className="mx-auto mb-2" />
                          <p className="font-bold">Video Coming Soon</p>
                        </div>
                        <div className={`absolute top-3 left-3 px-3 py-1 rounded-full bg-black/50 text-white text-xs font-bold flex items-center gap-1`}>
                          <VideoIcon size={12} />
                          {video.category}
                        </div>
                      </div>
                      <div className="p-4">
                        <h4 className="text-white font-bold mb-1">{video.title}</h4>
                        <p className="text-gray-400 text-sm">{video.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Close Button at Bottom */}
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

        {/* Video Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-3 gap-4"
        >
          {[
            { value: "4", label: "Videos", color: "from-purple-500 to-pink-500" },
            { value: "HD", label: "Quality", color: "from-pink-500 to-red-500" },
            { value: "Pro", label: "Editing", color: "from-cyan-500 to-blue-500" },
          ].map((item) => (
            <div key={item.label} className="glass rounded-2xl p-4 text-center">
              <h4 className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                {item.value}
              </h4>
              <p className="text-gray-400 text-sm">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
