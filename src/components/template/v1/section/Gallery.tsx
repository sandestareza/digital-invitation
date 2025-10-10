/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import flowerCenter from "../assets/img/flowwer_3.png";
import * as motion from "motion/react-client";
import Container from "@/components/Container";
import { memo, useCallback, useEffect, useMemo, useState } from "react";
import HeartIcon from "../assets/icon/heart";

const mockImages = [
  {
    id: 1,
    url: "/v1/gallery/1.jpg",
    alt: "Galery 1",
  },
  {
    id: 2,
    url: "/v1/gallery/2.jpg",
    alt: "Galery 2",
  },
  {
    id: 3,
    url: "/v1/gallery/3.jpg",
    alt: "Galery 3",
  },
  {
    id: 4,
    url: "/v1/gallery/4.jpg",
    alt: "Galery 4",
  },
  {
    id: 5,
    url: "/v1/gallery/5.jpg",
    alt: "Galery 5",
  },
  {
    id: 6,
    url: "/v1/gallery/6.jpg",
    alt: "Galery 6",
  },
  {
    id: 7,
    url: "/v1/gallery/7.jpg",
    alt: "Galery 7",
  },
  {
    id: 8,
    url: "/v1/gallery/8.jpg",
    alt: "Galery 8",
  },
];

interface ImageItem {
  id: number;
  url: string;
  alt: string;
}

interface PreviewModalProps {
  image: ImageItem | null;
  onClose: () => void;
}

const PreviewModal: React.FC<PreviewModalProps> = memo(({ image, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (image) {
      setIsOpen(true);
      document.body.style.overflow = "hidden";
    } else {
      setIsOpen(false);
      const timer = setTimeout(() => {
        document.body.style.overflow = "";
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [image]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setTimeout(onClose, 300);
  }, [onClose]);

  if (!image && !isOpen) return null;

  return (
    // Backdrop
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
        isOpen
          ? "bg-black bg-opacity-80 opacity-100"
          : "opacity-0 pointer-events-none"
      }`}
      onClick={handleClose}
      aria-modal="true"
      role="dialog"
    >
      {/* Konten Modal */}
      <div
        className={`relative w-full max-w-4xl max-h-[90vh] transition-transform duration-300 ${
          isOpen ? "scale-100" : "scale-90"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image?.url}
          alt={image?.alt}
          className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
        />
        <button
          onClick={handleClose}
          className="absolute -top-3 -right-3 md:-top-5 md:-right-5 p-2 bg-white text-gray-800 rounded-full shadow-lg hover:bg-red-500 hover:text-white transition duration-200 focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-50 z-50"
          aria-label="Tutup pratinjau"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
});
PreviewModal.displayName = "PreviewModal";

interface GalleryItemProps {
  image: ImageItem;
  onClick: (image: ImageItem) => void;
  span: string;
}

const GalleryItem: React.FC<GalleryItemProps> = memo(
  ({ image, onClick, span }) => {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className={`group relative overflow-hidden rounded-xl shadow-md cursor-pointer transition-transform duration-300 hover:scale-[1.02] ${span}`}
        onClick={() => onClick(image)}
      >
        <img
          src={image.url}
          alt={image.alt}
          loading="lazy"
          className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-80"
          // Placeholder image untuk estetika
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = `https://placehold.co/400x300/a3a3a3/ffffff?text=Gagal+Muat`;
          }}
        />
        {/* Overlay Hover */}
        <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <span className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition duration-300 transform translate-y-2 group-hover:translate-y-0 p-2 rounded-lg bg-black/40">
            Lihat
          </span>
        </div>
      </motion.div>
    );
  }
);
GalleryItem.displayName = "GalleryItem";

// --- KOMPONEN UTAMA ---
export const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);

  // Fungsi untuk membuka modal pratinjau
  const handleImageClick = useCallback((image: ImageItem) => {
    setSelectedImage(image);
  }, []);

  // Fungsi untuk menutup modal pratinjau
  const handleCloseModal = useCallback(() => {
    setSelectedImage(null);
  }, []);

  // Logika untuk menentukan span grid kolase (membuat layout terlihat dinamis)
  const getSpanClass = useMemo(
    () =>
      (index: number): string => {
        // Kolom 2 di mobile
        if (index % 6 === 0) return "sm:col-span-2 sm:row-span-2"; // Item besar (2x2)
        if (index % 6 === 1) return "sm:col-span-1 sm:row-span-1"; // Item kecil (1x1)
        if (index % 6 === 2) return "sm:col-span-1 sm:row-span-2"; // Item vertikal (1x2)
        if (index % 6 === 3) return "sm:col-span-2 sm:row-span-1"; // Item horizontal (2x1)
        if (index % 6 === 4) return "sm:col-span-1 sm:row-span-1"; // Item kecil (1x1)
        if (index % 6 === 5) return "sm:col-span-1 sm:row-span-1"; // Item kecil (1x1)
        return "sm:col-span-1 sm:row-span-1";
      },
    []
  );

  const heartElements = Array.from({ length: 10 }, (_, i) => (
    // Menggunakan <div> sebagai wrapper untuk menerapkan animasi
    <div key={i} className={`love-container love-container${i + 1}`}>
      <HeartIcon />
    </div>
  ));

  return (
    <Container className="bg-cream h-full">
      <div className="py-16 px-8 lg:px-4 bg-[url('../components/template/v1/assets/img/bg_main_profile.jpg')] bg-cover w-full h-full">
        <div className="mb-6">
          <h1 className="text-xl text-center font-bold text-secondary font-pacifico">
            Gallery
          </h1>
          <p className="text-xs text-center font-light text-primary text-shadow-md">
            Berbagai momen dari kehidupan kami
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

        {/* Grid Kolase Utama */}
        <div className="container mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4 auto-rows-[200px]">
            {mockImages.map((image, index) => (
              <GalleryItem
                key={image.id}
                image={image}
                onClick={handleImageClick}
                span={getSpanClass(index)}
              />
            ))}
          </div>
        </div>

        {/* Modal Pratinjau */}
        <PreviewModal image={selectedImage} onClose={handleCloseModal} />
        {heartElements}
      </div>
    </Container>
  );
};
export default GallerySection;
