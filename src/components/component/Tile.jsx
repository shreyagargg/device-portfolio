import React from "react";
import { FolderIcon } from "./FolderIcon";

export function Tile({tileName, active, onClick}) {
  return (
    <button
      className={`tile ${active ? "active" : ""}`}
      onClick={onClick}
    >
      <FolderIcon />

      <span>{tileName}</span>
    </button>
  );
}