import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/components/Popper";

import MenuItem from "./MenuItem";
import Header from "./Header";
import styles from "./Menu.module.scss";
import { useState } from "react";
import { data } from "react-router-dom";

const cx = classNames.bind(styles);

const defaultfn = () => {};
function Menu({ children, items = [], onChange = defaultfn }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParaent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParaent) {
              setHistory(prev => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  return (
    <Tippy
      delay={[0, 500]}
      interactive
      placement="bottom-end"
      render={attrs =>
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx("menu-popper")}>
            {history.length > 1 &&
              <Header
                title="Language"
                onBack={() => {
                  setHistory(prev => prev.slice(0, prev.length - 1));
                }}
              />}
            {renderItems()}
          </PopperWrapper>
        </div>}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
