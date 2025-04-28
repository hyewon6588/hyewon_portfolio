"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Mail } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"WAITING" | "SENT">("WAITING");
  const [isSent, setIsSent] = useState(false);
  const [signalId, setSignalId] = useState(generateSignalId());

  function generateSignalId() {
    return String(Math.floor(Math.random() * 999) + 1).padStart(3, "0");
  }

  const resetForm = () => {
    setEmail("");
    setName("");
    setMessage("");
    setStatus("WAITING");
    setSignalId(generateSignalId());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name && message) {
      try {
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          {
            from_name: name,
            from_email: email,
            message,
          },
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        );
        setStatus("SENT");
        setIsSent(true);
        setTimeout(() => {
          setIsSent(false);
          resetForm();
        }, 3000);
      } catch (error) {
        console.error("Failed to send message:", error);
      }
    }
    setTimeout(() => {
      setIsSent(false);
      resetForm();
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#fdfaf3] flex flex-col items-center py-10 px-4 font-mono">
      <Navbar />
      <div className="bg-white border-[2px] border-[#e7d9b0] rounded-2xl shadow-xl p-10 w-full max-w-6xl flex flex-col md:flex-row gap-10 mt-20">
        {/* Left Side - Form */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-4">
            <Mail className="text-[#4b3b00]" />
            <h1 className="text-3xl font-bold text-[#4b3b00]">
              Dispatch a Signal
            </h1>
          </div>
          <p className="text-gray-600 text-sm mb-6">
            Send a message to the developer from your region.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="text-sm font-semibold text-[#4b3b00]">
                Email
              </label>
              <input
                type="email"
                className="mt-1 w-full p-2 border rounded bg-[#fdfaf3] border-[#e7d9b0]"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-[#4b3b00]">
                Name
              </label>
              <input
                type="text"
                className="mt-1 w-full p-2 border rounded bg-[#fdfaf3] border-[#e7d9b0]"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-[#4b3b00]">
                Message
              </label>
              <textarea
                className="mt-1 w-full p-2 border rounded bg-[#fdfaf3] border-[#e7d9b0] h-32"
                placeholder="Write your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-4 bg-[#4b3b00] text-white font-semibold py-2 rounded hover:bg-[#362a00] transition"
            >
              Dispatch Signal
            </button>
            {isSent && (
              <div className="flex flex-row gap-2 mt-4 p-3 text-sm bg-[#fff7cc] text-[#3f2e00] border border-[#e7d9b0] rounded-md shadow-inner animate-fade-in">
                <Mail size={18} />
                <span className="text-[#3f2e00] font-mono font-medium">
                  Signal Dispatched Successfully!
                </span>
              </div>
            )}
          </form>
        </div>

        {/* Right Side - Signal Card */}
        <div className="flex-1 border-l-[1.5px] border-[#e7d9b0] pl-8">
          <h2 className="text-2xl font-bold mb-6 text-[#4b3b00]">
            Signal Status Card
          </h2>
          <div className="bg-[#fff7e0] p-6 rounded-lg border border-[#e7d9b0]">
            <div className="flex flex-col gap-4 text-sm text-[#4b3b00]">
              <div className="flex justify-between">
                <span className="font-semibold">SIGNAL ID</span>
                <span className="font-mono">#{signalId}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">STATUS</span>
                <span className="font-mono">{status}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">DESTINATION</span>
                <span className="font-mono">HYEWON</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
