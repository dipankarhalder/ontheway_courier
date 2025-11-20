import { Rupees, Profile, Teams, Members } from "../../../Shared/Icons";

export const Overview = () => {
  return (
    <div className="app_init_dashboard">
      <ul>
        <li>
          <div className="app_child_inside app_collection">
            <Rupees />
            <p>Total Revenue</p>
            <div className="app_icontext">
              <h6>Rs. 5,500,010 /-</h6>
              <span>Jan - Aug 2025</span>
            </div>
          </div>
        </li>
        <li>
          <div className="app_child_inside app_expense">
            <Rupees />
            <p>Total Expenses</p>
            <div className="app_icontext">
              <h6>Rs. 460,230 /-</h6>
              <span>Jan - Aug 2025</span>
            </div>
          </div>
        </li>
        <li>
          <div className="app_child_inside app_teacher">
            <Profile />
            <p>New User</p>
            <div className="app_icontext">
              <h6>34</h6>
              <span>Apr - Aug 2025</span>
            </div>
          </div>
        </li>
        <li>
          <div className="app_child_inside app_non_teacher">
            <Members />
            <p>Total Rider</p>
            <div className="app_icontext">
              <h6>1134</h6>
              <span>Inactive: 214</span>
            </div>
          </div>
        </li>
        <li>
          <div className="app_child_inside app_student">
            <Teams />
            <p>Total Customer &amp; Rider</p>
            <div className="app_icontext">
              <h6>23,620</h6>
              <span>Inactive: 3249</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
