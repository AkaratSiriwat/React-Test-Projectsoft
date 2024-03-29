import React, { createContext, useEffect, useState } from "react";
import List from "./List/List";
import Filter from "./Filter/Filter";
import axios from "axios";
import "./App.css";

export const CategoryContext = createContext({
  // categories: null,
  // setCategories: (user) => {},
});

export function App() {
  const [categories, setCategories] = useState([]);
  const [filteredName, setFilteredName] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("https://65ffa099df565f1a614527ba.mockapi.io/api/v1/category");
    setCategories(response.data);
    setFilteredName(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filterName = (nameInput) => {
    if (!nameInput) {
      setFilteredName(categories);
      return;
    }

    const filteredData = categories.filter(({ name }) => name.includes(nameInput));

    setFilteredName(filteredData);
  };

  return (
    <CategoryContext.Provider value={filteredName}>
      <div className="show-box-container">
        <div className="search-box-control">
          <h1>Member Company</h1>
          <Filter filterName={filterName} />
          <List />
        </div>
      </div>
    </CategoryContext.Provider>
  );
}

export default App;
