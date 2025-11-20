import { useEffect, useState } from "react";
import { TableInfo } from "../../../Shared/Table";
import { AppMainLayoutCover, AppTableDataInformation } from "../style";
import newCandidiatesData from "../../../data/newcandidate.json";

const currentYear = new Date().getFullYear();

const pagePaths = [
  { label: "Apps", path: "/" },
  { label: `New Candidates - ${currentYear}`, path: "/" },
];

export const NewCandidate = () => {
  const handleBtnAction = (action, location) => {
    console.log(`Action: ${action}`, location);
  };

  const handleAddItems = (isopen) => {
    console.log(isopen);
  };

  const newCandidiatesTableData =
    newCandidiatesData &&
    newCandidiatesData.map((item) => ({
      id: item.id,
      name: item.name,
      age: item.age,
      gender: item.gender,
      admission_date: item.admission_date,
      course: item.course,
      contact: item.contact,
    }));

  const tableHeaders =
    newCandidiatesTableData.length > 0
      ? Object.keys(newCandidiatesTableData[0]).filter((key) => key !== "image")
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
        gender: false,
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
          pageTitle={"Manage New Candidate"}
          pagePath={pagePaths}
          data={newCandidiatesTableData}
          addTextItem={"Add New Record"}
          handleAddItems={handleAddItems}
          sortableColumns={["id", "name", "gender", "course"]}
          viewBtn={"name"}
          enableStatus={true}
          filterableColumns={["gender", "course"]}
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
