import { useEffect, useState } from "react";
import { TableInfo } from "../../../Shared/Table";
import { AppMainLayoutCover, AppTableDataInformation } from "../style";
import placementData from "../../../data/placement.json";

const pagePaths = [
  { label: "Apps", path: "/" },
  { label: "All Placement Records", path: "/" },
];

export const CareerPage = () => {
  const handleBtnAction = (action, location) => {
    console.log(`Action: ${action}`, location);
  };

  const handleAddItems = (isopen) => {
    console.log(isopen);
  };

  const placementTableData =
    placementData &&
    placementData.map((item) => ({
      id: item.id,
      name: item.name,
      department: item.department,
      company: item.company,
      package_lpa: item.package_lpa,
      status: item.status === "Placed" ? true : false,
    }));

  const tableHeaders =
    placementTableData.length > 0
      ? Object.keys(placementTableData[0]).filter((key) => key !== "image")
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
          pageTitle={"Manage Placements"}
          pagePath={pagePaths}
          data={placementTableData}
          addTextItem={"Add New Record"}
          handleAddItems={handleAddItems}
          sortableColumns={["id", "name", "company", "department", "status"]}
          viewBtn={"name"}
          enableStatus={true}
          filterableColumns={["department", "company", "status"]}
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
