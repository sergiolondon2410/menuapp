import React from "react";

function RestaurantList(product, index) {
    return (
        <div
            className="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center"
            key={index}
        >
            <div className="bg-white rounded-lg mt-5">
                <img
                    src={product.product.resource}
                    className="h-40 rounded-md"
                    alt=""
                />
            </div>
            <div className="bg-white shadow-lg rounded-lg -mt-4 w-64">
                <div className="py-5 px-5">
                    <span className="font-bold text-gray-800 text-lg">{product.product.name}</span>
                    <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-600 font-light">
                            Size : Regular
                        </div>
                        <div className="text-2xl text-red-600 font-bold">
                            {product.product.price}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ); 
}

export default RestaurantList;