import "./globals.css";

export const metadata = {
  title: "Football Player Stats & Profiles",
  description: "Explore football player profiles with stats, goals, and career details.",
  openGraph: {
    title: "Football Player Stats",
    description: "SEO-optimized football player profiles",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}