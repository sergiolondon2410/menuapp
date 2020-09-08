import React from "react";
import Local from "./Local";

function Main() {
    return (
        <main>
            <div className="block md:flex md:space-x-2 px-2 lg:p-0 mb-4 md:mb-0 w-full relative rounded inline-block">
                <a 
                    class="mb-4 md:mb-0 w-full relative rounded inline-block" 
                    style={{ height: 24 + 'em' }}
                    href="./blog.html"
                >
                    <div class="absolute left-0 bottom-0 w-full h-full z-10"
                        style = {{
                            backgroundImage: "linear-gradient(180deg,transparent,rgba(0,0,0,.7))"
                        }}
                    >
                    </div>
                    <img src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" class="absolute left-0 top-0 w-full h-full rounded z-0 object-cover" />
                    <div class="p-4 absolute bottom-0 left-0 z-20">
                        <h2 class="text-4xl md:w-2/3 font-semibold text-gray-100 leading-tight">
                            Pellentesque a consectetur velit, ac molestie ipsum. Donec sodales, massa et auctor.
                        </h2>
                    </div>
                </a>
            </div>
            <div class="block lg:flex lg:space-x-2 px-2 lg:p-0 mt-10 mb-10">
                <div class="w-full lg:w-2/3">
                    <Local/>
                    <Local/>
                    <Local/>
                </div>
            </div>
        </main>
    ); 
}

export default Main;