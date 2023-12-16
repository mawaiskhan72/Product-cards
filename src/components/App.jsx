import React from "react";
import Image from "next/image";
import cardImage from "../../public/card.svg"; // Assuming card.svg exists in the specified path
import { Navbar, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

export default function App() {
  return (
    <div className="sticky z-10 top-0 flex justify-between bg-white py-4 px-6">
      <div className="flex items-center gap-4">
        <h2 className="text-black font-bold">Products</h2>
        <a href="#" className="text-black">Features</a>
        <a href="#" className="text-black">Customers</a>
        <a href="#" className="text-black">Integrations</a>
      </div>
      <div className="flex items-center gap-4">
        <a href="#" className="hidden lg:flex text-black">Login</a>
        <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Sign Up</a>
        <div className="w-[100px] h-[30px] relative">
          <Image src={cardImage} alt="Add to card" layout="fill" />
        </div>
      </div>
    </div>
  );
}
