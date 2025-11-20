import { useEffect, useState } from "react";
import { TableInfo } from "../../../Shared/Table";
import { AppMainLayoutCover, AppTableDataInformation } from "../style";
import certificateData from "../../../data/certificate.json";

const pagePaths = [
  { label: "Apps", path: "/" },
  { label: "All Certificates", path: "/" },
];

export const CertificatesPage = () => {
  const handleBtnAction = (action, location) => {
    console.log(`Action: ${action}`, location);
  };

  const handleAddItems = (isopen) => {
    console.log(isopen);
  };

  const certificateTableData =
    certificateData &&
    certificateData.map((item) => ({
      id: item.student_id,
      name: item.name,
      department: item.department,
      certificate: item.certificates[0]?.certificate_name,
      issue_date: item.certificates[0]?.issue_date,
      organization: item.certificates[0]?.issuing_organization,
    }));

  const tableHeaders =
    certificateTableData.length > 0
      ? Object.keys(certificateTableData[0]).filter((key) => key !== "image")
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
          pageTitle={"Manage Certificates"}
          pagePath={pagePaths}
          data={certificateTableData}
          addTextItem={"Add New Record"}
          handleAddItems={handleAddItems}
          sortableColumns={["id", "name", "certificate", "department"]}
          viewBtn={"name"}
          enableStatus={true}
          filterableColumns={["certificate", "department"]}
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
