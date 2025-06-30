"use client";
import Container from "@/components/Container";
import Image from "next/image";
import ilustration from "../assets/img/wedding.png";
import flowerTop from "@/components/template/v1/assets/img/flowwer_1.png";
import flowerBottom from "@/components/template/v1/assets/img/flowwer_2.png";
import { AnimatePresence, motion } from "motion/react";
import { useCountdown } from "@/hook/useCountDown";
import { useMemo } from "react";

export default function HomeSection() {
  const targetDate = useMemo(() => new Date("2025-11-09T09:00:59Z"), []);
  const { days, hours, minutes, seconds } = useCountdown(targetDate);
  return (
    <Container id="home" withDecoration>
      <AnimatePresence initial={false}>
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 0 }}
          transition={{ duration: 3, ease: "easeInOut" }}
          className="p-6 flex flex-col justify-center items-center text-center h-screen bg-wedding w-full"
        >
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <Image
              src={flowerTop}
              alt="Top Decoration"
              className="absolute top-0 left-0 w-52"
              priority
            />
            <Image
              src={flowerBottom}
              alt="Bottom Decoration"
              className="absolute bottom-0 right-0 w-52"
              priority
            />
          </div>
          <p className="text-sm text-gray-500">The Wedding Of</p>

          <div className="my-4 flex justify-center">
            <Image
              src={ilustration}
              alt="Couple Illustration"
              className="w-48 h-48 object-contain"
            />
          </div>

          <h1 className="text-2xl font-bold text-primary mb-1 font-pacifico">
            Reza & Tira
          </h1>
          <p className="text-sm text-gray-500 mb-4">Minggu, 09 November 2025</p>
          <div className="grid grid-cols-4 gap-2 mt-4">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col justify-center items-center bg-secondary text-white shadow-2xl p-4 py-2 rounded-lg"
            >
              <p className="text-2xl font-bold font-bebas">{days}</p>
              <p className="text-sm font-light">Hari</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col justify-center items-center bg-secondary text-white shadow-2xl p-4 py-2 rounded-sm"
            >
              <p className="text-2xl font-bold font-bebas">{hours}</p>
              <p className="text-sm font-light">Jam</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col justify-center items-center bg-secondary text-white shadow-2xl p-4 py-2 rounded-sm"
            >
              <p className="text-2xl font-bold font-bebas">{minutes}</p>
              <p className="text-sm font-light">Menit</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col justify-center items-center bg-secondary text-white shadow-2xl p-4 py-2 rounded-sm"
            >
              <p className="text-2xl font-bold font-bebas">{seconds}</p>
              <p className="text-sm font-light">Detik</p>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </Container>
  );
}
