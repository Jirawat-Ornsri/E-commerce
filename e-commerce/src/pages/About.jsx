import React from "react";
import Title from "../components/Title";
import NewsletterBox from "../components/NewsletterBox";
import { assets } from "../assets/frontend_assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title Text1={"ABOUT"} Text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, quo
            hic sint possimus dolorem obcaecati nemo dignissimos magnam rem
            provident quod odit dolorum! Eos soluta veniam omnis, ut magnam aut?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
            incidunt voluptas enim dolore autem. Omnis illum, aspernatur
            deserunt similique velit ducimus tenetur error cumque magnam
            expedita nam esse ipsa dolore!
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
            praesentium suscipit quas eaque sequi, voluptas officia ipsa veniam
            dolor inventore!
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title Text1={"WHY"} Text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-colmd:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quaerat consequuntur, quis consectetur quisquam id quae incidunt ut nostrum provident.</p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quaerat consequuntur, quis consectetur quisquam id quae incidunt ut nostrum provident.</p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quaerat consequuntur, quis consectetur quisquam id quae incidunt ut nostrum provident.</p>
        </div>
      </div>

      <NewsletterBox/>

    </div>
  );
};

export default About;
