
const getDataFromLocalStorage = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
}

const setDataInLocalStorage = (key, value) => {
    const alreadyHaveData = getDataFromLocalStorage(key);

    if(alreadyHaveData.includes(value)) return;

    localStorage.setItem(key, JSON.stringify([...alreadyHaveData, value]));
}

export { getDataFromLocalStorage, setDataInLocalStorage };
