import React from "react";
import Logo from "./Logo";
import { Github } from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#4E21B7] text-white pt-12 pb-8 mt-20">
      <div className="w-[80%] mx-auto flex flex-col md:flex-row flex-wrap justify-between items-center gap-12 text-white text-sm text-center md:text-left">
        <div className="max-w-[250px]">
          <div className="mb-4 mx-auto md:mx-0 w-fit">
            <Logo />
          </div>
          <p className="text-gray-300">
            Remotify is your gateway to remote opportunities around the world.
            Discover your dream job today.
          </p>
        </div>

        <div className="min-w-[200px]">
          <h4 className="font-semibold text-lg mb-3">Company</h4>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:underline cursor-pointer">About Us</li>
            <li className="hover:underline cursor-pointer">Careers</li>
            <li className="hover:underline cursor-pointer">Press</li>
            <li className="hover:underline cursor-pointer">Blog</li>
          </ul>
        </div>

        <div className="min-w-[200px]">
          <h4 className="font-semibold text-lg mb-3">Support</h4>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:underline cursor-pointer">Contact</li>
            <li className="hover:underline cursor-pointer">FAQs</li>
            <li className="hover:underline cursor-pointer">Terms</li>
            <li className="hover:underline cursor-pointer">Privacy</li>
          </ul>
        </div>

        <div className="min-w-[200px]">
          <h4 className="font-semibold text-lg mb-3">Follow Us</h4>
          <div className="flex justify-center md:justify-start gap-4 text-xl">
            <a href="#" className="hover:text-indigo-400">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-indigo-400">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-indigo-400">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-indigo-400">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-red-600 pt-6 flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-gray-400 text-center">
        <span>
          &copy; {new Date().getFullYear()} Remotify. All rights reserved.
        </span>

        <a
          href="https://github.com/atillakhalilli0"
          className="relative overflow-hidden font-mono text-white bg-gray-900 px-6 py-2 rounded-md inline-flex items-center gap-2 hover:shadow-lg transition-all duration-300 border border-gray-700 hover:border-blue-500 group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500 to-fuchsia-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
          <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-green-600 via-blue-500 to-fuchsia-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>

          <Github size={20} className="relative" />
          <span className="relative">Atilla Khalilli</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
