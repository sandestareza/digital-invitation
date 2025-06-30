"use client";

import Image from "next/image";
import flowerBottom from "../assets/img/flowwer_2.png";
import flowerCenter from "../assets/img/flowwer_3.png";
import Container from "@/components/Container";
import * as motion from "motion/react-client";
import { PiMapPinAreaFill } from "react-icons/pi";

export default function EventDetails() {
  return (
    <Container
      id="event"
      className="pt-8 pb-16 min-h-screen px-4 section-marker"
    >
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none animate-wiggle">
        <Image
          src={flowerBottom}
          alt="Bottom Decoration"
          className="absolute bottom-0 right-0 w-52"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-6"
      >
        <h1 className="text-xl text-center font-bold text-secondary font-pacifico">
          Save the date
        </h1>
        <p className="text-xs text-center font-light">Momen sakral yang kami nantikan.</p>
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
      </motion.div>
      <div className="bg-white border-t-4 border-secondary shadow-md w-full px-8 py-6 mb-8 rounded-xl">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-xl text-center font-bold text-secondary px-6 mb-4 underline"
        >
          Akad
        </motion.p>
        <div className="flex justify-around items-center p-2 border-2 border-x-0 border-primary text-primary gap-4">
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="text-2xl font-bold font-bebas tracking-[1.5px]"
          >
            Sabtu, 08 November 2025
          </motion.p>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-md text-center text-secondary mt-3"
        >
          Pukul : 08:00  s/d Selesai WIB
        </motion.p>
      </div>
      <div className="bg-white border-b-4 border-secondary shadow-md w-full px-8 py-6 mb-8 rounded-xl">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
         className="text-xl text-center font-bold text-secondary px-6 mb-4 underline"
        >
          Resepsi
        </motion.p>

        <div className="flex justify-around items-center p-2 border-2 border-x-0 border-primary text-primary gap-4">
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="text-2xl font-bold font-bebas tracking-[1.5px]"
          >
            Minggu, 09 november 2025
          </motion.p>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-md text-center text-secondary px-6 mt-3"
        >
          Pukul : 09:00 s/d Selesai WIB
        </motion.p>
      </div>

      <div className="mt-6 flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-sm text-center text-secondary"
        >
          Bertempat di:
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-sm text-center font-bold text-secondary px-6 mt-2"
        >
          Jl. Palembang - SP. Padang Km. 19 Desa Sako Rt 09 Kec. Rambutan,
          Banyuasin
        </motion.p>
        <div className="w-full h-64 my-6 rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1675.0961021081018!2d104.87600138638204!3d-3.0753374913245897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b849c2b1ac431%3A0x52faf682bd338459!2sMasjid%20Baiturrohim%20Desa%20Sako!5e0!3m2!1sid!2sid!4v1747061361314!5m2!1sid!2sid"
            width="600"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.3 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-4"
        >
          <motion.button
            whileHover={{ scale: 1.2, rotate: 5 }}
            type="button"
            className="bg-secondary text-white px-6 py-2 rounded-md font-semibold hover:bg-[#1a242f] flex items-center justify-center gap-2 cursor-pointer"
            onClick={() =>
              window.open("https://maps.app.goo.gl/mpA8vRLKbePhrx2j8", "_blank")
            }
          >
            <PiMapPinAreaFill className="mr-2" /> Lihat lokasi
          </motion.button>
        </motion.div>
      </div>
    </Container>
  );
}
