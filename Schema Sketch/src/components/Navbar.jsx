import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Schema-removebg-preview dark.png";
import { SideSheet } from "@douyinfe/semi-ui";
import { IconMenu } from "@douyinfe/semi-icons";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div className="py-4 px-12 sm:px-4 flex justify-between items-center">
        <div className="flex items-center justify-between w-full">
          <Link to="/">
            <img src={logo} alt="logo" className="h-[48px] sm:h-[32px]" />
          </Link>
          <div className="md:hidden flex gap-12">
            <Link
              className="text-lg font-semibold hover:text-sky-800 transition-colors duration-300"
              onClick={() =>
                document
                  .getElementById("features")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Features
            </Link>
            <Link
              to="/editor"
              className="text-lg font-semibold hover:text-sky-800 transition-colors duration-300"
            >
              Editor
            </Link>
            <Link
              to="/templates"
              className="text-lg font-semibold hover:text-sky-800 transition-colors duration-300"
            >
              Templates
            </Link>
          </div>
        </div>
        <button
          onClick={() => setOpenMenu((prev) => !prev)}
          className="hidden md:inline-block h-[24px]"
        >
          <IconMenu size="extra-large" />
        </button>
      </div>
      <hr />
      <SideSheet
        title={
          <img src={logo} alt="logo" className="sm:h-[32px] md:h-[42px]" />
        }
        visible={openMenu}
        onCancel={() => setOpenMenu(false)}
        width={window.innerWidth}
      >
        <Link
          className="hover:bg-zinc-100 block p-3 text-base font-semibold"
          onClick={() => {
            document
              .getElementById("features")
              .scrollIntoView({ behavior: "smooth" });
            setOpenMenu(false);
          }}
        >
          Features
        </Link>
        <hr />
        <Link
          to="/editor"
          className="hover:bg-zinc-100 block p-3 text-base font-semibold"
        >
          Editor
        </Link>
        <hr />
        <Link
          to="/templates"
          className="hover:bg-zinc-100 block p-3 text-base font-semibold"
        >
          Templates
        </Link>
        <hr />
      </SideSheet>
    </>
  );
}
