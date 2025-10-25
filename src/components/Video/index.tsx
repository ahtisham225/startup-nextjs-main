"use client";

import VideoModal from "@/components/video-modal";
import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

export default function Video() {
  const [isOpen, setOpen] = useState(false);

  return (
    <section>
      <div className="container">
          <SectionTitle
            title="We are ready to help"
            paragraph="Need help setting up or withdrawing your earnings? Our support team is available 24/7 to assist you with deposits, account setup, and troubleshooting. Every user matters, and we make sure your experience is safe and smooth."
            center
            mb="80px"
          />
        </div>
      <div className="relative overflow-hidden">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[770px] overflow-hidden rounded-md">
              <div className="relative aspect-77/40 items-center justify-center">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/bCYLdOE1hKU"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute right-0 bottom-0 left-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
      </div>
    </section>
  );
};
