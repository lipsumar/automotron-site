import GeneratorItem from "../components/GeneratorItem";
import useApi from "../hooks/useApi";

export default function MyGeneratorsPage() {
  const { data, error } = useApi(
    `/generators/${process.env.NEXT_PUBLIC_EXAMPLE_IDS}`
  );

  if (error) {
    return <div>Error</div>;
  }

  return (
    <>
      <div className="container">
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
      </div>
    </>
  );
}
