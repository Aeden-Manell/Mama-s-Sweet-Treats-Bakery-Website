import React from 'react';
import "./styles/aboutcta.css";

const AboutSection = () => {
    return (
        <div>

            <div id='aboutctaDiv'>
                <section class="">
                    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">

                        <div class="bodycta1 border rounded-lg p-8 md:p-12 mb-8">

                            <h1 class="bodyctaH1 text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-3">Our Values</h1>
                            <p class="text-lg font-normal bodyctap mb-6">
                                Family: We believe in the power of family and strive to create a welcoming environment where everyone feels like part of our extended family.
                                <br></br><br></br>
                                Tradition: We honor the traditions of our family's baking heritage by using time-tested recipes and fresh, high-quality ingredients.
                                <br></br><br></br>
                                Quality: We are committed to using the finest ingredients and baking techniques to create delicious and wholesome treats that our customers can feel good about enjoying.
                                <br></br><br></br>
                                Community: We believe in giving back to our community and supporting local businesses.
                                <br></br><br></br>
                                Love: We believe that baking is an act of love, and we pour our hearts into every treat we make.</p>

                        </div>

                        <div class="grid md:grid-cols-2 gap-8">
                            <div class="bodycta2 rounded-lg p-8 md:p-12">

                                <h2 class="bodyctaH12 text-3xl font-extrabold mb-4">Our Vision</h2>
                                <p class="text-lg font-normal bodyctap2 mb-4">Our vision is to be the go-to bakery for families in our community, providing them with a place to gather, share memories, and enjoy delicious, homemade treats. We envision a future where Mama's Sweet Treats is synonymous with quality, tradition, and love.</p>

                            </div>


                            <div class="bodycta3 rounded-lg p-8 md:p-12">
                                <h2 class="bodyctaH13 text-3xl font-extrabold mb-2">Our Mission</h2>
                                <p class="text-lg font-normal bodyctap3 mb-4">Mama's Sweet Treats is dedicated to sharing the love and joy of baking with our community. We strive to create a warm and inviting atmosphere where families can come together to enjoy delicious, homemade treats made with the freshest ingredients. We believe that baking is more than just a skill; it's a way to connect with loved ones and create lasting memories.</p>

                            </div>
                        </div>
                    </div>
                </section>


            </div>
        </div>
    )
}

export default AboutSection
