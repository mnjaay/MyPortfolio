import React from 'react'
import image from '../../src/images/WhatsApp Image 2024-05-13 à 15.13.18_7ddbc969.jpg'

function About() {
    return (
        <div className=''>
            <div class="py-16 about bg-white">
                <h1 class="duration-500 m-10 sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-blue-900 text-xl text-center sm:text-5xl md:text-6xl lg:w-auto ">About me</h1>
                <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                        <div class="md:5/12 lg:w-5/12">
                            <img src={image} alt="image" loading="lazy" width="" height="" />
                        </div>
                        <div class="md:7/12 lg:w-6/12">
                            <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">Driven by Technology: My Journey in Software Engineering.</h2>
                            <p class="mt-6 text-gray-600">From my childhood, I have been passionate about computers and new technologies. This fascination has led me to actively engage in various IT communities. As a software engineering student passionate about AI, I have participated in numerous university projects that have allowed me to acquire skills in web and mobile development. I am also an advocate for nature and the environment.</p>
                            <p class="mt-4 text-gray-600"> In summary, my lifelong passion for computers and technology, combined with my active involvement in IT communities and academic projects, has shaped me into a dedicated software engineering student with a particular interest in AI. Alongside my academic pursuits, my advocacy for environmental causes remains an integral part of who I am.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About