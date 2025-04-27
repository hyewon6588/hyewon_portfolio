"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <Navbar />
      <h1 className="text-4xl font-bold mb-4">Contact</h1>
    </div>
  );
}
