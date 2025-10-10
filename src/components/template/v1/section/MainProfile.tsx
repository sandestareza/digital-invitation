import Image from "next/image";
import basmallah from "../assets/img/basmallah.png";
import man from "../assets/img/man.png";
import women from "../assets/img/women.png";
import Container from "@/components/Container";
import * as motion from "motion/react-client";
import HeartIcon from "../assets/icon/heart";

export default function MainProfile() {
  const heartElements = Array.from({ length: 10 }, (_, i) => (
    // Menggunakan <div> sebagai wrapper untuk menerapkan animasi
    <div key={i} className={`love-container love-container${i + 1}`}>
      <HeartIcon />
    </div>
  ));

  return (
    <Container id="couple" className="h-full">
      <div className="bg-[url('../components/template/v1/assets/img/bg_main_profile.jpg')] w-full h-[55em] area">
        <div className="circles relative w-full h-full overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex justify-center mt-8 mb-4"
          >
            <Image
              src={basmallah}
              alt="Couple Illustration"
              className="w-48 object-contain"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col justify-center px-4 gap-2 max-w-[414px] mx-auto"
          >
            <p className="text-xs text-cream text-center leading-4">
              Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
              pasangan-pasangan untukmu dari jenismu sendiri, agar kamu
              cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di
              antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu
              benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang
              berpikir.
            </p>
            <p className="text-xs text-secondary font-bold text-center">
              (Q.S Ar Rum Ayat 21)
            </p>
          </motion.div>
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeIn" }}
              className="mt-10 flex justify-center"
            >
              <Image
                src={man}
                alt="Couple man"
                className="w-56 h-56 object-contain"
              />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-2xl font-bold text-primary text-shadow-lg font-pacifico"
            >
              Sandesta Reza, S.Kom
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-xs text-cream"
            >
              putra pertama Bapak Herlan Zailani dan Ibu Munara
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeIn" }}
              className="mt-10 flex justify-center"
            >
              <Image
                src={women}
                alt="Couple women"
                className="w-56 h-56 object-contain"
              />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-2xl font-bold text-primary text-shadow-lg font-pacifico"
            >
              Tira Helvianis, S.Pd., Gr
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-xs text-cream"
            >
              putri pertama Bapak Heri Heriansyah dan Ibu Hasna
            </motion.p>
          </div>
          {heartElements}
        </div>
      </div>
    </Container>
  );
}
