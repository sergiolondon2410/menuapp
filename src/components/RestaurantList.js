import React from "react";
import RestaurantListItem from "./RestaurantListItem";

function RestaurantList() {
    return (
        <div class="block lg:flex lg:space-x-2 px-2 lg:p-0 mt-10 mb-10">
            <div class="w-full lg:w-2/3">
                <RestaurantListItem/>
                <RestaurantListItem/>
                <RestaurantListItem/>
            </div>
        </div>
    ); 
}

export default RestaurantList;