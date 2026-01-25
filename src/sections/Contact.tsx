"use client";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import CopyPaste from "@/assets/icons/copyPaste.svg";
import { useState } from "react";

export const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const textToCopy = "trxcycsgo@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div id="contact" className="py-16 pt-14 overflow-hidden">
      <div className="container flex flex-col items-center justify-center">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 p-8 w-[110vw] rounded-3xl  text-center text-gray-900 px-10 relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-10 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <h2 className="font-serif text-2xl">Lets get in touch</h2>
          <p className="text-sm py-2">
            Ready to bring your next project to life? Let&apos;s make it happen!
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2 mt-2">
            <div className="flex flex-col">
              <div
                onClick={handleCopy}
                className="pretty-btn bg-gray-900 flex items-center !p-4 sm:!px-6 h-10 sm:h-12 rounded-xl gap-2"
              >
                <span className="font-semibold">
                  {copied ? "Copied! :D" : textToCopy}
                </span>
                <CopyPaste className="size-6" fill="white" />
              </div>
            </div>
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=new"
              target={"_blank" + "_self"}
              rel={"noopener noreferrer" + undefined}
            >
              <button
                className="pretty-btn flex items-center !p-4 sm:!px-6 h-10 sm:h-12 rounded-xl gap-2
             transition duration-500 border"
              >
                <span className="font-semibold text-md">Open Gmail</span>
                <ArrowUpRight className="size-6" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
