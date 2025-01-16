import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import Image from "~/components/Image";
const cx = classNames.bind(styles);
function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <Image
        className={cx("avatar")}
        src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/d4579bde29a0510cc919d515af4b35fe~c5_300x300.webp?lk3s=a5d48078&nonce=29205&refresh_token=98c7350c346c0a00cc821d8d5ca982f8&x-expires=1736989200&x-signature=Vk6GdMO791cMqcYpaTSc6Kj2PGE%3D&shp=a5d48078&shcp=c1333099"
        alt="Duongdomic"
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </h4>
        <span className={cx("username")}>nguyenvana</span>
      </div>
    </div>
  );
}

export default AccountItem;
