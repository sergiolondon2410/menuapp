import React from "react";

function Local() {
    return (
        
        <div class="rounded w-full lg:flex mb-10">
            <div class="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75"
                style = {{
                    backgroundImage: "url('https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
                }}
            >
            </div>      
            <div class="bg-white rounded px-4 flex flex-col justify-between leading-normal">
                <div>
                    <div class="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
                        Integer commodo, sapien ut vulputate viverra
                    </div>
                    <p class="text-gray-700 text-base">
                        Nam malesuada aliquet metus, ac commodo augue mollis sit amet. 
                        Nam bibendum risus sit amet metus semper consectetur.
                        Proin consequat ullamcorper eleifend.
                        Nam bibendum risus sit amet metus semper consectetur.
                    </p>
                </div>
                <div class="flex mt-3">
                    <img src="https://randomuser.me/api/portraits/women/54.jpg"
                        class="h-10 w-10 rounded-full mr-2 object-cover" />
                    <div>
                        <p class="font-semibold text-gray-700 text-sm capitalize"> Serenity Hughes </p>
                        <p class="text-gray-600 text-xs"> 14 Aug </p>
                    </div>
                </div>
            </div>
        </div>
    ); 
}

export default Local;