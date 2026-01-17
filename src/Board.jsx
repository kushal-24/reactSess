import Tile from "./Tile";
import React from "react";

function Board() {
  return (
    <div className="justify-center flex-row flex items-center h-screen">
      <div className="grid grid-cols-3 gap-2 ">
        <Tile />
        <Tile />
        <Tile />

        <Tile />
        <Tile />
        <Tile />

        <Tile />
        <Tile />
        <Tile />
      </div>
    </div>
  );
}

export default Board;
