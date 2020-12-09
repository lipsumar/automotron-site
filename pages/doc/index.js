import Layout from "../../components/Layout";
import { getGuides } from "../../utils";

export default function Home({ guides }) {
  return (
    <Layout title="Documentation" guides={guides}>
      index de la doc
    </Layout>
  );
}

export async function getStaticProps(ctx) {
  const guides = getGuides();
  return {
    props: {
      guides: guides,
    },
  };
}
