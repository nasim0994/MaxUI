import { Link } from "react-router-dom";

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
            <ul className="flex  menu">
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
                <Link to="" className="bg-primary-g px-3 py-2.5 text-sm">
                  Login/Signup
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
