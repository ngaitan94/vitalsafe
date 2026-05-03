"use client";

import { useCallback, useState } from "react";

type Props = {
  poster: string;
  videoSrc: string;
  videoAriaLabel: string;
};

/**
 * Safari (y otros) a veces no reproducen WebM: el <video> queda como capa opaca y tapa la foto de fondo.
 * Si hay error de carga/decodificación, quitamos el video y deja verse el gradiente + imagen CSS detrás.
 */
export function HeroBackdropVideo({ poster, videoSrc, videoAriaLabel }: Props) {
  const [removeVideo, setRemoveVideo] = useState(false);

  const onVideoError = useCallback(() => {
    setRemoveVideo(true);
  }, []);

  if (removeVideo) {
    return null;
  }

  return (
    <video
      className="hero-bg-video absolute inset-0 z-[1] h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
      aria-label={videoAriaLabel}
      onError={onVideoError}
    >
      <source src={videoSrc} type="video/webm" />
    </video>
  );
}
