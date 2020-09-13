import React, {useState} from "react";
import MenuListItem from "./MenuListItem";

function MenuList() {
    const [products] = useState([
        {
            name: "Pizza",
            price: "12.000",
            resource: "https://source.unsplash.com/_0JpjeqtSyg/1600x900"
        },
        {
            name: "Perro Caliente",
            price: "10.000",
            resource: "https://source.unsplash.com/YuKwHTNVAiI/1600x900"
        },
        {
            name: "Hamburguesa",
            price: "13.000",
            resource: "https://source.unsplash.com/RZjC6H7to1M/1600x900"
        },
        {
            name: "Punta de Anca",
            price: "25.000",
            resource: "https://source.unsplash.com/lpkDVZF_cbw/1600x900"
        },
        {
            name: "Costillas BBQ",
            price: "28.000",
            resource: "https://source.unsplash.com/0hOHNA3M6Ds/1600x900"
        },
        {
            name: "Alitas picantes",
            price: "20.000",
            resource: "https://source.unsplash.com/viUQ9_iuFek/1600x900"
        }
    ])
    return (
        <div className="px-10 grid grid-cols-4 gap-4">
            {products.map((product, index) => (
                <MenuListItem product={product} index={index} />
            ))}
        </div>
    ); 
}

export default MenuList;