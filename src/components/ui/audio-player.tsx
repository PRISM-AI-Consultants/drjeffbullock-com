"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, Music, X } from "lucide-react";

const tracks = [
  { title: "A Prompt's Power", genre: "Conscious Hip-Hop", src: "/audio/a-prompts-power.mp3" },
  { title: "How to Prompt", genre: "Hip-Hop", src: "/audio/how-to-prompt.mp3" },
  { title: "Relentless Execution", genre: "Hip-Hop", src: "/audio/relentless-execution.mp3" },
  { title: "OK", genre: "Hip-Hop", src: "/audio/ok.mp3" },
  { title: "Patient Room", genre: "Cinematic Neoclassical", src: "/audio/patient-room.mp3" },
  { title: "Code Blue", genre: "Hip-Hop", src: "/audio/code-blue.mp3" },
  { title: "First Cut", genre: "Hip-Hop", src: "/audio/first-cut.mp3" },
  { title: "Spectrum Chain", genre: "Hip-Hop", src: "/audio/spectrum-chain.mp3" },
];

export function AudioPlayer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio();
    audioRef.current = audio;

    audio.addEventListener("timeupdate", () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    });

    audio.addEventListener("ended", () => {
      const next = (currentTrack + 1) % tracks.length;
      setCurrentTrack(next);
    });

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.src = tracks[currentTrack].src;
    if (isPlaying) {
      audio.play().catch(() => {});
    }
  }, [currentTrack]);

  function togglePlay() {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      if (!audio.src || audio.src === window.location.href) {
        audio.src = tracks[currentTrack].src;
      }
      audio.play().catch(() => {});
      setIsPlaying(true);
      if (!isOpen) setIsOpen(true);
    }
  }

  function nextTrack() {
    setCurrentTrack((prev) => (prev + 1) % tracks.length);
  }

  function prevTrack() {
    setCurrentTrack((prev) => (prev - 1 + tracks.length) % tracks.length);
  }

  function toggleMute() {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !audio.muted;
    setIsMuted(!isMuted);
  }

  function seekTo(e: React.MouseEvent<HTMLDivElement>) {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    audio.currentTime = pct * audio.duration;
  }

  // Floating trigger button (always visible)
  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full bg-accent text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
        aria-label="Open music player"
      >
        <Music className="h-4 w-4" />
        <span className="text-sm font-medium hidden sm:inline">Listen</span>
      </button>
    );
  }

  // Expanded player bar
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card/95 backdrop-blur-md shadow-2xl">
      <div className="max-w-screen-xl mx-auto px-4 py-3">
        {/* Progress bar */}
        <div
          className="w-full h-1 bg-muted rounded-full mb-3 cursor-pointer"
          onClick={seekTo}
        >
          <div
            className="h-full bg-accent rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center justify-between gap-4">
          {/* Track info */}
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <div className="flex-shrink-0 w-10 h-10 rounded-[var(--radius-md)] bg-accent/10 flex items-center justify-center">
              <Music className="h-5 w-5 text-accent" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold truncate">{tracks[currentTrack].title}</p>
              <p className="text-xs text-muted-foreground truncate">Dr. Jeff Bullock / {tracks[currentTrack].genre}</p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-1">
            <button onClick={prevTrack} className="p-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="Previous track">
              <SkipBack className="h-4 w-4" />
            </button>
            <button onClick={togglePlay} className="p-2.5 rounded-full bg-accent text-white hover:bg-accent/90 transition-colors" aria-label={isPlaying ? "Pause" : "Play"}>
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 ml-0.5" />}
            </button>
            <button onClick={nextTrack} className="p-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="Next track">
              <SkipForward className="h-4 w-4" />
            </button>
          </div>

          {/* Volume + Close */}
          <div className="flex items-center gap-1">
            <button onClick={toggleMute} className="p-2 text-muted-foreground hover:text-foreground transition-colors hidden sm:block" aria-label={isMuted ? "Unmute" : "Mute"}>
              {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </button>
            <button
              onClick={() => {
                setIsOpen(false);
                const audio = audioRef.current;
                if (audio) {
                  audio.pause();
                  setIsPlaying(false);
                }
              }}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close player"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
