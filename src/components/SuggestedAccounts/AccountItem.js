import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './SuggestedAccounts.module.scss'
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {

   const renderPreview = (props)=>{
    return(
        <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview/>
                </PopperWrapper>
        </div>
    )
   }
    return ( 
<div>
    <Tippy 

    interactive
    delay={[800,0]}
    offset={[-20,0]}
    placement='bottom'
    render={renderPreview}
    
    >
            <div className={cx('account-item')}>
                <img
                    className={cx('avatar')}
                    src='https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7dc789b28318e5489cfeeb1d39b35969~c5_100x100.jpeg?lk3s=30310797&nonce=56125&refresh_token=a6c47d7ba23644774cb6865876f8bc2c&x-expires=1737010800&x-signature=k4YXUW1Cewkusxm7Ixe7DmKibuo%3D&shp=30310797&shcp=-' 
                    alt=''
                />
                <div className={cx('item-info')}>
                    <p className={cx('nickname')}>
                        <strong>HTH</strong>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}  />
                    </p>
                    <p className={cx('name')}>Hiếu thứ hai</p>
        
                </div>
            </div>
    </Tippy>
</div>
     );
}

AccountItem.propTypes = {}
export default AccountItem;
