import { useEffect, useState } from "react";
import { TableInfo } from "../../../Shared/Table";
import { AppMainLayoutCover, AppTableDataInformation } from "../style";
import attendData from "../../../data/attend.json";

const pagePaths = [
  { label: "Apps", path: "/" },
  { label: "All Attendances", path: "/" },
];

export const AttendancePage = () => {
  const handleBtnAction = (action, location) => {
    console.log(`Action: ${action}`, location);
  };

  const handleAddItems = (isopen) => {
    console.log(isopen);
  };

  const attendTableData =
    attendData &&
    attendData.map((item) => ({
      id: item.student_id,
      name: item.name,
      department: item.department,
      semester: item.semester,
      "01/07/2025": item.attendance[0]?.status,
      "02/07/2025": item.attendance[1]?.status,
      "03/07/2025": item.attendance[2]?.status,
    }));

  const tableHeaders =
    attendTableData.length > 0
      ? Object.keys(attendTableData[0]).filter((key) => key !== "image")
      : [];

  const [visibleColumns, setVisibleColumns] = useState(() =>
    tableHeaders.reduce((acc, col) => {
      acc[col] = true;
      return acc;
    }, {})
  );

  useEffect(() => {
    const handleResize = () => {
      setVisibleColumns((prev) => ({
        ...prev,
        id: false,
      }));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <AppMainLayoutCover>
      <AppTableDataInformation>
        <TableInfo
          pageTitle={"Manage Attendances"}
          pagePath={pagePaths}
          data={attendTableData}
          addTextItem={"Add New Record"}
          handleAddItems={handleAddItems}
          sortableColumns={["name", "department", "semester"]}
          viewBtn={"name"}
          enableStatus={true}
          filterableColumns={["semester", "department"]}
          visibleColumns={visibleColumns}
          onToggleColumn={(col) =>
            setVisibleColumns((prev) => ({
              ...prev,
              [col]: !prev[col],
            }))
          }
          onAction={handleBtnAction}
        />
      </AppTableDataInformation>
    </AppMainLayoutCover>
  );
};
