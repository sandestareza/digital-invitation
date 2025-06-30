"use client";

import Image from "next/image";
import flowerBottom from "../assets/img/flowwer_2.png";
import flowerCenter from "../assets/img/flowwer_3.png";
import dana from "../assets/img/dana.png";
import shopeepay from "../assets/img/shopeepay.png";
import Container from "@/components/Container";
import * as motion from "motion/react-client";
import { useState } from "react";
import { Copy } from "lucide-react";

export default function DigitalGift() {
  const [copied, setCopied] = useState({
    dana: false,
    shopeepay: false,
  });

  const handleCopy = (textToCopy: string, type: "dana" | "shopeepay") => {
    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand("copy");
      setCopied((prev) => ({ ...prev, [type]: true }));
      setTimeout(() => setCopied((prev) => ({ ...prev, [type]: false })), 2000);
    } catch (err) {
      console.error("Gagal menyalin teks: ", err);
    }
    document.body.removeChild(textArea);
  };
  return (
    <Container id="gift" className="justify-baseline pt-8 pb-32 section-marker">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <Image
          src={flowerBottom}
          alt="Bottom Decoration"
          className="absolute bottom-0 right-0 w-52"
        />
      </div>
      <div className="mb-4">
        <h1 className="text-xl text-center font-bold text-secondary font-pacifico">
          Kirim Hadiah
        </h1>
        <p className="text-xs text-center font-light px-6">
          Pemberian hadiah merupakan ungkapan tanda kasih, dan kami sangat berterima kasih.
        </p>
        <motion.div
          whileHover={{ scale: 1.2, rotate: 10 }}
          className="flex justify-center"
        >
          <Image
            src={flowerCenter}
            alt="Couple Illustration"
            className="w-32 object-contain"
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.2 },
        }}
        whileHover={{ scale: 1.2 }}
        className="flex justify-center items-center gap-4 bg-white shadow-sm w-fit px-6 mx-auto"
      >
        <Image src={dana} alt="Dana" className="w-24 h-24 object-contain" />
        <div>
          <p className="font-bold text-lg text-secondary font-bebas tracking-[3px]">
            081532622042
          </p>
          <p className="italic text-xs">A/n Sandesta Reza</p>
          <button
            onClick={() => handleCopy("081532622042", "dana")}
            className="flex items-center gap-1 text-xs cursor-pointer bg-transparent border border-primary text-primary hover:text-white px-4 py-1 mt-1 rounded-lg hover:bg-primary transition-colors w-20"
          >
            <Copy className="text-sm" /> {copied.dana ? "Copied!" : "Copy"}
          </button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.3 },
        }}
        whileHover={{ scale: 1.2 }}
        className="flex justify-center items-center gap-4 bg-white shadow-sm mt-4 w-fit px-6 mx-auto"
      >
        <Image
          src={shopeepay}
          alt="Shopeepay"
          className="w-24 h-24 object-contain"
        />
        <div>
          <p className="font-bold text-lg text-secondary font-bebas tracking-[3px]">
            085609290056
          </p>
          <p className="italic text-xs">A/n Tira Helvianis</p>
          <button
            onClick={() => handleCopy("085609290056", "shopeepay")}
            className="flex items-center gap-1 text-xs cursor-pointer bg-transparent border border-primary text-primary hover:text-white px-4 py-1 mt-1 rounded-lg hover:bg-primary transition-colors w-20"
          >
            <Copy className="text-sm"/> {copied.shopeepay ? "Copied!" : "Copy"}
          </button>
        </div>
      </motion.div>
    </Container>
  );
}
