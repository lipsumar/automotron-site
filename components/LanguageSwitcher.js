import { useTranslation } from "../i18n";
import { FiChevronDown } from "react-icons/fi";
import { useState } from "react";

export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <div className="lang-switcher-wrapper">
      <div className="lang-switcher" onClick={() => setOpen(!open)}>
        <a href="#" onClick={(e) => e.preventDefault()}>
          {i18n.language === "fr" ? "Français" : "English"}
        </a>
        <FiChevronDown />
      </div>
      {open && (
        <div className="lang-switcher-dropdown">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              i18n.changeLanguage(i18n.language === "fr" ? "en" : "fr");
              setOpen(false);
            }}
          >
            {i18n.language === "fr" ? "English" : "Français"}
          </a>
        </div>
      )}
    </div>
  );
}
