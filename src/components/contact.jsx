import React from 'react'

function Contact() {
    return (
        <div>




            <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
                <h1 class="duration-500 m-10 sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-blue-900 text-xl text-center sm:text-5xl md:text-6xl lg:w-auto ">Contact</h1>

                <div class="bg-blue-700 m-10 flex justify-between max-w-4xl mx-auto w-full">


                    <div className='m-5'>
                        <p class="font-bold text-blue-100 py-8 border-b border-blue-700">
                            Location Address
                            <span class="font-normal text-xs text-blue-300 block">Parcelles Assainies U14, Dakar</span>
                        </p>
                        <p class="font-bold text-blue-100 py-8 border-b border-blue-700">
                            Phone Number
                            <span class="font-normal text-xs text-blue-300 block">+221 77 842 99 79 / +221 76 202 74 36</span>
                        </p>
                        <p class="font-bold text-blue-100 py-8 border-b border-blue-700">
                            Email Address
                            <span class="font-normal text-xs text-blue-300 block">mouhamedndiayedev1@gmail.com</span>
                        </p>
                        <p class="font-bold text-blue-100 py-8 border-b border-blue-700">
                            Web Address
                            <span class="font-normal text-xs text-blue-300 block">mnjaay312.dev</span>
                        </p>
                    </div>


                    <div class=" inset-0 bg-gray-300">
                    <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Dakar+(Nom%20de%20votre%20entreprise)&ie=UTF8&t=&z=14&iwloc=B&output=embed"></iframe>

                    </div>


                </div>

                <div>


                </div>
            </div>

        </div>
    )
}

export default Contact