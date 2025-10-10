"use client";

import Image from "next/image";
import flowerCenter from "../assets/img/flowwer_3.png";
import dana from "../assets/img/dana.png";
import shopeepay from "../assets/img/shopeepay.png";
import bca from "../assets/img/bca.png";
import Container from "@/components/Container";
import * as motion from "motion/react-client";
import { useState } from "react";
import { Copy } from "lucide-react";

type CopiedType = {
  [key: string]: boolean;
};
export default function DigitalGift() {
  const [copied, setCopied] = useState<CopiedType>({
    dana: false,
    shopeepay: false,
    bca: false,
  });

  const handleCopy = (textToCopy: string, type: string) => {
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
      setTimeout(() => setCopied((prev) => ({ ...prev, [type]: false })), 5000);
    } catch (err) {
      console.error("Gagal menyalin teks: ", err);
    }
    document.body.removeChild(textArea);
  };

  const digitals = [
    {
      name: "Sandesta Reza",
      image: dana,
      text: "081532622042",
      type: "dana",
    },
    {
      name: "Tira Helvianis",
      image: shopeepay,
      text: "085609290056",
      type: "shopeepay",
    },
    {
      name: "Sandesta Reza",
      image: bca,
      text: "8055494467",
      type: "bca",
    },
  ];
  return (
    <Container id="gift" parallax="bg-parallax-1">
      <div className="mb-4">
        <h1 className="text-xl text-center font-bold text-secondary font-pacifico">
          Kirim Hadiah
        </h1>
        <p className="text-xs text-center font-light px-6 text-primary text-shadow-md">
          Pemberian hadiah merupakan ungkapan tanda kasih, dan kami sangat
          berterima kasih.
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
      {digitals.map((digital, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.2 },
          }}
          whileHover={{ scale: 1.2 }}
          className="flex justify-center items-center gap-4 bg-white border-b-4 border-secondary shadow-md w-10/12 my-4 px-6 mx-auto rounded-lg py-2"
        >
          <Image
            src={digital.image}
            alt={digital.type}
            className="w-24 h-24 object-contain"
          />
          <div>
            <p className="font-bold text-lg text-secondary font-bebas tracking-[3px]">
              {digital.text}
            </p>
            <p className="italic text-xs">A/n {digital.name}</p>
            <button
              type="button"
              onClick={() => handleCopy(digital.text, digital.type)}
              className="flex items-center gap-1 text-xs cursor-pointer bg-transparent border border-primary text-primary hover:text-white px-4 py-1 mt-1 rounded-lg hover:bg-primary transition-colors w-20"
            >
              <Copy className="text-sm" />{" "}
              {copied[digital.type] ? "Copied!" : "Copy"}
            </button>
          </div>
        </motion.div>
      ))}
    </Container>
  );
}
