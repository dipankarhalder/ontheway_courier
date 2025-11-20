import { useEffect, useState } from "react";
import { TableInfo } from "../../../Shared/Table";
import { AppMainLayoutCover, AppTableDataInformation } from "../style";
import schData from "../../../data/scholarship.json";

const pagePaths = [
  { label: "Apps", path: "/" },
  { label: "All Scholarships", path: "/" },
];

export const ScholarshipsPage = () => {
  const handleBtnAction = (action, location) => {
    console.log(`Action: ${action}`, location);
  };

  const handleAddItems = (isopen) => {
    console.log(isopen);
  };

  const schTableData =
    schData &&
    schData.map((item) => ({
      id: item.student_id,
      name: item.name,
      department: item.department,
      scholarship: item.scholarship_name,
      amount: `Rs. ${item.amount}`,
      year: item.award_year,
      approve: item.status,
    }));

  const tableHeaders =
    schTableData.length > 0
      ? Object.keys(schTableData[0]).filter((key) => key !== "image")
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
          pageTitle={"Manage Scholarships"}
          pagePath={pagePaths}
          data={schTableData}
          addTextItem={"Add New Record"}
          handleAddItems={handleAddItems}
          sortableColumns={[
            "id",
            "name",
            "amount",
            "approve",
            "year",
            "scholarship_name",
          ]}
          viewBtn={"name"}
          enableStatus={true}
          filterableColumns={["approve", "scholarship_name", "year"]}
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
