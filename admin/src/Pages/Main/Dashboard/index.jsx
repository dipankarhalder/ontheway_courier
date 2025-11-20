import { Link } from "react-router-dom";
import { paths } from "../../../Constant";
import { locationInfo } from "../../../Constant";
import { TopBar } from "../../../Components/Main/TopBar";
import { WelcomeProfile } from "../../../Components/Main/Dashboard/WelcomeProfile";
import { Overview } from "../../../Components/Main/Dashboard/Overview";
import { Revenue } from "../../../Components/Main/Dashboard/Revenue";
import { Earning } from "../../../Components/Main/Dashboard/Earning";
import { StudentDpt } from "../../../Components/Main/Dashboard/StudentDpt";
import { PayrollDept } from "../../../Components/Main/Dashboard/PayrollDept";
import { StudentGp } from "../../../Components/Main/Dashboard/StudentGp";
import { StudentGpOther } from "../../../Components/Main/Dashboard/StudentGpOther";
import { AppMainLayoutCover, AppDashboardCover } from "../style";

export const DashboardPage = () => {
  return (
    <AppMainLayoutCover>
      <TopBar location={locationInfo} />
      <AppDashboardCover>
        <WelcomeProfile />
        <Overview />
        <div className="app_overview_graph">
          <Revenue />
          <Earning />
        </div>
        <div className="app_payroll_graph">
          <StudentDpt />
          <StudentGp />
          <StudentGpOther />
        </div>
        <div className="app_payroll_graph">
          <PayrollDept />
        </div>
        <div className="app_more_btns">
          <Link to={paths.ANALYSIS}>More Informations</Link>
        </div>
      </AppDashboardCover>
    </AppMainLayoutCover>
  );
};
