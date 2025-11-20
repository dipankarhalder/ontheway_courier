import { useEffect, useState } from "react";
import { TableInfo } from "../../../Shared/Table";
import { AppMainLayoutCover, AppTableDataInformation } from "../style";
import teacherData from "../../../data/teacher.json";

const pagePaths = [
  { label: "Apps", path: "/" },
  { label: "All Teachers", path: "/" },
];

export const TeachersPage = () => {
  const handleBtnAction = (action, student) => {
    console.log(`Action: ${action}`, student);
  };

  const handleAddItems = (isopen) => {
    console.log(isopen);
  };

  const teacherTableData =
    teacherData &&
    teacherData.map((item) => ({
      id: item.id,
      image: item.image,
      name: item.name,
      phone: item.mobile,
      email: item.email,
      gender: item.gender,
      type_user: item.typeUser,
      delivered: item.rideCount > 0 ? `${item.rideCount} items` : "",
      rider_verified: item.riderVerified ? true : false,
      city: `${item.address.city} - ${item.address.pin}`,
    }));

  const tableHeaders =
    teacherTableData.length > 0
      ? Object.keys(teacherTableData[0]).filter((key) => key !== "image")
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
        email: false,
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
          pageTitle={"Manage Teachers"}
          pagePath={pagePaths}
          data={teacherTableData}
          addTextItem={"Add new user"}
          handleAddItems={handleAddItems}
          sortableColumns={["id", "name", "phone"]}
          viewBtn={"name"}
          enableStatus={false}
          filterableColumns={["rider_verified"]}
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
