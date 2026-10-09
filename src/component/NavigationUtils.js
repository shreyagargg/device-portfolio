export const findFirstFile = (item) => {
  if (!item) return null;

  if (item.type === "file") {
    return item;
  }

  if (item.type === "folder" && item.children?.length) {
    for (const child of item.children) {
      const file = findFirstFile(child);

      if (file) {
        return file;
      }
    }
  }

  return null;
};