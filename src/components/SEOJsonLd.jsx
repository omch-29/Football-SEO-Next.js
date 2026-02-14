export default function SEOJsonLd({ player }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: player.name,
    nationality: player.nationality,
    jobTitle: "Professional Footballer",
    memberOf: {
      "@type": "SportsTeam",
      name: player.club
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}