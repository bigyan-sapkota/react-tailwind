import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="max-w-337.5 mx-auto flex justify-between py-4">
      {/* navigation items */}
      <div className="flex justify-between gap-16">
        {navbarItems.map((item) => {
          return (
            <a key={item.id} className="font-semibold cursor-pointer">
              {item.text}
            </a>
          );
        })}
      </div>

      {/* social media links */}
      <div className="flex gap-8">
        {socialMediaLinks.map((media) => {
          return (
            <a
              key={media.id}
              href={media.link}
              className="bg-blue-700 text-white rounded-full size-8 flex items-center justify-center "
            >
              {media.icon}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;

const navbarItems = [
  { id: 1, text: "Home", route: "/" },
  { id: 2, text: "About", route: "/about" },
  { id: 3, text: "Classes", route: "/classes" },
  { id: 4, text: "Teachers", route: "/teachers" },
  { id: 5, text: "Blogs", route: "/blogs" },
  { id: 6, text: "Contact", route: "/contact" },
];

const socialMediaLinks = [
  { id: 1, icon: <FaFacebookF />, link: "https://aakarcreativehub.com/" },
  {
    id: 2,
    icon: <FaInstagram />,
    link: "https://www.nrdc.org/stories/global-warming-101",
  },
  {
    id: 3,
    icon: <FaXTwitter />,
    link: "https://www.dhm.gov.np/hydrology/rainfall-watch-map",
  },
];
