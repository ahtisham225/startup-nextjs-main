"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="">          
          <div className="py-8">
            <p className="text-center text-base text-body-color dark:text-white">
              Copyright Reserved - {" "}
              <a
                href="http://rs786.com.pk"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                R789 Game
              </a>
            </p>
          </div>
      </footer>
    </>
  );
};

export default Footer;
