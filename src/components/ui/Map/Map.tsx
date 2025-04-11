// // import { Icons } from "@/components/Icons"
// // import {
// //   RiHome9Fill,
// //   RiPlaneLine,
// //   RiSignalTowerFill,
// //   RiTruckFill,
// // } from "@remixicon/react"
// // import { SVGMap } from "./SVGMap"

// // export const Map = () => {
// //   return (
// //     <section
// //       id="farm-management"
// //       aria-labelledby="management-title"
// //       className="relative flex w-full max-w-6xl scroll-my-24 flex-col items-center justify-center overflow-hidden rounded-2xl bg-gray-950 px-10 shadow-2xl shadow-black/50 sm:px-16 md:px-28 lg:mx-auto"
// //     >
// //       <div className="absolute left-0 z-10 h-full backdrop-blur-[2px]">
// //         <svg
// //           className="h-full w-8 border-r border-zinc-900 stroke-zinc-800 sm:w-20"
// //           style={{
// //             maskImage:
// //               "linear-gradient(transparent, white 10rem, white calc(100% - 10rem), transparent)",
// //           }}
// //         >
// //           <defs>
// //             <pattern
// //               id="diagonal-border-pattern"
// //               patternUnits="userSpaceOnUse"
// //               width="64"
// //               height="64"
// //             >
// //               {Array.from({ length: 17 }, (_, i) => {
// //                 const offset = i * 8
// //                 return (
// //                   <path
// //                     key={i}
// //                     d={`M${-106 + offset} 110L${22 + offset} -18`}
// //                     stroke=""
// //                     strokeWidth="1"
// //                   />
// //                 )
// //               })}
// //             </pattern>
// //           </defs>
// //           <rect
// //             width="100%"
// //             height="100%"
// //             fill="url(#diagonal-border-pattern)"
// //           />
// //         </svg>
// //       </div>
// //       <div className="absolute right-0 z-10 h-full backdrop-blur-[2px]">
// //         <svg
// //           className="h-full w-8 border-r border-zinc-900 stroke-zinc-800 sm:w-20"
// //           style={{
// //             maskImage:
// //               "linear-gradient(transparent, white 10rem, white calc(100% - 10rem), transparent)",
// //           }}
// //         >
// //           <defs>
// //             <pattern
// //               id="diagonal-border-pattern"
// //               patternUnits="userSpaceOnUse"
// //               width="64"
// //               height="64"
// //             >
// //               {Array.from({ length: 17 }, (_, i) => {
// //                 const offset = i * 8
// //                 return (
// //                   <path
// //                     key={i}
// //                     d={`M${-106 + offset} 110L${22 + offset} -18`}
// //                     stroke=""
// //                     strokeWidth="1"
// //                   />
// //                 )
// //               })}
// //             </pattern>
// //           </defs>
// //           <rect
// //             width="100%"
// //             height="100%"
// //             fill="url(#diagonal-border-pattern)"
// //           />
// //         </svg>
// //       </div>

// //       <div className="pt-12 text-base font-semibold tracking-tight text-orange-400 sm:pt-20 sm:text-lg">
// //         Farm Management
// //       </div>
// //       <h2
// //         id="management-title"
// //         className="mt-6 max-w-[700px] text-center text-2xl font-semibold tracking-tight text-balance text-white md:text-5xl"
// //       >
// //         Monitoring & Control for Precision Agriculture
// //       </h2>
// //       <p className="mt-4 max-w-2xl text-center text-base text-balance text-gray-400 sm:mt-8 sm:text-xl">
// //         Complete oversight of your farming operations across fields, irrigation
// //         systems, and aerial monitoring, delivering insights even in remote rural
// //         locations.
// //       </p>

