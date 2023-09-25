import { NavLink } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { BsBookHalf } from "react-icons/bs";
import { RiInstallLine } from "react-icons/ri";
import { GrCode } from "react-icons/gr";
import { HiOutlineColorSwatch } from "react-icons/hi";
import { AiOutlineBgColors } from "react-icons/ai";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="flex gap-2">
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xl opacity-40">
            <BiSearch />
          </span>

          <input
            type="text"
            className="w-full pl-10 pr-3 py-1 md:py-1.5 rounded-md border outline-none"
            placeholder="Search"
          />
        </div>
      </div>

      {/* Docs */}
      <div className="mt-4">
        <h1 className="text-neutral">Getting Started</h1>
        <ul className="sidebar_menu">
          <li>
            <NavLink to="/docs/getting-started/documentation">
              <span className="icon">
                <BsBookHalf />
              </span>
              Documentation
            </NavLink>
          </li>

          <li>
            <NavLink to="/docs/installation">
              <span className="icon">
                <RiInstallLine />
              </span>
              installation
            </NavLink>
          </li>

          <li>
            <NavLink to="/docs/use">
              <span className="icon">
                <GrCode />
              </span>
              Use
            </NavLink>
          </li>

          <li>
            <NavLink to="/docs/installation">
              <span className="icon">
                <HiOutlineColorSwatch />
              </span>
              Themes
            </NavLink>
          </li>

          <li>
            <NavLink to="/docs/installation">
              <span className="icon">
                <AiOutlineBgColors />
              </span>
              Colors
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="divider"></div>

      {/* Action */}
      <div className="mt-4">
        <h1 className="text-black">Actions</h1>
        <ul className="sidebar_menu">
          <li>
            <NavLink to="/docs/action/button">Button</NavLink>
          </li>

          <li>
            <NavLink to="/docs/action/dropdown">Dropdown</NavLink>
          </li>

          <li>
            <NavLink to="/docs/action/modal">Modal</NavLink>
          </li>

          <li>
            <NavLink to="/docs/action/notification">Notification</NavLink>
          </li>

          <li>
            <NavLink to="/docs/action/sweet-alert">Sweet Alert</NavLink>
          </li>
        </ul>
      </div>

      <div className="divider"></div>

      {/* Action */}
      <div className="mt-4">
        <h1 className="text-black">Data display</h1>
        <ul className="sidebar_menu">
          <li>
            <NavLink to="/docs/action/button">Accordion</NavLink>
          </li>

          <li>
            <NavLink to="/docs/action/dropdown">Avatar</NavLink>
          </li>

          <li>
            <NavLink to="/docs/action/modal">Card</NavLink>
          </li>

          <li>
            <NavLink to="/docs/action/notification">Carousel</NavLink>
          </li>

          <li>
            <NavLink to="/docs/action/sweet-alert">Countdown</NavLink>
          </li>

          <li>
            <NavLink to="/docs/action/sweet-alert">Loading</NavLink>
          </li>

          <li>
            <NavLink to="/docs/action/sweet-alert">Progress</NavLink>
          </li>

          <li>
            <NavLink to="/docs/action/sweet-alert">Table</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
