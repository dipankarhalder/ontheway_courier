import { useEffect, useState } from "react";
import { TableInfo } from "../../../Shared/Table";
import { AppMainLayoutCover, AppTableDataInformation } from "../style";
import reportData from "../../../data/report.json";

const pagePaths = [
  { label: "Apps", path: "/" },
  { label: "Reports Information", path: "/" },
];

export const ReportsPage = () => {
  const handleBtnAction = (action, location) => {
    console.log(`Action: ${action}`, location);
  };

  const handleAddItems = (isopen) => {
    console.log(isopen);
  };

  const reportTableData =
    reportData &&
    reportData.map((item) => ({
      id: item.reportId,
      title: item.reportTitle,
      s_id: item.studentId,
      student_name: item.studentName,
      course: item.course,
      report_type: item.reportType,
      date: item.date,
      Info: item.status,
    }));

  const tableHeaders =
    reportTableData.length > 0
      ? Object.keys(reportTableData[0]).filter((key) => key !== "image")
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
        s_id: false,
        report_type: false,
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
          pageTitle={"Manage Reports"}
          pagePath={pagePaths}
          data={reportTableData}
          addTextItem={"Add New Record"}
          handleAddItems={handleAddItems}
          sortableColumns={["title", "course", "report_type", "status"]}
          viewBtn={"title"}
          enableStatus={true}
          filterableColumns={["course", "report_type", "status"]}
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
