import Layout from "../../components/Layout";
import { getDocs, getGuides } from "../../utils";

export default function Home({ guides, docs }) {
  return (
    <Layout title="Documentation" guides={guides} docs={docs}>
      index de la doc
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
