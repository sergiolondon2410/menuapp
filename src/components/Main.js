import React from "react";
import RestaurantList from "./RestaurantList";
import Menu from "./Menu";

function Main() {
    return (
        <main>
            <div className="block md:flex md:space-x-2 px-2 lg:p-0 mb-4 md:mb-0 w-full relative rounded inline-block">
                <a 
                    className="mb-4 md:mb-0 w-full relative rounded inline-block" 
                    style={{ height: 18 + 'em' }}
                    href="./blog.html"
                >
                    <div className="absolute left-0 bottom-0 w-full h-full z-10"
                        style = {{
                            backgroundImage: "linear-gradient(180deg,transparent,rgba(0,0,0,.7))"
                        }}
                    >
                    </div>
                    <img 
                        src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
                        className="absolute left-0 top-0 w-full h-full rounded z-0 object-cover"
                    />
                    <div className="p-4 absolute bottom-0 left-0 z-20">
                        <h2 className="text-4xl md:w-2/3 font-semibold text-gray-100 leading-tight">
                            Pellentesque a consectetur velit, ac molestie ipsum. Donec sodales, massa et auctor.
                        </h2>
                    </div>
                </a>
            </div>
            {/* <RestaurantList/> */}
            <Menu/>
        </main>
    ); 
}

export default Main;