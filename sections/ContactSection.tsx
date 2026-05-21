"use client";

import { motion } from "framer-motion";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import BadgeBox from "@/components/BadgeBox";
import { contactData } from "@/data/constants";

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-full w-full"
  >
    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.5c1.55 0 3.4 1.01 3.4 3.85z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-full w-full"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const YouTubeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-full w-full"
  >
    <path d="M23.5 6.2c-.3-1.1-1.1-1.9-2.2-2.2C19.3 3.5 12 3.5 12 3.5s-7.3 0-9.3.5c-1.1.3-1.9 1.1-2.2 2.2C0 8.2 0 12.3 0 12.3s0 4.1.5 6.1c.3 1.1 1.1 1.9 2.2 2.2 2 1.5 9.3 1.5 9.3 1.5s7.3 0 9.3-.5c1.1-.3 1.9-1.1 2.2-2.2.5-2 .5-6.1.5-6.1s0-4.1-.5-6.1zM9.5 15.5V9l6.5 3.2-6.5 3.3z" />
  </svg>
);

const getIcon = (type: string) => {
  switch (type) {
    case "envelope":
      return <EnvelopeIcon className="h-full w-full" />;
    case "linkedin":
      return <LinkedInIcon />;
    case "phone":
      return <PhoneIcon className="h-full w-full" />;
    case "instagram":
      return <InstagramIcon />;
    case "youtube":
      return <YouTubeIcon />;
    default:
      return null;
  }
};

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative flex w-full lg:w-9/10 flex-col items-center px-4 py-16 md:px-8 lg:px-16 gap-10 h-fit justify-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center  text-4xl font-bold text-black lg:text-5xl"
      >
        Contact Me!
      </motion.h2>

      <div className="grid grid-cols-1 gap-6 w-full max-w-6xl justify-items-center">
        {contactData.map((contact, index) => (
          <motion.div
            key={contact.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="w-full flex justify-center"
          >
            <BadgeBox
              icon={getIcon(contact.iconType)}
              text={contact.text}
              href={contact.href}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
