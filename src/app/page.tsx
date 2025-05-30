"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import DownloadModal from "@/components/DownloadModal";

const testimonials = [
  {
    author: "Rik Helsloot, Rabobank",
    text: `Maxime displayed how complex technology trends like blockchain and web 3.0 have developed and what impact they have and can have in the future. She combined this information with practical insights into what organizations can do now to embrace these technologies, which made the presentation very valuable`,
  },
  {
    author: "Alfred Blondin, Nutrition International",
    text: `It was a great roundtable on Ethical AI & Leadership and I wish we had more time! For me, it was the most insightful part of the conference.`,
  },
  {
    author: "Jane Doe, Example Corp",
    text: `Maxime's workshop was inspiring and practical. Our team left with actionable insights and a renewed sense of purpose.`,
  },
];

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const testimonial = testimonials[testimonialIdx];
  const [isLoaded, setIsLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [hasScrollTriggered, setHasScrollTriggered] = useState(false);
  const [hasSeenModal, setHasSeenModal] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Scroll event handler to trigger the modal
  useEffect(() => {
    if (hasSeenModal) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Trigger when user has scrolled down a bit (e.g., 300px)
      if (scrollPosition > 300 && !hasScrollTriggered && !isModalOpen) {
        setHasScrollTriggered(true);
        setIsModalOpen(true);
        setHasSeenModal(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrollTriggered, isModalOpen, hasSeenModal]);

  function prevTestimonial() {
    setTestimonialIdx((idx) => (idx === 0 ? testimonials.length - 1 : idx - 1));
  }
  function nextTestimonial() {
    setTestimonialIdx((idx) => (idx === testimonials.length - 1 ? 0 : idx + 1));
  }

  function handleDownloadSubmit(formData: {
    firstName: string;
    lastName: string;
    email: string;
    company: string;
    position: string;
  }) {
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend/API
    setDownloadSuccess(true);

    // Simulate download start
    setTimeout(() => {
      window.open("/assets/fomo-framework.pdf", "_blank");
      setIsModalOpen(false);
      // Reset for next time
      setTimeout(() => setDownloadSuccess(false), 1000);
    }, 1500);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <main className="flex flex-col items-center w-full min-h-[60vh]">
      {/* Hero Section */}
      <section className="w-full flex flex-col md:flex-row items-stretch bg-[#6C7AD7] relative pt-[60px] md:pt-0 pb-[100px] md:pb-0">
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row relative">
          {/* Mobile Image - Only visible on small screens */}
          <div className="md:hidden w-full h-[60vh] relative">
            <Image
              src="/images/maximehero.JPG"
              alt="Maxime Lubbers"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
            />
          </div>

          {/* Left side - Quote (positioned absolutely on mobile) */}
          <div className="flex-1 flex flex-col justify-center p-8 z-10 absolute md:static top-[60px] left-0 right-0 h-[calc(100%-160px)] md:h-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-[95%] md:max-w-[180%] md:-mr-[80%] relative"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#6C7AD7] mb-8 leading-relaxed">
                <span className="bg-white px-2 sm:px-3 py-1 box-decoration-clone leading-loose">
                  &ldquo;I Empower Leaders
                </span>
                <br />
                <span className="bg-white px-2 sm:px-3 py-1 box-decoration-clone leading-loose">
                  by Embracing the Ethical
                </span>
                <br />
                <span className="bg-white px-2 sm:px-3 py-1 box-decoration-clone leading-loose">
                  Potential of Emerging Technology&rdquo;
                </span>
              </h2>
              <a
                href="#about"
                className="mt-8 inline-flex items-center text-white font-semibold transition text-base sm:text-lg"
              >
                <span>Discover more about Maxime</span>
                <motion.div
                  className="ml-2"
                  animate={{ y: [0, 8, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sm:w-6 sm:h-6"
                  >
                    <path
                      d="M12 4V20M12 20L6 14M12 20L18 14"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
              </a>
            </motion.div>
          </div>

          {/* Right side - Hero Image (hidden on mobile) */}
          <div className="hidden md:flex flex-1 relative">
            <Image
              src="/images/maximehero.JPG"
              alt="Maxime Lubbers"
              width={600}
              height={800}
              className="w-full h-auto object-cover object-center md:h-full"
              priority
            />
          </div>
        </div>
      </section>

      {/* Collaborations Section - Moved here */}
      <section className="w-full py-12 px-4 flex flex-col items-center bg-white">
        <div className="max-w-5xl w-full">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Collaborations
          </h3>
          <div className="flex flex-wrap gap-4 justify-center items-center w-full">
            <div className="w-24 h-12 flex items-center justify-center">
              <Image
                src="/images/logos/techleap.jpg"
                alt="Techleap"
                width={100}
                height={50}
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300 max-h-10"
              />
            </div>
            <div className="w-24 h-12 flex items-center justify-center">
              <Image
                src="/images/logos/schiphol.jpg"
                alt="Schiphol"
                width={100}
                height={50}
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300 max-h-10"
              />
            </div>
            <div className="w-24 h-12 flex items-center justify-center">
              <Image
                src="/images/logos/bouwend.png"
                alt="Bouwend Nederland"
                width={100}
                height={50}
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300 max-h-10"
              />
            </div>
            <div className="w-24 h-12 flex items-center justify-center">
              <Image
                src="/images/logos/pon.webp"
                alt="Pon"
                width={100}
                height={50}
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300 max-h-10"
              />
            </div>
            <div className="w-24 h-12 flex items-center justify-center">
              <Image
                src="/images/logos/nyenrode.jpg"
                alt="Nyenrode"
                width={100}
                height={50}
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300 max-h-10"
              />
            </div>
            <div className="w-24 h-12 flex items-center justify-center">
              <Image
                src="/images/logos/minfa.png"
                alt="MinFA"
                width={100}
                height={50}
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300 max-h-10"
              />
            </div>
            <div className="w-24 h-12 flex items-center justify-center">
              <Image
                src="/images/logos/artemis.avif"
                alt="Artemis"
                width={100}
                height={50}
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300 max-h-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About/Mission Section - TEDx style */}
      <section
        id="about"
        className="w-full flex justify-center items-center py-12 md:py-16 px-4 bg-[#6C7AD7]"
      >
        <div className="flex flex-col md:flex-row w-full max-w-6xl rounded-xl overflow-hidden shadow-lg">
          {/* TEDx Image - Full width on mobile */}
          <div className="w-full md:flex-1 md:min-w-[320px] md:max-w-[50%] aspect-video md:aspect-[16/9] relative">
            <Image
              src="/images/tedx.avif"
              alt="TEDx talk by Maxime Lubbers"
              fill
              className="object-cover w-full h-full"
              priority
            />
          </div>
          {/* Card with text - Full width on mobile */}
          <div className="w-full md:flex-1 bg-white p-6 md:p-10 flex flex-col gap-6 md:gap-8 justify-center md:min-w-[320px] md:max-w-[50%]">
            <div>
              <h4 className="text-[#FF1DE9] text-xl font-bold mb-1">
                Hi, there!
              </h4>
              <p className="text-black text-base mb-2">
                I&apos;m Maxime, a humane technologist and speaker. I believe we
                have a shared responsibility to make ethical decisions when
                implementing emerging technology. Based on my experience I know
                and …
              </p>
              <a href="#" className="text-black font-semibold underline">
                Read more
              </a>
            </div>
            <div>
              <h4 className="text-[#FF1DE9] text-xl font-bold mb-1">
                My mission
              </h4>
              <p className="text-black text-base mb-2">
                Whether you are overwhelmed by tech, afraid of it or consider it
                a solution to all problems humanity faces, the best way to make
                ethical decisions and a lasting impact is by enabling yourself
                to take back control.…
              </p>
              <a href="#" className="text-black font-semibold underline">
                Read more
              </a>
            </div>
            <div>
              <h4 className="text-[#FF1DE9] text-xl font-bold mb-1">
                Why book me?
              </h4>
              <p className="text-black text-base mb-2">
                I provide inspiring stories and interventions to your company or
                event. With a natural energy and presence, I create a
                collaborative learning environment where everyone can explore
                new ide…
              </p>
              <a href="#" className="text-black font-semibold underline">
                Read more
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Carousel Section */}
      <section className="w-full flex justify-center items-center py-16 px-2 bg-[#6C7AD7]">
        <div className="w-full max-w-5xl bg-white rounded-xl shadow-lg flex flex-row items-center justify-between px-8 py-16 relative">
          {/* Left Arrow */}
          <button
            aria-label="Previous testimonial"
            onClick={prevTestimonial}
            className="text-3xl text-black px-4 py-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#6C7AD7]"
            style={{ lineHeight: 1 }}
          >
            &#60;
          </button>
          {/* Testimonial Content */}
          <div className="flex-1 flex flex-col items-center text-center px-4">
            <div className="text-lg font-bold mb-2">{testimonial.author}</div>
            <div className="w-12 h-0.5 bg-gray-300 mb-6" />
            <div className="text-2xl font-light text-gray-800 max-w-2xl mb-8">
              &ldquo;{testimonial.text}&rdquo;
            </div>
            {/* Dots */}
            <div className="flex gap-2 items-center justify-center mt-2">
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  className={`w-3 h-3 rounded-full inline-block ${
                    i === testimonialIdx ? "bg-black" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
          {/* Right Arrow */}
          <button
            aria-label="Next testimonial"
            onClick={nextTestimonial}
            className="text-3xl text-black px-4 py-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#6C7AD7]"
            style={{ lineHeight: 1 }}
          >
            &#62;
          </button>
        </div>
      </section>

      {/* Specializations Section */}
      <section className="w-full py-16 px-4 flex flex-col items-center bg-[#6C7AD7]/10">
        <div className="max-w-6xl w-full">
          <h3 className="text-3xl font-bold mb-10 text-center relative">
            <span className="bg-[#FF1DE9] px-4 py-1 text-white inline-block transform -rotate-1">
              I specialize in
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {/* Humane Technology */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl group">
              <div className="h-[140px] bg-gradient-to-r from-[#6C7AD7] to-[#8A98E8] relative flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 bg-[url('/images/pattern.png')] bg-repeat"></div>
                <svg
                  viewBox="0 0 24 24"
                  className="w-16 h-16 text-white"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 2V5M8 2V5M3 8H21M19 4H5C3.89543 4 3 4.89543 3 6V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V6C21 4.89543 20.1046 4 19 4Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="12"
                    cy="14"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 12V14L13.5 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-xl mb-2 text-[#6C7AD7] group-hover:text-[#FF1DE9] transition-colors">
                  Humane Technology
                </h4>
                <p className="text-gray-700">
                  Creating technology that respects human values, rights, and
                  dignity while enhancing our capabilities.
                </p>
              </div>
            </div>

            {/* AI */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl group">
              <div className="h-[140px] bg-gradient-to-r from-[#6C7AD7] to-[#8A98E8] relative flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 bg-[url('/images/pattern.png')] bg-repeat"></div>
                <svg
                  viewBox="0 0 24 24"
                  className="w-16 h-16 text-white"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 4L4 8L12 12L20 8L12 4Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 12L12 16L20 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 16L12 20L20 16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-xl mb-2 text-[#6C7AD7] group-hover:text-[#FF1DE9] transition-colors">
                  Artificial Intelligence
                </h4>
                <p className="text-gray-700">
                  Guiding the ethical development and responsible implementation
                  of AI systems in business and society.
                </p>
              </div>
            </div>

            {/* Blockchain */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl group">
              <div className="h-[140px] bg-gradient-to-r from-[#6C7AD7] to-[#8A98E8] relative flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 bg-[url('/images/pattern.png')] bg-repeat"></div>
                <svg
                  viewBox="0 0 24 24"
                  className="w-16 h-16 text-white"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 7L12 3L4 7M20 7L12 11M20 7V17L12 21M12 11L4 7M12 11V21M4 7V17L12 21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-xl mb-2 text-[#6C7AD7] group-hover:text-[#FF1DE9] transition-colors">
                  Blockchain
                </h4>
                <p className="text-gray-700">
                  Exploring distributed ledger technologies for transparency,
                  security, and trust in digital ecosystems.
                </p>
              </div>
            </div>

            {/* Quantum Computing */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl group">
              <div className="h-[140px] bg-gradient-to-r from-[#6C7AD7] to-[#8A98E8] relative flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 bg-[url('/images/pattern.png')] bg-repeat"></div>
                <svg
                  viewBox="0 0 24 24"
                  className="w-16 h-16 text-white"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 3V21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M3 12H21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M3.5 5.5L20.5 18.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M3.5 18.5L20.5 5.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-xl mb-2 text-[#6C7AD7] group-hover:text-[#FF1DE9] transition-colors">
                  Quantum Computing
                </h4>
                <p className="text-gray-700">
                  Understanding the transformative potential of quantum
                  technologies and their ethical implications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Let's build a humane future together Section */}
      <section
        id="services"
        className="w-full py-16 px-4 flex flex-col items-center bg-[#6C7AD7]"
      >
        <div className="max-w-6xl w-full">
          <h3 className="text-3xl font-bold mb-10 text-center text-white">
            Let&apos;s build a humane future together
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {/* Speaker */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg p-8 text-center border border-white/20 hover:bg-white/20 transition-all">
              <div className="mb-6 mx-auto w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-10 h-10 text-white"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 18V14M12 14C14.2091 14 16 12.2091 16 10V6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6V10C8 12.2091 9.79086 14 12 14ZM19 10V11C19 14.866 15.866 18 12 18C8.13401 18 5 14.866 5 11V10M12 18V22"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h4 className="font-bold text-2xl mb-4 text-white">Speaker</h4>
              <p className="text-white/80 mb-4">
                Engaging keynotes and talks on ethical technology and leadership
                for your event or company.
              </p>
            </div>

            {/* Moderator */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg p-8 text-center border border-white/20 hover:bg-white/20 transition-all">
              <div className="mb-6 mx-auto w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-10 h-10 text-white"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 20H22V18C22 16.3431 20.6569 15 19 15C18.0444 15 17.1931 15.4468 16.6438 16.1429M17 20H7M17 20V18C17 17.3438 16.8736 16.717 16.6438 16.1429M7 20H2V18C2 16.3431 3.34315 15 5 15C5.95561 15 6.80686 15.4468 7.35625 16.1429M7 20V18C7 17.3438 7.12642 16.717 7.35625 16.1429M7.35625 16.1429C8.0935 14.301 9.89482 13 12 13C14.1052 13 15.9065 14.301 16.6438 16.1429M15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7ZM21 10C21 11.1046 20.1046 12 19 12C17.8954 12 17 11.1046 17 10C17 8.89543 17.8954 8 19 8C20.1046 8 21 8.89543 21 10ZM7 10C7 11.1046 6.10457 12 5 12C3.89543 12 3 11.1046 3 10C3 8.89543 3.89543 8 5 8C6.10457 8 7 8.89543 7 10Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h4 className="font-bold text-2xl mb-4 text-white">Moderator</h4>
              <p className="text-white/80 mb-4">
                Facilitating panels and roundtables for impactful discussions on
                emerging technology.
              </p>
            </div>

            {/* Workshop */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg p-8 text-center border border-white/20 hover:bg-white/20 transition-all">
              <div className="mb-6 mx-auto w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-10 h-10 text-white"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.5 4.5V9.5H4.5M14.5 4.5V9.5H19.5M9.5 19.5V14.5H4.5M14.5 19.5V14.5H19.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h4 className="font-bold text-2xl mb-4 text-white">
                Inspiration Workshop(s)
              </h4>
              <p className="text-white/80 mb-4">
                Interactive workshops to empower teams and organizations with
                actionable insights.
              </p>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <a
              href="#contact"
              className="px-8 py-3 rounded-full bg-[#FF1DE9] text-white font-semibold hover:bg-[#FF1DE9]/90 transition text-lg shadow-lg"
            >
              Book Maxime
            </a>
          </div>
        </div>
      </section>

      {/* FOMO 2.0 Section */}
      <section
        id="fomo"
        className="w-full py-20 px-4 bg-gradient-to-b from-slate-50 to-white"
      >
        <div className="max-w-6xl mx-auto">
          {downloadSuccess && (
            <div className="mb-6 py-3 px-4 bg-green-100 border border-green-200 rounded-md text-green-700 font-medium text-center">
              Thank you! Your download has started.
            </div>
          )}
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left side - PDF Mockup */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative max-w-sm transform hover:-rotate-1 transition-transform duration-500 hover:shadow-xl">
                <Image
                  src="/images/fomo-pdf-mockup.svg"
                  width={300}
                  height={424}
                  alt="FOMO 2.0 Framework Preview"
                  className="rounded-md shadow-lg"
                />
                <div className="absolute -top-3 -right-3 bg-[#FF1DE9] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md transform rotate-12">
                  FREE
                </div>
              </div>
            </div>

            {/* Right side - Content and CTA */}
            <div className="w-full md:w-1/2 flex flex-col items-start">
              <div className="inline-block px-4 py-1 bg-[#6C7AD7]/10 rounded-full text-[#6C7AD7] font-semibold text-sm mb-4">
                EXCLUSIVE FRAMEWORK
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                FOMO 2.0 Framework
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Navigate the complexities of emerging technology with
                confidence. This framework provides a structured approach to
                ethical decision-making in the age of rapid technological
                advancement.
              </p>

              <div className="flex flex-col gap-3 mb-8 w-full">
                <div className="flex items-start gap-3">
                  <div className="bg-[#6C7AD7]/10 rounded-full p-1 mt-0.5">
                    <svg
                      className="w-4 h-4 text-[#6C7AD7]"
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
                  <p className="text-gray-700">
                    Practical strategies for ethical technology implementation
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#6C7AD7]/10 rounded-full p-1 mt-0.5">
                    <svg
                      className="w-4 h-4 text-[#6C7AD7]"
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
                  <p className="text-gray-700">
                    Decision-making templates for leadership teams
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#6C7AD7]/10 rounded-full p-1 mt-0.5">
                    <svg
                      className="w-4 h-4 text-[#6C7AD7]"
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
                  <p className="text-gray-700">
                    Case studies from industry leaders
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 bg-[#FF1DE9] text-white font-semibold rounded-full hover:bg-[#FF1DE9]/90 transition-colors shadow-lg flex items-center gap-2 group"
              >
                <span>Get your free download</span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TEDx Section */}
      <section id="tedx" className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="bg-[#FF1DE9] px-4 py-1 text-white inline-block transform -rotate-1">
              TEDx Talk
            </span>
          </h2>
          <div className="w-full aspect-video rounded-xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.youtube.com/embed/-u8iA-6k_Ws"
              title="Maxime Lubbers TEDx Talk"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="mt-8 text-center">
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Watch my TEDx talk about ethical technology and creating a humane
              future where I discuss the importance of embracing emerging
              technologies with ethical considerations at the forefront.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        id="contact"
        className="w-full py-16 px-4 flex flex-col items-center text-center bg-[#6C7AD7]"
      >
        <div className="max-w-xl w-full bg-white p-8 md:p-10 rounded-xl shadow-lg">
          <h3 className="text-3xl font-bold mb-6 text-gray-800">
            Get in Touch
          </h3>
          <form
            className="flex flex-col gap-5 w-full"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <div className="flex flex-col md:flex-row gap-5 w-full">
              <input
                type="text"
                placeholder="First Name"
                className="flex-1 px-4 py-3 rounded-md border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6C7AD7]"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="flex-1 px-4 py-3 rounded-md border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6C7AD7]"
                required
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-3 rounded-md border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6C7AD7]"
              required
            />
            <textarea
              placeholder="Message"
              className="px-4 py-3 rounded-md border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-500 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-[#6C7AD7]"
              required
            />
            <button
              type="submit"
              className="px-8 py-4 rounded-full bg-[#FF1DE9] text-white font-semibold hover:bg-[#FF1DE9]/90 transition-colors shadow-lg text-lg mt-2"
            >
              Send Message
            </button>
          </form>
          {submitted && (
            <div className="mt-6 py-3 px-4 bg-green-100 border border-green-200 rounded-md text-green-700 font-medium">
              Thanks for reaching out! I&apos;ll get back to you soon.
            </div>
          )}
          <div className="mt-6 text-gray-600">
            <div className="mb-1">
              Email:{" "}
              <a
                href="mailto:contact@maximelubbers.com"
                className="underline text-[#6C7AD7] hover:text-[#6C7AD7]/80"
              >
                contact@maximelubbers.com
              </a>
            </div>
            <div>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/maxime-lubbers/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[#6C7AD7] hover:text-[#6C7AD7]/80"
              >
                maxime-lubbers
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Download Modal */}
      <DownloadModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleDownloadSubmit}
      />

      {/* Footer Section */}
      <footer className="w-full py-12 px-4 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            {/* Logo and About */}
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/images/1732468535682.jpeg"
                  alt="Maxime Lubbers"
                  width={48}
                  height={48}
                  className="rounded-full border-2 border-[#FF1DE9]"
                />
                <span className="text-xl font-semibold">Maxime Lubbers</span>
              </div>
              <p className="text-white/80 text-sm md:text-left text-center">
                Empowering leaders to embrace the ethical potential of emerging
                technology.
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col items-center md:items-start">
              <h4 className="text-lg font-semibold mb-4 relative">
                <span className="relative z-10">Quick Links</span>
                <span className="absolute bottom-0 left-0 w-full h-2 bg-[#6C7AD7]/30 -z-0"></span>
              </h4>
              <ul className="flex flex-col gap-2">
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-[#FF1DE9] transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-[#FF1DE9] transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-[#FF1DE9] transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-white/80 hover:text-[#FF1DE9] transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div className="flex flex-col items-center md:items-start">
              <h4 className="text-lg font-semibold mb-4 relative">
                <span className="relative z-10">Connect</span>
                <span className="absolute bottom-0 left-0 w-full h-2 bg-[#6C7AD7]/30 -z-0"></span>
              </h4>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:contact@maximelubbers.com"
                  className="flex items-center gap-3 text-white/80 hover:text-[#FF1DE9] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-[#6C7AD7]/20 flex items-center justify-center group-hover:bg-[#6C7AD7]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <span>contact@maximelubbers.com</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/maxime-lubbers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/80 hover:text-[#FF1DE9] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-[#6C7AD7]/20 flex items-center justify-center group-hover:bg-[#6C7AD7]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z" />
                    </svg>
                  </div>
                  <span>linkedin.com/in/maxime-lubbers</span>
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-gradient-to-r from-[#6C7AD7]/0 via-[#6C7AD7]/50 to-[#6C7AD7]/0 my-6"></div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-white/60 text-sm">
              © 2024 Maxime Lubbers. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
