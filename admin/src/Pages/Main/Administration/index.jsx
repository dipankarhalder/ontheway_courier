import { useEffect, useState } from "react";
import { TableInfo } from "../../../Shared/Table";
import { AppMainLayoutCover, AppTableDataInformation } from "../style";
import payrollData from "../../../data/payroll.json";

const pagePaths = [
  { label: "Apps", path: "/" },
  { label: "All Payrolls", path: "/" },
];

export const AdministrationPage = () => {
  const handleBtnAction = (action, location) => {
    console.log(`Action: ${action}`, location);
  };

  const handleAddItems = (isopen) => {
    console.log(isopen);
  };

  const payrollTableData =
    payrollData &&
    payrollData.map((item) => ({
      id: item.employee_id,
      name: item.full_name,
      job_title: item.job_title,
      department: item.department,
      bank: item.bank_account_number,
      method: item.payment_method,
      net_salary: `${item.net_salary}/-`,
      tax: `${item.tax}/-`,
      overtime: `${item.overtime_rate}/-`,
      pay_date: item.pay_date,
      pay_period: item.pay_period,
    }));

  const tableHeaders =
    payrollTableData.length > 0
      ? Object.keys(payrollTableData[0]).filter((key) => key !== "image")
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
        job_title: false,
        department: false,
        method: false,
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
          pageTitle={"Manage Payrolls"}
          pagePath={pagePaths}
          data={payrollTableData}
          addTextItem={"Add New Record"}
          handleAddItems={handleAddItems}
          sortableColumns={["id", "name", "pay_date", "pay_period"]}
          viewBtn={"name"}
          enableStatus={true}
          filterableColumns={["pay_date", "pay_period"]}
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
