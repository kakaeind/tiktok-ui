import {  useEffect, useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faCircleXmark,
  faCloudUpload,
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faMagnifyingGlass,
  faSignOut,
  faSpinner,
  faUser
} from "@fortawesome/free-solid-svg-icons";

import Tippy from "@tippyjs/react";
import HeadlessTippy from "@tippyjs/react/headless";
import 'tippy.js/dist/tippy.css'
import Button from "~/components/Button";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import styles from "./Header.module.scss";
import images from "~/assets/imges";
import AccountItem from "~/components/Accountitem";
import Menu from "~/components/Popper/Menu";


const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "English",
    children: {
    title: "Language",
      data: [
        {
          type: "Language",
          code: "en",
          title: "English"
        },
        {
          type: "Language",
          code: "vi",
          title: "Tiếng Việt"
        }
      ]
    }
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Feedback and help",
    to: "/feedback"
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard shortcuts"
  }
];

function Header() {
  const [searchResult, setSearchResult] = useState([]);
  
  const currentUser = true;

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);
  // Handle Logic
  const handleMenuChange = menuItem => {
    switch (menuItem.type) {
      case "language":
        //Handle change language
        break;
      default:
    }
  };

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "View profile",
      to: "/@HTH"
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: "Get coins",
      to: "/coin"
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: "Settings",
      to: "/settings"
    },
...MENU_ITEMS,
{
  icon: <FontAwesomeIcon icon={faSignOut} />,
  title: "Log out",
  to: "/logout",
  separate: true,
  
},
  ]
  
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        {/* logo*/}
        <img src={images.logo} alt="Tiktok" />

        <HeadlessTippy
          interactive
          visible={searchResult.length > 0}
          render={attrs =>
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx("search-title")}>Account</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>}
        >
          <div className={cx("search")}>
            <input placeholder="Search account and videos" spellCheck={false} />
            <button className={cx("clear")}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />

            <button className={cx("search-btn")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </HeadlessTippy>

        <div className={cx("actions")}>
        {currentUser
          ? (
          <>
              <Tippy delay={[0,200]}  content= "Upload video" placement="bottom" >
                <button className={cx('action-btn')}>
                  <FontAwesomeIcon icon = {faCloudUpload}/>
                </button>
              </Tippy>

          </>
            ): (
            <>
                <Button text>Upload</Button>
                <Button primary>Log in</Button>
  
            </>
            )}

                  <Menu items={currentUser ? userMenu: MENU_ITEMS} onChange={handleMenuChange}>
                    {currentUser ? (
                      <img 
                      className={cx('user-avatar')}  
                      src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7dc789b28318e5489cfeeb1d39b35969~c5_100x100.jpeg?lk3s=30310797&nonce=56125&refresh_token=a6c47d7ba23644774cb6865876f8bc2c&x-expires=1737010800&x-signature=k4YXUW1Cewkusxm7Ixe7DmKibuo%3D&shp=30310797&shcp=-"
                       alt="Nguyen Van A"/>
                    ):(

                  <button className={cx("more-btn")}>
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
