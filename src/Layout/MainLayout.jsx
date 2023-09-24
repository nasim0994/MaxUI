import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

export default function MainLayout() {
  return (
    <>
      <div className="min-h-[70vh]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
