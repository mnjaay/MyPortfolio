import React, { useEffect, useState } from 'react'
import image from '../images/WhatsApp_Image_2024-05-14_à_18.07.52_77192e0a-removebg-preview.png'

function HeroSection() {
    const profiles = [
        " Developer",
        "IA Lover",
        "Designer",

    ]
    const [currentProfile, setCurrentProfile] = useState("");
    const [profileIndex, setProfileIndex] = useState(0);
    const [displayedLetters, setDisplayedLetters] = useState(0);

    useEffect(() => {
        const updateProfile = () => {
            setDisplayedLetters(prevLetters => {
                if (prevLetters === profiles[profileIndex].length) {
                    // Si toutes les lettres du profil sont affichées, passer au profil suivant
                    setProfileIndex(prevIndex => (prevIndex + 1) % profiles.length);
                    return 0; // Réinitialiser l'affichage des lettres pour le nouveau profil
                } else {
                    // Afficher une lettre de plus
                    return prevLetters + 1;
                }
            });
        };

        // Mettre à jour le profil toutes les 200 millisecondes
        const timeout = setTimeout(updateProfile, 400);

        // Nettoyer le timeout à chaque démontage
        return () => clearTimeout(timeout);
    }, [displayedLetters, profileIndex, profiles]);

    // Mettre à jour le profil affiché en fonction du nombre de lettres à afficher
    useEffect(() => {
        setCurrentProfile(profiles[profileIndex]?.substring(0, displayedLetters) || "");
    }, [displayedLetters, profileIndex, profiles]);
    return (
        <div>
            <div class="bg-white heroSection mb-5  relative flex justify-center items-center   lg:pt-25 dark:bg-gray-900">
                <div class="relative xl:container md:px-12 ">
                    <div class="lg:flex items-center justify-around sm:grid sm:grid-rows-3 ">
                        <div className= ' sm:grid sm:grid-rows-2  items-center justify-center lg:flex sm:relative'>

                            <h1 class="duration-500 texte sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-blue-900 text-4xl text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl dark:text-white">Hi, I'm Mouhamed NDIAYE, <br class="lg:block hidden" /> <span class="relative text-transparent bg-clip-text bg-gradient-to-r  from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">{currentProfile}|</span>.</h1>
                            <div class="relative header  mt-8 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12">
                                <p class="sm:text-lg text-gray-700 dark:text-gray-300 lg:w-11/12 duration-300">
                                   <span className='relative text-transparent bg-clip-text bg-gradient-to-r  from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 text-3xl'> W</span>elcome to my portfolio! I'm passionate about mobile web development, with diverse expertise ranging from personal apps to enterprise solutions. My goal is to deliver seamless and responsive experiences across various platforms. Explore my achievements and reach out to discuss your mobile web projects.                    </p>
                               <div className="m-5">
                               <a href="#">
                                    <button class="group relative h-12 w-48 overflow-hidden rounded-2xl bg-blue-500 text-lg font-bold text-white">
                                        Telecharger CV
                                        <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                                    </button>
                                </a>
                               </div>
                                <div class="grid grid-cols-3 space-x-4 md:space-x-6 md:flex md:justify-center lg:justify-start">
                                    <a aria-label="add to slack" href="https://www.instagram.com/mnjaay312/" class="p-4 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-200 hover:border-red-300 hover:shadow-lg hover:shadow-red-600/20 dark:hover:border-cyan-300/30">
                                        <div class="flex justify-center space-x-4">
                                            <img class="w-6 h-6" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png" alt="slack logo" loading="lazy" width="128" height="128" />
                                            <span class="hidden font-medium md:block dark:text-white">Instagram</span>
                                        </div>
                                    </a>
                                    <a aria-label="add to chat" href="https://www.linkedin.com/in/mouhamed-ndiaye-3bb8a6206/" class="p-4 border border-gray-200 dark:bg-gray-800  dark:border-gray-700 rounded-full duration-300 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-600/20 dark:hover:border-green-300/30">
                                        <div class="flex justify-center space-x-4">
                                            <img class="w-6 h-6" src="https://cdn-icons-png.flaticon.com/256/174/174857.png" alt="chat logo" loading="lazy" width="128" height="128" />
                                            <span class="hidden font-medium md:block dark:text-white">Linkedin</span>
                                        </div>
                                    </a>
                                    <a aria-label="add to zoom" href="https://twitter.com/M_Njaay" class="p-4 border border-gray-200 dark:bg-gray-800  dark:border-gray-700 rounded-full duration-400 hover:border-black hover:shadow-lg hover:shadow-black-600/20 dark:hover:border-blue-300/30">
                                        <div class="flex justify-center space-x-4">
                                            <img class="w-6 h-6" src="https://img.freepik.com/vecteurs-libre/nouvelle-conception-icone-x-du-logo-twitter-2023_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1715644800&semt=ais_user" alt="chat logo" loading="lazy" width="128" height="128" />
                                            <span class="hidden font-medium md:block dark:text-white">X</span>
                                        </div>
                                    </a>
                                    <a aria-label="add to zoom" href="https://github.com/mnjaay" class="p-4 border border-gray-200 dark:bg-gray-800  dark:border-gray-700 rounded-full duration-500 hover:border-black hover:shadow-lg hover:shadow-black-600/20 dark:hover:border-blue-300/30">
                                        <div class="flex justify-center space-x-4">
                                            <img class="w-6 h-6" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png" alt="chat logo" loading="lazy" width="128" height="128" />
                                            <span class="hidden font-medium md:block dark:text-white">GitHub</span>
                                        </div>
                                    </a>

                                </div>



                            </div>
                        </div>
                        {/*<div aria-hidden="true" class="hidden sm:block absolute mr-10 scale-75 md:scale-110 inset-0 m-auto w-full h-full md:w-96 md:h-96 rounded-full rotate-45 bg-gradient-to-r from-sky-500 to-cyan-300 blur-3xl"></div>


                        <img src={image} class="sm:m-5 m-1 relative rounded-full" alt="wath illustration" loading="lazy" />
    */}





                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection