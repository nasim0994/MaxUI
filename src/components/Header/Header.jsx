import { useState } from "react";
import { Link } from "react-router-dom";
import { BiSun } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdDarkMode } from "react-icons/md";

import MobileMenu from "./MobileMenu";
import { UseContext } from "../../ContextApi/ContextApi";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const { handelThemeToggle, themeToggle } = UseContext();

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
                <Link to="/docs/getting-started/documentation">Docs</Link>
              </li>
              <li>
                <Link to="/components">Components</Link>
              </li>
              <li>
                <Link to="/pages">Pages</Link>
              </li>
              <li>
                <Link to="/blog">Blogs</Link>
              </li>
              <li>
                <button
                  onClick={handelThemeToggle}
                  className="text-xl mt-px hover:text-primary dark:hover:text-primary text-neutral-content dark:text-gray-400"
                >
                  {themeToggle ? <MdDarkMode /> : <BiSun />}
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
                <button
                  onClick={handelThemeToggle}
                  className="text-xl mt-px hover:text-primary text-neutral-content dark:text-gray-400 "
                >
                  <BiSun />
                </button>
              </li>
              <li>
                <button onClick={() => setMobileMenu(!mobileMenu)}>
                  <RxHamburgerMenu className="text-xl" />
                </button>
              </li>
            </ul>
          </nav>

          <MobileMenu setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} />
        </div>
      </div>
    </header>
  );
}
