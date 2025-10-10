"use client";

import Image from "next/image";
import flowerCenter from "../assets/img/flowwer_3.png";
import Container from "@/components/Container";
import * as motion from "motion/react-client";
import { PiMapPinAreaFill } from "react-icons/pi";

export default function EventDetails() {
  return (
    <Container id="event" className="h-full" parallax="bg-parallax-2">
      <div className="py-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-6"
        >
          <h1 className="text-xl text-center font-bold text-secondary text-shadow-lg font-pacifico">
            Save the date
          </h1>
          <p className="text-xs text-center font-light text-primary text-shadow-md">
            Momen sakral yang kami nantikan.
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
        </motion.div>
        <div className="max-w-[414px] mx-auto flex flex-col items-center gap-4">
          <div className="bg-cream border-t-4 border-secondary shadow-md w-full px-8 py-6 rounded-xl mx-8">
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-xl text-center font-bold text-primary px-6 mb-4 underline"
            >
              Akad
            </motion.p>
            <div className="flex justify-around items-center p-2 border-2 border-x-0 border-primary text-secondary gap-4">
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="text-2xl font-bold font-bebas tracking-[1.5px] text-shadow-lg"
              >
                Sabtu, 08 November 2025
              </motion.p>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-md text-center text-secondary mt-3"
            >
              Pukul : 08:00 s/d Selesai WIB
            </motion.p>
          </div>
          <div className="bg-cream border-b-4 border-secondary shadow-md w-full px-8 py-6 rounded-xl mx-8">
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-xl text-center font-bold text-primary px-6 mb-4 underline"
            >
              Resepsi
            </motion.p>

            <div className="flex justify-around items-center p-2 border-2 border-x-0 border-primary text-secondary gap-4">
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="text-2xl font-bold font-bebas tracking-[1.5px] text-shadow-lg"
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
        </div>

        <div className="mt-6 flex flex-col items-center bg-cream border-t-4 border-secondary shadow-md w-full px-8 py-6 rounded-xl max-w-[414px] mx-auto">
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
            (Kediaman mempelai wanita) Desa Sako Rt 09 Rw 05 Kec. Rambutan,
            Banyuasin
          </motion.p>
          <div className="w-full h-64 my-6 rounded-xl overflow-hidden shadow-lg max-w-[414px] mx-auto">
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
            className="mt-4 max-w-[414px] mx-auto"
          >
            <motion.button
              whileHover={{ scale: 1.2, rotate: 5 }}
              type="button"
              className="bg-secondary text-white px-6 py-2 rounded-md font-semibold hover:bg-[#1a242f] flex items-center justify-center gap-2 cursor-pointer"
              onClick={() =>
                window.open(
                  "https://maps.app.goo.gl/mpA8vRLKbePhrx2j8",
                  "_blank"
                )
              }
            >
              <PiMapPinAreaFill className="mr-2" /> Lihat lokasi
            </motion.button>
          </motion.div>
        </div>
      </div>
    </Container>
  );
}
