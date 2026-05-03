"use client";

import { useCallback, useState } from "react";

type Props = {
  poster: string;
  videoSrc: string;
  videoAriaLabel: string;
};

/**
 * Si el video falla al cargar o decodificar, se oculta para no tapar la imagen de fondo (poster + capa z-0).
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
      <source src={videoSrc} type="video/mp4" />
    </video>
  );
}
