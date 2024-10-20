import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto pt-10 pb-10">
      <h1 className="text-blue-800 text-5xl pt-3 pb-10">Contact</h1>
      <section className="space-y-10">
        {" "}
        {/* Space between sections */}
        {/* Google Map for Sweden, Stockholm */}
        <div className="flex flex-col md:flex-row md:space-x-10">
          {" "}
          {/* Added space between columns */}
          <div className="flex-1">
            {" "}
            {/* Google Map Column */}
            <iframe
              title="Google Maps - Stockholm"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.9873670458924!2d18.068580!3d59.329323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f7c3eb5c4307b%3A0xf91e6786b438fb3b!2sSvetsarv%C3%A4gen+22%2C+171+41+Solna%2C+Sweden!5e0!3m2!1sen!2sse!4v1681362795405!5m2!1sen!2sse"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="mb-4" // Margin below the map
            ></iframe>
          </div>
          <div className="flex-1 md:mt-28">
            {" "}
            {/* Address Column */}
            <h3 className="text-3xl font-bold text-blue-800">
              Stockholm, Sweden
            </h3>
            <div className="text-xl">
              <p>
                <a
                  href="https://www.google.com/maps?q=Svetsarv%C3%A4gen+22,+171+41+Solna,+Sweden"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Svetsarvägen 22
                </a>
              </p>
              <p>171 41 Solna, Sweden</p>
              <br />
              <p>+46 8 31 50 23</p>
              <p>info@allstarsgym.se</p>
            </div>
          </div>
          <div className="flex-1 md:mt-28">
            {" "}
            {/* Opening Hours Column */}
            <h3 className="text-3xl font-bold text-blue-800">Opening Hours</h3>
            <div className="text-xl">
              <p>Monday - Friday: 06:45 - 22:00</p>
              <p>Saturday: 10:00 - 15:00</p>
              <p>Sunday: 10:00 - 14:00</p>
            </div>
          </div>
        </div>
        {/* Google Map for Spain, Torrevieja */}
        <div className="flex flex-col md:flex-row md:space-x-10">
          {" "}
          {/* Added space between columns */}
          <div className="flex-1">
            {" "}
            {/* Google Map Column */}
            <iframe
              title="Google Maps - Torrevieja"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12097.175787579185!2d-0.6801300325037161!3d37.97896947827081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd63a27b579f2d77%3A0x54c816bc56be4f15!2sC.+Emilia+Pardo+Baz%C3%A1n%2C+8%2C+03184+Torrevieja%2C+Alicante%2C+Spain!5e0!3m2!1sen!2sse!4v1681362795405!5m2!1sen!2sse"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="mb-4" // Margin below the map
            ></iframe>
          </div>
          <div className="flex-1 md:mt-28">
            {" "}
            {/* Address Column */}
            <h3 className="text-3xl font-bold text-blue-800">
              Torrevieja, Spain
            </h3>
            <div className="text-xl">
              <p>
                <a
                  href="https://www.google.com/maps?q=C.+Emilia+Pardo+Baz%C3%A1n,+8,+03184+Torrevieja,+Alicante,+Spain"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  C. Emilia Pardo Bazán, 8
                </a>
              </p>
              <p>03184 Torrevieja</p>
              <p>Alicante, Spain</p>
              <br />
              <p>hello@allstarsspain.com</p>
            </div>
          </div>
          <div className="flex-1 md:mt-28">
            {" "}
            {/* Opening Hours Column */}
            <h3 className="text-3xl font-bold text-blue-800">Opening Hours</h3>
            <div className="text-xl">
              <p>Monday - Friday: 07:00 - 23:00</p>
              <p>Saturday: 09:00 - 17:00</p>
              <p>Sunday: 09:00 - 17:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Icons */}
      <div className="flex justify-center mt-10 space-x-6">
        <a
          href="https://www.facebook.com/AllstarsTrainingCenter/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="text-7xl text-blue-600" />
        </a>
        <a
          href="https://www.instagram.com/allstarsgymsweden/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-7xl text-blue-600" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
