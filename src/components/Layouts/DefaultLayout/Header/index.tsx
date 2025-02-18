import "./Header.scss";
import Logo_Tiktok from "../../../../asset/images/TikTok_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSignIn,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import { useEffect, useState } from "react";
import "tippy.js/dist/tippy.css";
import PopperWrapper from "../../../Popper/PopperWrapper";
import AccountItem from "../../../AccountItem";
import Button from "../../../Button";
import { Link } from "react-router-dom";

function Header() {
  const [searchResult, setSearchResult] = useState<number[]>([]);
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 2000);
  }, []);

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
        {/* Options */}
        <div className="actions">
          <Button primary>Upload</Button>
          <Button
            primary

            // rightIcon={<FontAwesomeIcon icon={faSignIn} />}
          >
            Log in
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
