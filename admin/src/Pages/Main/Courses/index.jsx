import { useState } from "react";
import { TableCardInfo } from "../../../Shared/TableCard";
import {
  AppMainLayoutCover,
  AppTableDataInformation,
  AppItemViewCover,
} from "../style";
import courseData from "../../../data/course.json";
import {
  CheckVerify,
  CheckPlus,
  Edit,
  Delete,
  CrossTick,
  Cross,
} from "../../../Shared/Icons";

const pagePaths = [
  { label: "Apps", path: "/" },
  { label: "All Courses", path: "/" },
];

export const CoursesPage = () => {
  const [subj, setSubj] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [openContext, setOpenContext] = useState("Physics");

  const handleAccClick = (context) => setOpenContext(context);

  const handleBtnAction = (action, location) => {
    console.log(`Action: ${action}`, location);
    if (action === "view") {
      setSubj(location);
      setIsOpen(true);
    }
  };

  const handleAddItems = (isopen) => {
    console.log(isopen);
  };

  const courseTableData =
    courseData &&
    courseData.map((item) => ({
      id: item.courseId,
      image: item.image,
      name: item.courseName,
      credits: item.credits,
      status: item.credits % 2 === 0,
      department: item.department,
      HOD: item.instructor,
      semester: item.semester,
    }));

  const renderCourseItem = (
    item,
    isSelected,
    toggleRow,
    onAction,
    enableStatus
  ) => (
    <li key={item.id}>
      <div className="app_checkbox_card">
        <label className="custom_checkbox">
          <input
            type="checkbox"
            checked={isSelected}
            onChange={() => toggleRow(item.id)}
          />
          {isSelected ? (
            <span className="active_check">
              <CrossTick />
            </span>
          ) : (
            <span className="not_active_check">
              <CrossTick />
            </span>
          )}
        </label>
      </div>
      <div className="app_inside_left">
        <span>
          <img src={item.image} alt={item.name} />
        </span>
        <div className="app_inside_main_head">
          <button onClick={() => onAction("view", item)}>{item.name}</button>
          <p>
            {item.id} - {item.semester}
          </p>
        </div>
      </div>
      <div className="app_inside_card">
        <p>
          <span>HOD:</span>
          {item.HOD}
        </p>
      </div>
      <div className="app_btn_items_card">
        <div className="app_status_card">
          <em className={item.status ? "app_status_actv" : "app_status_inactv"}>
            {item.status ? "Active" : "In-active"}
          </em>
        </div>
        <div className="app_btn_card">
          {enableStatus && (
            <button
              className={item.status ? "status" : "update_status"}
              onClick={() => onAction("status", item)}
            >
              {item.status ? <CheckVerify /> : <CheckPlus />}
            </button>
          )}
          <button className="edit" onClick={() => onAction("edit", item)}>
            <Edit />
          </button>
          <button className="delete" onClick={() => onAction("delete", item)}>
            <Delete />
          </button>
        </div>
      </div>
    </li>
  );

  return (
    <>
      <AppMainLayoutCover>
        <AppTableDataInformation>
          <TableCardInfo
            pageTitle={"Manage Courses"}
            pagePath={pagePaths}
            data={courseTableData}
            addTextItem={"Add New Course"}
            handleAddItems={handleAddItems}
            sortableColumns={["id", "name", "credits", "status"]}
            viewBtn={"name"}
            enableStatus={true}
            filterableColumns={["department", "semester", "status"]}
            onAction={handleBtnAction}
            renderItem={renderCourseItem}
          />
        </AppTableDataInformation>
      </AppMainLayoutCover>

      {isOpen && subj.name === "Bachelor of Science" && (
        <AppItemViewCover>
          <div className="internalDetailsContent">
            <div
              className="app_close"
              onClick={() => {
                setSubj("");
                setIsOpen(false);
              }}
            >
              <Cross />
            </div>
            <h2>Course Details</h2>
            <div className="app_detailsSection">
              <h3>Bachelor of Science (Honors) - 4 years</h3>
              <div className="app_details_course">
                <ul>
                  <li>
                    <span>Duration:</span>
                    <p>8 Semesters</p>
                  </li>
                  <li>
                    <span>Eligibility:</span>
                    <p>12th Science</p>
                  </li>
                  <li>
                    <span>Department:</span>
                    <p>Science</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="app_detailsSection">
              <h3>Bachelor of Science - 3 years</h3>
              <div className="app_details_course">
                <ul>
                  <li>
                    <span>Duration:</span>
                    <p>6 Semesters</p>
                  </li>
                  <li>
                    <span>Eligibility:</span>
                    <p>12th Science</p>
                  </li>
                  <li>
                    <span>Department:</span>
                    <p>Science</p>
                  </li>
                </ul>

                <div className="app_sub_list">
                  <span
                    onClick={() => handleAccClick("Physics")}
                    className={openContext === "Physics" ? "actv_item_sub" : ""}
                  >
                    Physics
                  </span>
                  <span
                    onClick={() => handleAccClick("Chemistry")}
                    className={
                      openContext === "Chemistry" ? "actv_item_sub" : ""
                    }
                  >
                    Chemistry
                  </span>
                  <span
                    onClick={() => handleAccClick("Biology")}
                    className={openContext === "Biology" ? "actv_item_sub" : ""}
                  >
                    Biology
                  </span>
                  <span
                    onClick={() => handleAccClick("Maths")}
                    className={openContext === "Maths" ? "actv_item_sub" : ""}
                  >
                    Maths
                  </span>
                </div>

                <div className="details_elem_cover">
                  {openContext === "Physics" && (
                    <div className="main_sub_wrap">
                      <div className="details_cover">
                        <p>Semester: 1 (Physics)</p>
                        <div className="details_table">
                          <div className="details_row">
                            <span>Code</span>
                            <span>Subject</span>
                            <span>Credits</span>
                            <span>Marks</span>
                          </div>
                          <div className="details_row">
                            <p>BSCH 101</p>
                            <p>Environmental Science</p>
                            <p>4</p>
                            <p>100</p>
                          </div>
                          <div className="details_row">
                            <p>BSCH 102</p>
                            <p>
                              Inorganic Chemistry I: Atomic Structure & Chemical
                              Bonding (4 + 4)
                            </p>
                            <p>4</p>
                            <p>100</p>
                          </div>
                        </div>
                      </div>
                      <div className="details_cover">
                        <p>Semester: 2 (Physics)</p>
                        <div className="details_table">
                          <div className="details_row">
                            <span>Code</span>
                            <span>Subject</span>
                            <span>Credits</span>
                            <span>Marks</span>
                          </div>
                          <div className="details_row">
                            <p>BSCH 101</p>
                            <p>Environmental Science</p>
                            <p>4</p>
                            <p>100</p>
                          </div>
                          <div className="details_row">
                            <p>BSCH 102</p>
                            <p>
                              Inorganic Chemistry I: Atomic Structure & Chemical
                              Bonding (4 + 4)
                            </p>
                            <p>4</p>
                            <p>100</p>
                          </div>
                        </div>
                      </div>
                      <div className="details_cover">
                        <p>Semester: 3 (Physics)</p>
                        <div className="details_table">
                          <div className="details_row">
                            <span>Code</span>
                            <span>Subject</span>
                            <span>Credits</span>
                            <span>Marks</span>
                          </div>
                          <div className="details_row">
                            <p>BSCH 101</p>
                            <p>Environmental Science</p>
                            <p>4</p>
                            <p>100</p>
                          </div>
                          <div className="details_row">
                            <p>BSCH 102</p>
                            <p>
                              Inorganic Chemistry I: Atomic Structure & Chemical
                              Bonding (4 + 4)
                            </p>
                            <p>4</p>
                            <p>100</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {openContext === "Chemistry" && (
                    <div className="main_sub_wrap">
                      <div className="details_cover">
                        <p>Semester: 1 (Chemistry)</p>
                        <div className="details_table">
                          <div className="details_row">
                            <span>Code</span>
                            <span>Subject</span>
                            <span>Credits</span>
                            <span>Marks</span>
                          </div>
                          <div className="details_row">
                            <p>BSCH 101</p>
                            <p>Environmental Science</p>
                            <p>4</p>
                            <p>100</p>
                          </div>
                          <div className="details_row">
                            <p>BSCH 102</p>
                            <p>
                              Inorganic Chemistry I: Atomic Structure & Chemical
                              Bonding (4 + 4)
                            </p>
                            <p>4</p>
                            <p>100</p>
                          </div>
                        </div>
                      </div>
                      <div className="details_cover">
                        <p>Semester: 2 (Chemistry)</p>
                        <div className="details_table">
                          <div className="details_row">
                            <span>Code</span>
                            <span>Subject</span>
                            <span>Credits</span>
                            <span>Marks</span>
                          </div>
                          <div className="details_row">
                            <p>BSCH 101</p>
                            <p>Environmental Science</p>
                            <p>4</p>
                            <p>100</p>
                          </div>
                          <div className="details_row">
                            <p>BSCH 102</p>
                            <p>
                              Inorganic Chemistry I: Atomic Structure & Chemical
                              Bonding (4 + 4)
                            </p>
                            <p>4</p>
                            <p>100</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {openContext === "Biology" && (
                    <div className="main_sub_wrap">
                      <div className="details_cover">
                        <p>Semester: 1 (Biology)</p>
                        <div className="details_table">
                          <div className="details_row">
                            <span>Code</span>
                            <span>Subject</span>
                            <span>Credits</span>
                            <span>Marks</span>
                          </div>
                          <div className="details_row">
                            <p>BSCH 101</p>
                            <p>Environmental Science</p>
                            <p>4</p>
                            <p>100</p>
                          </div>
                          <div className="details_row">
                            <p>BSCH 102</p>
                            <p>
                              Inorganic Chemistry I: Atomic Structure & Chemical
                              Bonding (4 + 4)
                            </p>
                            <p>4</p>
                            <p>100</p>
                          </div>
                        </div>
                      </div>
                      <div className="details_cover">
                        <p>Semester: 2 (Biology)</p>
                        <div className="details_table">
                          <div className="details_row">
                            <span>Code</span>
                            <span>Subject</span>
                            <span>Credits</span>
                            <span>Marks</span>
                          </div>
                          <div className="details_row">
                            <p>BSCH 101</p>
                            <p>Environmental Science</p>
                            <p>4</p>
                            <p>100</p>
                          </div>
                          <div className="details_row">
                            <p>BSCH 102</p>
                            <p>
                              Inorganic Chemistry I: Atomic Structure & Chemical
                              Bonding (4 + 4)
                            </p>
                            <p>4</p>
                            <p>100</p>
                          </div>
                        </div>
                      </div>
                      <div className="details_cover">
                        <p>Semester: 3 (Biology)</p>
                        <div className="details_table">
                          <div className="details_row">
                            <span>Code</span>
                            <span>Subject</span>
                            <span>Credits</span>
                            <span>Marks</span>
                          </div>
                          <div className="details_row">
                            <p>BSCH 101</p>
                            <p>Environmental Science</p>
                            <p>4</p>
                            <p>100</p>
                          </div>
                          <div className="details_row">
                            <p>BSCH 102</p>
                            <p>
                              Inorganic Chemistry I: Atomic Structure & Chemical
                              Bonding (4 + 4)
                            </p>
                            <p>4</p>
                            <p>100</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {openContext === "Maths" && (
                    <div className="main_sub_wrap">
                      <div className="details_cover">
                        <p>Semester: 1 (Maths)</p>
                        <div className="details_table">
                          <div className="details_row">
                            <span>Code</span>
                            <span>Subject</span>
                            <span>Credits</span>
                            <span>Marks</span>
                          </div>
                          <div className="details_row">
                            <p>BSCH 101</p>
                            <p>Environmental Science</p>
                            <p>4</p>
                            <p>100</p>
                          </div>
                          <div className="details_row">
                            <p>BSCH 102</p>
                            <p>
                              Inorganic Chemistry I: Atomic Structure & Chemical
                              Bonding (4 + 4)
                            </p>
                            <p>4</p>
                            <p>100</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </AppItemViewCover>
      )}

      {isOpen && subj.name !== "Bachelor of Science" && (
        <AppItemViewCover>
          <div className="internalDetailsContent">
            <div
              className="app_close"
              onClick={() => {
                setSubj("");
                setIsOpen(false);
              }}
            >
              <Cross />
            </div>
            <h2>Course Details</h2>
            <div className="app_detailsSection">
              <h3>Bachelor of Computer Science</h3>
              <div className="app_details_course">
                <ul>
                  <li>
                    <span>Stream:</span>
                    <p>Computer Science, Information Technology</p>
                  </li>
                  <li>
                    <span>Duration:</span>
                    <p>6 Semesters</p>
                  </li>
                  <li>
                    <span>Eligibility:</span>
                    <p>12th PCM</p>
                  </li>
                  <li>
                    <span>Department:</span>
                    <p>Science</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </AppItemViewCover>
      )}
    </>
  );
};
