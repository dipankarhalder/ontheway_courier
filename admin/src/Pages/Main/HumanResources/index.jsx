import { useEffect, useState } from "react";
import { TableInfo } from "../../../Shared/Table";
import { AppMainLayoutCover, AppTableDataInformation } from "../style";
import hrData from "../../../data/hr.json";

const pagePaths = [
  { label: "Apps", path: "/" },
  { label: "All Human Resource Info", path: "/" },
];

export const HumanResourcesPage = () => {
  const handleBtnAction = (action, location) => {
    console.log(`Action: ${action}`, location);
  };

  const handleAddItems = (isopen) => {
    console.log(isopen);
  };

  const hrTableData =
    hrData &&
    hrData.map((item) => ({
      id: item.employeeId,
      name: item.name,
      designation: item.designation,
      department: item.department,
      joining_date: item.joiningDate,
      email: item.email,
      phone: item.phone,
      employment_type: item.employmentType,
      status: item.status,
    }));

  const tableHeaders =
    hrTableData.length > 0
      ? Object.keys(hrTableData[0]).filter((key) => key !== "image")
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
        email: false,
        employment_type: false,
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
          pageTitle={"Manage Human Resource"}
          pagePath={pagePaths}
          data={hrTableData}
          addTextItem={"Add New Notice"}
          handleAddItems={handleAddItems}
          sortableColumns={["name", "department", "employment_type", "status"]}
          viewBtn={"name"}
          enableStatus={true}
          filterableColumns={["department", "employment_type", "status"]}
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
