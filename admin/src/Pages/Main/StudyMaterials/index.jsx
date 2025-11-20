import { TableCardInfo } from "../../../Shared/TableCard";
import { AppMainLayoutCover, AppTableDataInformation } from "../style";
import studyMatData from "../../../data/studymat.json";
import {
  CheckVerify,
  CheckPlus,
  Edit,
  Delete,
  CrossTick,
} from "../../../Shared/Icons";

const pagePaths = [
  { label: "Apps", path: "/" },
  { label: "All Study Materials", path: "/" },
];

export const StudyMaterialsPage = () => {
  const handleBtnAction = (action, location) => {
    console.log(`Action: ${action}`, location);
  };

  const handleAddItems = (isopen) => {
    console.log(isopen);
  };

  const studyTableData =
    studyMatData &&
    studyMatData.map((item) => ({
      id: item.courseId,
      image: item.image,
      name: item.courseName,
      credits: item.credits,
      status: item.credits % 2 === 0,
      department: item.department,
      HOD: item.instructor,
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
          <h3>{item.name}</h3>
          <p>{item.id}</p>
        </div>
      </div>
      <div className="app_inside_card">
        <p>
          <span>Dept.:</span>
          {item.department}
        </p>
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
    <AppMainLayoutCover>
      <AppTableDataInformation>
        <TableCardInfo
          pageTitle={"Manage Study Materials"}
          pagePath={pagePaths}
          data={studyTableData}
          addTextItem={"New Study Materials"}
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
  );
};
