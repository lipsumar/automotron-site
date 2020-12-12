import GeneratorItem from "./GeneratorItem";
import useApi from "../hooks/useApi";

export default function MyGenerators() {
  const { data, error } = useApi("/generators/my");

  if (error && error.response && error.response.status === 401) {
    return <div>You must be logged-in</div>;
  }

  return (
    <>
      <div className="container">
        <h1>My generators</h1>
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
