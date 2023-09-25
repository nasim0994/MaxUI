import "../style/docs.css";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/DocComponents/Sidebar/Sidebar";
import DocFooter from "../components/DocComponents/DocFooter/DocFooter";

import { CgMenuLeft } from "react-icons/cg";
import { useEffect, useState } from "react";

export default function DocLayout() {
  const [sidebar, setSidebar] = useState(false);
  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (!e.target.closest(".sidebar_btn") && !e.target.closest(".sidebar")) {
        setSidebar(false);
      }
    });
  });

  return (
    <>
      <div className="sticky top-0">
        <Header />
      </div>

      <section className="docs_wrap lg:border-t">
        <div
          className={`py-3 border-y lg:hidden ${
            sidebar && "sticky top-[60px] z-[99]"
          }  bg-base-100`}
        >
          <div className="container">
            <div className="flex items-center gap-3 ">
              <button onClick={() => setSidebar(!sidebar)}>
                <CgMenuLeft className="text-xl sidebar_btn" />
              </button>
              <div className="flex items-center gap-3 text-sm text-neutral-content">
                <p>Getting Started</p>
                <p>Documentation</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="lg:flex">
            <Sidebar sidebar={sidebar} setSidebar={setSidebar} />

            <div className="content">
              <div className="content_content">
                <Outlet />
              </div>

              <div className="divider"></div>
              <DocFooter />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
