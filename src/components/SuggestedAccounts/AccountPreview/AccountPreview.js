import classNames from "classnames/bind";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from "~/components/Button";
import styles from './AccountPreview.module.scss'

const cx = classNames.bind(styles)

function AccountPreview() {
    return ( 
        <div className={cx('wrapper')}>
         
            <div className={cx('header')}>
            <img className={cx('avatar')} 
            src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7dc789b28318e5489cfeeb1d39b35969~c5_100x100.jpeg?lk3s=30310797&nonce=56125&refresh_token=a6c47d7ba23644774cb6865876f8bc2c&x-expires=1737010800&x-signature=k4YXUW1Cewkusxm7Ixe7DmKibuo%3D&shp=30310797&shcp=-" 
            alt=""/>
            <Button className={cx('follow-btn')} primary> Follow</Button>
            </div>
            <div className={cx('body')}>
 <p className={cx('nickname')}>
                        <strong>HTH</strong>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}  />
                    </p>
                    <p className={cx('name')}>Hiếu thứ hai</p>
                    <p className={cx('analytics')}>
                        <strong className={cx('value')}>8.2M </strong>
                        <span className={cx('label')}>Followers</span>
                        <strong className={cx('value')}>8.2M </strong>
                        <span className={cx('label')}>Like</span>
                    </p>
            </div>
        </div>
     );
}

export default AccountPreview;