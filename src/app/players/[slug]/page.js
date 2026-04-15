import { notFound } from "next/navigation";
import players from "../../../data/players";
import SEOJsonLd from "../../../components/SEOJsonLd";

export async function generateMetadata({ params }) {
  const { slug } = await params; 

  const player = players.find(p => p.slug === slug);

  if (!player) {
    return {
      title: "Player Not Found",
      description: "The requested football player profile does not exist."
    };
  }

  return {
    title: `${player.name} Stats, Goals & Profile`,
    description: `View ${player.name}'s football stats, goals, club, and career highlights.`,
    openGraph: {
      title: `${player.name} Football Profile`,
      description: player.description,
      images: [player.image]
    }
  };
}

export default async function PlayerPage({ params }) {
  const { slug } = await params; 

  const player = players.find(p => p.slug === slug);

  if (!player) {
    notFound(); 
  }

  return (
    <main className="player-container">
      
      <SEOJsonLd player={player} />

      <img
        src={player.image}
        alt={player.name}
        width={400}
        height={400}
      />

      {/* <h1>{player.name}</h1>
      <p>{player.description}</p> */}

      <ul>
        <li><strong>Club:</strong> {player.club}</li>
        <li><strong>Nationality:</strong> {player.nationality}</li>
        <li><strong>Position:</strong> {player.position}</li>
        <li><strong>Goals:</strong> {player.goals}</li>
      </ul>
    </main>
  );
}