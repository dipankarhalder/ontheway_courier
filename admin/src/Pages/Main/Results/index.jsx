import { useEffect, useState } from "react";
import { TableInfo } from "../../../Shared/Table";
import { AppMainLayoutCover, AppTableDataInformation } from "../style";
import resultData from "../../../data/result.json";

const pagePaths = [
  { label: "Apps", path: "/" },
  { label: "All Results", path: "/" },
];

export const ResultsPage = () => {
  const handleBtnAction = (action, location) => {
    console.log(`Action: ${action}`, location);
  };

  const handleAddItems = (isopen) => {
    console.log(isopen);
  };

  const resultTableData =
    resultData &&
    resultData.map((item) => ({
      id: item.student_id,
      name: item.name,
      department: item.department,
      sem: item.semester,
      marks: item.total_marks,
      CGPA: item.percentage,
      result: item.result_status,
      year: item.award_year,
    }));

  const tableHeaders =
    resultTableData.length > 0
      ? Object.keys(resultTableData[0]).filter((key) => key !== "image")
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
          pageTitle={"Manage Results"}
          pagePath={pagePaths}
          data={resultTableData}
          addTextItem={"Add New Record"}
          handleAddItems={handleAddItems}
          sortableColumns={["id", "name", "department", "result", "CGPA"]}
          viewBtn={"name"}
          enableStatus={true}
          filterableColumns={["department", "result", "year"]}
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
