import { Link } from "react-router-dom";
import "./Header.scss";
import Logo_Tiktok from "../../../../asset/images/TikTok_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faSignOut,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Tooltip from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import Button from "../../../Button";
import Menu, { MenuItemsProps } from "../../../Popper/Menu";
import Icon from "../../../Icon";
import Image from "../../../Image";
import Search from "./Search";
import config from "../../../../config";

const MenuData: MenuItemsProps[] = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "English",
    subMenu: {
      title: "Language",
      subMenu: [
        {
          code: "en",
          title: "English",
        },
        {
          code: "vi",
          title: "Vietnamese",
        },

      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard shortcuts",
  },
];

function Header() {
  const currentUser = true;
  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "View profile",
      to: "/@minh",
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: "Get coins",
      to: "/coins",
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: "Settings",
      to: "/settings",
    },
    ...MenuData,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: "Log out",
      to: "/logout",
    },
  ];

  const handleMenuChange = (menuItem: MenuItemsProps) => {
    console.log(menuItem);
  };

  return (
    <header className="wrapper">
      <div className="inner">
        {/* Logo */}
        <Link to={config.routes.home} className="logo">
          <img src={Logo_Tiktok} alt="logo_tiktok" />
        </Link>
        {/* Search */}
        <Search />
        {/* Actions */}
        <div className="actions">
          {currentUser ? (
            <>
              <Tooltip
                delay={[0, 200]}
                content="Upload video"
                placement="bottom"
              >
                <button className="actions-btn">
                  <Icon icon="upload" />
                </button>
              </Tooltip>
              <Tooltip delay={[0, 200]} content="Message" placement="bottom">
                <button className="actions-btn">
                  <Icon icon="message" />
                </button>
              </Tooltip>
              <Tooltip delay={[0, 200]} content="Share" placement="bottom">
                <button className="actions-btn">
                  <Icon icon="share" />
                </button>
              </Tooltip>
            </>
          ) : (
            <>
              <Button primary>Upload</Button>
              <Button primary to="/login">Log in</Button>
            </>
          )}
          <Menu
            items={currentUser ? userMenu : MenuData}
            hideOnClick={false}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <Image
                className="user-avatar"
                alt="Nguyen Van A"
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/e7f01652fd16a08d7212306d7030465d~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&nonce=34658&refresh_token=c8d80fdb911dc1e1562240491789fee1&x-expires=1740650400&x-signature=nR03c1UokKbpHect6yBHegUCugo%3D&idc=my&ps=13740610&shcp=81f88b70&shp=a5d48078&t=4d5b0474"
              />
            ) : (
              <button className="more-btn">
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
