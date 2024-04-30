import React from 'react';
import "./styles/aboutcta.css";
import { Link } from 'react-router-dom';

const AboutCTA = () => {
  return (

<div id='aboutctaDiv'>
<section class="">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">

        <div class="bodycta1 border rounded-lg p-8 md:p-12 mb-8">

            <h1 class="bodyctaH1 text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-3">About Us</h1>
            <p class="text-lg font-normal bodyctap mb-6">Our story began with Mama's passion for baking. Her kitchen was filled with the sweet aroma of happiness, where she conjured up magical treats that brought smiles to everyone's faces. Inspired by her legacy, we continue her tradition, using the same love and care to craft each delectable morsel.</p>
            <Link to="/aboutus" class="btnReadmore inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Read more
                <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </Link>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
            <div class="bodycta2 rounded-lg p-8 md:p-12">

                <h2 class="bodyctaH12 text-3xl font-extrabold mb-4">Contact Us</h2>
                <p class="text-lg font-normal bodyctap2 mb-4">Fill out our Contact form and we will be in touch!

Alternatively, you can send us an email to orders@MamasSweetTreatsbakery.co.za

We're eager to hear from you!</p>
                <Link to="/contact" class="btnReadmore2 inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Contact Us
                <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </Link>
            </div>


            <div class="bodycta3 rounded-lg p-8 md:p-12">
                <h2 class="bodyctaH13 text-3xl font-extrabold mb-2">All things Sweet and Delicious for any occasion</h2>
                <p class="text-lg font-normal bodyctap3 mb-4">At Mama's Sweet Treats, we believe that every occasion deserves a touch of sweetness. Whether you're celebrating a birthday, wedding, graduation, or simply enjoying a quiet moment, we have the perfect treat to make it unforgettable.</p>
                <Link to="/menu" class="btnReadmore3 inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Order Now
                <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </Link>
            </div>
        </div>
    </div>
</section>


</div>

  );
};

export default AboutCTA;