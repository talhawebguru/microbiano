"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import Logo from "@/public/images/logo.svg";
import RightArrow from "@/public/images/rightArrow.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import SocialIcons from "./common/SocialIcons";

const Header = () => {
  const pathname = usePathname();

  const getHeaderColor = () => {
    if (pathname === "/") return "bg-primary-new/30";
    return "bg-white";
  };

  const [isOpen, setIsOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleAboutHover = () => {
    setAboutDropdown(true);
  };

  const handleAboutLeave = () => {
    setAboutDropdown(false);
  };

  const [activeIndex, setActiveIndex] = useState(null);
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Animation variants for mobile menu
  const mobileMenuVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: {
      x: "-100%",
      opacity: 0,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <div className={`pt-5 xl:px-[90px] lg:px-10 px-5   ${getHeaderColor()}`}>
        <motion.div 
          className="hidden 2xl:max-w-[1440px] 2xl:mx-auto lg:flex flex-wrap justify-between items-center text-neutral-dark-gray text-[13px] font-primary"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="leading-5 font-normal ">
            <span>info@microbiano.com</span>
            <span> / </span>
            <span>+04 89 76 4576</span>
          </div>
          <div className="flex gap-2">
            <SocialIcons icon={<FaFacebookF size={16} />} />
            <SocialIcons icon={<FaTwitter size={16} />} />
            <SocialIcons icon={<AiFillInstagram size={20} />} />
            <SocialIcons icon={<FaYoutube size={20}/>} />
          </div>
        </motion.div>
        <motion.div 
          className="w-full 2xl:max-w-[1440px] 2xl:mx-auto h-[0px] opacity-40 border border-neutral-gray mt-2 mb-5 hidden lg:block"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 0.4, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        ></motion.div>

        <nav className="flex items-center justify-between 2xl:max-w-[1440px] 2xl:mx-auto  ">
          <div>
            <Link href="/">
              <Image src={Logo} alt="StomaFlex Logo" />
            </Link>
          </div>
          <div className="hidden lg:flex items-center">
            <div className="xl:mr-[205px] lg:mr-[120px] sm:mr-10 mr-4 text-neutral-gray text-base font-normal font-primary leading-normal">
              <ul className="flex lg:gap-8 gap-4">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li
                  className="flex items-center relative"
                  onMouseEnter={handleAboutHover}
                  onMouseLeave={handleAboutLeave}
                >
                  Product{" "}
                  <svg
                    className="h-5 w-5 ml-[7px]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  {aboutDropdown && (
                    <ul
                      className={`absolute w-[290px] left-0 top-6 pt-6 z-20 ${getHeaderColor()}  rounded shadow-lg`}
                    >
                      <li className=" hover:bg-secondary hover:text-white ">
                        <Link href="/product" className="block px-3 py-2">
                          All Product
                        </Link>
                      </li>
                      <li className=" hover:bg-secondary hover:text-white ">
                        <Link href="#" className="block px-3 py-2">
                          Prepared Cultured Media Plates
                        </Link>
                      </li>
                      <li className=" hover:bg-secondary hover:text-white ">
                        <Link href="#" className="block px-3 py-2">
                          Prepared Culture Media Tube
                        </Link>
                      </li>
                      <li className=" hover:bg-secondary hover:text-white ">
                        <Link href="#" className="block px-3 py-2">
                          Prepared Culture Media Bottles
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            <motion.div 
              className="px-[25px] py-3 bg-secondary justify-center items-center gap-4 inline-flex text-white text-base font-medium font-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get this from Jurhy <Image src={RightArrow} alt="Right Arrow" />
            </motion.div>
          </div>
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-secondary" aria-label="Toggle mobile menu">
              {isOpen ? (
                <HiX size={24} />
              ) : (
                <HiMenuAlt3 size={24} />
              )}
            </button>
          </div>
        </nav>
        <motion.div 
          className="w-full h-[0px] opacity-40 border border-[#0000004D] lg:hidden mt-5"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        ></motion.div>
        
        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-black/20 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />
          )}
        </AnimatePresence>

        {/* Mobile Menu Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed top-0 left-0 h-full w-80 bg-white shadow-lg z-50 p-6 lg:hidden overflow-y-auto"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex justify-between items-center mb-8">
                <Link
                  href="/"
                  className="flex items-center"
                  onClick={handleLinkClick}
                >
                  <Image
                    src={Logo}
                    alt="Microbiano Logo"
                    className="h-10 w-40 object-contain"
                  />
                </Link>
                <button onClick={toggleMenu} aria-label="Close mobile menu" className="text-secondary">
                  <HiX size={24} />
                </button>
              </div>

              <motion.nav
                variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              >
                <ul className="flex flex-col gap-2 text-lg font-medium text-neutral-gray">
                  <motion.li
                    variants={mobileLinkVariants}
                    className="py-3 border-b border-gray-200"
                  >
                    <Link
                      href="/"
                      className={`hover:text-secondary cursor-pointer block ${
                        pathname === "/" ? "text-secondary font-bold" : ""
                      }`}
                      onClick={handleLinkClick}
                    >
                      Home
                    </Link>
                  </motion.li>

                  <motion.li
                    variants={mobileLinkVariants}
                    className="py-3 border-b border-gray-200"
                  >
                    <Link
                      href="/about"
                      className={`hover:text-secondary cursor-pointer block ${
                        pathname === "/about" ? "text-secondary font-bold" : ""
                      }`}
                      onClick={handleLinkClick}
                    >
                      About Us
                    </Link>
                  </motion.li>

                  <motion.li
                    variants={mobileLinkVariants}
                    className="py-3 border-b border-gray-200"
                  >
                    <div className="flex justify-between items-center">
                      <Link
                        href="/product"
                        className={`cursor-pointer ${
                          pathname === "/product" ? "text-secondary font-bold" : ""
                        }`}
                        onClick={handleLinkClick}
                      >
                        Product
                      </Link>
                      <svg
                        onClick={() => toggleAccordion(0)}
                        className={`h-5 w-5 transition-transform cursor-pointer ${
                          activeIndex === 0 ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                    <AnimatePresence>
                      {activeIndex === 0 && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <ul className="mt-3 ml-4 space-y-2 max-h-48 overflow-y-auto">
                            <li>
                              <Link
                                href="/product"
                                className="block py-2 hover:text-secondary text-sm"
                                onClick={handleLinkClick}
                              >
                                All Product
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="#"
                                className="block py-2 hover:text-secondary text-sm"
                                onClick={handleLinkClick}
                              >
                                Prepared Cultured Media Plates
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="#"
                                className="block py-2 hover:text-secondary text-sm"
                                onClick={handleLinkClick}
                              >
                                Prepared Culture Media Tube
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="#"
                                className="block py-2 hover:text-secondary text-sm"
                                onClick={handleLinkClick}
                              >
                                Prepared Culture Media Bottles
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="#"
                                className="block py-2 hover:text-secondary text-sm"
                                onClick={handleLinkClick}
                              >
                                Clinical & Veterinary Products
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="#"
                                className="block py-2 hover:text-secondary text-sm"
                                onClick={handleLinkClick}
                              >
                                Food, Water & Environmental
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="#"
                                className="block py-2 hover:text-secondary text-sm"
                                onClick={handleLinkClick}
                              >
                                Pharma & Industrial
                              </Link>
                            </li>
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.li>

                  <motion.li
                    variants={mobileLinkVariants}
                    className="py-3 border-b border-gray-200"
                  >
                    <Link
                      href="/contact"
                      className={`hover:text-secondary cursor-pointer block ${
                        pathname === "/contact" ? "text-secondary font-bold" : ""
                      }`}
                      onClick={handleLinkClick}
                    >
                      Contact Us
                    </Link>
                  </motion.li>
                </ul>

                {/* CTA Button */}
                <motion.div
                  variants={mobileLinkVariants}
                  className="mt-8"
                >
                  <motion.button
                    className="w-full px-6 py-3 bg-secondary text-white flex justify-center items-center gap-3 rounded-lg text-base font-medium font-primary"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get this from Jurhy <Image src={RightArrow} alt="Right Arrow" />
                  </motion.button>
                </motion.div>

                {/* Social Icons */}
                <motion.div
                  variants={mobileLinkVariants}
                  className="flex gap-3 mt-8 justify-center"
                >
                  <SocialIcons icon={<FaFacebookF />} />
                  <SocialIcons icon={<FaTwitter />} />
                  <SocialIcons icon={<AiFillInstagram />} />
                  <SocialIcons icon={<FaYoutube />} />
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  variants={mobileLinkVariants}
                  className="mt-8 text-center text-sm text-neutral-dark-gray"
                >
                  <p>Sample@gmail.com</p>
                  <p>+04 89 76 4576</p>
                </motion.div>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Header;
