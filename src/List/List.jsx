import { useContext, useState } from "react";
import Card from "../Card/Card";
import Filter from "../Filter/Filter";
import { CategoryContext } from "../App";
import "./List.css";

function List() {
  const ctx = useContext(CategoryContext);

  return (
    <div className="list-container">
      {/* ส่งข้อมูลไปแสดงใน Card component */}
      <div className="list-control box-shadow">
        {ctx.map((Data) => (
          <Card key={Data.id} props={Data} />
        ))}
      </div>
    </div>
  );
}

export default List;

// createdAt={c.createdAt} name={c.name} avatar={c.avatar} address={c.address}
