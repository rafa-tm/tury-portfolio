import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/patterns/Header";
import Footer from "../components/patterns/Footer";

export default function Layout() {
  return (
    <Fragment>
      <Header />
      <Outlet />
      <Footer />
    </Fragment>
  );
}
