import React from 'react';
import "./styles/HeroMenu.css"

const HeroMenu = () => {
  return (
    <div className='divhero'>
      

<section class="herobg bg-center  bg-gray-700 bg-blend-multiply">
    <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none"  id='headingg'>Welcome to Mama's Sweet <br></br>Treats Menu</h1>
        <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48" id='heropp'>Browse our menu and discover our delectable array of cookies, cakes, pies, and more, each crafted with love and care.</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a 
id='herbtnn' href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg focus:ring-blue-300 dark:focus:ring-blue-900">
                Browse Menu
                <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    </div>
</section>

    </div>
  )
}

export default HeroMenu
