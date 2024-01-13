import React from "react";
import Banner from "./banner";
import Item from "./item";

export default function Body() {
  return (
    <div>
      <Banner />
      <div className="row">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
}