// //       <div className="relative mt-20 mb-10 ml-[17rem] scale-90 sm:mb-16 md:mt-24 md:ml-0 md:scale-100">
// //         <SVGMap className="w-[50rem] shrink-0" />
// //         <div className="absolute -top-3 left-[130px]">
// //           <div className="relative flex items-center justify-center">
// //             <div className="absolute size-10 rounded-full bg-gray-950 ring-1 ring-white/15"></div>
// //             <div className="absolute -top-4 -right-[3.7rem] flex w-fit items-center justify-center rounded-full bg-gray-950 px-1.5 py-0.5 text-xs whitespace-nowrap text-white ring-1 ring-white/15">
// //               Scanning
// //             </div>
// //             <RiPlaneLine className="relative size-5 rotate-90 text-white" />
// //             <div
// //               style={{
// //                 animationDelay: "3.5s",
// //               }}
// //               className="absolute size-10 animate-[ping_5s_ease_infinite] rounded-full ring-1 ring-orange-500/50"
// //             ></div>
// //           </div>
// //         </div>
// //         <div className="absolute top-[73px] left-[243px]">
// //           <div className="relative flex items-center justify-center">
// //             <div className="absolute size-10 rounded-full bg-gray-950 ring-1 ring-white/15"></div>
// //             <div className="absolute -top-4 -right-[3.7rem] flex w-fit items-center justify-center rounded-full bg-gray-950 px-1.5 py-0.5 text-xs whitespace-nowrap text-white ring-1 ring-white/15">
// //               Irrigating
// //             </div>
// //             <Icons.QuadCopter className="relative size-5 rotate-90 text-white" />
// //             <div
// //               style={{
// //                 animationDelay: "3.5s",
// //               }}
// //               className="absolute size-10 animate-[ping_5s_ease_infinite] rounded-full ring-1 ring-orange-500/50"
// //             ></div>
// //           </div>
// //         </div>
// //         <div className="absolute top-32 right-[300px]">
// //           <div className="relative flex items-center justify-center">
// //             <div className="absolute size-10 rounded-full bg-gray-950 ring-1 ring-white/15"></div>
// //             <div className="absolute -top-4 -right-[3.7rem] flex w-fit items-center justify-center rounded-full bg-gray-950 px-1.5 py-0.5 text-xs whitespace-nowrap text-white ring-1 ring-white/15">
// //               Scanning
// //             </div>
// //             <RiPlaneLine className="relative size-5 rotate-90 text-white" />
// //             <div
// //               style={{
// //                 animationDelay: "3.5s",
// //               }}
// //               className="absolute size-10 animate-[ping_5s_ease_infinite] rounded-full ring-1 ring-orange-500/50"
// //             ></div>
// //           </div>
// //         </div>
// //         <div className="absolute top-20 right-[390px]">
// //           <div className="relative flex items-center justify-center">
// //             <div className="absolute size-10 rounded-full bg-gray-950 ring-1 ring-white/15"></div>
// //             <RiHome9Fill className="relative size-5 text-white" />
// //           </div>
// //         </div>
// //         <div className="absolute top-12 right-[430px]">
// //           <div className="relative flex items-center justify-center">
// //             <div className="absolute size-10 rounded-full bg-gray-950 ring-1 ring-white/15"></div>
// //             <div className="absolute -top-4 -right-7 flex w-fit items-center justify-center rounded-full bg-gray-950 px-1.5 py-0.5 text-xs whitespace-nowrap text-white ring-1 ring-white/15">
// //               Idle
// //             </div>
// //             <RiTruckFill className="relative size-5 text-white" />
// //           </div>
// //         </div>
// //         <div className="absolute top-9 right-56">
// //           <div className="relative flex items-center justify-center">
// //             <RiSignalTowerFill className="z-10 size-5 text-white" />
// //             <div className="absolute size-10 rounded-full bg-gray-950 ring-1 ring-white/15 backdrop-blur-sm"></div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }



// import { User2, Calendar, Video, Smartphone, Brain, UserRound, Home, Activity } from "lucide-react"

// export const Map = () => {
//   return (
//     <section
//       id="physio-services"
//       aria-labelledby="services-title"
//       className="relative flex w-full max-w-6xl scroll-my-24 flex-col items-center justify-center overflow-hidden rounded-2xl bg-gray-950 px-10 shadow-2xl shadow-black/50 sm:px-16 md:px-28 lg:mx-auto"
//     >
//       <div className="absolute left-0 z-10 h-full backdrop-blur-[2px]">
//         <svg
//           className="h-full w-8 border-r border-zinc-900 stroke-zinc-800 sm:w-20"
//           style={{
//             maskImage: "linear-gradient(transparent, white 10rem, white calc(100% - 10rem), transparent)",
//           }}
//         >
//           <defs>
//             <pattern id="diagonal-border-pattern" patternUnits="userSpaceOnUse" width="64" height="64">
//               {Array.from({ length: 17 }, (_, i) => {
//                 const offset = i * 8
//                 return <path key={i} d={`M${-106 + offset} 110L${22 + offset} -18`} stroke="" strokeWidth="1" />
//               })}
//             </pattern>
//           </defs>
//           <rect width="100%" height="100%" fill="url(#diagonal-border-pattern)" />
//         </svg>
//       </div>
//       <div className="absolute right-0 z-10 h-full backdrop-blur-[2px]">
//         <svg
//           className="h-full w-8 border-r border-zinc-900 stroke-zinc-800 sm:w-20"
//           style={{
//             maskImage: "linear-gradient(transparent, white 10rem, white calc(100% - 10rem), transparent)",
//           }}
//         >
//           <defs>
//             <pattern id="diagonal-border-pattern" patternUnits="userSpaceOnUse" width="64" height="64">
//               {Array.from({ length: 17 }, (_, i) => {
//                 const offset = i * 8
//                 return <path key={i} d={`M${-106 + offset} 110L${22 + offset} -18`} stroke="" strokeWidth="1" />
//               })}
//             </pattern>
//           </defs>
//           <rect width="100%" height="100%" fill="url(#diagonal-border-pattern)" />
//         </svg>
//       </div>

