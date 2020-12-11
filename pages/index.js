import Link from "next/link";
import Footer from "../components/Footer";
import TopNav from "../components/TopNav";

export default function Home() {
  return (
    <>
      <div className="home-header">
        <div className="home-header-top">
          <div className="home-header-top__logo">
            <img src="/img/site/logo_complete_site.svg" />
          </div>
          <div className="home-header-top__nav">
            <TopNav />
          </div>
        </div>
        <div className="home-header-body">
          <div className="container">
            <img src="/img/site/home-hero.png" />
          </div>
        </div>
      </div>
      <div className="home-section home-section--yellow">
        <div className="container">
          <div className="layout-media">
            <div className="layout-media__media">
              <div style={{ flexBasis: 500 }}>
                <img src="/img/site/home-illustration.png" />
              </div>
            </div>
            <div className="layout-media__body">
              <h2>Qu’est-ce que l'Automotron ?</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                ac dolor urna. Proin mattis, lorem id egestas aliquet, augue
                neque pulvinar nisi, blandit dapibus tellus dolor vel sapien.
                Nunc suscipit pretium volutpat. Nunc hendrerit rhoncus urna,
                vitae vehicula tortor. Phasellus fermentum, turpis vel porta
                vehicula, est tortor pretium felis, dignissim dictum mauris
                massa vel purus. Ut aliquet non enim in finibus. Pellentesque
                non augue congue, fermentum sapien in, egestas nisi. Fusce
                feugiat placerat erat sed tincidunt.
              </p>
              <p>Quelques examples de générateurs</p>
              <div>
                <button class="btn btn--home-example">
                  Des instructions de construction
                </button>
                <button class="btn btn--home-example">
                  Un itineraire de ballade
                </button>
                <button class="btn btn--home-example">
                  Une liste de course
                </button>
                <button class="btn btn--home-example">Un conte</button>
                <button class="btn btn--home-example">
                  Une recette expérimentale
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section home-section--primary-dark home-section--features">
        <div className="container">
          <h2>Toutes sortes d’applications géniales</h2>
          <div
            className="layout-media layout-media--inverted"
            style={{ marginBottom: 70 }}
          >
            <div className="layout-media__media">
              <div className="feature-img">
                <img src="/img/site/home-illustration.png" />
              </div>
            </div>
            <div className="layout-media__body">
              <h3>Un outil visuel simplifié</h3>
              <p>
                Pas besoin de code à apprendre. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nullam ac dolor urna. Proin mattis,
                lorem id egestas aliquet, augue neque pulvinar nisi, blandit
                dapibus tellus dolor vel sapien. Nunc suscipit pretium volutpat.
                Nunc hendrerit rhoncus urna, vitae vehicula tortor.
              </p>
            </div>
          </div>
          <div className="layout-media" style={{ marginBottom: 70 }}>
            <div className="layout-media__media">
              <div className="feature-img">
                <img src="/img/site/home-illustration.png" />
              </div>
            </div>
            <div className="layout-media__body">
              <h3>La gestion des accords</h3>
              <p>
                Automotron intègre un outil de gestion des accords qui vous
                permettra de ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam ac dolor urna. Proin mattis, lorem id egestas aliquet,
                augue neque pulvinar nisi, blandit dapi.
              </p>
            </div>
          </div>
          <div className="layout-media layout-media--inverted">
            <div className="layout-media__media">
              <div className="feature-img">
                <img src="/img/site/home-illustration.png" />
              </div>
            </div>
            <div className="layout-media__body">
              <h3>Partagez et exportez vos créations facilement</h3>
              <p>
                En deux clics, vous pouvez partager vos créations à vos amis. Ou
                conectez les résultats de vos générateurs en utilisant leur url
                fixe. Nullam ac dolor urna. Proin mattis, lorem id egestas
                aliquet, augue neque pulvinar nisi, blandit dapibus tellus dolor
                vel sapien.
              </p>
            </div>
          </div>

          <hr />

          <div class="flex">
            <div>
              <h2>
                En savoir d’avantage sur les fonctionalités de l’Automotron
              </h2>
            </div>
            <div>
              <Link href="/guides/premiers-pas" passHref>
                <a className="btn btn-accent" style={{ marginBottom: "1em" }}>
                  Tutoriel Premiers Pas
                </a>
              </Link>
              <br />
              <Link href="/doc" passHref>
                <a className="btn">La documentation complète</a>
              </Link>
            </div>
          </div>

          <div style={{ maxWidth: 800, margin: "0 auto", marginTop: 70 }}>
            <div className="responsive-video">
              <iframe
                src="https://www.youtube.com/embed/vr03bWKJKBA"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Tuto Automotron"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
