

import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faSignOut,
  faUser
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css'


import config from '~/config'
import Button from "~/components/Button";
import styles from "./Header.module.scss";
import images from "~/assets/imges";

import Menu from "~/components/Popper/Menu";

import { InboxIcon, MessageIcon,UploadIcon } from "~/components/Icons";
import Image from "~/components/Image";
import Search from "../Search";

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
        },
     
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
  
  const currentUser = true;
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
        <Link to={config.routes.home} className={cx('logo-link')}>
        <img src={images.logo} alt="Tiktok" />
        </Link>
  
{/* Search */}
<Search/>
        <div className={cx("actions")}>
        {currentUser
          ? (
          <>
              <Tippy delay={[0,50]}  content= "Upload video" placement="bottom" >
                <button className={cx('action-btn')}>
                 <UploadIcon/>
  
                </button>
              </Tippy>
            
                            <Tippy delay={[0, 50]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>99</span>
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
                      <Image 
                      className={cx('user-avatar')}  
                      src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7dc789b28318e5489cfeeb1d39b35969~c5_100x100.jpeg?lk3s=30310797&nonce=56125&refresh_token=a6c47d7ba23644774cb6865876f8bc2c&x-expires=1737010800&x-signature=k4YXUW1Cewkusxm7Ixe7DmKibuo%3D&shp=30310797&shcp=-"
                       alt="Nguyen Van A"
                       fallback = "https://yt3.ggpht.com/yti/ANjgQV__W4EBe4PdDE_zdorQyWHSh3B5VSJiYaH1Otsx9fw=s88-c-k-c0x00ffffff-no-rj-mo"
                       />
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
