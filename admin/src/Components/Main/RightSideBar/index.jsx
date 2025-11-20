import { useNavigate } from "react-router-dom";
import { paths } from "../../../Constant";
import { Logout } from "../../../Shared/Icons";
import { AppRightSideBar } from "./style";

export const RightSideBar = () => {
  const navigate = useNavigate();

  return (
    <AppRightSideBar>
      <div className="app_profile_logged_user">
        <div className="app_avt_wrapper">
          <span>
            <img src="/4.png" alt="profile" />
          </span>
          <div className="app_avatar_info">
            <h6>Admin</h6>
            <span>Role: Admin</span>
          </div>
        </div>
        <div className="app_logout" onClick={() => navigate(paths.LOGIN)}>
          <Logout />
        </div>
      </div>
    </AppRightSideBar>
  );
};
