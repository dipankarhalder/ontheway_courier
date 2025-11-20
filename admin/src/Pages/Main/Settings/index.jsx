import { useEffect, useState } from "react";
import { TableInfo } from "../../../Shared/Table";
import { AppMainLayoutCover, AppTableDataInformation } from "../style";
import settingsData from "../../../data/settings.json";

const pagePaths = [
  { label: "Apps", path: "/" },
  { label: "Library Informations", path: "/" },
];

export const SettingsPage = () => {
  const handleBtnAction = (action, location) => {
    console.log(`Action: ${action}`, location);
  };

  const handleAddItems = (isopen) => {
    console.log(isopen);
  };

  const settingsTableData =
    settingsData &&
    settingsData.map((item) => ({
      id: item.settingId,
      name: item.name,
      description: item.description,
      status_info: item.value ? "Active" : "In-active",
      is_editable: item.isEditable ? "Active" : "In-active",
    }));

  const tableHeaders =
    settingsTableData.length > 0
      ? Object.keys(settingsTableData[0]).filter((key) => key !== "image")
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
          pageTitle={"Manage Library"}
          pagePath={pagePaths}
          data={settingsTableData}
          addTextItem={"Add New Record"}
          handleAddItems={handleAddItems}
          sortableColumns={["name", "status_info", "is_editable"]}
          viewBtn={"title"}
          enableStatus={true}
          filterableColumns={["status_info", "is_editable"]}
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
