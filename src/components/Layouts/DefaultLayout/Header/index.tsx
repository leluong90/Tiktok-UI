import "./Header.scss";
import Logo_Tiktok from "../../../../asset/images/TikTok_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faCircleXmark,
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faMagnifyingGlass,
  faSignOut,
  faSpinner,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import Tooltip from "@tippyjs/react";
import { useEffect, useState } from "react";
import "tippy.js/dist/tippy.css";
import PopperWrapper from "../../../Popper/PopperWrapper";
import AccountItem from "../../../AccountItem";
import Button from "../../../Button";
import Menu, { MenuItemsProps } from "../../../Popper/Menu";
import Icon from "../../../Icon";
import Image from "../../../Image";

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
  const [searchResult, setSearchResult] = useState<number[]>([]);
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
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 2000);
  }, []);

  const handleMenuChange = (menuItem: MenuItemsProps) => {
    console.log(menuItem);
  };

  return (
    <header className="wrapper">
      <div className="inner">
        {/* Logo */}
        <div className="logo">
          <img src={Logo_Tiktok} alt="logo_tiktok" />
        </div>
        {/* Search */}
        <Tippy
          interactive={true}
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className="search-result" tabIndex={-1} {...attrs}>
              <PopperWrapper>
                <h4 className="search-title">Account</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className="search">
            <input
              className="search-input"
              placeholder="Search accounts and videos "
              spellCheck={false}
            />

            <button className="clear-btn">
              {/* Clear Icon */}
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            {/* Loading Icon */}
            <FontAwesomeIcon className="loading-btn" icon={faSpinner} />

            <button className="search-btn">
              {/* Search Icon */}
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
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
              <Button primary>Log in</Button>
            </>
          )}
          <Menu
            items={currentUser ? userMenu : MenuData}
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
