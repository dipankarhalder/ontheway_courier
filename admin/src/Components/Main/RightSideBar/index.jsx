import { Link } from "react-router-dom";
import { ShortCalender } from "../../../Shared/ShortCalender";
import { Hostel, CheckPlus, CrossTick, Logout } from "../../../Shared/Icons";
import { AppRightSideBar } from "./style";

const today = new Date();
const optionsWeekday = { weekday: "long" };
const optionsDate = { day: "2-digit", month: "long", year: "numeric" };
const weekday = today.toLocaleDateString("en-GB", optionsWeekday);
const date = today.toLocaleDateString("en-GB", optionsDate);
const formattedDate = `${weekday}, ${date}`;

export const RightSideBar = () => {
  return (
    <AppRightSideBar>
      <div className="app_profile_logged_user">
        <div className="app_avt_wrapper">
          <span>
            <img src="/avt.png" alt="profile" />
          </span>
          <div className="app_avatar_info">
            <h6>Himadri C</h6>
            <span>Admin</span>
          </div>
        </div>
        <div className="app_logout">
          <Logout />
        </div>
      </div>
      <ShortCalender />
      <div className="app_schedule_items">
        <h2>Schedules</h2>
        <div className="app_schedule_list_cover">
          <button>
            <CheckPlus />
          </button>
          <h4>{formattedDate}</h4>
          <ul>
            <li>
              <div className="app_sch_time">
                <span>09:00 AM to</span>
                <span>12:00 PM</span>
              </div>
              <div className="app_sch_info">
                <h6>Career development workshop</h6>
                <p>
                  <em className="app_success">Business and Technology</em>
                </p>
                <div className="app_students_row">
                  <Hostel />
                  <p>Thired and Fourth years students</p>
                </div>
              </div>
            </li>
            <li>
              <div className="app_sch_time">
                <span>02:00 AM to</span>
                <span>05:00 PM</span>
              </div>
              <div className="app_sch_info">
                <h6>Guest lecture series</h6>
                <p>
                  <em className="app_secure">Humanities and Social Science</em>
                </p>
                <div className="app_students_row">
                  <Hostel />
                  <p>All students</p>
                </div>
              </div>
            </li>
            <li>
              <div className="app_sch_time">
                <span>05:30 AM to</span>
                <span>06:30 PM</span>
              </div>
              <div className="app_sch_info">
                <h6>Growth development workshop</h6>
                <p>
                  <em className="app_success">Business and Technology</em>
                </p>
                <div className="app_students_row">
                  <Hostel />
                  <p>Thired and Fourth years students</p>
                </div>
              </div>
            </li>
            <li>
              <div className="app_sch_time">
                <span>07:00 AM to</span>
                <span>10:00 PM</span>
              </div>
              <div className="app_sch_info">
                <h6>Movie night under the stars</h6>
                <p>
                  <em className="app_accept">
                    Hosted by the University Film Club
                  </em>
                </p>
                <div className="app_students_row">
                  <Hostel />
                  <p>All students</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="app_recent_activity">
        <h2>
          Recent Activities <Link href="/">more</Link>
        </h2>
        <div className="app_inside_recent_activity">
          <ul>
            <li>
              <CrossTick />
              <div className="app_list_activity">
                <p>
                  Student <b>Sarah Fatima</b> successfully registered for
                  Advanced Calculus and Modern History for the upcoming
                  semester.
                </p>
                <em>10 minutes age</em>
              </div>
            </li>
            <li>
              <CrossTick />
              <div className="app_list_activity">
                <p>
                  Professor <b>Abhi Roy</b> submitted final grades for the
                  course Environmental Science 101.
                </p>
                <em>24 minutes age</em>
              </div>
            </li>
            <li>
              <CrossTick />
              <div className="app_list_activity">
                <p>
                  <b>IT Administrator</b> updated the profile information for
                  the faculty director.
                </p>
                <em>46 minutes age</em>
              </div>
            </li>
            <li>
              <CrossTick />
              <div className="app_list_activity">
                <p>
                  Student <b>Himadry R</b> successfully registered for Cyber
                  Security for the upcoming semester.
                </p>
                <em>1 hour age</em>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </AppRightSideBar>
  );
};
