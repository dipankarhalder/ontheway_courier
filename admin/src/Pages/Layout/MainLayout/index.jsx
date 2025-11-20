import { Outlet } from "react-router-dom";
import { locationInfo } from "../../../Constant";
import { TopBar } from "../../../Components/Main/TopBar";
import { Sidebar } from "../../../Components/Main/Sidebar";
import { RightSideBar } from "../../../Components/Main/RightSideBar";
import { AppLayoutCover, AppContentArea } from "./style";

export const MainLayout = () => {
  return (
    <AppLayoutCover>
      <Sidebar />
      <AppContentArea>
        <TopBar location={locationInfo} />
        <Outlet />
      </AppContentArea>
      <RightSideBar />
    </AppLayoutCover>
  );
};
