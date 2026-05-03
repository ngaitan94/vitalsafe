import type { Metadata } from "next";
import { ViewTransitionRoot } from "./ViewTransitionRoot";
import "./globals.css";

export const metadata: Metadata = {
  title: "VitalSafe — Consultoría SST (Chile)",
  description:
    "Asesoría en prevención de riesgos laborales: Ley 16.744, DS 44, comités, contratistas y apoyo frente a fiscalización.",
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
