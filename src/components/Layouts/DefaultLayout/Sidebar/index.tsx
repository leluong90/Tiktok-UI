import config from "../../../../config";
import Icon from "../../../Icon";
import SuggestedAccount from "../../../SuggestedAccount";
import Menu from "./Menu/Menu";
import MenuItem from "./Menu/MenuItem";
import "./Sidebar.scss";
function Sidebar() {
  return (
    <div className="sidebar">
      <Menu>
        <MenuItem
          title="For You"
          to={config.routes.home}
          icon={<Icon icon="home" />}
        />
        <MenuItem
          title="Following"
          to={config.routes.following}
          icon={<Icon icon="following" />}
        />
        <MenuItem
          title="Live"
          to={config.routes.live}
          icon={<Icon icon="live" />}
        />
      </Menu>
      <hr className="line" />

      <SuggestedAccount label="Suggest accounts" />
      <hr className="line" />

      <SuggestedAccount label="Following Accounts" />
      <hr className="line" />
    </div>
  );
}

export default Sidebar;
