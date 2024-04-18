export const write = (keyLS, arg) => {
    localStorage.setItem(keyLS, JSON.stringify(arg));
  };
  
export const read = (arg, defaultData = "") => {
    const data = localStorage.getItem(arg);
    const parsedData = data ? JSON.parse(data) : defaultData;
    return parsedData;
  };