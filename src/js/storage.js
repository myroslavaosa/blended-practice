export const save = (key, obj) => {
  localStorage.setItem(key, JSON.stringify(obj));
};

export const get = key => {
  const lsData = localStorage.getItem(key);
  if (lsData) {
    const parseData = JSON.parse(lsData);
    return parseData;
  }
};
