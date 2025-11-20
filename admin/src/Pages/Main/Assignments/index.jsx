import { useEffect, useState } from "react";
import { TableInfo } from "../../../Shared/Table";
import { AppMainLayoutCover, AppTableDataInformation } from "../style";
import assignmentData from "../../../data/assignment.json";

const pagePaths = [
  { label: "Apps", path: "/" },
  { label: "All Assignments", path: "/" },
];

export const AssignmentPage = () => {
  const handleBtnAction = (action, location) => {
    console.log(`Action: ${action}`, location);
  };

  const handleAddItems = (isopen) => {
    console.log(isopen);
  };

  const assignTableData =
    assignmentData &&
    assignmentData.map((item) => ({
      id: item.assignmentId,
      sid: item.studentId,
      name: item.studentName,
      course_id: item.courseId,
      title: item.assignmentTitle,
      submission_date: item.submissionDate,
      submission_status: item.status,
      grade: item.grade ? item.grade : "-",
    }));

  const tableHeaders =
    assignTableData.length > 0
      ? Object.keys(assignTableData[0]).filter((key) => key !== "image")
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
        sid: false,
        course_id: false,
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
          pageTitle={"Manage Assignments"}
          pagePath={pagePaths}
          data={assignTableData}
          addTextItem={"Add New Record"}
          handleAddItems={handleAddItems}
          sortableColumns={[
            "id",
            "name",
            "course_id",
            "title",
            "submission_status",
            "grade",
          ]}
          viewBtn={"name"}
          enableStatus={true}
          filterableColumns={["submission_status", "grade"]}
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
