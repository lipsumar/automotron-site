import { Link } from "../i18n";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div className="footer__col">
            <h4>AUTOMOTRON</h4>
            <p>
              Un outil génial de génération de texte hyper utile pour créer des
              listes de choses à faire avec ses amis un samedi soir
            </p>
          </div>
          <div className="footer__col">
            <h4>Le projet</h4>
            <ul>
              <li>
                <Link href="/about" passHref>
                  <a>A propos du projet</a>
                </Link>
              </li>
              <li>
                <Link href="/team" passHref>
                  <a>L’équipe</a>
                </Link>
              </li>
              <li>
                <Link href="/contact" passHref>
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Assistance</h4>
            <ul>
              <li>
                <Link href="/guides/getting-started" passHref>
                  <a>Premiers pas</a>
                </Link>
              </li>
              <li>
                <Link href="/examples" passHref>
                  <a>Exemples</a>
                </Link>
              </li>
              <li>
                <Link href="/doc" passHref>
                  <a>Documentation</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Communauté</h4>
            <ul>
              <li>
                <a href="#" target="_blank">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  YouTube
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
