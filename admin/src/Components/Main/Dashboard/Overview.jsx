import { Rupees, Profile, Teams, Members } from "../../../Shared/Icons";

export const Overview = () => {
  return (
    <div className="app_init_dashboard">
      <ul>
        <li>
          <div className="app_child_inside app_collection">
            <Rupees />
            <p>Collected Fees</p>
            <div className="app_icontext">
              <h6>Rs. 9,500,010 /-</h6>
              <span>July 2025</span>
            </div>
          </div>
        </li>
        <li>
          <div className="app_child_inside app_expense">
            <Rupees />
            <p>Overall Expenses</p>
            <div className="app_icontext">
              <h6>Rs. 680,230 /-</h6>
              <span>July 2025</span>
            </div>
          </div>
        </li>
        <li>
          <div className="app_child_inside app_teacher">
            <Profile />
            <p>Total Teaching Staff</p>
            <div className="app_icontext">
              <h6>78</h6>
              <span>Inactive: 23</span>
            </div>
          </div>
        </li>
        <li>
          <div className="app_child_inside app_non_teacher">
            <Members />
            <p>Non-Teaching Staff</p>
            <div className="app_icontext">
              <h6>1325</h6>
              <span>Inactive: 421</span>
            </div>
          </div>
        </li>
        <li>
          <div className="app_child_inside app_student">
            <Teams />
            <p>Total Student</p>
            <div className="app_icontext">
              <h6>52,620</h6>
              <span>Inactive: 2349</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
