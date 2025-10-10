"use client";

import React, { useEffect, useRef, useState } from "react";
import MainProfile from "./section/MainProfile";
import EventDetails from "./section/EventDetails";
import GuestBook from "./section/GuestBook";
import DigitalGift from "./section/DigitalGift";
import Clossing from "./section/Clossing";
import Opening from "./section/Opening";
import ToogleAudio from "@/components/ToogleAudio";
import BtnTop from "@/components/BtnTop";
import LoadingScreen from "./section/LoadingScreen";
import BottomNav from "./section/BottomNav";
import HomeSection from "./section/HomeSection";
import GallerySection from "./section/Gallery";

export default function TempV1() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) return; // Don't run observer until loading is false
    // Intersection Observer to detect which section is in view
    observer.current = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find(
          (entry) => entry.isIntersecting
        )?.target;
        if (visibleSection) {
          setActiveSection(visibleSection.id);
        }
      },
      { threshold: 0.5 }
    ); // Trigger when 50% of the section is visible

    const sections = document.querySelectorAll(".section-marker");
    sections.forEach((section) => {
      observer.current?.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (observer.current) {
          observer.current.unobserve(section);
        }
      });
    };
  }, [loading]);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Opening />
      <HomeSection />
      <MainProfile />
      <EventDetails />
      <GallerySection />
      <GuestBook />
      <DigitalGift />
      <Clossing />
      <ToogleAudio />
      <BtnTop />
      <BottomNav activeSection={activeSection} />
    </>
  );
}
