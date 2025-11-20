import { locationInfo } from "../../../Constant";
import { TopBar } from "../../../Components/Main/TopBar";
import { Revenue } from "../../../Components/Main/Dashboard/Revenue";
import { Earning } from "../../../Components/Main/Dashboard/Earning";
import { AppMainLayoutCover, AppDashboardCover } from "../style";

export const Analysis = () => {
  return (
    <AppMainLayoutCover>
      <TopBar location={locationInfo} />
      <AppDashboardCover>
        <div className="app_analisys_heading">
          <h2>All Analysis Informations</h2>
        </div>
        <div className="app_overview_graph">
          <Revenue />
          <Earning />
        </div>
      </AppDashboardCover>
    </AppMainLayoutCover>
  );
};
