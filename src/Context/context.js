import { json } from "react-router-dom";

const { createContext, useState, useEffect } = require("react");

export const ECommerceContext = createContext();

export default function ECommerceProvider(props) {
  const [getProd, setGetProd] = useState([]);
  const [indexDB, setIndxDB] = useState(null);

  useEffect(() => {
    const indxDB = indexedDB.open("E-Commerce-Database", 1);
    indxDB.onupgradeneeded = () => {
      let res = indxDB.result;
      const objectStore = res.createObjectStore("data");
      objectStore.createIndex("id", "id", { unique: true });
    };
    indxDB.onerror = (event) => {
      alert("Database error: ", event.target.onerror);
    };
    indxDB.onsuccess = (event) => {
      const indexDBOnsuccess = event.target.result;
      setIndxDB(indexDBOnsuccess);
    };
  }, []);

  const addAccount = (Account) => {
    const trs = indexDB.transaction("data", "readwrite");
    const store = trs.objectStore("data");
    store.put(Account, Account.id);
    console.log(indexDB);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setGetProd(json);
      });
  }, []);

  return (
    <ECommerceContext.Provider value={{ getProd, indexDB, addAccount }}>
      {props.children}
    </ECommerceContext.Provider>
  );
}
