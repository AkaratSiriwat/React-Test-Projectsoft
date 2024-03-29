import { useContext, useState } from "react";
import { CategoryContext } from "../App";
import "../Filter/Filter.css"; // Assuming Filter.css exists

function Filter({ filterName }) {
  // const categories = useContext(CategoryContext);
  const [name, setName] = useState("");

  const findName = (event) => {
    event.preventDefault();
    if (!name) {
      filterName("");
    } else {
      filterName(name);
    }
  };

  return (
    <div>
      <form onSubmit={findName} className="search-box">
        <input
          className="input-style"
          type="text"
          value={name}
          placeholder="Search name"
          onChange={(event) => setName(event.target.value)}
        />
        <div>
          <button type="submit" className="button-style">
            <i class="gg-search"></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Filter;

// cate.name.toLowerCase().includes(name.toLowerCase())

// const filterName = () => {
//   if (props.nameFilter == []) {
//     setFiltered(categories);
//   } else {
//     const findName = categories.filter((cate) => cate.name === props.nameFilter);
//     if (findName.length > 0) {
//       // แสดงชื่อที่ตรงกับ Data
//       setFiltered(findName);
//     } else {
//       // แสดง 404 Not Found
//       return <h2>Not Found</h2>;
//     }
//   }
// };

// const Filtered = filterName(name);
//   if (Filtered.length > 0) {
//     setFilteredName(Filtered);
//   } else {
//     console.error("ไม่พบชื่อที่ตรงกับข้อมูล");
//   }
// };

// props.getFilteredName(filtered);
