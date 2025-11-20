import { useEffect, useState } from "react";
import { TableInfo } from "../../../Shared/Table";
import { AppMainLayoutCover, AppTableDataInformation } from "../style";
import hostelData from "../../../data/hostel.json";

const pagePaths = [
  { label: "Apps", path: "/" },
  { label: "All Hostel Records", path: "/" },
];

export const HostelPage = () => {
  const handleBtnAction = (action, location) => {
    console.log(`Action: ${action}`, location);
  };

  const handleAddItems = (isopen) => {
    console.log(isopen);
  };

  const hostelTableData =
    hostelData &&
    hostelData.map((item) => ({
      id: item.id,
      student_name: item.student_name,
      room_number: item.room_number,
      bed_number: item.bed_number,
      hostel_name: item.hostel_name,
      admission_date: item.admission_date,
      status: item.status,
    }));

  const tableHeaders =
    hostelTableData.length > 0
      ? Object.keys(hostelTableData[0]).filter((key) => key !== "image")
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
          pageTitle={"Manage Hostel"}
          pagePath={pagePaths}
          data={hostelTableData}
          addTextItem={"Add New Record"}
          handleAddItems={handleAddItems}
          sortableColumns={[
            "id",
            "student_name",
            "hostel_name",
            "room_number",
            "status",
          ]}
          viewBtn={"student_name"}
          enableStatus={true}
          filterableColumns={["hostel_name", "status"]}
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
