import { useState } from "react";
import client from "../client";
import TopBar from "../components/TopBar";
import { withTranslation, language } from "../i18n";
import Loader from "react-loaders";
import { useRouter } from "next/router";

function RequestResetPassword({ t, i18n }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [requested, setRequested] = useState(false);
  const [error, setError] = useState(null);

  function request() {
    setLoading(true);
    setError(null);
    client
      .requestResetPassword(email, i18n.language)
      .then(() => {
        setRequested(true);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        let errorMsg = t("resetPassword.error.general");
        if (err && err.response && err.response.data.error === true) {
          errorMsg = t(err.response.data.message);
        }
        setError(errorMsg);
      });
  }

  if (loading) {
    return (
      <Loader
        type="ball-scale-ripple-multiple"
        style={{ marginLeft: "50%", marginTop: "2em" }}
      />
    );
  }

  if (requested) {
    return <p>{t("resetPassword.message.emailSent")}</p>;
  }

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        request();
      }}
    >
      {error && <div className="alert alert--error">{error}</div>}
      <div className="form__field">
        <label>{t("resetPassword.field.email")}</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoFocus={true}
        />
      </div>
      <div className="form__action">
        <button type="submit" className="btn btn-primary">
          {t("resetPassword.button.continue")}
        </button>
      </div>
    </form>
  );
}

function ResetPassword({ token, t }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  function resetPassword() {
    setLoading(true);
    setError(null);

    if (password.length < 4) {
      setLoading(false);
      setError(t("resetPassword.error.passwordTooShort"));
      return;
    }

    client
      .resetPassword(token, password)
      .then(() => {
        window.location.href = "/";
      })
      .catch((err) => {
        setLoading(false);
        let errorMsg = t("resetPassword.error.general");
        if (err && err.response && err.response.data.error === true) {
          errorMsg = t(err.response.data.message);
        }
        setError(errorMsg);
      });
  }

  if (loading) {
    return (
      <Loader
        type="ball-scale-ripple-multiple"
        style={{ marginLeft: "50%", marginTop: "2em" }}
      />
    );
  }

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        resetPassword();
      }}
    >
      {error && <div className="alert alert--error">{error}</div>}
      <div className="form__field">
        <label>{t("resetPassword.field.newPassword")}</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoFocus={true}
        />
      </div>
      <div className="form__action">
        <button type="submit" className="btn btn-primary">
          {t("resetPassword.button.continue")}
        </button>
      </div>
    </form>
  );
}

function ResetPasswordPage({ t, i18n }) {
  const router = useRouter();

  return (
    <div>
      <TopBar />
      <div className="container" style={{ paddingTop: "2em" }}>
        <div style={{ maxWidth: 500, margin: "0 auto" }}>
          <h2>{t("resetPassword.title")}</h2>
          {router.query.token ? (
            <ResetPassword t={t} token={router.query.token} />
          ) : (
            <RequestResetPassword t={t} i18n={i18n} />
          )}
        </div>
      </div>
    </div>
  );
}

export default withTranslation()(ResetPasswordPage);
