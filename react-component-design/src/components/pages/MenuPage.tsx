import React from "react";
import Menu from "../molecules/Menu";

// Compound Component
const MenuPage = (): JSX.Element => {
  return (
    <Menu>
      <Menu.Tabs />
      <div
        style={{
          width: 300,
          height: 300,
          border: "1px solid black",
          padding: 10,
        }}
      >
        <Menu.Home>Homeの時の中身</Menu.Home>
        <Menu.About>Aboutの時の中身</Menu.About>
        <Menu.Others>Othersの時の中身</Menu.Others>
      </div>
    </Menu>
  );
};

export default MenuPage;
