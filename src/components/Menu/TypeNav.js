import React from "react";

function TypeNav() {
    return (
        <nav className="bg-blue px-8 pt-2 shadow-md">
            <div className="-mb-px flex justify-center">
                <a className="no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8" href="#">
                    Todas
                </a>
                <a className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8" href="#">
                    Principal
                </a>
                <a className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8" href="#">
                    Bebidas
                </a>
                <a className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8" href="#">
                    Postres
                </a>
            </div> 
        </nav>
    ); 
}

export default TypeNav;

// https://codesandbox.io/s/friendly-leaf-bo126-bo125?file=/src/components/Home.js