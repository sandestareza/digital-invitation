"use client";

import { useState } from "react";
import Image from "next/image";
import {
  RenderImageContext,
  RenderImageProps,
  Photo,
  ColumnsPhotoAlbum,
} from "react-photo-album";
import "react-photo-album/columns.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import flowerCenter from "../assets/img/flowwer_3.png";
import * as motion from "motion/react-client";

// ✨ Plugin tambahan untuk efek zoom, captions, dan blur background
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const photos = [
  {
    src: "/v1/gallery/1.jpg",
    width: 1280,
    height: 853,
    alt: "Momen spesial 1",
  },
  {
    src: "/v1/gallery/2.jpg",
    width: 853,
    height: 1280,
    alt: "Momen spesial 2",
  },
  {
    src: "/v1/gallery/3.jpg",
    width: 853,
    height: 1280,
    alt: "Momen spesial 3",
  },
  {
    src: "/v1/gallery/4.jpg",
    width: 853,
    height: 1280,
    alt: "Momen spesial 4",
  },
  {
    src: "/v1/gallery/5.jpg",
    width: 853,
    height: 1280,
    alt: "Momen spesial 5",
  },
  {
    src: "/v1/gallery/6.jpg",
    width: 1280,
    height: 853,
    alt: "Momen spesial 6",
  },
  {
    src: "/v1/gallery/7.jpg",
    width: 853,
    height: 1280,
    alt: "Momen spesial 7",
  },
  {
    src: "/v1/gallery/8.jpg",
    width: 853,
    height: 1280,
    alt: "Momen spesial 8",
  },
  {
    src: "/v1/gallery/9.jpg",
    width: 1280,
    height: 853,
    alt: "Momen spesial 9",
  },
  {
    src: "/v1/gallery/10.jpg",
    width: 853,
    height: 1280,
    alt: "Momen spesial 10",
  },
  {
    src: "/v1/gallery/11.jpg",
    width: 853,
    height: 1280,
    alt: "Momen spesial 11",
  },
  {
    src: "/v1/gallery/12.jpg",
    width: 1280,
    height: 853,
    alt: "Momen spesial 12",
  },
  {
    src: "/v1/gallery/13.jpg",
    width: 853,
    height: 1280,
    alt: "Momen spesial 13",
  },
];

function renderNextImage(
  { alt = "", title, sizes }: RenderImageProps,
  { photo, width, height }: RenderImageContext
) {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        aspectRatio: `${width} / ${height}`,
        overflow: "hidden",
        borderRadius: "12px",
      }}
      className="group"
    >
      <Image
        fill
        src={(photo as Photo).src}
        alt={alt}
        title={title}
        sizes={sizes}
        style={{
          objectFit: "cover",
          transition: "transform 0.4s ease, filter 0.4s ease",
        }}
        className="group-hover:scale-105 group-hover:brightness-90"
      />
    </div>
  );
}

export default function GalleryPhoto() {
  const [index, setIndex] = useState<number>(-1);

  return (
    <div className="p-8 lg:p-24">
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
      <ColumnsPhotoAlbum
        photos={photos}
        render={{ image: renderNextImage }}
        columns={(containerWidth) => {
          if (containerWidth < 600) return 2;
          if (containerWidth < 900) return 3;
          return 4; // Grid mirip Instagram
        }}
        defaultContainerWidth={1200}
        sizes={{
          size: "calc(100vw - 32px)",
          sizes: [
            { viewport: "(max-width: 900px)", size: "calc(100vw - 24px)" },
            { viewport: "(min-width: 901px)", size: "900px" },
          ],
        }}
        onClick={({ index }) => setIndex(index)}
      />

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={photos.map((p) => ({
          src: p.src,
          description: p.alt,
        }))}
        // ✨ Plugins untuk efek zoom, caption, dan thumbnails
        plugins={[Zoom, Captions, Thumbnails]}
        captions={{
          descriptionTextAlign: "center",
          descriptionMaxLines: 2,
        }}
        carousel={{ imageFit: "contain" }}
        zoom={{
          maxZoomPixelRatio: 3,
          scrollToZoom: true,
        }}
        animation={{ fade: 300 }}
        styles={{
          container: {
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(0,0,0,0.8)",
          },
        }}
      />
    </div>
  );
}
