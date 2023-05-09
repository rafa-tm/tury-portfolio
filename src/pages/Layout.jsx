import { Fragment } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/patterns/Header";
import Footer from "../components/patterns/Footer";
import { useEffect } from "react";

export default function Layout() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <Fragment>
      <Header />
      <Outlet />
      <Footer />
    </Fragment>
  );
}
