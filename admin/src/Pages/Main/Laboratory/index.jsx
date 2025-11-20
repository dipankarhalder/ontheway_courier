import { useEffect, useState } from "react";
import { TableInfo } from "../../../Shared/Table";
import { AppMainLayoutCover, AppTableDataInformation } from "../style";
import labData from "../../../data/lab.json";

const pagePaths = [
  { label: "Apps", path: "/" },
  { label: "Labratory Informations", path: "/" },
];

export const LaboratoryPage = () => {
  const handleBtnAction = (action, location) => {
    console.log(`Action: ${action}`, location);
  };

  const handleAddItems = (isopen) => {
    console.log(isopen);
  };

  const labTableData =
    labData &&
    labData.map((item) => ({
      id: item.item_id,
      name: item.item_name,
      type: item.type,
      stock: item.stock_quantity,
      expiry_date: item.expiry_date ? item.expiry_date : "-",
      class: item.assigned_class,
      teacher: item.teacher_name,
      lab_section: item.lab_section,
    }));

  const tableHeaders =
    labTableData.length > 0
      ? Object.keys(labTableData[0]).filter((key) => key !== "image")
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
          pageTitle={"Manage Labratory"}
          pagePath={pagePaths}
          data={labTableData}
          addTextItem={"Add New Record"}
          handleAddItems={handleAddItems}
          sortableColumns={["type", "lab_section", "class"]}
          viewBtn={"name"}
          enableStatus={true}
          filterableColumns={["type", "lab_section", "class"]}
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
