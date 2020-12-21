import GeneratorItem from "./GeneratorItem";
import useApi from "../hooks/useApi";
import TopNav from "./TopNav";
import { FiPlusCircle } from "react-icons/fi";
import { useTranslation } from "../i18n";

function MyGenerators() {
  const { data, error } = useApi("/generators/my");
  const { t } = useTranslation();

  if (error && error.response && error.response.status === 401) {
    return <div>You must be logged-in</div>;
  }

  return (
    <>
      <div className="logged-in-topbar">
        <div className="logged-in-topbar__left">
          <img src="/img/site/logo_complete_app.svg" />
        </div>
        <div className="logged-in-topbar__right">
          <TopNav variant="light" />
        </div>
      </div>
      <div className="body-under-topbar">
        <div className="container" style={{ paddingTop: 50 }}>
          {data ? (
            <div className="grid">
              <a className="new-generator-card" href="/editor/new">
                <div className="new-generator-card__body">
                  <FiPlusCircle />
                </div>
                <div className="new-generator-card__footer">
                  {t("myGenerators.newGenerator")}
                </div>
              </a>
              {data.map((generator) => (
                <GeneratorItem generator={generator} key={generator._id} />
              ))}
            </div>
          ) : (
            "Loading..."
          )}
        </div>
      </div>
    </>
  );
}

export default MyGenerators;
