import Link from "next/link";

export default function PlayerCard({ player }) {
  return (
    <Link href={`/players/${player.slug}`} className="card">
      <img src={player.image} alt={player.name} />
      <h2>{player.name}</h2>
      <p>{player.club}</p>
    </Link>
  );
}