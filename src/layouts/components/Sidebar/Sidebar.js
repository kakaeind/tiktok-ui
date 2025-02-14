import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import config from "~/config";
import { HomeIcon,HomeActiveIcon,UserGroupIcon,UserGroupActiveIcon,LiveIcon,LiveActiveIcon } from "~/components/Icons";
import SuggestedAccounts from "~/components/SuggestedAccounts";
import Menu,{MenuItem} from "./Menu";
const cx = classNames.bind(styles);
function Sidebar() {
  return (
    <aside className={cx("wrapper")}>
<Menu>
  <MenuItem title ="For You" to = {config.routes.home} icon = {<HomeIcon/>} activeIcon ={<HomeActiveIcon/>}/>
  <MenuItem title ="Following" to = {config.routes.following} icon = {<UserGroupIcon/>}activeIcon ={<UserGroupActiveIcon/>}/>
  <MenuItem title ="LIVE" to = {config.routes.live} icon = {<LiveIcon/>}activeIcon ={<LiveActiveIcon/>}/>
</Menu>
<SuggestedAccounts label='Suggested accounts'/>
<SuggestedAccounts label='Following'/>
    </aside>
  );
}

export default Sidebar;
