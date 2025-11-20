import { useEffect, useState } from "react";
import { TableInfo } from "../../../Shared/Table";
import { AppMainLayoutCover, AppTableDataInformation } from "../style";
import invoiceData from "../../../data/invoice.json";

const pagePaths = [
  { label: "Apps", path: "/" },
  { label: "All Invoices", path: "/" },
];

export const InvoicePage = () => {
  const handleBtnAction = (action, location) => {
    console.log(`Action: ${action}`, location);
  };

  const handleAddItems = (isopen) => {
    console.log(isopen);
  };

  const invoiceTableData =
    invoiceData &&
    invoiceData.map((item) => ({
      id: item.invoiceId,
      s_id: item.studentId,
      student_name: item.studentName,
      course: item.course,
      issue_date: item.issueDate,
      due_date: item.dueDate,
      amount: `Rs. ${item.amount}`,
      info: item.status,
      description: item.description,
    }));

  const tableHeaders =
    invoiceTableData.length > 0
      ? Object.keys(invoiceTableData[0]).filter((key) => key !== "image")
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
        description: false,
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
          pageTitle={"Manage Invoices"}
          pagePath={pagePaths}
          data={invoiceTableData}
          addTextItem={"Add New Notice"}
          handleAddItems={handleAddItems}
          sortableColumns={["student_name", "course", "info"]}
          viewBtn={"student_name"}
          enableStatus={true}
          filterableColumns={["course", "info"]}
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
