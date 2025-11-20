import { useEffect, useState } from "react";
import { TableInfo } from "../../../Shared/Table";
import { AppMainLayoutCover, AppTableDataInformation } from "../style";
import stockData from "../../../data/stock.json";

const pagePaths = [
  { label: "Apps", path: "/" },
  { label: "Stocks Information", path: "/" },
];

export const StocksPage = () => {
  const handleBtnAction = (action, location) => {
    console.log(`Action: ${action}`, location);
  };

  const handleAddItems = (isopen) => {
    console.log(isopen);
  };

  const stockTableData =
    stockData &&
    stockData.map((item) => ({
      id: item.itemId,
      name: item.name,
      category: item.category,
      quantity: `${item.quantity} ${item.unit}`,
      reorder: `${item.reorderLevel} ${item.unit}`,
      per_unit: item.pricePerUnit,
      supplier: item.supplier,
    }));

  const tableHeaders =
    stockTableData.length > 0
      ? Object.keys(stockTableData[0]).filter((key) => key !== "image")
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
          pageTitle={"Manage Stocks"}
          pagePath={pagePaths}
          data={stockTableData}
          addTextItem={"Add New Record"}
          handleAddItems={handleAddItems}
          sortableColumns={["name", "category", "supplier"]}
          viewBtn={"name"}
          enableStatus={true}
          filterableColumns={["category", "supplier"]}
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
