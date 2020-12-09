import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="home-header">
        <div className="container">
          <div className="home-header-top">
            <div className="home-header-top__logo">AUTOMOTRON</div>
            <div className="home-header-top__nav">
              <div className="home-header-top__nav-item">
                <Link href="/about" passHref>
                  <a>A propos</a>
                </Link>
              </div>
              <div className="home-header-top__nav-item">
                <Link href="/examples" passHref>
                  <a>Exemples</a>
                </Link>
              </div>
              <div className="home-header-top__nav-item">
                <Link href="/doc" passHref>
                  <a>Documentation</a>
                </Link>
              </div>
              <div className="home-header-top__nav-item home-header-top__nav-item--btn">
                <button class="btn btn-accent">Se connecter</button>
              </div>
            </div>
          </div>
          <div className="home-header-body">
            [l’outil ultime]---[pour générer]---[des poèmes]---[aléatoires]
          </div>
        </div>
      </div>
      <div className="container">
        <img
          src="https://www.gifgratis.net/gifs_animes/travaux_en_cours/17.gif"
          style={{ margin: "0 auto", display: "block" }}
        />
      </div>
    </>
  );
}
