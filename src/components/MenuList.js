import React from "react";
import MenuListItem from "./MenuListItem";

function MenuList() {
    return (
        <div className="px-10 grid grid-cols-4 gap-4">
            <MenuListItem/>
            <MenuListItem/>
            <MenuListItem/>
            <MenuListItem/>
            <MenuListItem/>
            <MenuListItem/>
            <MenuListItem/>
            <MenuListItem/>
        </div>
    ); 
}

export default MenuList;