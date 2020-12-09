import Link from "next/link";

export default function Home() {
  return (
    <>
      <ul className="home-nav">
        <li>
          <Link href="/doc" passHref>
            <a>Documentation</a>
          </Link>
        </li>
      </ul>
      <h1>Automotron</h1>
      <h2>Homepage</h2>
    </>
  );
}
