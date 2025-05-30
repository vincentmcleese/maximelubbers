"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: FormData) => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  position: string;
}

export default function DownloadModal({
  isOpen,
  onClose,
  onSubmit,
}: DownloadModalProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    position: "",
  });

  // Close modal with escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal - Full Screen */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 flex items-center justify-center z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full h-full md:h-auto md:max-h-[90vh] md:w-[90%] max-w-4xl overflow-auto bg-white rounded-none md:rounded-xl shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 flex justify-between items-center p-6 bg-white border-b z-10">
                <div>
                  <h3 className="text-2xl font-bold">
                    Get Your FOMO 2.0 Framework
                  </h3>
                  <p className="text-gray-600">
                    Fill in your details to receive the framework
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600 transition p-2"
                  aria-label="Close modal"
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-center">
                {/* Framework Preview and Value Proposition */}
                <div className="mb-8 flex flex-col md:flex-row gap-6 items-center">
                  <div className="w-full md:w-1/3 flex justify-center">
                    <div className="relative w-[180px] h-[255px] mt-2">
                      <Image
                        src="/images/fomo-pdf-mockup.svg"
                        fill
                        alt="FOMO 2.0 Framework Preview"
                        className="object-contain rounded-md shadow-lg"
                      />
                      <div className="absolute -top-3 -right-3 bg-[#FF1DE9] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md transform rotate-12 z-10">
                        FREE
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-2/3">
                    <div className="inline-block px-4 py-1 bg-[#6C7AD7]/10 rounded-full text-[#6C7AD7] font-semibold text-sm mb-2">
                      EXCLUSIVE FRAMEWORK
                    </div>
                    <h4 className="text-xl font-bold mb-2">
                      Navigate Emerging Technology With Confidence
                    </h4>
                    <p className="text-gray-700 mb-4">
                      The FOMO 2.0 Framework provides a structured approach to
                      ethical decision-making in the age of rapid technological
                      advancement.
                    </p>
                    <div className="flex items-start gap-3 mb-2">
                      <div className="bg-[#6C7AD7]/10 rounded-full p-1 mt-0.5">
                        <svg
                          className="w-3 h-3 text-[#6C7AD7]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Practical strategies for ethical technology
                        implementation
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-[#6C7AD7]/10 rounded-full p-1 mt-0.5">
                        <svg
                          className="w-3 h-3 text-[#6C7AD7]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Decision-making templates for leadership teams
                      </p>
                    </div>
                  </div>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="max-w-2xl mx-auto w-full flex flex-col gap-5"
                >
                  <div className="flex flex-col md:flex-row gap-5">
                    <div className="flex-1">
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        First Name*
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6C7AD7]"
                      />
                    </div>
                    <div className="flex-1">
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Last Name*
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6C7AD7]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6C7AD7]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6C7AD7]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="position"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Position
                    </label>
                    <input
                      type="text"
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6C7AD7]"
                    />
                  </div>

                  <div className="mt-4">
                    <button
                      type="submit"
                      className="w-full px-6 py-4 bg-[#FF1DE9] text-white font-medium rounded-full hover:bg-[#FF1DE9]/90 transition-colors shadow-md text-lg"
                    >
                      Download Framework
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 text-center mt-2">
                    By submitting this form, you agree to receive occasional
                    updates from Maxime Lubbers.
                  </p>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
