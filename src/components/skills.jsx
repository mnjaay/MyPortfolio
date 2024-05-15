import React from 'react'

function Skills() {
    const Frontend = [
        {
            "name": "HTML",
            "image": "https://cdn-icons-png.flaticon.com/256/174/174854.png",
            "progression": "100%"
        },
        {
            "name": "CSS",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png",
            "progression": "90%"
        },
        {
            "name": "Tailwind CSS",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX9fZzRj7BuQAtuf6RSuqIjWEaai2Vl7sFq2Y6tKq5hA&s",
            "progression": "80%"
        },
        {
            "name": "React JS",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiyIK6lw7E4PWgSvrHUftodq9HVvl5ZPkHnvV-xW5d2w&s",
            "progression": "80%"
        }
    ]


    const Backend = [

        {
            "name": "Laravel",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/800px-Laravel.svg.png",
            "progression": "70%"
        },
        {
            "name": "Express JS",
            "image": "https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png",
            "progression": "65%"
        }

    ]

    const Mobile = [

        {
            "name": "FLutter",
            "image": "https://yt3.googleusercontent.com/ytc/AIdro_nqx_sCd8ZIeIcodS0sfeMKJ8rVTslmQHUe_udwGNH2Pg=s900-c-k-c0x00ffffff-no-rj",
            "progression": "60%"
        }

    ]
    const Tools = [

        {
            "name": "FLutter",
            "image": "https://yt3.googleusercontent.com/ytc/AIdro_nqx_sCd8ZIeIcodS0sfeMKJ8rVTslmQHUe_udwGNH2Pg=s900-c-k-c0x00ffffff-no-rj",
           
        }

    ]
    const Database = [

        {
            "name": "MySQL",
            "image": "https://upload.wikimedia.org/wikipedia/fr/thumb/6/62/MySQL.svg/1200px-MySQL.svg.png",
            "progression": "80%"

        },
        
        {
            "name": "MongoDB",
            "image": "  https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png",
            "progression": "68%"

        }
      

    ]
    const Langage = [

        {
            "name": "Java",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhkRhhhJ9MJFFgmO91azUp6g23c2x7gzdMmAnlTCiW6Q&s",
            "progression": "50%"

        },
        
        {
            "name": "Python",
            "image": "  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp1da0O9HppnIuHGagL5FBhxLwE3QxnOmC_WuazEF3Ag&s",
            "progression": "72%"

        },
        {
            "name": "C",
            "image": "         https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/280px-C_Programming_Language.svg.png ",
            "progression": "80%"

        },
      

    ]

    return (
        <div>
            <div className=''>
                <div class="py-16 bg-white">
                    <h1 class="duration-500 m-10 sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-blue-900 text-xl text-center sm:text-5xl md:text-6xl lg:w-auto ">My Skills </h1>
                    <div class="sm:grid sm:grid-rows-4 lg:grid lg:grid-rows-2 lg:grid-flow-col lg:gap-2 container lg:flex justify-around  m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                        <div className="w-[300px] m-5">
                            <p className='text-xl text-blue-900'> Frontend</p>
                            {
                                Frontend.map(front => (

                                    <div className="m-5">
                                        <div className="flex">
                                            <img class="w-6 h-6 m-1" src={front.image} alt="chat logo" loading="lazy" width="128" height="128" />
                                            <p className='m-1'>{front.name}</p>  </div>
                                        <div class="w-full bg-gray-200 rounded-full ">

                                            <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: front.progression }}>{front.progression}</div>
                                        </div>
                                    </div>


                                ))
                            }
                        </div>

                      
                        <div className="w-[300px] m-5">
                            <p className='text-xl text-blue-900'> DATABASE</p>
                            {
                                Database.map(front => (

                                    <div className="m-5">
                                        <div className="flex">
                                            <img class="w-6 h-6 m-1" src={front.image} alt="chat logo" loading="lazy" width="128" height="128" />
                                            <p className='m-1'>{front.name}</p>  </div>
                                        <div class="w-full bg-gray-200 rounded-full ">

                                            <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: front.progression }}>{front.progression}</div>
                                        </div>
                                    </div>


                                ))
                            }
                        </div>
                        <div className="w-[300px] m-5">
                            <p className='text-xl text-blue-900'> Backend</p>
                            {
                                Backend.map(front => (

                                    <div className="m-5">
                                        <div className="flex">
                                            <img class="w-6 h-6 m-1" src={front.image} alt="chat logo" loading="lazy" width="128" height="128" />
                                            <p className='m-1'>{front.name}</p>  </div>
                                        <div class="w-full bg-gray-200 rounded-full ">

                                            <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: front.progression }}>{front.progression}</div>
                                        </div>
                                    </div>


                                ))
                            }
                        </div>
                       
                        <div className="w-[300px] m-5">
                            <p className='text-xl text-blue-900'> Mobile</p>
                            {
                                Mobile.map(front => (

                                    <div className="m-5">
                                        <div className="flex">
                                            <img class="w-6 h-6 m-1" src={front.image} alt="chat logo" loading="lazy" width="128" height="128" />
                                            <p className='m-1'>{front.name}</p>  </div>
                                        <div class="w-full bg-gray-200 rounded-full ">

                                            <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: front.progression }}>{front.progression}</div>
                                        </div>
                                    </div>


                                ))
                            }
                        </div>
                        <div className="w-[300px] m-5">
                            <p className='text-xl text-blue-900'> PROGRAMMING LANGAGE</p>
                            {
                                Langage.map(front => (

                                    <div className="m-5">
                                        <div className="flex">
                                            <img class="w-6 h-6 m-1" src={front.image} alt="chat logo" loading="lazy" width="128" height="128" />
                                            <p className='m-1'>{front.name}</p>  </div>
                                        <div class="w-full bg-gray-200 rounded-full ">

                                            <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: front.progression }}>{front.progression}</div>
                                        </div>
                                    </div>


                                ))
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills