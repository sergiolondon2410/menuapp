import React, {useState} from "react";
import MenuListItem from "./MenuListItem";
import TypeNav from "./TypeNav";
import portrait from '../../resources/mm3.jpg';


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
        <div>
            <div className="block md:flex md:space-x-2 px-2 lg:p-0 mb-4 md:mb-0 w-full relative rounded inline-block" style={{ height: 8 + 'em' }}> 
            <img 
                src={portrait}
                className="absolute left-0 top-0 w-full h-full rounded z-0 object-cover"
            />
            </div>        
            <TypeNav/>
            <div className="px-10 grid grid-cols-4 gap-4">
                {products.map((product, index) => (
                    <MenuListItem product={product} index={index} />
                ))}
            </div>
        </div>
    ); 
}

export default MenuList;