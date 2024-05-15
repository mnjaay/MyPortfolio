import React from 'react'

function Projects() {

    const Project = [

        {
            "name": "MSEDI-INTERNATIONAL",
            "image": "images/MSEDI - International - Google Chrome 15_05_2024 16_14_58.png",
            "description": "The application serves to sell Russian construction materials.",
            "github": "#",
            "site": "http://www.msedi-international.com",
            "status": "Private",

        },
        {
            "name": "SamaLadoum",
            "image": "images/100.jpg",
            "description": "It's a website that allows farmers to sell their sheep and people to buy them.",
            "github": "#",
            "site": "#",
            "status": "Private",

        },
      
        {
            "name": "UFRSET-PAY",
            "image": "images/React App - Google Chrome 29_04_2024 15_48_20.png",
            "description": "The application manages the payment management and tracking of temporary staff at the UFR SET of Iba Der Thiam University in Dethies.",
            "github": " #",
            "site": "#",
            "status": "Private",
            "participation" : ""

        },
        {
            "name": "My Portfolio",
            "image": "images/MSEDI - International - Google Chrome 15_05_2024 16_31_46.png",
            "description": "It's aIt's my portfolio.",
            "github": " https://github.com/mnjaay/MyPortfolio",
            "site": "https://mnjaay.vercel.app/",
            "status": "Private",

        },
        {
            "name": "FoodSaver",
            "image": "images/101.jpg",
            "description": "It's an application that fights against food waste, developed by a team during a LambTech hackathon.",
            "github": "  https://github.com/mnjaay/ProjetLaravelClinique",
            "site": "#",
            "status": "Private",

        },
      
    ]

    return (
        <div>
            <h1 class="duration-500 m-10 sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-blue-900 text-xl text-center sm:text-5xl md:text-6xl lg:w-auto dark:text-white">My Project </h1>

            <div class="sm:grid sm:grid-rows-4  lg:grid lg:grid-rows-2 lg:grid-flow-col lg:gap-3 container lg:flex justify-center  m-auto px-6 text-gray-600 md:px-12 xl:px-6">

                {
                    Project.map(project => (
                        <div class=" project bg-white sm:w-[200px] shadow-md border lg:w-[400px] border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700 m-3">
                            <a href="#">
                                <img class="rounded-t-lg" src={project.image} alt="" />
                            </a>
                            <div class="p-5">
                                <a href="#">
                                    <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">{project.name}</h5>
                                </a>
                                <p class="font-normal text-gray-700 mb-3 dark:text-gray-400">{project.description}</p>
                                <div className="flex justify-around items-center">
                                <a href={project.site} class="text-white  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-white dark:hover:bg-blue-200 dark:focus:ring-blue-800">
                                    <svg width="25" height="25" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2.25A9.75 9.75 0 0 0 2.25 12c0 5.384 4.365 9.75 9.75 9.75 5.384 0 9.75-4.366 9.75-9.75 0-5.385-4.366-9.75-9.75-9.75Z"></path>
                                        <path d="M12 2.25c-2.722 0-5.28 4.365-5.28 9.75 0 5.384 2.56 9.75 5.281 9.75 2.722 0 5.282-4.366 5.282-9.75 0-5.385-2.56-9.75-5.282-9.75Z"></path>
                                        <path d="M5.5 5.5C7.293 6.773 9.55 7.532 12 7.532c2.451 0 4.708-.76 6.5-2.032"></path>
                                        <path d="M18.5 18.5c-1.792-1.272-4.049-2.031-6.5-2.031-2.45 0-4.707.759-6.5 2.031"></path>
                                        <path d="M12 2.25v19.5"></path>
                                        <path d="M21.75 12H2.25"></path>

                                    </svg>
                                </a>
                                <a href="#" class="text-white  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-white dark:hover:bg-blue-100 dark:focus:ring-blue-800">
                                    <svg width="25" height="25" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 1.5C6.202 1.5 1.5 6.323 1.5 12.267c0 4.758 3.01 8.79 7.181 10.214a.82.82 0 0 0 .178.019c.39 0 .54-.286.54-.534 0-.258-.01-.933-.015-1.833a4.802 4.802 0 0 1-1.059.126c-2.02 0-2.48-1.57-2.48-1.57-.478-1.242-1.167-1.575-1.167-1.575-.914-.642-.005-.66.066-.66h.004c1.055.093 1.608 1.115 1.608 1.115.525.919 1.228 1.176 1.857 1.176a2.953 2.953 0 0 0 1.2-.28c.093-.695.365-1.168.665-1.44-2.33-.272-4.781-1.195-4.781-5.32 0-1.177.408-2.138 1.078-2.888-.108-.272-.469-1.369.103-2.85a.874.874 0 0 1 .235-.023c.38 0 1.237.145 2.653 1.13a9.76 9.76 0 0 1 5.259 0c1.416-.985 2.273-1.13 2.653-1.13a.873.873 0 0 1 .235.023c.571 1.481.21 2.578.103 2.85.67.755 1.078 1.716 1.078 2.888 0 4.134-2.456 5.043-4.796 5.31.375.333.713.99.713 1.993 0 1.439-.014 2.601-.014 2.953 0 .253.145.539.534.539a.9.9 0 0 0 .188-.019c4.176-1.425 7.181-5.46 7.181-10.214C22.5 6.323 17.798 1.5 12 1.5Z"></path>
                                    </svg>
                                </a>
                                </div>

                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Projects