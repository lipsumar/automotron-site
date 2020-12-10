import Link from "next/link";
import Layout from "../../components/Layout";
import { getDocs, getGuides } from "../../utils";

export default function GuidesIndex({ guides, docs }) {
  return (
    <Layout title="Guides" guides={guides} docs={docs}>
      <ul>
        {guides.map((guide) => (
          <li key={guide.slug}>
            <Link href={`/guides/${guide.slug}`} passHref>
              <a>{guide.attributes.title}</a>
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
