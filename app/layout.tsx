import type { Metadata } from "next";
import { ViewTransitionRoot } from "./ViewTransitionRoot";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "VitalSafe — Consultoría SST (Chile)",
  description:
    "Asesoría en prevención de riesgos laborales: Ley 16.744, DS 44, comités, contratistas y apoyo frente a fiscalización.",
  openGraph: {
    title: "VitalSafe — Consultoría SST (Chile)",
    description:
      "Asesoría en prevención de riesgos laborales: Ley 16.744, DS 44, comités, contratistas y apoyo frente a fiscalización.",
    images: [{ url: "/images/vitalsafe-logo.jpg", width: 150, height: 150, alt: "VitalSafe" }],
  },
  twitter: {
    card: "summary",
    title: "VitalSafe — Consultoría SST (Chile)",
    description:
      "Asesoría en prevención de riesgos laborales: Ley 16.744, DS 44, comités, contratistas y apoyo frente a fiscalización.",
    images: ["/images/vitalsafe-logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className="min-h-screen antialiased"
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif',
        }}
      >
        <ViewTransitionRoot>{children}</ViewTransitionRoot>
      </body>
    </html>
  );
}