//       <div className="pt-12 text-base font-semibold tracking-tight text-theme sm:pt-20 sm:text-lg">
//         Physiotherapy Services
//       </div>
//       <h2
//         id="services-title"
//         className="mt-6 max-w-[700px] text-center text-2xl font-semibold tracking-tight text-balance text-white md:text-5xl"
//       >
//         AI-Powered Rehabilitation & Personalized Care
//       </h2>
//       <p className="mt-4 max-w-2xl text-center text-base text-balance text-gray-400 sm:mt-8 sm:text-xl">
//         Access professional physiotherapy services through our web and mobile platforms, with virtual exercises and
//         direct therapist support tailored to your specific needs.
//       </p>

//       <div className="relative mt-16 grid w-full grid-cols-1 gap-8 md:mt-20 md:grid-cols-2">
//         {/* Basic Service */}
//         <div className="flex flex-col items-center rounded-xl bg-gray-900/50 p-6 ring-1 ring-white/10">
//           <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-theme/10 text-theme">
//             <Smartphone className="h-7 w-7" />
//           </div>
//           <h3 className="mb-2 text-xl font-semibold text-white">Basic Service</h3>
//           <p className="mb-6 text-center text-gray-400">AI-powered virtual rehabilitation with therapist support</p>

//           <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
//             <div className="flex items-start gap-3 rounded-lg bg-gray-900/50 p-4 ring-1 ring-white/5">
//               <div className="mt-1 rounded-full bg-gray-800 p-1.5">
//                 <User2 className="h-4 w-4 text-theme" />
//               </div>
//               <div>
//                 <h4 className="text-sm font-medium text-white">Choose Your Therapist</h4>
//                 <p className="text-xs text-gray-400">Select from our network of certified professionals</p>
//               </div>
//             </div>

//             <div className="flex items-start gap-3 rounded-lg bg-gray-900/50 p-4 ring-1 ring-white/5">
//               <div className="mt-1 rounded-full bg-gray-800 p-1.5">
//                 <Video className="h-4 w-4 text-theme" />
//               </div>
//               <div>
//                 <h4 className="text-sm font-medium text-white">Virtual Sessions</h4>
//                 <p className="text-xs text-gray-400">Attend therapy sessions from anywhere</p>
//               </div>
//             </div>

//             <div className="flex items-start gap-3 rounded-lg bg-gray-900/50 p-4 ring-1 ring-white/5">
//               <div className="mt-1 rounded-full bg-gray-800 p-1.5">
//                 <Brain className="h-4 w-4 text-theme" />
//               </div>
//               <div>
//                 <h4 className="text-sm font-medium text-white">AI-Powered Exercises</h4>
//                 <p className="text-xs text-gray-400">Personalized routines with real-time feedback</p>
//               </div>
//             </div>

//             <div className="flex items-start gap-3 rounded-lg bg-gray-900/50 p-4 ring-1 ring-white/5">
//               <div className="mt-1 rounded-full bg-gray-800 p-1.5">
//                 <Calendar className="h-4 w-4 text-theme" />
//               </div>
//               <div>
//                 <h4 className="text-sm font-medium text-white">Instant Scheduling</h4>
//                 <p className="text-xs text-gray-400">Book appointments with no waiting time</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Advanced Service */}
//         <div className="flex flex-col items-center rounded-xl bg-gray-900/50 p-6 ring-1 ring-theme/20">
//           <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-theme/10 text-theme">
//             <UserRound className="h-7 w-7" />
//           </div>
//           <h3 className="mb-2 text-xl font-semibold text-white">Advanced Service</h3>
//           <p className="mb-6 text-center text-gray-400">In-person therapy with dedicated physical therapists</p>

