import React from "react";
import Cartes from "./Cartes";
import Data from "./Dishes";

function DishList() {
  return (
    <div
      className="containers"
      style={{
        marginTop: "20px",
      }}
    >
      {Data.map((el) => (
        <Cartes data={el} key={el.id} />
      ))}
    </div>
  );
}
export default DishList;
