import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "FloraVision — Earth's Exhale",
  description:
    "Curated indoor plants for elegant, healthier spaces. Premium dark green plant store.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
