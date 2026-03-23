const getFromStoreDB = () => {
  const storedDataString = localStorage.getItem("installedApps");
  if (storedDataString) {
    const storedData = JSON.parse(storedDataString);
    return storedData;
  } else {
    return [];
  }
};
const addToStoreDB = (id) => {
  const storedData = getFromStoreDB();
  if (storedData.includes(id)) {
    alert("Already Exits!");
  } else {
    storedData.push(id);
    const data = JSON.stringify(storedData);
    localStorage.setItem("installedApps", data);
  }
};

export { addToStoreDB, getFromStoreDB };
