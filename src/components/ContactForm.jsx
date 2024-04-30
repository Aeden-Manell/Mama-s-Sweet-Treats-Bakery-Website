import "./styles/contact.css";
import React from 'react';

const ContactForm = () => {
  return (
    <div className="formDiv">
    <div class="contactDiv my-8 mx-auto  bg-white font-[sans-serif]">
            <h1 class="h1form">Contact Us</h1>
            <form class="mt-8 space-y-6">
                <div>
                    <label class="labelname text-sm font-semibold block mb-2">Your Name</label>
                    <input type='text' placeholder='Name'
                        class="inputform w-full rounded-md py-2.5 px-4 border text-sm outline-blue-500" />
                </div>
                <div>
                <label class="labelname text-sm font-semibold block mb-2">Your Email</label>
                    <input type='email' placeholder='Email'
                        class="inputform w-full rounded-md py-2.5 px-4 border text-sm outline-blue-500" />
                </div>
                <div>
                <label class="labelname text-sm font-semibold block mb-2">Subject</label>
                    <input type='text' placeholder='Subject'
                        class="inputform w-full rounded-md py-2.5 px-4 border text-sm outline-blue-500" />
                </div>
                <div>
                <label class="labelname text-sm font-semibold block mb-2">Message</label>
                    <textarea placeholder='Message' rows="6"
                        class="input-form w-full rounded-md px-4 border text-sm pt-2.5 outline-blue-500"></textarea>
                </div>
                <button type='button'
                    class="sendBtn font-semibold rounded-md text-sm px-4 py-3 w-full">Send</button>
            </form>
        </div>
     </div>
  );
};

export default ContactForm;