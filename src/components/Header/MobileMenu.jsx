import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function MobileMenu({ mobileMenu, setMobileMenu }) {
  return (
    <>
      <button
        onClick={() => setMobileMenu(false)}
        className={`fixed top-0 left-0 w-full h-screen bg-[#00000065] z-[99999] ${
          mobileMenu ? "block" : "hidden"
        }`}
      ></button>

      <nav
        className={`fixed top-0 bg-base-100 w-72 h-screen z-[99999] shadow-lg duration-300 ${
          mobileMenu ? "right-0" : "-right-full"
        }`}
      >
        <div className="px-4 pt-4 flex justify-end">
          <button onClick={() => setMobileMenu(false)} className="text-end">
            <AiOutlineClose />
          </button>
        </div>
        <ul className="h-full flex flex-col gap-2 pt-0 p-6 text-[17px]">
          <li>
            <Link to="/docs/getting-started/documentation">Docs</Link>
          </li>
          <li>
            <Link to="">Components</Link>
          </li>
          <li>
            <Link to="">Pages</Link>
          </li>
          <li>
            <Link to="">Blogs</Link>
          </li>
          <li className="mt-2">
            <Link to="" className=" bg-primary-g px-3 py-2.5 text-sm">
              Login/Signup
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
