"use client";

import { useRef, useState, useEffect } from "react";
import { useCollectModal } from "@/hooks/useCollectModal";
import Link from "next/link";
import { tracks } from '@/lib/tracks'; // so we can find the track by title
import { useCartStore } from '@/lib/store/cart';

interface MusicCardProps {
  id: string;
  title: string;
  mood: string;
  audioFile: string;
  gradient: string;
}

export default function MusicCard({
  id,
  title,
  mood,
  audioFile,
  gradient,
}: MusicCardProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  //const { open } = useCollectModal();
  const { addToCart } = useCartStore(); 

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const updateProgress = () => {
      const pct = (audio.currentTime / audio.duration) * 100;
      setProgress(pct || 0);
    };
    audio.addEventListener("timeupdate", updateProgress);
    return () => audio.removeEventListener("timeupdate", updateProgress);
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    isPlaying ? audio.pause() : audio.play();
    setIsPlaying(!isPlaying);
  };

  const AddTrackToCart = (title) => {
      const track = tracks.find(t => t.title === title); 
      if (track) {
        addToCart(track);
      }
  };
  
  return (
    <div
      id={id}
      data-track
      className="relative rounded-xl overflow-hidden text-white shadow-xl transition-all transform hover:-translate-y-1 hover:scale-[1.01] hover:shadow-2xl"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      <div className="relative z-20 p-6 flex flex-col justify-between h-full">
        {/* Clickable link part */}
        <Link href={`/music/${id}/`} className="block">
          <h3 className="text-2xl font-bold mb-1">{title}</h3>
          <p className="text-sm italic text-white/80 mb-3">{mood}</p>

          <div className="flex gap-1 mb-4">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="w-1 rounded-sm bg-white animate-pulse"
                style={{
                  height: `${(Math.sin(i) + 1.5) * 10}px`,
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </div>
        </Link>

        <audio ref={audioRef} src={`/audio/${audioFile}`} preload="metadata" />

        <div className="flex items-center gap-4 mb-2">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              togglePlay();
            }}
            className="bg-white text-black px-3 py-1 rounded-full text-sm font-bold hover:bg-gray-300"
          >
            {isPlaying ? "⏸ Pause" : "▶️ Play"}
          </button>

          <input
            type="range"
            min={0}
            max={100}
            value={progress}
            onClick={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (audioRef.current && audioRef.current.duration) {
                audioRef.current.currentTime =
                  (value / 100) * audioRef.current.duration;
              }
              setProgress(value);
            }}
            className="w-full accent-fuchsia-300"
          />
        </div>

        <div className="flex items-center justify-between text-sm text-white/70 mb-4">
          <label>🔊</label>
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onClick={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            onChange={(e) => {
              const value = Number(e.target.value);
              setVolume(value);
              if (audioRef.current) audioRef.current.volume = value;
            }}
            className="w-full accent-pink-400 ml-2"
          />
        </div>

        <div className="text-right">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              AddTrackToCart(title);
            }}
            className="bg-black border border-white px-4 py-1 rounded-full text-sm text-white hover:bg-white hover:text-black transition"
          >
            💰 Collect
          </button>
        </div>
      </div>
    </div>
  );
}