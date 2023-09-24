import { Link } from "react-router-dom";
import { BiSun } from "react-icons/bi";
import { HiMenuAlt3 } from "react-icons/hi";

export default function Header() {
  return (
    <header className="py-2">
      <div className="container">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-1">
            <img src="/images/logo/logo.png" alt="" className="w-10" />
            <h1 className="font-bold text-xl">
              <span className="text-primary">Max</span>
              <span className="text-secondary">UI</span>
            </h1>
          </Link>

          <nav>
            <ul className="menu hidden md:flex gap-6 text-[15px]">
              <li>
                <Link to="">Home</Link>
              </li>
              <li>
                <Link to="">Products</Link>
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
              <li>
                <button className="text-xl mt-px hover:text-primary text-neutral-content">
                  <BiSun />
                </button>
              </li>
              <li>
                <Link to="" className="bg-primary-g px-3 py-2.5 text-sm">
                  Login/Signup
                </Link>
              </li>
            </ul>

            <ul className="gap-4 text-[15px] menu flex md:hidden">
              <li>
                <button className="text-xl mt-px hover:text-primary text-neutral-content">
                  <BiSun />
                </button>
              </li>
              <li>
                <button>
                  <HiMenuAlt3 className="text-2xl" />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
