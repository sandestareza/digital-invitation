import Container from "@/components/Container";
import { Heart } from "lucide-react";
import React from "react";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col justify-center items-center text-center">
      <Container>
        <Heart className="w-16 h-16 text-blue-500 animate-ping" />
        <p className="text-md tracking-wider text-gray-500 mt-5">The Wedding of</p>
        <h2 className="text-4xl font-bold mt-2 font-pacifico text-primary">Reza & Tira</h2>
      </Container>
    </div>
  );
}
