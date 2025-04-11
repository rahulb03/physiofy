// import Image from "next/image"

// export default function Testimonial() {
//   return (
//     <section className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-xl shadow-2xl shadow-[#366A79]/70">
//       <div className="absolute inset-0 object-cover">
//         <Image
//           alt="clouds background"
//           src="/images/field.png"
//           fill
//           className="object-cover"
//         />
//       </div>
//       <div className="absolute top-[19rem] -right-14 w-[19rem] sm:top-[12rem] sm:right-3 sm:w-[23rem] md:top-[12rem] md:right-0 md:w-[25rem] lg:top-[16rem] lg:right-12 lg:w-[34rem]">
//         <Image
//           alt="clouds background"
//           src="/images/drone.png"
//           width={1583}
//           height={554}
//           className="animate-hover"
//         />
//       </div>
//       <div className="relative z-20 mb-20 p-8 sm:p-14 lg:p-24">
//         <div className="">
//           <blockquote className="relative max-w-2xl text-xl leading-relaxed tracking-tight text-gray-900 md:text-2xl lg:text-3xl">
//             <p className="before:absolute before:top-0 before:right-full before:content-['“'] after:text-gray-900/70 after:content-['”']">
//               <strong className="font-semibold">
//                 Solar transformed our environmental monitoring capabilities.
//               </strong>{" "}
//               <span className="text-gray-900/70">
//                 Their autonomous network provides real-time data on forest
//                 health, wildlife patterns, and ecosystem changes with
//                 unprecedented precision and efficiency.
//               </span>
//             </p>
//           </blockquote>
//         </div>
//         <div className="mt-14 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
//           <div className="relative shrink-0 rounded-full bg-white/15 p-0.5 ring-1 ring-white/20">
//             <Image
//               alt="Dr. Sarah Miller"
//               src="/images/smiller.jpeg"
//               width={56}
//               height={56}
//               className="rounded-full border object-contain"
//             />
//           </div>
//           <div>
//             <div className="text-base font-medium text-gray-900">
//               Dr. Sarah Miller
//             </div>
//             <div className="text-sm text-[#C33621]/80">
//               Director of Conservation Technologies
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


import Image from "next/image"

export default function PhysiofyIntro() {
  return (
    <section className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-xl shadow-2xl shadow-[#366A79]/70 bg-white">
      {/* Background image */}
      <div className="absolute inset-0 object-cover">
        <Image
          alt="clouds background"
          src="/images/field.png"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute top-[19rem] -right-14 w-[19rem] sm:top-[12rem] sm:right-3 sm:w-[23rem] md:top-[12rem] md:right-0 md:w-[25rem] lg:top-[16rem] lg:right-12 lg:w-[34rem]">
        <Image
          alt="clouds background"
          src="/images/drone.png"
          width={1583}
          height={554}
          className="animate-hover"
        />
      </div>

      <div className="relative z-20 mb-20 p-8 sm:p-14 lg:p-24   rounded-xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Welcome to Physiofy
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed">
          Physiofy is transforming physiotherapy with modern solutions tailored to your lifestyle. Whether you prefer AI-powered virtual sessions from the comfort of your home or in-person therapy with our certified experts — we’re here to support your recovery, improve mobility, and help you live pain-free.
        </p>

        {/* <ul className="mt-8 space-y-4 text-gray-800 text-base md:text-lg">
          <li>✅ Personalized therapy plans created by experts</li>
          <li>✅ Virtual consultations and exercise tracking</li>
          <li>✅ Book in-person appointments with ease</li>
          <li>✅ Progress monitoring and real-time support</li>
        </ul> */}
      </div>
    </section>
  )
}
