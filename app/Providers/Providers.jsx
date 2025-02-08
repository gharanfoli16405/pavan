import { I18nextProvider } from "react-i18next";
import i18n from "@locales/i18n.js";
import Authorize from "./Authorize";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Providers = ({ children }) => {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <ToastContainer />
        <Authorize>{children}</Authorize>
      </I18nextProvider>
    </>
  );
};

export default Providers;
