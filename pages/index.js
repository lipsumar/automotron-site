import { Link } from "../i18n";
import Footer from "../components/Footer";
import MyGenerators from "../components/MyGenerators";
import axios from "axios";
import cookie from "cookie";
import TopBar from "../components/TopBar";
import { useTranslation } from "../i18n";

export default function Home({ user }) {
  const { t, i18n } = useTranslation("home");
  if (user) {
    return <MyGenerators />;
  }
  return (
    <>
      <TopBar />
      <div className="home-section home-section--primary-dark">
        <div className="container">
          <img src="/img/site/home-hero.png" />
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
              <h2>{t("whatIsIt.title")}</h2>
              <p>{t("whatIsIt.body")}</p>
              <p>{t("whatIsIt.examples")}</p>
              {i18n.language === "fr" && (
                <div>
                  <a
                    href="https://automotron.io/editor/-waZtytuZ"
                    className="btn btn--home-example"
                  >
                    Des bonnes résolutions
                  </a>
                  <a
                    href="https://automotron.io/editor/lvaTjhDqv"
                    className="btn btn--home-example"
                  >
                    Des instructions de construction
                  </a>
                  {/* <button className="btn btn--home-example">
                    Un itineraire de ballade
                  </button>
                  <button className="btn btn--home-example">
                    Une liste de course
                  </button> */}
                  <a
                    href="https://automotron.io/editor/zCEERErqd"
                    className="btn btn--home-example"
                  >
                    Un conte
                  </a>
                  <a
                    href="https://automotron.io/editor/yvyLHImkE"
                    className="btn btn--home-example"
                  >
                    Un film de Noël
                  </a>
                  <a
                    href="https://automotron.io/editor/IQkG8VFIK"
                    className="btn btn--home-example"
                  >
                    Des règle de déconfinement
                  </a>
                  {/* <button className="btn btn--home-example">
                    Une recette expérimentale
                  </button> */}
                </div>
              )}
              {i18n.language === "en" && (
                <div>
                  <a
                    href="https://automotron.io/editor/QlHRDZtap"
                    className="btn btn--home-example"
                  >
                    Manifesto
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="home-section home-section--primary-dark home-section--features">
        <div className="container">
          <h2>{t("features.title")}</h2>
          <div
            className="layout-media layout-media--inverted"
            style={{ marginBottom: 70 }}
          >
            <div className="layout-media__media">
              <div className="feature-img">
                <img src="/img/site/feature-visual.png" />
              </div>
            </div>
            <div className="layout-media__body">
              <h3>{t("features.visual.title")}</h3>
              <p>{t("features.visual.body")}</p>
            </div>
          </div>
          <div className="layout-media" style={{ marginBottom: 70 }}>
            <div className="layout-media__media">
              <div className="feature-img">
                <img src="/img/site/feature-agreement.png" />
              </div>
            </div>
            <div className="layout-media__body">
              <h3>{t("features.agreement.title")}</h3>
              <p>{t("features.agreement.body")}</p>
            </div>
          </div>
          <div className="layout-media layout-media--inverted">
            <div className="layout-media__media">
              <div className="feature-img">
                <img src="/img/site/feature-export.png" />
              </div>
            </div>
            <div className="layout-media__body">
              <h3>{t("features.export.title")}</h3>
              <p>{t("features.export.body")}</p>
            </div>
          </div>

          <hr />

          <div className="flex">
            <div>
              <h2>{t("learnMore.title")}</h2>
            </div>
            <div>
              <Link href="/guides/getting-started" passHref>
                <a className="btn btn-accent" style={{ marginBottom: "1em" }}>
                  {t("learnMore.gettingStarted")}
                </a>
              </Link>
              <br />
              <Link href="/doc" passHref>
                <a className="btn">{t("learnMore.documentation")}</a>
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

export async function getServerSideProps(context) {
  const cookieHeader = context.req.headers.cookie;
  try {
    const cookies = cookie.parse(cookieHeader);
    const { data: loggedIn } = await axios.post(
      `${process.env.API_BASE_URL}/logged-in`,
      undefined,
      {
        headers: {
          cookie: "connect.sid=" + cookies["connect.sid"],
        },
      }
    );
    return {
      props: {
        user: loggedIn,
      },
    };
  } catch (err) {
    return {
      props: {
        user: null,
        error: err,
      },
    };
  }
}
