import React, { useEffect, useState, useRef } from "react";
import "../Header.scss";
import AccountItem, { UserProps } from "../../../../AccountItem";
import PopperWrapper from "../../../../Popper/PopperWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import * as searchServices from "../../../../../services/searchService"
import useDebounce from "../../../../../hooks/useDebounce";

type SearchProps = {};

const Search: React.FC<SearchProps> = ({}) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchResult, setSearchResult] = useState<UserProps[]>([]);
  const [showResult, setShowResult] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const debounced = useDebounce<string>(searchValue, 500);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([]);
      return;
    }
    setLoading(true);
    const fetchAPI = async () => {
      setLoading(true);
      const result = await searchServices.search(debounced);
      setSearchResult(result);
      setLoading(false);
    };
    fetchAPI();
  }, [debounced]);

  const handleClear = () => {
    setSearchValue("");
    inputRef.current?.focus();
  };

  const handleHideResult = () => {
    setShowResult(false);
    console.log("showResult ", showResult);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.startsWith(" ")) return;
    setSearchValue(value);
  };

  //   useEffect(() => {
  //     console.log("showResult đã thay đổi:", showResult);
  //   }, [showResult]); // Khi showResult thay đổi, console.log sẽ chạy

  return (
    <div>
      <Tippy
        interactive={true}
        visible={showResult && searchResult.length > 0}
        render={(attrs) => (
          <div className="search-result" tabIndex={-1} {...attrs}>
            <PopperWrapper>
              <h4 className="search-title">Account</h4>
              {searchResult.map((result) => (
                <AccountItem key={result.id} data={result} />
              ))}
            </PopperWrapper>
          </div>
        )}
        onClickOutside={() => handleHideResult()}
      >
        <div className="search">
          <input
            ref={inputRef}
            value={searchValue}
            className="search-input"
            placeholder="Search accounts and videos "
            spellCheck={false}
            onChange={handleChange}
            onFocus={() => setShowResult(true)}
          />

          {/* Clear Icon */}
          {!!searchValue && !loading && (
            <button className="clear-btn" onClick={handleClear}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}

          {/* Loading Icon */}
          {loading && (
            <FontAwesomeIcon className="loading-btn" icon={faSpinner} />
          )}

          <button
            className="search-btn"
            onMouseDown={(e) => e.preventDefault()}
          >
            {/* Search Icon */}
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </Tippy>
    </div>
  );
};

export default Search;
