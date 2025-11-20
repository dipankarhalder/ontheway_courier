import { useEffect, useState } from "react";
import { TableInfo } from "../../../Shared/Table";
import { AppMainLayoutCover, AppTableDataInformation } from "../style";
import libraryData from "../../../data/library.json";

const pagePaths = [
  { label: "Apps", path: "/" },
  { label: "Library Informations", path: "/" },
];

export const LibraryPage = () => {
  const handleBtnAction = (action, location) => {
    console.log(`Action: ${action}`, location);
  };

  const handleAddItems = (isopen) => {
    console.log(isopen);
  };

  const libraryTableData =
    libraryData &&
    libraryData.map((item) => ({
      id: item.book_id,
      title: item.title,
      author: item.author,
      category: item.category,
      shelf: item.bookshelf_no,
      assigned: item.assigned,
      assigned_to: item.assigned_to ? item.assigned_to : "-",
      due_date: item.due_date ? item.due_date : "-",
    }));

  const tableHeaders =
    libraryTableData.length > 0
      ? Object.keys(libraryTableData[0]).filter((key) => key !== "image")
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
        category: false,
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
          data={libraryTableData}
          addTextItem={"Add New Record"}
          handleAddItems={handleAddItems}
          sortableColumns={["category", "author", "shelf", "assigned"]}
          viewBtn={"title"}
          enableStatus={true}
          filterableColumns={["category", "shelf", "assigned"]}
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
