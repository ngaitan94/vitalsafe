/** Imágenes de archivo (Unsplash). Uso editorial en sitio; reemplazar por fotos propias cuando existan. */
const q = "w=1600&q=82&auto=format&fit=crop";

export const photos = {
  hero: `https://images.unsplash.com/photo-1522071820081-009f0129c71c?${q}`,
  heroAlt: "Personas en reunión revisando ideas en una pared",
  norma: `https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?${q}`,
  obras: `https://images.unsplash.com/photo-1504307651254-35680f356dfd?${q}`,
  fiscalizacion: `https://images.unsplash.com/photo-1450101499163-c8848c66ca85?${q}`,
  cercania: `https://images.unsplash.com/photo-1556761175-5973dc0f32e7?${q}`,
  cercaniaAlt: "Dos personas conversando con una laptop en una mesa",
  contacto: `https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?${q}`,
  contactoAlt: "Personas en videollamada sonriendo, ambiente de trabajo remoto",
} as const;
