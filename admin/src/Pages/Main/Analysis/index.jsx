import { locationInfo } from "../../../Constant";
import { TopBar } from "../../../Components/Main/TopBar";
import { Revenue } from "../../../Components/Main/Dashboard/Revenue";
import { Earning } from "../../../Components/Main/Dashboard/Earning";
import { StudentDpt } from "../../../Components/Main/Dashboard/StudentDpt";
import { PayrollDept } from "../../../Components/Main/Dashboard/PayrollDept";
import { CostDept } from "../../../Components/Main/Dashboard/CostDept";
import { TeachDept } from "../../../Components/Main/Dashboard/TeachDept";
import { StudentGp } from "../../../Components/Main/Dashboard/StudentGp";
import { StudentGpOther } from "../../../Components/Main/Dashboard/StudentGpOther";
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
        <div className="app_payroll_graph">
          <StudentDpt />
          <StudentGp />
          <StudentGpOther />
        </div>
        <div className="app_payroll_graph">
          <PayrollDept />
        </div>
        <div className="app_payroll_graph">
          <CostDept />
        </div>
        <div className="app_payroll_graph">
          <TeachDept />
        </div>
      </AppDashboardCover>
    </AppMainLayoutCover>
  );
};
