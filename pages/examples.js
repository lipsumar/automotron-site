import GeneratorItem from "../components/GeneratorItem";
import Layout from "../components/Layout";
import useApi from "../hooks/useApi";
import { getDocs, getGuides } from "../utils";

export default function MyGeneratorsPage({ guides, docs }) {
  const { data, error } = useApi(
    `/generators/${process.env.NEXT_PUBLIC_EXAMPLE_IDS}`
  );

  if (error) {
    return <div>Error</div>;
  }

  return (
    <Layout guides={guides} docs={docs}>
      <h1>Exemples</h1>
      {data ? (
        <div className="grid">
          {data.map((generator) => (
            <GeneratorItem generator={generator} />
          ))}
        </div>
      ) : (
        "Loading..."
      )}
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
