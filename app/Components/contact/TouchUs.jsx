import React from "react";
import * as motion from "motion/react-client"

const TouchUs = () => {
  return (
    <>
      <div className="2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0 xl:px-[90px] lg:px-[40px] px-5 flex sm:mt-20 xs:mt-10 bg-white lg:justify-between flex-wrap justify-center">
        <motion.div
          className="lg:py-20 py-10 lg:pl-14 xs:pl-2 pl-5 shadow-lg lg:w-6/12"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-black text-[32px] font-normal font-nohemi">
            Get In Touch With Us
          </h2>
          <p className="xl:w-[464px] w-[89%] text-black text-base font-normal font-primary leading-normal mt-2">
            Have questions or need assistance? We’re here to help! Contact us to learn more about our products and services or to get support. Our dedicated team is ready to provide you with the information and support you need.
          </p>
          <form action="" className="flex flex-col mt-8">
            <motion.input
              type="text"
              placeholder="Name"
              className="py-3 pl-5 w-[80%] xs:w-[92%] bg-[#FAFAFA] font-primary leading-[17.68px] font-normal text-base text-[#04040466]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <motion.input
              type="email"
              name=""
              id=""
              placeholder="Email"
              className="py-3 pl-5 w-[80%] xs:w-[92%] bg-[#FAFAFA] font-primary leading-[17.68px] font-normal text-base text-[#04040466] mt-5"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            />
            <motion.textarea
              name="Message"
              id=""
              cols="30"
              rows="7"
              placeholder="Message"
              className="py-3 pl-5 w-[80%] xs:w-[92%] bg-[#FAFAFA] font-primary leading-[17.68px] font-normal text-base text-[#04040466] mt-5"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            ></motion.textarea>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <button className="bg-secondary text-white py-3 px-10 mt-5">
                Submit
              </button>
            </motion.div>
          </form>
        </motion.div>
        <motion.div
          className="lg:w-6/12 flex justify-end mt-12 lg:mt-0 h-[400px] w-[100%] lg:h-auto lg:px-0 xs:px-3 px-5"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14495.85232539756!2d54.7278259!3d24.7281477!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5effd1737a9a77%3A0x4bdf4e512ac74a2a!2sSafe%20Care%20Medical%20Industry!5e0!3m2!1sen!2s!4v1723027491491!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </motion.div>
      </div>
    </>
  );
};

export default TouchUs;
