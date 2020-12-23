import Layout from "../../components/Layout";
import { getDocs, getGuides } from "../../utils";
import { useTranslation, Link } from "../../i18n";

export default function Home({ guides, docs }) {
  const { i18n } = useTranslation();
  return (
    <Layout title="Documentation" guides={guides} docs={docs}>
      <ul>
        {docs.map((doc) => (
          <li key={doc.slug}>
            <Link href={`/doc/${doc.slug}`} passHref>
              <a>{doc.attributes[`title_${i18n.language}`]}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export async function getStaticProps(ctx) {
  const guides = getGuides();
  const docs = getDocs();
  return {
    props: {
      guides,
      docs,
    },
  };
}
