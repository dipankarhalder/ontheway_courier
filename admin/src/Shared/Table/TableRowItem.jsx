import React from "react";
import { Share, Edit, Delete, GreenTick, GrayTick, CheckPlus } from "../Icons";
import { ActionTableButton } from "./style";

export const TableRowItem = React.memo(
  ({
    item,
    dataTableInfo,
    visibleColumns,
    viewBtn,
    enableStatus,
    selected,
    onToggleRow,
    onAction,
  }) => {
    return (
      <tr key={item.id}>
        <td>
          <input
            id={item.id}
            type="checkbox"
            checked={selected}
            onChange={() => onToggleRow(item.id)}
          />
        </td>
        {dataTableInfo.map((key, idx) => {
          if (!visibleColumns[key]) return null;

          if (key === "status") {
            return (
              <td key={key}>
                <span
                  className={
                    item[key] ? "app_status_actv" : "app_status_inactv"
                  }
                >
                  {item[key] ? "Active" : "In-active"}
                </span>
              </td>
            );
          }

          if (key === "rider_verified") {
            const typeUser = item["type_user"];
            const hasRider = typeUser.includes("Rider");
            if (!hasRider) {
              return (
                <td key={`${key}-${idx}`} className="app_verify_inactv"></td>
              );
            }

            const isVerified = item[key] === true;
            return (
              <td
                key={`${key}-${idx}`}
                className={isVerified ? "app_verify_actv" : "app_verify_inactv"}
              >
                {isVerified ? <GreenTick /> : <GrayTick />}
              </td>
            );
          }

          if (key === "type_user") {
            return (
              <td key={key}>
                {item[key].map((itm, idx) => (
                  <span className={`user_type ${itm}`} key={idx}>
                    {itm}
                  </span>
                ))}
              </td>
            );
          }

          if (key === "assigned") {
            return (
              <td key={key}>
                <span
                  className={
                    item[key] ? "app_status_inactv" : "app_status_actv"
                  }
                >
                  {item[key] ? "Assigned" : "Available"}
                </span>
              </td>
            );
          }

          if (key === "status_info") {
            const isBoolean = typeof item[key] === "boolean";

            return (
              <td key={key}>
                <span
                  className={
                    isBoolean
                      ? item[key]
                        ? "app_status_actv"
                        : "app_status_inactv"
                      : ""
                  }
                >
                  {isBoolean
                    ? item[key]
                      ? "Assigned"
                      : "Available"
                    : item[key]}
                </span>
              </td>
            );
          }

          if (key === "is_editable") {
            return (
              <td
                key={key}
                className={item[key] ? "app_verify_actv" : "app_verify_inactv"}
              >
                {item[key] ? <GreenTick /> : ""}
              </td>
            );
          }

          if (key === "registration") {
            return (
              <td key={key}>
                <span className={item[key] ? "app_reg_actv" : "app_reg_inactv"}>
                  {item[key] ? "Required" : "Not Required"}
                </span>
              </td>
            );
          }

          if (key === "priority") {
            return (
              <td key={key}>
                <span
                  className={
                    item[key] === "high"
                      ? "app_high"
                      : item[key] === "medium"
                      ? "app_medium"
                      : "app_low"
                  }
                >
                  {item[key] === "high"
                    ? "High"
                    : item[key] === "medium"
                    ? "Medium"
                    : "Low"}
                </span>
              </td>
            );
          }

          if (key === viewBtn) {
            return (
              <td key={key}>
                <button
                  className="app_share"
                  onClick={() => onAction("view", item)}
                >
                  {item.image ? (
                    <div className="app_table_image">
                      <img src={item.image} alt={item.name} />
                    </div>
                  ) : (
                    <div className="app_fallback">{item.name?.charAt(0)}</div>
                  )}
                  <p>{item[key].toString()}</p> <Share />
                </button>
              </td>
            );
          }
          return <td key={key}>{item[key]}</td>;
        })}
        <ActionTableButton>
          {enableStatus && (
            <button
              className={item.status ? "status" : "update_status"}
              onClick={() => onAction("status", item)}
            >
              {item.status ? <GreenTick /> : <CheckPlus />}
            </button>
          )}
          <button className="edit" onClick={() => onAction("edit", item)}>
            <Edit />
          </button>
          <button className="delete" onClick={() => onAction("delete", item)}>
            <Delete />
          </button>
        </ActionTableButton>
      </tr>
    );
  }
);
