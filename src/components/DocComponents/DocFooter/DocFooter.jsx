import { Link } from "react-router-dom";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { BiLogoLinkedin } from "react-icons/bi";

export default function DocFooter() {
  return (
    <footer>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="https://i.ibb.co/znwrX5c/na.jpg"
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h1 className="text-sm text-neutral-content">Create by</h1>
            <p className="text-lg font-bold">Nasim Uddin</p>
          </div>
        </div>

        <div className="social_links text-neutral-content">
          <Link to="" target="_blank">
            <BsFacebook className="text-[15px]" />
          </Link>
          <Link to="" target="_blank">
            <BiLogoLinkedin className="text-lg" />
          </Link>
          <Link to="" target="_blank">
            <IoLogoWhatsapp />
          </Link>
          <Link to="" target="_blank">
            <BsGithub />
          </Link>
        </div>
      </div>
    </footer>
  );
}
