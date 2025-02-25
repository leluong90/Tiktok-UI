import "./Menu.scss";
import Tippy from "@tippyjs/react/headless";
import { ReactElement, ReactNode, useState } from "react";

import PopperWrapper from "../PopperWrapper";
import MenuItem from "./MenuItem";
import HeaderMenu from "./HeaderMenu";

type SubMenuProps = {
  title: string;
  subMenu: { code: string; title: string }[];
};

type MenuItemsProps = {
  icon: ReactNode;
  title: string;
  to?: string;
  subMenu?: SubMenuProps;
};

type MenuProps = {
  children: ReactElement;
  items: MenuItemsProps[];
  onChange?: (item: MenuItemsProps) => void;
};

const Menu = ({ children, items, onChange }: MenuProps) => {
  const [history, setHistory] = useState<MenuItemsProps[][]>([items]);
  const currentMenu = history[history.length - 1];
  const renderItems = () => {
    return currentMenu.map((item, index) => {
      const isParent = !!item.subMenu;

      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [
                ...prev,
                item.subMenu?.subMenu.map((sub) => ({
                  ...sub,
                  icon: null, // để icon = null để tránh lỗi kiểu
                })) || [],
              ]);
            } else {
              onChange?.(item)
            }
          }}
        />
      );
    });
  };
  return (
    <Tippy
      interactive
      delay={[0, 500]}
      offset={[10,10]}
      placement="bottom-end"
      render={(attrs) => (
        <div className="menu-list" tabIndex={-1} {...attrs}>
          <PopperWrapper>
            {history.length > 1 && (
              <HeaderMenu
                title="language"
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
      onHidden={ () => setHistory(prev => prev.slice(0,1))}
    >
      {children}
    </Tippy>
  );
};

export type { MenuItemsProps, MenuProps };
export default Menu;
