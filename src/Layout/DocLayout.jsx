import "../style/docs.css";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/DocComponents/Sidebar/Sidebar";
import DocFooter from "../components/DocComponents/DocFooter/DocFooter";

export default function DocLayout() {
  return (
    <>
      <Header />
      <section className="docs_wrap border-t">
        <div className="container">
          <div className="flex">
            <Sidebar />

            <div className="content">
              <div className="content_content">
                <Outlet />
              </div>

              <DocFooter />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
