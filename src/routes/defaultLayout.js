import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../common/footer";
import Header from "../common/header";
import Scrollredirect from "../components/scrollredirect";

export default function DefaultLayout() {
  return (<>
      <Scrollredirect />
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
    </>
  );
}