//           <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
//             <div className="flex items-start gap-3 rounded-lg bg-gray-900/50 p-4 ring-1 ring-white/5">
//               <div className="mt-1 rounded-full bg-gray-800 p-1.5">
//                 <Home className="h-4 w-4 text-theme" />
//               </div>
//               <div>
//                 <h4 className="text-sm font-medium text-white">In-Home Visits</h4>
//                 <p className="text-xs text-gray-400">Therapists come directly to your location</p>
//               </div>
//             </div>

//             <div className="flex items-start gap-3 rounded-lg bg-gray-900/50 p-4 ring-1 ring-white/5">
//               <div className="mt-1 rounded-full bg-gray-800 p-1.5">
//                 <Activity className="h-4 w-4 text-theme" />
//               </div>
//               <div>
//                 <h4 className="text-sm font-medium text-white">Hands-On Treatment</h4>
//                 <p className="text-xs text-gray-400">Physical manipulation and specialized techniques</p>
//               </div>
//             </div>

//             <div className="flex items-start gap-3 rounded-lg bg-gray-900/50 p-4 ring-1 ring-white/5">
//               <div className="mt-1 rounded-full bg-gray-800 p-1.5">
//                 <Calendar className="h-4 w-4 text-theme" />
//               </div>
//               <div>
//                 <h4 className="text-sm font-medium text-white">Dedicated Sessions</h4>
//                 <p className="text-xs text-gray-400">Extended one-on-one therapy time</p>
//               </div>
//             </div>

//             <div className="flex items-start gap-3 rounded-lg bg-gray-900/50 p-4 ring-1 ring-white/5">
//               <div className="mt-1 rounded-full bg-gray-800 p-1.5">
//                 <User2 className="h-4 w-4 text-theme" />
//               </div>
//               <div>
//                 <h4 className="text-sm font-medium text-white">Consistent Therapist</h4>
//                 <p className="text-xs text-gray-400">Work with the same professional throughout</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="relative my-16 w-full">
//         <div className="flex w-full items-center justify-center rounded-xl bg-gray-900/30 p-6 ring-1 ring-white/10">
//           <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
//             <div className="flex flex-col items-center">
//               <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-theme/10">
//                 <Smartphone className="h-6 w-6 text-theme" />
//               </div>
//               <h4 className="text-center text-lg font-medium text-white">Web & Mobile Access</h4>
//               <p className="text-center text-sm text-gray-400">Use our services on any device</p>
//             </div>

//             <div className="flex flex-col items-center">
//               <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-theme/10">
//                 <Brain className="h-6 w-6 text-theme" />
//               </div>
//               <h4 className="text-center text-lg font-medium text-white">AI-Powered Analysis</h4>
//               <p className="text-center text-sm text-gray-400">Real-time movement tracking and feedback</p>
//             </div>

//             <div className="flex flex-col items-center">
//               <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-theme/10">
//                 <Calendar className="h-6 w-6 text-theme" />
//               </div>
//               <h4 className="text-center text-lg font-medium text-white">Instant Service</h4>
//               <p className="text-center text-sm text-gray-400">No waiting lists for appointments</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


import { User2, Video, Smartphone, Brain, Home, Activity } from "lucide-react"
import { SVGMap } from "./SVGMap"

