//helping wiht local storage rememberance
export const saveData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const loadData = (key, fallback = null) => {
  const stored = localStorage.getItem(key);
  return stored ? JSON.parse(stored) : fallback;
};
