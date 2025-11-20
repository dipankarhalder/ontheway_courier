import { Outlet, useLocation } from "react-router-dom";
import { AppMainCover, AppBgSec } from "./style";
import { paths } from "../../../Constant";

const backgroundMap = {
  [paths.LOGIN]: "/authbg.png",
  [`/${paths.REGISTER}`]: "/createbg.jpg",
  [`/${paths.OTP}`]: "/otpbg.webp",
  [`/${paths.FORGOT}`]: "/forgotbg.png",
};

export const AuthLayout = () => {
  const location = useLocation();
  const bgImage = backgroundMap[location.pathname];

  return (
    <AppMainCover>
      <Outlet />
      {bgImage && <AppBgSec $image={bgImage} />}
    </AppMainCover>
  );
};