export const Map = () => {
  return (
    <section
      id="physio-services"
      aria-labelledby="services-title"
      className="relative flex w-full max-w-6xl scroll-my-24 flex-col items-center justify-center overflow-hidden rounded-2xl bg-gray-950 px-10 shadow-2xl shadow-black/50 sm:px-16 md:px-28 lg:mx-auto"
    >
      <div className="absolute left-0 z-10 h-full backdrop-blur-[2px]">
        <svg
          className="h-full w-8 border-r border-zinc-900 stroke-zinc-800 sm:w-20"
          style={{
            maskImage: "linear-gradient(transparent, white 10rem, white calc(100% - 10rem), transparent)",
          }}
        >
          <defs>
            <pattern id="diagonal-border-pattern" patternUnits="userSpaceOnUse" width="64" height="64">
              {Array.from({ length: 17 }, (_, i) => {
                const offset = i * 8
                return <path key={i} d={`M${-106 + offset} 110L${22 + offset} -18`} stroke="" strokeWidth="1" />
              })}
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal-border-pattern)" />
        </svg>
      </div>
      <div className="absolute right-0 z-10 h-full backdrop-blur-[2px]">
        <svg
          className="h-full w-8 border-r border-zinc-900 stroke-zinc-800 sm:w-20"
          style={{
            maskImage: "linear-gradient(transparent, white 10rem, white calc(100% - 10rem), transparent)",
          }}
        >
          <defs>
            <pattern id="diagonal-border-pattern" patternUnits="userSpaceOnUse" width="64" height="64">
              {Array.from({ length: 17 }, (_, i) => {
                const offset = i * 8
                return <path key={i} d={`M${-106 + offset} 110L${22 + offset} -18`} stroke="" strokeWidth="1" />
              })}
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal-border-pattern)" />
        </svg>
      </div>

      <div className="pt-12 text-base font-semibold tracking-tight text-theme sm:pt-20 sm:text-lg">
        Physiotherapy Services
      </div>
      <h2
        id="services-title"
        className="mt-6 max-w-[700px] text-center text-2xl font-semibold tracking-tight text-balance text-white md:text-5xl"
      >
        Virtual & In-Person Physiotherapy Solutions
      </h2>
      <p className="mt-4 max-w-2xl text-center text-base text-balance text-gray-400 sm:mt-8 sm:text-xl">
        Complete care for your rehabilitation needs with AI-powered virtual exercises and direct therapist support,
        available on web and mobile platforms.
      </p>

      <div className="relative mt-20 mb-10 ml-[17rem] scale-90 sm:mb-16 md:mt-24 md:ml-0 md:scale-100">
        <SVGMap className="w-[50rem] shrink-0" />
        <div className="absolute -top-3 left-[130px]">
          <div className="relative flex items-center justify-center">
            <div className="absolute size-10 rounded-full bg-gray-950 ring-1 ring-white/15"></div>
            <div className="absolute -top-4 -right-[3.7rem] flex w-fit items-center justify-center rounded-full bg-gray-950 px-1.5 py-0.5 text-xs whitespace-nowrap text-white ring-1 ring-white/15">
              Basic
            </div>
            <Video className="relative size-5 text-white" />
            <div
              style={{
                animationDelay: "3.5s",
              }}
              className="absolute size-10 animate-[ping_5s_ease_infinite] rounded-full ring-1 ring-theme/50"
            ></div>
          </div>
        </div>
        <div className="absolute top-[73px] left-[243px]">
          <div className="relative flex items-center justify-center">
            <div className="absolute size-10 rounded-full bg-gray-950 ring-1 ring-white/15"></div>
            <div className="absolute -top-4 -right-[3.7rem] flex w-fit items-center justify-center rounded-full bg-gray-950 px-1.5 py-0.5 text-xs whitespace-nowrap text-white ring-1 ring-white/15">
              Virtual
            </div>
            <Brain className="relative size-5 text-white" />
            <div
              style={{
                animationDelay: "3.5s",
              }}
              className="absolute size-10 animate-[ping_5s_ease_infinite] rounded-full ring-1 ring-theme/50"
            ></div>
          </div>
        </div>
        <div className="absolute top-32 right-[300px]">
          <div className="relative flex items-center justify-center">
            <div className="absolute size-10 rounded-full bg-gray-950 ring-1 ring-white/15"></div>
            <div className="absolute -top-4 -right-[3.7rem] flex w-fit items-center justify-center rounded-full bg-gray-950 px-1.5 py-0.5 text-xs whitespace-nowrap text-white ring-1 ring-white/15">
              Advanced
            </div>
            <User2 className="relative size-5 text-white" />
            <div
              style={{
                animationDelay: "3.5s",
              }}
              className="absolute size-10 animate-[ping_5s_ease_infinite] rounded-full ring-1 ring-theme/50"
            ></div>
          </div>
        </div>
        <div className="absolute top-20 right-[390px]">
          <div className="relative flex items-center justify-center">
            <div className="absolute size-10 rounded-full bg-gray-950 ring-1 ring-white/15"></div>
            <Home className="relative size-5 text-white" />
          </div>
        </div>
        <div className="absolute top-12 right-[430px]">
          <div className="relative flex items-center justify-center">
            <div className="absolute size-10 rounded-full bg-gray-950 ring-1 ring-white/15"></div>
            <div className="absolute -top-4 -right-7 flex w-fit items-center justify-center rounded-full bg-gray-950 px-1.5 py-0.5 text-xs whitespace-nowrap text-white ring-1 ring-white/15">
              In-Person
            </div>
            <Activity className="relative size-5 text-white" />
          </div>
        </div>
        <div className="absolute top-9 right-56">
          <div className="relative flex items-center justify-center">
            <Smartphone className="z-10 size-5 text-white" />
            <div className="absolute size-10 rounded-full bg-gray-950 ring-1 ring-white/15 backdrop-blur-sm"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
