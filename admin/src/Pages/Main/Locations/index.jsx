import { useEffect, useState } from "react";
import { TableInfo } from "../../../Shared/Table";
import { AppMainLayoutCover, AppTableDataInformation } from "../style";
import locationData from "../../../data/location.json";

const pagePaths = [
  { label: "Apps", path: "/" },
  { label: "All Campuses", path: "/" },
];

export const LocationsPage = () => {
  const handleBtnAction = (action, location) => {
    console.log(`Action: ${action}`, location);
  };

  const handleAddItems = (isopen) => {
    console.log(isopen);
  };

  const locationTableData =
    locationData &&
    locationData.map((item) => ({
      id: item.id,
      name: item.location_name,
      contact: item.contact_no,
      tollfree: item.tollfree,
      email: item.email,
      status: item.status,
      address: item.location_address,
    }));

  const tableHeaders =
    locationTableData.length > 0
      ? Object.keys(locationTableData[0]).filter((key) => key !== "image")
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
        status: false,
        address: false,
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
          pageTitle={"Manage Campuses"}
          pagePath={pagePaths}
          data={locationTableData}
          addTextItem={"Add New Campus"}
          handleAddItems={handleAddItems}
          sortableColumns={["id", "name", "status"]}
          viewBtn={"name"}
          enableStatus={true}
          filterableColumns={["status"]}
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
