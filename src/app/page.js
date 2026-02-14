import players from "../data/players";
import PlayerCard from "../components/PlayerCard";

export const metadata = {
  title: "Top Football Players | Stats & Profiles",
  description:
    "Discover top football players with detailed stats, goals, clubs, and career highlights."
};

export default function HomePage() {
  return (
    <main className="container">
      <h1>⚽ Football Player Profiles</h1>
      <p className="subtitle">
        SEO-optimized football player stats and career details
      </p>

      <div className="grid">
        {players.map(player => (
          <PlayerCard key={player.slug} player={player} />
        ))}
      </div>
    </main>
  );
}