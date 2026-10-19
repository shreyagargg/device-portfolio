import { useState } from "react";

export function SidebarTree({
  items,
  onFileOpen,
  activeFile,
  level = 0,
  parentPath = [],
}) {
  return (
    <div className="sidebar-tree">
      {items.map((item) => {
        const currentPath = [...parentPath, item];

        return (
          <TreeItem
            key={item.id}
            item={item}
            level={level}
            path={currentPath}
            onFileOpen={onFileOpen}
            activeFile={activeFile}
          />
        );
      })}
    </div>
  );
}

function TreeItem({ item, level, path, onFileOpen, activeFile }) {
  const [isOpen, setIsOpen] = useState(false);

  const isFolder = item.type === "folder";

  const hasChildren = item.children && item.children.length > 0;

  const isActive = activeFile?.id === item.id;

  const handleClick = () => {
    // FOLDER
    if (isFolder) {
      setIsOpen((prev) => !prev);
      return;
    }

    // FILE
    onFileOpen(item, path);
  };

  return (
    <div className="tree-node">
      <div
        className={`tree-item ${isActive ? "tree-item-active" : ""}`}
        style={{
          paddingLeft: `${level * 18 + 8}px`,
        }}
        onClick={handleClick}
      >
        <span className="tree-arrow">
          {isFolder && hasChildren ? (isOpen ? "▼" : "▶") : ""}
        </span>

        <span className="tree-icon">
          {isFolder ? (isOpen ? "📂" : "📁") : "📄"}
        </span>

        <span className="tree-label">{item.label}</span>
      </div>

      {isFolder && isOpen && hasChildren && (
        <SidebarTree
          items={item.children}
          onFileOpen={onFileOpen}
          activeFile={activeFile}
          level={level + 1}
          parentPath={path}
        />
      )}
    </div>
  );
}
