import { useEffect, useState } from "react";
import { TableInfo } from "../../../Shared/Table";
import { AppMainLayoutCover, AppTableDataInformation } from "../style";
import committeeData from "../../../data/committee.json";

const pagePaths = [
  { label: "Apps", path: "/" },
  { label: "All Authority and Committee", path: "/" },
];

export const AuthorityPage = () => {
  const handleBtnAction = (action, location) => {
    console.log(`Action: ${action}`, location);
  };

  const handleAddItems = (isopen) => {
    console.log(isopen);
  };

  const committeeTableData =
    committeeData &&
    committeeData.map((item) => ({
      id: item.id,
      name: item.name,
      position: item.position,
      department: item.department_or_committee,
      term_start: item.term_start,
      term_end: item.term_end,
      status: item.status,
    }));

  const tableHeaders =
    committeeTableData.length > 0
      ? Object.keys(committeeTableData[0]).filter((key) => key !== "image")
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
          pageTitle={"Manage Authority and Committee"}
          pagePath={pagePaths}
          data={committeeTableData}
          addTextItem={"Add New Record"}
          handleAddItems={handleAddItems}
          sortableColumns={["id", "name", "position", "department", "status"]}
          viewBtn={"name"}
          enableStatus={true}
          filterableColumns={["position", "department", "status"]}
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
