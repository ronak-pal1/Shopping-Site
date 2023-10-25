import {
  FavoriteBorderOutlined,
  Person3Outlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { useState } from "react";

const Header = (): JSX.Element => {
  const [headerLinks, setHeaderLinks] = useState(false);
  const [colorIndex, setIndex] = useState(0);

  const colors: string[] = [
    "bg-blue-600",
    "bg-yellow-300",
    "bg-green-400",
    "bg-red-200",
    "bg-zinc-200",
    "bg-white",
  ];

  const hideLinkSection = (): void => {
    setHeaderLinks(false);
  };

  const showLinkSection = (index: number): void => {
    setHeaderLinks(true);
    setIndex(index);
  };

  return (
    <div className="sticky top-0 left-0 z-50">
      <div className="flex flex-row items-center bg-white justify-evenly py-5 border-b border-gray-300">
        <div>
          <p className="font-extrabold text-xl">R Square</p>
        </div>

        <div className="space-x-5 font-extralight text-blue-900 [&>a]:border-b-0 [&>a]:border-zinc-900 hover:[&>a]:border-b">
          <a href="#" onMouseOver={() => showLinkSection(0)}>
            Ladies
          </a>
          <a href="#" onMouseOver={() => showLinkSection(1)}>
            Mens
          </a>
          <a href="#" onMouseOver={() => showLinkSection(2)}>
            Divided
          </a>
          <a href="#" onMouseOver={() => showLinkSection(3)}>
            Baby
          </a>
          <a href="#" onMouseOver={() => showLinkSection(4)}>
            Kids
          </a>
          <a href="#" onMouseOver={() => showLinkSection(5)}>
            More
          </a>
        </div>

        <div className="flex flex-row space-x-6 font-extralight text-sm">
          <p>
            <Person3Outlined className="text-zinc-600" fontSize="small" /> Sign
            in
          </p>
          <p>
            <FavoriteBorderOutlined
              className="text-zinc-600"
              fontSize="small"
            />{" "}
            Favorites
          </p>
          <p>
            <ShoppingCartOutlined className="text-zinc-600" fontSize="small" />{" "}
            Shopping bag(0)
          </p>
        </div>
      </div>

      <div
        onMouseOver={() => showLinkSection}
        onMouseOut={hideLinkSection}
        className={`w-full h-72 ${colors[colorIndex]} absolute ${
          !headerLinks && "hidden"
        }`}
      ></div>
    </div>
  );
};

export default Header;
