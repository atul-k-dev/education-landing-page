"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Paperclip, Code, Target, Award, UserPlus, Menu, X, BookOpen, Microscope, Monitor, Wifi, Dribbble, Bus, Zap, Quote, Star, Trophy, GraduationCap, Users, ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div id="home" className="min-h-screen bg-[#E5E7EB] flex items-center justify-center">
      {/* Container framing like the image (white card inside grey background) */}
      <div className="w-full bg-[#FAFAFA] text-[#0A0A0A] overflow-hidden relative">

        {/* Navigation */}
        <nav className="flex items-center justify-between p-5 lg:px-16 lg:py-8 relative z-50 max-w-[1750px] mx-auto">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12">
              <Image
                src="/logo.png"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-[23px] font-black tracking-tight leading-5 -ml-1">
              GRAVITY<br />
              <span className="text-[18px] font-black text-[#1FC16B]">TUTORIALS</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-10 text-[16px] font-bold">
            <a href="#" onClick={(e) => scrollToSection(e, 'home')} className="text-black hover:text-[#1FC16B] transition-colors">Home</a>
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="text-gray-500 hover:text-black cursor-pointer transition-colors">About</a>
            <a href="#courses" onClick={(e) => scrollToSection(e, 'courses')} className="text-gray-500 hover:text-black cursor-pointer transition-colors">Courses</a>
            <a href="#teachers" onClick={(e) => scrollToSection(e, 'teachers')} className="text-gray-500 hover:text-black cursor-pointer transition-colors">Teachers</a>
            <a href="#gallery" onClick={(e) => scrollToSection(e, 'gallery')} className="text-gray-500 hover:text-black cursor-pointer transition-colors">Gallery</a>
          </div>

          <div className="hidden lg:flex items-center space-x-6 text-[16px] font-medium">
            <button className="bg-[#1FC16B] text-black px-8 py-2.5 rounded-full border-[2px] border-black font-bold shadow-[2px_2px_0_0_#000] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_#000] transition-all">
              Call Us
            </button>
          </div>

          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="bg-[#1FC16B] p-3 rounded-lg border border-black shadow-[2px_2px_0_0_#000]"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
          <div className={`absolute right-0 top-0 h-full w-[280px] bg-white border-l-4 border-black p-8 transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
            <div className="flex justify-between items-center mb-12">
              <div className="text-xl font-black italic">GRAVITY</div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 bg-gray-100 rounded-full border-2 border-black"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex flex-col gap-6 text-lg font-bold">
              <a href="#" onClick={(e) => scrollToSection(e, 'home')} className="hover:text-[#1FC16B] transition-colors">Home</a>
              <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-[#1FC16B] transition-colors">About</a>
              <a href="#courses" onClick={(e) => scrollToSection(e, 'courses')} className="hover:text-[#1FC16B] transition-colors">Courses</a>
              <a href="#teachers" onClick={(e) => scrollToSection(e, 'teachers')} className="hover:text-[#1FC16B] transition-colors">Teachers</a>
              <a href="#gallery" onClick={(e) => scrollToSection(e, 'gallery')} className="hover:text-[#1FC16B] transition-colors">Gallery</a>
              <div className="pt-6 border-t-2 border-dashed border-gray-200">
                <button className="w-full bg-[#1FC16B] text-black px-6 py-3 rounded-full border-[2px] border-black font-bold shadow-[3px_3px_0_0_#000]">
                  Call Us
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content (Hero) */}
        <main className="flex flex-col lg:flex-row px-4 lg:px-16 pt-10 pb-20 relative z-10 min-h-[550px] max-w-[1700px] mx-auto overflow-hidden">

          {/* Left Column (Text & CTAs) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex flex-col justify-start pt-6 w-full relative shrink-0"
          >
            <h1 className="text-4xl sm:text-6xl md:text-[68px] lg:text-[86px] xl:text-[96px] leading-[1.05] lg:leading-[0.95] font-[800] tracking-[-0.04em] mb-6 lg:mb-10 text-black">
              Arwal&apos;s Best<br />Coaching<br />Institute
            </h1>

            {/* Shape decorations under title */}
            <div className="flex items-center space-x-1 mb-10">
              <div className="w-[72px] h-[40px] bg-black rounded-full"></div>
              <div className="w-[40px] h-[40px] bg-[#1FC16B] rounded-full opacity-60"></div>
              <div className="w-[30px] h-[40px] bg-black rounded-full"></div>
              <div className="w-[60px] h-[40px] bg-[#1FC16B] rounded-full"></div>
            </div>

            <p className="text-[#1A1A1A] text-base sm:text-lg lg:text-[19px] max-w-full sm:max-w-[420px] mb-8 lg:mb-10 leading-snug font-medium">
              Fostering academic excellence in Arwal through expert mentorship and result-oriented educational exploration.
            </p>

            <div className="mb-10 lg:mb-14">
              <button className="w-full sm:w-auto bg-[#1FC16B] text-black px-9 py-3.5 rounded-full border-[2px] border-black shadow-[3px_3px_0_0_#000] font-bold text-[16px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_0_#000] transition-all">
                Get Admission Now
              </button>
            </div>


          </motion.div>

          {/* Right Column (Hero Graphic) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex-1 flex justify-center items-start sm:mt-16  sm:min-h-[450px]"
          >
            <div className="relative w-full max-w-[600px] min-h-[480px] lg:min-h-[550px] mt-10 lg:mt-0 ml-auto mr-auto lg:mr-0 z-10 w-full">



              <svg className="absolute top-[10%] -right-[5%] w-24 h-24 text-gray-300 z-0" viewBox="0 0 100 100" fill="currentColor">
                <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="2" fill="currentColor" />
                </pattern>
                <rect x="0" y="0" width="100" height="100" fill="url(#dots)" />
              </svg>

              {/* Card 1: Main Portrait (Left) */}
              <div className="absolute top-0 left-0 w-[70%] h-[75%] rounded-[32px] border-[2px] border-black  overflow-hidden z-10 bg-white">
                <Image
                  src="/hero_student_ai.png"
                  alt="Student learning"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Card 2: Secondary Landscape (Top Right) */}
              <div className="absolute top-[8%] right-[5%] w-[45%] h-[35%] rounded-[28px] border-[2px] border-black  overflow-hidden z-20 bg-white">
                <Image
                  src="/tablet.png"
                  alt="Creative Workspace"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Card 3: Interactive Engagement Info (Bottom Right) */}
              <div className="absolute bottom-[5%] right-0 bg-[#FFD747] border-[2px] border-black rounded-[32px] p-5 sm:p-6 w-[55%]  z-30 flex flex-col justify-between">
                <div className="flex items-start gap-3 mb-3 bg-white/60 p-2.5 rounded-[18px] border-[1.5px] border-black shadow-[2px_2px_0_0_#000] w-max">

                  <h4 className="font-bold text-[14px] sm:text-[16px] leading-[1.1] pr-2">Interactive</h4>
                </div>
                <p className="text-[12px] sm:text-[13px] text-black font-semibold leading-[1.4]">
                  Engaging participation enhances learning, fostering interactive collaboration, and feedback.
                </p>
              </div>

              {/* Floating tags */}
              <div className="absolute bottom-[2%] left-[-2%] sm:left-[2%] flex flex-col items-start space-y-3 z-30">
                {["Smart Learning", "Fun To Learn"].map((tag, i) => (
                  <div
                    key={tag}
                    className={`px-5 py-2.5 sm:px-6 sm:py-3 rounded-[40px] border-[2px] border-black text-[13px] sm:text-[14px] font-bold text-center  transition-transform hover:-translate-y-1 ${i === 0 ? "bg-[#1FC16B] text-black" : "bg-white text-black"
                      }`}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </main>

        {/* Bottom Section: Center Video and Right Text */}
        <div className="px-4 md:px-8 lg:px-16 pb-16 flex flex-col xl:flex-row items-center justify-between max-w-[1700px] mx-auto relative lg:-mt-5 z-40 gap-10 xl:gap-0">
          {/* Stats */}
          <div className="flex items-center space-x-6 sm:space-x-12 mb-0 xl:mb-0 w-full xl:w-auto justify-center xl:justify-start">
            <div className="text-center xl:text-left">
              <div className="text-[2.5rem] sm:text-[4rem] font-bold leading-none mb-2 tracking-tight">999+</div>
              <div className="text-[#666] text-xs sm:text-sm font-medium">Satisfied students</div>
            </div>
            <div className="text-center xl:text-left">
              <div className="text-[2.5rem] sm:text-[4rem] font-bold leading-none mb-2 tracking-tight">100+</div>
              <div className="text-[#666] text-xs sm:text-sm font-medium">Supreme Ranks</div>
            </div>
          </div>
          {/* Video Thumbnail */}
          <div className="shrink-0 mb-4 xl:mb-0 w-full sm:w-auto flex justify-center">
            <div className="relative w-full max-w-[460px] aspect-[2/1] sm:h-[220px] sm:w-[460px] rounded-[32px] sm:rounded-full border-[1.5px] border-black overflow-hidden group cursor-pointer shadow-[3px_3px_0_0_#000] bg-white p-2">
              <div className="relative w-full h-full rounded-[24px] sm:rounded-full overflow-hidden border border-black/10">
                <Image
                  src="/classroom.png"
                  alt="Classroom preview"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition">
                  <div className="w-[56px] h-[56px] bg-white/20 backdrop-blur-md border-[1.5px] border-white/60 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text and Icons */}
          <div className="flex flex-col gap-5 w-full xl:w-auto items-center xl:items-start text-center xl:text-left">
            <h3 className="text-[1.8rem] sm:text-[2.3rem] font-bold leading-[1.1] max-w-[360px]">
              We have multiple cources going on for the acadmic year
            </h3>
            <div className="flex flex-wrap justify-center xl:justify-start gap-2">
              {[Paperclip, Code, Target, Award, Award].map((Icon, idx) => (
                <button key={idx} className="w-[56px] h-[56px] rounded-full border-[1.5px] border-black flex items-center justify-center hover:bg-gray-100 transition-colors bg-white shadow-[2px_2px_0_0_#000] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_#000]">
                  <Icon className="w-5 h-5 text-black" strokeWidth={2} />
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* --- ABOUT US SECTION --- */}
        <section id="about" className="px-4 lg:px-16 py-24 relative bg-white border-t-2 border-dashed border-gray-300">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-[1600px] mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24"
          >

            {/* Left: About Image Grid */}
            <div className="flex-1 w-full relative min-h-[500px] lg:min-h-[600px] flex justify-center items-center">

              {/* Back Decor */}
              <div className="absolute top-[10%] right-[10%] w-24 h-24 bg-[#FFD747] rounded-full border-[2px] border-black shadow-[4px_4px_0_0_#000] z-0"></div>

              <svg className="absolute bottom-[5%] left-[5%] w-32 h-32 text-gray-200 z-0" viewBox="0 0 100 100" fill="currentColor">
                <pattern id="lines" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 0 10 L 10 0" stroke="currentColor" strokeWidth="2" />
                </pattern>
                <rect x="0" y="0" width="100" height="100" fill="url(#lines)" />
              </svg>

              {/* Main Image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-[85%] rounded-[40px] border-[2px] border-black shadow-[8px_8px_0_0_#000] overflow-hidden z-10 bg-[#FAFAFA]">
                <Image
                  src="/about.png"
                  alt="Coaching Institute Classroom"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating Stat Card */}
              <div className="absolute bottom-[10%] -left-[2%] bg-white/70 backdrop-blur-sm border-[2px] border-white rounded-[24px] p-3 w-[220px] z-20">
                <div className="flex items-center gap-4 mb-2">
                  <div className="bg-[#1FC16B] border-[1.5px] border-black rounded-full p-2.5 shadow-[2px_2px_0_0_#000]">
                    <Target className="w-6 h-6 text-black" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-2xl leading-none">4.9</h4>
                    <p className="text-[12px] text-gray-500 font-bold uppercase tracking-wider">Avg Rating</p>
                  </div>
                </div>
                <div className="flex gap-1 -mt-3 ml-15">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-[#FFD747]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: About Content */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="inline-block border-[1.5px] border-black rounded-full px-4 py-1.5 font-bold text-[13px] bg-[#FFD747] shadow-[2px_2px_0_0_#000] w-max mb-6 tracking-wide uppercase">
                About Our Institute
              </div>

              <h2 className="text-4xl sm:text-[48px] lg:text-[56px] leading-[1.05] font-[800] tracking-[-0.03em] mb-8 text-black">
                Leading the Path to Success in Arwal, Bihar
              </h2>

              <p className="text-[#333] text-lg max-w-[550px] mb-6 leading-relaxed font-medium">
                We are proud to have taught and mentored over <strong className="text-black font-extrabold bg-[#1FC16B]/20 px-1 rounded">1000+ top-performing students</strong> for their board exams (10th, 11th, 12th) and highly competitive entrances like IIT JEE, NEET, and Polytechnic.
              </p>

              <p className="text-[#555] text-[16px] max-w-[520px] mb-10 leading-relaxed">
                Located in the heart of Arwal, our institute is backed by a stellar <strong>500+ student reviews on Google</strong>, praising our expert faculty, state-of-the-art study material, and unwavering commitment to educational excellence.
              </p>

              <div className="flex flex-col sm:flex-row gap-5">
                <button className="bg-black text-white px-8 py-4 rounded-[16px] border-[2px] border-black shadow-[4px_4px_0_0_#1FC16B] font-bold text-[16px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#1FC16B] transition-all flex items-center justify-center gap-3 w-max">
                  Offline Center
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
                <div className="flex items-center gap-4 bg-[#FAFAFA] border-[2px] border-black rounded-[16px] p-2.5 pr-6 shadow-[3px_3px_0_0_#000] w-max">
                  <div className="w-12 h-12 bg-[#FFD747] rounded-full border border-black flex items-center justify-center font-bold text-lg">
                    #1
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[13px] text-gray-500 font-semibold uppercase">Ranked</span>
                    <span className="text-[15px] font-bold leading-tight">Coaching in Arwal</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- OUR COURSES SECTION --- */}
        <section id="courses" className="px-4 lg:px-16 py-24 bg-[#F8F9FA] relative border-t-2 border-dashed border-black/20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-[1600px] mx-auto"
          >

            {/* Header */}
            <div className="text-center mb-16 flex flex-col items-center">
              <div className="inline-block border-[1.5px] border-black rounded-full px-4 py-1.5 font-bold text-[13px] bg-[#1FC16B] shadow-[2px_2px_0_0_#000] mb-6 tracking-wide uppercase">
                Our Programs
              </div>
              <h2 className="text-4xl sm:text-[56px] leading-[1.05] font-[800] tracking-[-0.03em] mb-6 text-black">
                Courses We Offer
              </h2>
              <p className="text-[#555] text-lg max-w-[600px] font-medium leading-relaxed">
                Tailored curriculums designed to help students excel in board examinations and crack top-tier competitive entrance tests.
              </p>
            </div>

            {/* Course Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

              {/* Foundation Card */}
              <div className="bg-[#FFD747] border-[2px] border-black rounded-[24px] p-8 shadow-[6px_6px_0_0_#1FC16B] hover:-translate-y-2 hover:shadow-[10px_10px_0_0_#1FC16B] transition-all flex flex-col">
                <div className="w-16 h-16 bg-white border-[2px] border-black rounded-[16px] shadow-[3px_3px_0_0_#BA68C8] flex items-center justify-center mb-8 font-bold text-xl">
                  10th
                </div>
                <h3 className="text-[24px] font-[900] mb-3 text-black">Foundation Course</h3>
                <p className="text-black/80 font-bold mb-6 text-[15px] leading-relaxed flex-1">
                  Strong fundamental preparation for Class 10th board exams to ensure a solid high school academic record.
                </p>
                <button className="w-full py-3 bg-white border-[2px] border-black rounded-full font-bold text-[14px] hover:bg-black hover:text-white transition-colors shadow-[4px_4px_0_0_#EF5350]">
                  View Details
                </button>
              </div>

              {/* 11th Foundation Card */}
              <div className="bg-[#FF8A65] border-[2px] border-black rounded-[24px] p-8 shadow-[6px_6px_0_0_#4DD0E1] hover:-translate-y-2 hover:shadow-[10px_10px_0_0_#4DD0E1] transition-all flex flex-col">
                <div className="w-16 h-16 bg-white border-[2px] border-black rounded-[16px] shadow-[3px_3px_0_0_#FFD747] flex items-center justify-center mb-8 font-bold text-xl">
                  11th
                </div>
                <h3 className="text-[24px] font-[900] mb-3 text-black">Target Batch</h3>
                <p className="text-black/80 font-bold mb-6 text-[15px] leading-relaxed flex-1">
                  Building solid advanced concepts in Physics, Chemistry, and Mathematics/Biology for future success.
                </p>
                <button className="w-full py-3 bg-white border-[2px] border-black rounded-full font-bold text-[14px] hover:bg-black hover:text-white transition-colors shadow-[4px_4px_0_0_#1FC16B]">
                  View Details
                </button>
              </div>

              {/* 12th Board Card */}
              <div className="bg-[#BA68C8] border-[2px] border-black rounded-[24px] p-8 shadow-[6px_6px_0_0_#FFD747] hover:-translate-y-2 hover:shadow-[10px_10px_0_0_#FFD747] transition-all flex flex-col text-white">
                <div className="w-16 h-16 bg-white border-[2px] border-black rounded-[16px] shadow-[3px_3px_0_0_#4DD0E1] flex items-center justify-center mb-8 font-bold text-xl text-black">
                  12th
                </div>
                <h3 className="text-[24px] font-[900] mb-3">Board Excellence</h3>
                <p className="text-white/90 font-bold mb-6 text-[15px] leading-relaxed flex-1">
                  Focused board exam excellence combined with revision of 11th topics for a complete academic profile.
                </p>
                <button className="w-full py-3 bg-white text-black border-[2px] border-black rounded-full font-bold text-[14px] hover:bg-black hover:text-white transition-colors shadow-[4px_4px_0_0_#FF8A65]">
                  View Details
                </button>
              </div>

              {/* IIT JEE Card */}
              <div className="bg-[#EF5350] border-[2px] border-black rounded-[24px] p-8 shadow-[6px_6px_0_0_#1FC16B] hover:-translate-y-2 hover:shadow-[10px_10px_0_0_#1FC16B] transition-all flex flex-col text-white">
                <div className="w-16 h-16 bg-white border-[2px] border-black rounded-[16px] shadow-[3px_3px_0_0_#FFD747] flex items-center justify-center mb-8">
                  <Target className="w-8 h-8 text-black" strokeWidth={2.5} />
                </div>
                <h3 className="text-[24px] font-[900] mb-3">IIT JEE</h3>
                <p className="text-white/90 font-bold mb-6 text-[15px] leading-relaxed flex-1">
                  The ultimate track for engineering aspirants. Master problem-solving for JEE Mains & Advanced.
                </p>
                <button className="w-full py-3 bg-white text-black border-[2px] border-black rounded-full font-bold text-[14px] hover:bg-black hover:text-white transition-colors shadow-[4px_4px_0_0_#4DD0E1]">
                  View Details
                </button>
              </div>

              {/* NEET Card */}
              <div className="bg-[#1FC16B] border-[2px] border-black rounded-[24px] p-8 shadow-[6px_6px_0_0_#FF8A65] hover:-translate-y-2 hover:shadow-[10px_10px_0_0_#FF8A65] transition-all flex flex-col text-black">
                <div className="w-16 h-16 bg-white border-[2px] border-black rounded-[16px] shadow-[3px_3px_0_0_#FFD747] flex items-center justify-center mb-8">
                  <Target className="w-8 h-8 text-black" strokeWidth={2.5} />
                </div>
                <h3 className="text-[24px] font-[900] mb-3">NEET Medical</h3>
                <p className="text-black/80 font-bold mb-6 text-[15px] leading-relaxed flex-1">
                  Dedicated medical entrance preparation. Intensive focus on Biology and conceptual Chemistry/Physics.
                </p>
                <button className="w-full py-3 bg-white border-[2px] border-black rounded-full font-bold text-[14px] hover:bg-black hover:text-white transition-colors shadow-[4px_4px_0_0_#BA68C8]">
                  View Details
                </button>
              </div>

              {/* Polytechnic Card */}
              <div className="bg-[#111] text-white border-[2px] border-black rounded-[24px] p-8 shadow-[6px_6px_0_0_#FFD747] hover:-translate-y-2 hover:shadow-[10px_10px_0_0_#FFD747] transition-all flex flex-col">
                <div className="w-16 h-16 bg-white border-[2px] border-black rounded-[16px] shadow-[3px_3px_0_0_#1FC16B] flex items-center justify-center mb-8">
                  <Code className="w-8 h-8 text-black" strokeWidth={2.5} />
                </div>
                <h3 className="text-[24px] font-bold mb-3">Polytechnic</h3>
                <p className="text-gray-300 font-medium mb-6 text-[15px] leading-relaxed flex-1">
                  Specialized guidance for state-level polytechnic entrance exams to launch your technical career early.
                </p>
                <button className="w-full py-3 bg-[#FFD747] text-black border-[2px] border-black rounded-full font-bold text-[14px] hover:bg-white transition-colors shadow-[4px_4px_0_0_#BA68C8]">
                  View Details
                </button>
              </div>

              {/* NDA Card */}
              <div className="bg-[#A5B4FC] border-[2px] border-black rounded-[24px] p-8 shadow-[6px_6px_0_0_#000] hover:-translate-y-2 hover:shadow-[10px_10px_0_0_#000] transition-all flex flex-col md:col-span-2  relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 h-full">
                  <div className="flex flex-col flex-1 z-10">
                    <div className="w-16 h-16 bg-white border-[2px] border-black rounded-[16px] shadow-[3px_3px_0_0_#000] flex items-center justify-center mb-6">
                      <Target className="w-8 h-8 text-black" strokeWidth={2.5} />
                    </div>
                    <h3 className="text-[28px] lg:text-[32px] font-extrabold mb-3">NDA / Defence Services</h3>
                    <p className="text-gray-800 font-medium text-[16px] leading-relaxed max-w-2xl">
                      A premium, physically and mentally rigorous track preparing students for the National Defence Academy. Combines our robust 11th/12th academic foundation with specialized aptitude and physical training guidance.
                    </p>
                  </div>
                  <div className="w-full md:w-auto mt-auto md:mt-0 z-10 shrink-0 border-t-2 md:border-t-0 md:border-l-2 border-black/20 pt-6 md:pt-0 md:pl-10">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="bg-black text-white px-3 py-1 rounded-[8px] text-[12px] font-bold uppercase tracking-wider">New Batch</span>
                      <span className="font-bold text-black text-[14px]">Admissions Open</span>
                    </div>
                    <button className="w-full md:w-auto px-10 py-4 bg-white text-black border-[2px] border-black rounded-full font-bold text-[15px] shadow-[3px_3px_0_0_#000] hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#000] transition-all whitespace-nowrap">
                      Explore NDA Program
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </section>


        {/* --- OUR FACILITIES SECTION --- */}
        <section className="px-4 lg:px-16 py-24 bg-white relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-[1600px] mx-auto"
          >

            {/* Section Header */}
            <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-8 ">
              <div className="max-w-[700px] flex flex-col sm:items-start items-center sm:text-start text-center">
                <div className="inline-block border-[1.5px] border-black rounded-full px-4 py-1.5 font-bold text-[13px] bg-[#BA68C8] text-white shadow-[2px_2px_0_0_#000] mb-6 tracking-wide uppercase">
                  Our Facilities
                </div>
                <h2 className="text-4xl sm:text-[56px] leading-[1.05] font-[800] tracking-[-0.03em] text-black">
                  World-Class Campus <br className="hidden md:block" /> Experience
                </h2>
              </div>
              <p className="text-[#555] text-lg text-center max-w-[450px] font-medium leading-relaxed lg:mb-2">
                We provide a stimulating environment with modern infrastructure designed to support both academic rigor and creative exploration.
              </p>
            </div>

            {/* Facilities Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">

              {/* Smart Classrooms - Large Card */}
              <div className="md:col-span-2 md:row-span-2 bg-[#1FC16B] border-[2px] border-black rounded-[32px] p-8 shadow-[8px_8px_0_0_#000] group hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0_0_#000] transition-all relative overflow-hidden flex flex-col justify-between min-h-[400px]">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2"></div>

                <div className="z-10">
                  <div className="w-16 h-16 bg-white border-[2px] border-black rounded-[20px] shadow-[4px_4px_0_0_#000] flex items-center justify-center mb-8">
                    <Zap className="w-8 h-8 text-black" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-[32px] sm:text-[40px] font-[900] mb-4 text-black leading-tight">Smart <br />Classrooms</h3>
                  <p className="text-black/80 font-bold text-[18px] leading-relaxed max-w-[400px]">
                    Equipped with interactive whiteboards and cutting-edge audio-visual systems to make learning immersive and engaging.
                  </p>
                </div>

                <div className="mt-8 z-10 flex items-center gap-4">
                  <div className="px-5 py-2.5 bg-black text-white rounded-full font-bold text-[14px]">
                    Fully Air Conditioned
                  </div>
                  <div className="px-5 py-2.5 bg-white border-[2px] border-black rounded-full font-bold text-[14px]">
                    Hybrid Capabilities
                  </div>
                </div>
              </div>

              {/* Science Lab */}
              <div className="bg-[#FFD747] border-[2px] border-black rounded-[32px] p-8 shadow-[8px_8px_0_0_#000] hover:-translate-y-1 hover:shadow-[12px_12px_0_0_#000] transition-all flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 bg-white border-[2px] border-black rounded-[18px] shadow-[3px_3px_0_0_#000] flex items-center justify-center mb-6">
                    <Microscope className="w-7 h-7 text-black" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-[24px] font-[900] mb-3 text-black">Advanced Labs</h3>
                  <p className="text-black/70 font-bold text-[15px] leading-relaxed">
                    State-of-the-art physics, chemistry, and biology labs for hands-on experiments.
                  </p>
                </div>
                <div className="mt-6 font-black text-[14px] uppercase tracking-wider flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-black"></div>
                  Practical Focus
                </div>
              </div>

              {/* Library */}
              <div className="bg-[#FF8A65] border-[2px] border-black rounded-[32px] p-8 shadow-[8px_8px_0_0_#000] hover:-translate-y-1 hover:shadow-[12px_12px_0_0_#000] transition-all flex flex-col justify-between text-white">
                <div>
                  <div className="w-14 h-14 bg-white border-[2px] border-black rounded-[18px] shadow-[3px_3px_0_0_#000] flex items-center justify-center mb-6">
                    <BookOpen className="w-7 h-7 text-black" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-[24px] font-[900] mb-3">Modern Library</h3>
                  <p className="text-white/80 font-bold text-[15px] leading-relaxed">
                    A peaceful space with 5000+ books and access to top digital journals.
                  </p>
                </div>
                <div className="mt-6 font-black text-[14px] uppercase tracking-wider flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  E-Resources
                </div>
              </div>

              {/* Digital Hub - Wide Card */}
              <div className="md:col-span-2 bg-[#4DD0E1] border-[2px] border-black rounded-[32px] p-8 shadow-[8px_8px_0_0_#000] hover:-translate-y-1 hover:shadow-[12px_12px_0_0_#000] transition-all">
                <div className="flex flex-col md:flex-row gap-8 items-start md:items-center h-full">
                  <div className="shrink-0">
                    <div className="w-16 h-16 bg-white border-[2px] border-black rounded-[20px] shadow-[4px_4px_0_0_#000] flex items-center justify-center">
                      <Monitor className="w-8 h-8 text-black" strokeWidth={2.5} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-[28px] font-[900] text-black">Digital Learning Hub</h3>
                      <div className="flex items-center gap-1 bg-white px-2 py-0.5 rounded-md border border-black shadow-[1px_1px_0_0_#000]">
                        <Wifi className="w-3 h-3 text-[#1FC16B]" />
                        <span className="text-[10px] font-black uppercase">Fiber WiFi</span>
                      </div>
                    </div>
                    <p className="text-black/70 font-bold text-[16px] leading-relaxed max-w-[500px]">
                      High-speed internet campus and advanced computer systems for research, coding, and digital design projects.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </section>


        {/* --- EXPERT TEACHERS SECTION --- */}
        <section id="teachers" className="px-4 lg:px-16 py-24 bg-[#FAFAFA] relative border-t-2 border-dashed border-black/10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-[1600px] mx-auto"
          >

            <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
              <div className="text-center md:text-left">
                <div className="inline-block border-[1.5px] border-black rounded-full px-4 py-1.5 font-bold text-[13px] bg-black text-[#1FC16B] shadow-[2px_2px_0_0_#1FC16B] mb-6 tracking-wide uppercase">
                  Our Mentors
                </div>
                <h2 className="text-4xl sm:text-[56px] leading-[1.05] font-[800] tracking-[-0.03em] text-black">
                  Guided by the <br />Best in the Field
                </h2>
              </div>
              <div className="flex items-center gap-6 bg-white border-[2px] border-black rounded-[24px] p-6 shadow-[6px_6px_0_0_#000]">
                <div className="w-16 h-16 bg-[#FFD747] rounded-full border-[2px] border-black flex items-center justify-center font-black text-2xl">
                  15+
                </div>
                <div>
                  <h4 className="font-black text-xl leading-tight">Expert Faculty Members</h4>
                  <p className="text-gray-500 font-bold">Avg. 10+ Years Experience</p>
                </div>
              </div>
            </div>

            <div className="relative w-full pb-4">
              <div className="flex overflow-x-auto gap-6 sm:gap-8 pb-5 pt-4 px-2 sm:px-5 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
                {[
                  { name: "Dr. S. K. Singh", sub: "Physics Expert", exp: "Ex-IITian, 12+ Yrs Exp", color: "#1FC16B", img: "/img/teacher.jpg" },
                  { name: "Prof. Anjali Roy", sub: "Biology HOD", exp: "PhD in Genetics, 10+ Yrs Exp", color: "#FF8A65", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" },
                  { name: "Mr. Vikram Mehta", sub: "Maths Wizard", exp: "JEE Specialist, 15+ Yrs Exp", color: "#BA68C8", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop" },
                  { name: "Ms. Neha Gupta", sub: "Chemistry Head", exp: "M.Sc Gold Medalist, 8+ Yrs Exp", color: "#4DD0E1", img: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=800&auto=format&fit=crop" }
                ].map((teacher, idx) => (
                  <div key={idx} className="group relative min-w-[75vw] sm:min-w-[340px] lg:min-w-[360px] shrink-0 snap-center">
                    {/* Background Card Offset */}
                    <div className="absolute inset-0 bg-black rounded-[22px] translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform"></div>

                    <div className="relative bg-white border-[2.5px] border-black rounded-[22px] overflow-hidden flex flex-col h-full hover:-translate-y-1 transition-transform">
                      <div className="aspect-[4/5] relative bg-gray-100 border-b-[2.5px] border-black overflow-hidden">
                        <Image src={teacher.img} alt={teacher.name} fill className="object-cover   transition-all duration-500" />
                        <div className="absolute top-4 right-4 bg-white border-[1.5px] border-black rounded-full p-2.5 shadow-[2px_2px_0_0_#000]">
                          <ArrowUpRight className="w-5 h-5" />
                        </div>
                        <div className="absolute bottom-4 left-4">
                          <div className="bg-black text-white px-4 py-1 rounded-full text-[12px] font-black uppercase tracking-wider">
                            {teacher.sub}
                          </div>
                        </div>
                      </div>
                      <div className="p-4 flex flex-col gap-2">
                        <h3 className="text-xl font-[900] text-black group-hover:text-[#1FC16B] transition-colors">{teacher.name}</h3>
                        <p className="text-gray-500 font-bold text-sm">{teacher.exp}</p>
                        <div className="mt-4 flex items-center gap-3">
                          <div className="flex -space-x-2">
                            {[1, 2, 3].map(i => <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-gray-200"></div>)}
                          </div>
                          <span className="text-[12px] font-black text-gray-400">1k+ Students</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- TOPPER'S RESULT SECTION --- */}
        <section className="px-4 sm:px-8 lg:px-16 py-16 sm:py-24 bg-black relative overflow-hidden rounded-[22px] sm:rounded-[48px]">
          {/* Background Grid Pattern */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#FFF 1.5px, transparent 0)", backgroundSize: "32px 32px" }}></div>


          <div className="max-w-[1600px] mx-auto relative z-10">

            <div className="text-center mb-12 sm:mb-20">
              <div className="inline-block border-[1.5px] border-white rounded-full px-4 py-1.5 font-bold text-[11px] sm:text-[13px] bg-white text-black shadow-[3px_3px_0_0_#1FC16B] mb-6 sm:mb-8 tracking-widest uppercase">
                Academic Excellence 2024
              </div>
              <h2 className="text-3xl sm:text-[64px] font-[900] tracking-[-0.04em] text-white leading-tight">
                Breaking Records, <br className="hidden sm:block" /> Every Single Year
              </h2>
            </div>

            <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 items-stretch">

              {/* Main Star - Standout Card */}
              <div className="lg:col-span-4 bg-[#1FC16B] border-[3px] border-black rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 shadow-[8px_8px_0_0_#FFF] flex flex-col items-center text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 -rotate-12 translate-x-8 -translate-y-8"></div>

                <div className="w-32 h-32 sm:w-48 sm:h-48 rounded-full border-[3px] sm:border-[4px] border-black overflow-hidden bg-white mb-6 sm:mb-8 shadow-[6px_6px_0_0_#000] relative z-10">
                  <Image src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=192&h=192&auto=format&fit=crop" alt="Topper" width={192} height={192} className="object-cover" />
                </div>

                <div className="bg-black text-white px-5 py-1.5 rounded-full font-black text-lg sm:text-xl mb-4 shadow-[3px_3px_0_0_#FFF] z-10">
                  AIR - 48
                </div>

                <h3 className="text-2xl sm:text-[32px] font-black mb-1 sm:mb-2 text-black leading-tight">Aaryan Sharma</h3>
                <p className="text-black/70 font-bold text-sm sm:text-lg mb-6 sm:mb-8 uppercase tracking-widest">IIT JEE Mains 2024</p>

                <div className="w-full h-[2px] bg-black/10 mb-6 sm:mb-8"></div>

                <div className="flex flex-col gap-3 sm:gap-4 w-full">
                  <div className="flex items-center justify-between font-black text-black text-sm sm:text-base">
                    <span>Physics</span>
                    <span className="bg-white px-2.5 py-1 rounded-lg border-2 border-black">99.8%</span>
                  </div>
                  <div className="flex items-center justify-between font-black text-black text-sm sm:text-base">
                    <span>Mathematics</span>
                    <span className="bg-white px-2.5 py-1 rounded-lg border-2 border-black">99.5%</span>
                  </div>
                </div>
              </div>

              {/* Top Ranks - Creative Compact Mobile Layout */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-8 flex flex-col justify-center "
              >

                {/* Horizontal Scroll on Mobile, Grid on Tablet/Desktop */}
                <div className="flex overflow-x-auto lg:grid lg:grid-cols-2 gap-4 sm:gap-6 pb-6 lg:px-3 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden sm:px-0">
                  {[
                    { name: "Priya Das", rank: "682/720", exam: "NEET 2024", color: "#FFD747", tag: "Biology Topper", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=80&h=80&auto=format&fit=crop" },
                    { name: "Sumit Jha", rank: "98.2%", exam: "12th Boards", color: "#BA68C8", tag: "District Rank 1", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=80&h=80&auto=format&fit=crop" },
                    { name: "Rohit Raj", rank: "AIR-124", exam: "Polytechnic", color: "#4DD0E1", tag: "State Rank", img: "https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=80&h=80&auto=format&fit=crop" },
                    { name: "Isha Singh", rank: "AIR-756", exam: "IIT JEE Adv.", color: "#FF8A65", tag: "Maths 100/100", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=80&h=80&auto=format&fit=crop" }
                  ].map((topper, idx) => (
                    <div key={idx} className="min-w-[280px] sm:min-w-0 bg-white border-[2.5px] border-black rounded-[24px] sm:rounded-[32px] p-4 sm:p-6 flex items-center gap-4 sm:gap-6 shadow-[6px_6px_0_0_#1FC16B] hover:translate-x-1 transition-transform snap-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl border-[2px] border-black bg-gray-100 shrink-0 overflow-hidden">
                        <Image src={topper.img} alt={topper.name} width={80} height={80} className="object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-0.5 block truncate">{topper.tag}</span>
                        <h4 className="text-lg sm:text-xl font-black text-black mb-1 truncate">{topper.name}</h4>
                        <div className="flex items-center justify-between gap-2">
                          <p className="font-bold text-gray-400 text-[12px] sm:text-sm truncate">{topper.exam}</p>
                          <span className="bg-black text-white px-2 py-0.5 rounded-lg text-[12px] sm:text-sm font-black italic shrink-0">{topper.rank}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stats Banner spanning both columns */}
                <div className="bg-[#FFD747] border-[3px] border-black rounded-[28px] sm:rounded-[40px] p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-8 shadow-[6px_6px_0_0_#FFF]">
                  <div className="flex items-center gap-5 sm:gap-6 text-center sm:text-left">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black rounded-[22px] flex items-center justify-center shadow-[4px_4px_0_0_#1FC16B] shrink-0">
                      <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-[#1FC16B]" />
                    </div>
                    <div>
                      <h4 className="text-2xl sm:text-[32px] font-black leading-tight text-black">Total 500+ Selections</h4>
                      <p className="font-bold text-black/60 text-sm sm:text-base">Across all competitive exams in Bihar</p>
                    </div>
                  </div>
                  <button className="w-full sm:w-auto px-8 py-4 bg-black text-white rounded-full font-black text-base sm:text-lg border-2 border-black hover:translate-y-1 shadow-[4px_4px_0_0_#FFF] transition-all whitespace-nowrap">
                    View All Results
                  </button>
                </div>

              </motion.div>

            </div>

          </div>
        </section>

        {/* --- CREATIVE GALLERY SECTION --- */}
        <section id="gallery" className="px-4 lg:px-16 py-16 sm:py-24 bg-white relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-[1600px] mx-auto"
          >

            <div className="flex flex-col sm:flex-row items-center justify-between mb-12 sm:mb-16 gap-8">
              <div className="w-full flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="inline-block border-[1.5px] border-black rounded-full px-4 py-1.5 font-bold text-[13px] bg-[#BA68C8] text-white shadow-[2px_2px_0_0_#000] mb-6 tracking-wide uppercase">
                  Campus Life
                </div>
                <h2 className="text-4xl sm:text-[56px] leading-[1.05] font-[800] tracking-[-0.03em] text-black italic">
                  A Glimpse Into <br className="hidden sm:block" />GRAVITY TUTORIALS&apos; World
                </h2>
              </div>
              <div className="flex items-center gap-4 justify-center sm:justify-end w-full sm:w-auto">
                <button className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-black flex items-center justify-center bg-[#FFD747] shadow-[3px_3px_0_0_#000] hover:translate-y-1 transition-all">
                  <ArrowUpRight className="rotate-[-135deg] w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                <button className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-black flex items-center justify-center bg-[#1FC16B] shadow-[3px_3px_0_0_#000] hover:translate-y-1 transition-all">
                  <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
            </div>

            {/* Decorative Lines inspired by the image */}
            <div className="flex flex-col gap-2 mb-12 sm:hidden px-4">
              <div className="h-[6px] w-full bg-black rounded-full"></div>
              <div className="h-[6px] w-[95%] bg-[#BA68C8] rounded-full"></div>
              <div className="h-[6px] w-[90%] bg-black rounded-full"></div>
              <div className="h-[6px] w-[85%] bg-[#FFD747] rounded-full"></div>
              <div className="h-[6px] w-[80%] bg-[#1FC16B] rounded-full"></div>
              <div className="h-[6px] w-[75%] bg-black rounded-full"></div>
              <div className="h-[6px] w-[70%] bg-[#4DD0E1] rounded-full"></div>
            </div>

            {/* Grid-based Gallery - Responsive Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 sm:grid-rows-2 gap-6 h-auto md:h-[800px]">

              {/* Large Main Feature */}
              <div className="sm:col-span-2 sm:row-span-2 bg-gray-100 border-[3px] border-black rounded-[32px] sm:rounded-[40px] shadow-[8px_8px_0_0_#BA68C8] overflow-hidden relative group aspect-[4/5] sm:aspect-auto">
                <Image src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1200&auto=format&fit=crop" alt="Library" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 sm:p-10 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="mt-auto">
                    <h4 className="text-white text-2xl sm:text-3xl font-black mb-1 sm:mb-2">Modern Library</h4>
                    <p className="text-white/80 font-bold text-sm sm:text-base">24/7 access for dedicated students</p>
                  </div>
                </div>
              </div>

              {/* Top Right */}
              <div className="sm:col-span-1 bg-gray-100 border-[3px] border-black rounded-[28px] sm:rounded-[32px] shadow-[6px_6px_0_0_#FFD747] overflow-hidden relative group aspect-video sm:aspect-auto">
                <Image src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop" alt="Lab" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-[3px_3px_0_0_#000]">
                    <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                </div>
              </div>

              {/* Middle Right Vertical */}
              <div className="sm:col-span-1 sm:row-span-2 bg-gray-100 border-[3px] border-black rounded-[28px] sm:rounded-[32px] shadow-[6px_6px_0_0_#1FC16B] overflow-hidden relative group aspect-[3/4] sm:aspect-auto">
                <Image src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop" alt="Event" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-white border-2 border-black px-3 py-1 rounded-full font-black text-xs sm:text-sm shadow-[2px_2px_0_0_#000]">
                  Annual Fest 2024
                </div>
              </div>

              {/* Bottom Mid */}
              <div className="sm:col-span-1 bg-gray-100 border-[3px] border-black rounded-[28px] sm:rounded-[32px] shadow-[6px_6px_0_0_#4DD0E1] overflow-hidden relative group aspect-video sm:aspect-auto">
                <Image src="/classroom.png" alt="Classroom" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#FF8A65] border-2 border-black rounded-lg flex items-center justify-center shadow-[2px_2px_0_0_#FFF]">
                    <CheckCircle2 className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                </div>
              </div>

            </div>

          </motion.div>
        </section>





        {/* --- TESTIMONIALS / HALL OF FAME SECTION --- */}
        <section className="px-4 lg:px-16 py-24 bg-[#E5E7EB]/30 relative border-t-2 border-dashed border-black/10">
          <div className="max-w-[1600px] mx-auto">

            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-block border-[1.5px] border-black rounded-full px-4 py-1.5 font-bold text-[13px] bg-[#FFD747] shadow-[2px_2px_0_0_#000] mb-6 tracking-wide uppercase">
                Hall of Fame
              </div>
              <h2 className="text-4xl sm:text-[56px] leading-[1.05] font-[800] tracking-[-0.03em] mb-6 text-black">
                Our Student Success Stories
              </h2>
              <p className="text-[#555] text-lg max-w-[700px] mx-auto font-medium leading-relaxed">
                Meet the achievers who turned their dreams into reality with our guidance and their hard work.
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="relative w-full pb-4">
              <div className="flex overflow-x-auto gap-6 sm:gap-8 pb-6 pt-4 px-4 sm:px-12 lg:px-24 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">

                {/* Testimonial Card 1 */}
                <div className="w-[320px] lg:w-[450px] shrink-0 snap-center bg-white border-[2px] border-black rounded-[32px] p-5 shadow-[8px_8px_0_0_#1FC16B] hover:-translate-y-2 transition-all relative">
                  <div className="absolute -top-4 -right-4 bg-black text-white w-12 h-12 rounded-full border-[2px] border-black flex items-center justify-center shadow-[2px_2px_0_0_#FFD747] z-10">
                    <Quote className="w-6 h-6" fill="currentColor" />
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full border-[2px] border-black overflow-hidden bg-gray-100 flex-shrink-0">
                      <Image src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=64&h=64&auto=format&fit=crop" alt="Student" width={64} height={64} className="object-cover" />
                    </div>
                    <div>
                      <h4 className="font-[900] text-xl text-black">Rahul Kumar</h4>
                      <p className="text-sm font-bold text-[#1FC16B]">IIT JEE (Advanced) - Rank 412</p>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-4 h-4 text-[#FFD747]" fill="currentColor" />
                    ))}
                  </div>

                  <p className="text-black/80 font-medium leading-relaxed italic border-l-4 border-[#1FC16B] pl-4">
                    &quot;The faculty at GRAVITY TUTORIALS didn&apos;t just teach me formulas; they taught me how to think. The personalized attention and regular mock tests were the key to my success in JEE.&quot;
                  </p>

                  <div className="mt-8 flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-black" />
                    <span className="text-[12px] font-black uppercase tracking-wider bg-gray-100 px-3 py-1 rounded-full border border-black">Batch of 2024</span>
                  </div>
                </div>

                {/* Testimonial Card 2 */}
                <div className="w-[320px] lg:w-[450px] shrink-0 snap-center bg-[#BA68C8] border-[2px] border-black rounded-[32px] p-5 shadow-[8px_8px_0_0_#000] hover:-translate-y-2 transition-all text-white relative">
                  <div className="absolute -top-4 -right-4 bg-[#FFD747] text-black w-12 h-12 rounded-full border-[2px] border-black flex items-center justify-center shadow-[2px_2px_0_0_#FFF] z-10">
                    <Quote className="w-6 h-6" fill="currentColor" />
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full border-[2px] border-white overflow-hidden bg-white/20 flex-shrink-0">
                      <Image src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=64&h=64&auto=format&fit=crop" alt="Student" width={64} height={64} className="object-cover" />
                    </div>
                    <div>
                      <h4 className="font-[900] text-xl">Sneha Singh</h4>
                      <p className="text-sm font-bold text-[#FFD747]">NEET - 685/720 Marks</p>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-4 h-4 text-[#FFD747]" fill="currentColor" />
                    ))}
                  </div>

                  <p className="text-white/90 font-medium leading-relaxed italic border-l-4 border-[#FFD747] pl-4">
                    &quot;Coming from a small town like Arwal, I never thought I could compete at the national level. GRAVITY TUTORIALS provides study material and doubt-clearing sessions that are truly world-class.&quot;
                  </p>

                  <div className="mt-8 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-white" />
                    <span className="text-[12px] font-black uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full border border-white/20">AIMS Delhi Bound</span>
                  </div>
                </div>

                {/* Testimonial Card 3 */}
                <div className="w-[320px] lg:w-[450px] shrink-0 snap-center bg-[#FFD747] border-[2px] border-black rounded-[32px] p-5 shadow-[8px_8px_0_0_#BA68C8] hover:-translate-y-2 transition-all text-black relative">
                  <div className="absolute -top-4 -right-4 bg-black text-white w-12 h-12 rounded-full border-[2px] border-black flex items-center justify-center shadow-[2px_2px_0_0_#1FC16B] z-10">
                    <Quote className="w-6 h-6" fill="currentColor" />
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full border-[2px] border-black overflow-hidden bg-white flex-shrink-0">
                      <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=64&h=64&auto=format&fit=crop" alt="Student" width={64} height={64} className="object-cover" />
                    </div>
                    <div>
                      <h4 className="font-[900] text-xl">Amit Verma</h4>
                      <p className="text-sm font-bold text-black/60">Class 12th Board - 98.4%</p>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-4 h-4 text-black" fill="currentColor" />
                    ))}
                  </div>

                  <p className="text-black/80 font-medium leading-relaxed italic border-l-4 border-black pl-4">
                    &quot;GRAVITY TUTORIALS provides the perfect balance between competitive exam preparation and school board exams. I was able to top my school and crack the engineering entrance simultaneously.&quot;
                  </p>

                  <div className="mt-8 flex items-center gap-2">
                    <Award className="w-5 h-5 text-black" />
                    <span className="text-[12px] font-black uppercase tracking-wider bg-black/5 px-3 py-1 rounded-full border border-black/20">Distinction Holder</span>
                  </div>
                </div>

              </div>
            </div>

            {/* View More Achievers Button */}
            <div className="mt-16 text-center relative z-10 flex justify-center">
              <button className="group relative px-10 py-4 bg-black text-white rounded-full border-[2px] border-black font-extrabold hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#BA68C8] shadow-[4px_4px_0_0_#1FC16B] transition-all flex items-center gap-3 overflow-hidden">
                <span className="relative z-10">Meet All Our Achievers</span>
                <ArrowUpRight className="relative z-10 w-5 h-5 group-hover:rotate-45 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1FC16B] via-[#4DD0E1] to-[#BA68C8] opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </button>
            </div>
          </div>
        </section>

        {/* --- FINAL CTA / FOOTER SECTION --- */}
        <footer className="bg-black text-white pt-24 pb-12 relative overflow-hidden  rounded-t-4xl">
          {/* Background Decor */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[300px] bg-[#1FC16B] -rotate-3 -translate-y-full opacity-20 blur-3xl rounded-[100%]"></div>

          <div className="px-4 lg:px-16 max-w-[1600px] mx-auto relative z-10">

            {/* Newsletter / Contact CTA */}
            <div className="bg-[#BA68C8] border-[2px] border-white/20 rounded-[40px] p-8 md:p-16 mb-24 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-[12px_12px_0_0_#1FC16B]">
              <div className="max-w-[600px] text-center lg:text-left">
                <h2 className="text-4xl md:text-[56px] font-[900] leading-tight mb-6">Ready to start your journey?</h2>
                <p className="text-[18px] font-bold text-white/80">Get a free counseling session and explore our premium learning batches in Arwal today.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                <button className="px-10 py-5 bg-[#FFD747] text-black rounded-full border-[2px] border-black shadow-[4px_4px_0_0_#FFF] font-black text-lg hover:translate-y-1 transition-all">
                  Book a Visit
                </button>
                <button className="px-10 py-5 bg-white text-black rounded-full border-[2px] border-black shadow-[4px_4px_0_0_#000] font-black text-lg hover:translate-y-1 transition-all">
                  Call Us Now
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 border-b border-white/10 pb-20">

              {/* Brand Col */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12">
                    <Image
                      src="/logo.png"
                      alt="Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="text-[24px] font-black tracking-tighter italic">GRAVITY TUTORIALS</div>
                </div>
                <p className="text-gray-400 font-medium leading-relaxed">
                  Arwal&apos;s leading coaching institute dedicated to transforming students into global leaders through excellence in education.
                </p>
                <div className="flex gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-[#1FC16B] transition-colors cursor-pointer">
                      <div className="w-4 h-4 bg-white rounded-sm"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-xl font-black mb-8">Navigation</h4>
                <ul className="flex flex-col gap-4 text-gray-400 font-bold">
                  <li><a href="#" onClick={(e) => scrollToSection(e, 'home')} className="hover:text-white transition-colors cursor-pointer">Home</a></li>
                  <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-white transition-colors cursor-pointer">About Us</a></li>
                  <li><a href="#courses" onClick={(e) => scrollToSection(e, 'courses')} className="hover:text-white transition-colors cursor-pointer">Our Courses</a></li>
                  <li><a href="#teachers" onClick={(e) => scrollToSection(e, 'teachers')} className="hover:text-white transition-colors cursor-pointer">Our Mentors</a></li>
                  <li><a href="#gallery" onClick={(e) => scrollToSection(e, 'gallery')} className="hover:text-white transition-colors cursor-pointer">Gallery</a></li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="text-xl font-black mb-8">Support</h4>
                <ul className="flex flex-col gap-4 text-gray-400 font-bold">
                  <li className="hover:text-white transition-colors cursor-pointer">Contact Support</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Join as Mentor</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Scholarship Test</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Privacy Policy</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Terms of Service</li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-xl font-black mb-8">Contact Us</h4>
                <div className="flex flex-col gap-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-[#1FC16B] rounded-2xl flex-shrink-0 flex items-center justify-center">
                      <Target className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-black uppercase tracking-widest mb-1">Our Location</p>
                      <p className="text-gray-200 font-bold leading-tight text-sm">Main Road, Near SBI Bank, Arwal, Bihar - 804401</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-[#FFD747] rounded-2xl flex-shrink-0 flex items-center justify-center">
                      <UserPlus className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-black uppercase tracking-widest mb-1">Call for batches</p>
                      <p className="text-gray-200 font-bold leading-tight text-sm">+91 98765 43210</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-gray-500 font-bold text-sm">© 2026 GRAVITY TUTORIALS Coaching Institute. All rights reserved.</p>
              <div className="flex items-center gap-8 text-gray-500 font-black text-xs uppercase tracking-widest">
                <span>Privacy Policy</span>
                <span>Terms Of Use</span>
              </div>
            </div>

          </div>
        </footer>

      </div>
    </div>

  );
}
