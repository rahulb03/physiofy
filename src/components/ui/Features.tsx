// // // import {
// // //   RiCarFill,
// // //   RiCheckLine,
// // //   RiCircleLine,
// // //   RiCodepenLine,
// // //   RiContrast2Line,
// // //   RiFullscreenFill,
// // //   RiLoaderFill,
// // //   RiNotification2Line,
// // //   RiPlaneFill,
// // //   RiTruckFill,
// // // } from "@remixicon/react"
// // // import { SolarMark } from "../../../public/SolarMark"
// // // import { Icons } from "../Icons"
// // // import { Orbit } from "../Orbit"
// // // import ChipViz from "./ChipViz"

// // // export default function Features() {
// // //   return (
// // //     <section
// // //       aria-label="Solar Technologies Features for Farms"
// // //       id="solutions"
// // //       className="relative mx-auto max-w-6xl scroll-my-24"
// // //     >
// // //       {/* Vertical Lines */}
// // //       <div className="pointer-events-none inset-0 select-none">
// // //         {/* Left */}
// // //         <div
// // //           className="absolute inset-y-0 my-[-5rem] w-px"
// // //           style={{
// // //             maskImage:
// // //               "linear-gradient(transparent, white 5rem, white calc(100% - 5rem), transparent)",
// // //           }}
// // //         >
// // //           <svg className="h-full w-full" preserveAspectRatio="none">
// // //             <line
// // //               x1="0"
// // //               y1="0"
// // //               x2="0"
// // //               y2="100%"
// // //               className="stroke-gray-300"
// // //               strokeWidth="2"
// // //               strokeDasharray="3 3"
// // //             />
// // //           </svg>
// // //         </div>

// // //         {/* Right */}
// // //         <div
// // //           className="absolute inset-y-0 right-0 my-[-5rem] w-px"
// // //           style={{
// // //             maskImage:
// // //               "linear-gradient(transparent, white 5rem, white calc(100% - 5rem), transparent)",
// // //           }}
// // //         >
// // //           <svg className="h-full w-full" preserveAspectRatio="none">
// // //             <line
// // //               x1="0"
// // //               y1="0"
// // //               x2="0"
// // //               y2="100%"
// // //               className="stroke-gray-300"
// // //               strokeWidth="2"
// // //               strokeDasharray="3 3"
// // //             />
// // //           </svg>
// // //         </div>
// // //         {/* Middle */}
// // //         <div
// // //           className="absolute inset-y-0 left-1/2 -z-10 my-[-5rem] w-px"
// // //           style={{
// // //             maskImage:
// // //               "linear-gradient(transparent, white 5rem, white calc(100% - 5rem), transparent)",
// // //           }}
// // //         >
// // //           <svg className="h-full w-full" preserveAspectRatio="none">
// // //             <line
// // //               x1="0"
// // //               y1="0"
// // //               x2="0"
// // //               y2="100%"
// // //               className="stroke-gray-300"
// // //               strokeWidth="2"
// // //               strokeDasharray="3 3"
// // //             />
// // //           </svg>
// // //         </div>
// // //         {/* 25% */}
// // //         <div
// // //           className="absolute inset-y-0 left-1/4 -z-10 my-[-5rem] hidden w-px sm:block"
// // //           style={{
// // //             maskImage:
// // //               "linear-gradient(transparent, white 5rem, white calc(100% - 5rem), transparent)",
// // //           }}
// // //         >
// // //           <svg className="h-full w-full" preserveAspectRatio="none">
// // //             <line
// // //               x1="0"
// // //               y1="0"
// // //               x2="0"
// // //               y2="100%"
// // //               className="stroke-gray-300"
// // //               strokeWidth="2"
// // //               strokeDasharray="3 3"
// // //             />
// // //           </svg>
// // //         </div>
// // //         {/* 75% */}
// // //         <div
// // //           className="absolute inset-y-0 left-3/4 -z-10 my-[-5rem] hidden w-px sm:block"
// // //           style={{
// // //             maskImage:
// // //               "linear-gradient(transparent, white 5rem, white calc(100% - 5rem), transparent)",
// // //           }}
// // //         >
// // //           <svg className="h-full w-full" preserveAspectRatio="none">
// // //             <line
// // //               x1="0"
// // //               y1="0"
// // //               x2="0"
// // //               y2="100%"
// // //               className="stroke-gray-300"
// // //               strokeWidth="2"
// // //               strokeDasharray="3 3"
// // //             />
// // //           </svg>
// // //         </div>
// // //       </div>
// // //       <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-0">
// // //         {/* Content */}
// // //         <div className="col-span-2 my-auto px-2">
// // //           <h2 className="relative text-lg font-semibold tracking-tight text-orange-500">
// // //           Smart Physio Solutions

// // //             <div className="absolute top-1 -left-[8px] h-5 w-[3px] rounded-r-sm bg-orange-500" />
// // //           </h2>
// // //           <p className="mt-2 text-3xl font-semibold tracking-tighter text-balance text-gray-900 md:text-4xl">
// // //           An AI-driven network for complete physiotherapy care

// // //           </p>
// // //           <p className="mt-4 text-balance text-gray-700">
// // //           Deliver intelligent assessments, real-time posture tracking, personalized exercise guidance, and progress monitoring with our all-in-one AI physiotherapy platform.

// // //           </p>
// // //         </div>
// // //         <div className="relative col-span-2 flex items-center justify-center overflow-hidden">
// // //           <svg
// // //             className="absolute size-full [mask-image:linear-gradient(transparent,white_10rem)]"
// // //             // style={{
// // //             //   maskImage:
// // //             //     "linear-gradient(transparent, white 20rem, white calc(100% - 20rem), transparent)",
// // //             // }}
// // //           >
// // //             <defs>
// // //               <pattern
// // //                 id="diagonal-feature-pattern"
// // //                 patternUnits="userSpaceOnUse"
// // //                 width="64"
// // //                 height="64"
// // //               >
// // //                 {Array.from({ length: 17 }, (_, i) => {
// // //                   const offset = i * 8
// // //                   return (
// // //                     <path
// // //                       key={i}
// // //                       d={`M${-106 + offset} 110L${22 + offset} -18`}
// // //                       className="stroke-gray-200/70"
// // //                       strokeWidth="1"
// // //                     />
// // //                   )
// // //                 })}
// // //               </pattern>
// // //             </defs>
// // //             <rect
// // //               width="100%"
// // //               height="100%"
// // //               fill="url(#diagonal-feature-pattern)"
// // //             />
// // //           </svg>
// // //           <div className="pointer-events-none h-[26rem] p-10 select-none">
// // //             <div className="relative flex flex-col items-center justify-center">
// // //               <Orbit
// // //                 durationSeconds={40}
// // //                 radiusPx={140}
// // //                 keepUpright
// // //                 orbitingObjects={[
// // //                   <div
// // //                     key="obj1"
// // //                     className="relative flex items-center justify-center"
// // //                   >
// // //                     <RiTruckFill className="z-10 size-5 text-gray-900" />
// // //                     <div className="absolute size-10 rounded-full bg-white/50 ring-1 shadow-lg ring-black/5"></div>
// // //                     <div className="absolute -top-5 left-4">
// // //                       <div className="flex gap-1">
// // //                         <div className="flex items-center justify-center rounded-l-full bg-red-500 p-1 text-xs ring-1 ring-gray-200">
// // //                           <RiCircleLine className="size-3 shrink-0 text-white" />
// // //                         </div>
// // //                         <div className="rounded-r-full bg-white/50 py-0.5 pr-1.5 pl-1 text-xs whitespace-nowrap ring-1 ring-gray-200">
// // //                           Drivetrain Error
// // //                         </div>
// // //                       </div>
// // //                     </div>
// // //                     <div
// // //                       style={{
// // //                         animationDelay: "1s",
// // //                       }}
// // //                       className="absolute size-10 animate-[ping_7s_ease_infinite] rounded-full ring-1 ring-orange-500/50"
// // //                     ></div>
// // //                   </div>,

// // //                   <div
// // //                     key="obj2"
// // //                     className="relative flex items-center justify-center"
// // //                   >
// // //                     <RiPlaneFill className="z-10 size-5 rotate-90 text-gray-900" />
// // //                     <div className="absolute size-10 rounded-full bg-white/50 ring-1 shadow-lg ring-black/5"></div>
// // //                     <div className="absolute -top-5 left-4">
// // //                       <div className="flex gap-1">
// // //                         <div className="flex items-center justify-center rounded-l-full bg-gray-500 p-1 text-xs ring-1 ring-gray-200">
// // //                           <RiLoaderFill className="size-3 shrink-0 animate-spin text-white" />
// // //                         </div>
// // //                         <div className="rounded-r-full bg-white/50 py-0.5 pr-1.5 pl-1 text-xs ring-1 ring-gray-200">
// // //                           Charging
// // //                         </div>
// // //                       </div>
// // //                     </div>
// // //                     <div
// // //                       style={{
// // //                         animationDelay: "4s",
// // //                       }}
// // //                       className="absolute size-10 animate-[ping_7s_ease_infinite] rounded-full ring-1 ring-orange-500/50"
// // //                     ></div>
// // //                   </div>,

// // //                   <div
// // //                     key="obj3"
// // //                     className="relative flex items-center justify-center"
// // //                   >
// // //                     <RiCarFill className="z-10 size-5 text-gray-900" />
// // //                     <div className="absolute size-10 rounded-full bg-white/50 ring-1 shadow-lg ring-black/5"></div>
// // //                     <div
// // //                       style={{
// // //                         animationDelay: "2s",
// // //                       }}
// // //                       className="absolute size-10 animate-[ping_7s_ease_infinite] rounded-full ring-1 ring-orange-500/50"
// // //                     ></div>
// // //                   </div>,
// // //                   <div
// // //                     key="obj4"
// // //                     className="relative flex items-center justify-center"
// // //                   >
// // //                     <Icons.QuadCopter className="z-10 size-5 rotate-90 text-gray-900" />
// // //                     <div className="absolute size-10 rounded-full bg-white/50 ring-1 shadow-lg ring-black/5"></div>
// // //                     <div className="absolute -top-5 left-4">
// // //                       <div className="flex gap-1">
// // //                         <div className="flex items-center justify-center rounded-l-full bg-emerald-500 p-1 text-xs ring-1 ring-gray-200">
// // //                           <RiCheckLine className="size-3 shrink-0 text-white" />
// // //                         </div>
// // //                         <div className="rounded-r-full bg-white/50 py-0.5 pr-1.5 pl-1 text-xs ring-1 ring-gray-200">
// // //                           Farming
// // //                         </div>
// // //                       </div>
// // //                     </div>

// // //                     <div
// // //                       style={{
// // //                         animationDelay: "6s",
// // //                       }}
// // //                       className="absolute size-10 animate-[ping_7s_ease_infinite] rounded-full ring-1 ring-orange-500/50"
// // //                     ></div>
// // //                   </div>,
// // //                   <div
// // //                     key="obj5"
// // //                     className="relative flex items-center justify-center"
// // //                   >
// // //                     <RiPlaneFill className="z-10 size-5 rotate-90 text-gray-900" />
// // //                     <div className="absolute size-10 rounded-full bg-white/50 ring-1 shadow-lg ring-black/5"></div>
// // //                     <div
// // //                       style={{
// // //                         animationDelay: "3s",
// // //                       }}
// // //                       className="absolute size-10 animate-[ping_7s_ease_infinite] rounded-full ring-1 ring-orange-500/50"
// // //                     ></div>
// // //                   </div>,
// // //                 ]}
// // //               >
// // //                 <div className="relative flex h-48 w-48 items-center justify-center">
// // //                   <div className="rounded-full p-1 ring-1 ring-black/10">
// // //                     <div className="relative z-10 flex size-20 items-center justify-center rounded-full bg-white ring-1 shadow-[inset_0px_-15px_20px_rgba(0,0,0,0.1),0_7px_10px_0_rgba(0,0,0,0.15)] ring-black/20">
// // //                       <SolarMark className="size-10" />
// // //                     </div>
// // //                     <div className="absolute inset-12 animate-[spin_8s_linear_infinite] rounded-full bg-linear-to-t from-transparent via-orange-400 to-transparent blur-lg" />
// // //                   </div>
// // //                 </div>
// // //               </Orbit>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         <div className="col-span-2 my-auto px-2">
// // //           <h2 className="relative text-lg font-semibold tracking-tight text-orange-500">
// // //             Precision Agriculture
// // //             <div className="absolute top-1 -left-[8px] h-5 w-[3px] rounded-r-sm bg-orange-500" />
// // //           </h2>
// // //           <p className="mt-2 text-3xl font-semibold tracking-tighter text-balance text-gray-900 md:text-4xl">
// // //             Turn every acre into a data-driven powerhouse
// // //           </p>
// // //           <p className="mt-4 text-balance text-gray-700">
// // //             Revolutionize your farming operation with edge-computing AI that
// // //             transforms raw field data into actionable insights in real-time.
// // //             Make informed decisions faster, reduce resource waste, and maximize
// // //             yields.
// // //           </p>
// // //         </div>
// // //         <div className="relative col-span-2 flex items-center justify-center overflow-hidden">
// // //           <svg className="absolute size-full">
// // //             <defs>
// // //               <pattern
// // //                 id="diagonal-feature-pattern"
// // //                 patternUnits="userSpaceOnUse"
// // //                 width="64"
// // //                 height="64"
// // //               >
// // //                 {Array.from({ length: 17 }, (_, i) => {
// // //                   const offset = i * 8
// // //                   return (
// // //                     <path
// // //                       key={i}
// // //                       d={`M${-106 + offset} 110L${22 + offset} -18`}
// // //                       className="stroke-gray-200/70"
// // //                       strokeWidth="1"
// // //                     />
// // //                   )
// // //                 })}
// // //               </pattern>
// // //             </defs>
// // //             <rect
// // //               width="100%"
// // //               height="100%"
// // //               fill="url(#diagonal-feature-pattern)"
// // //             />
// // //           </svg>
// // //           <div className="relative h-[432px] w-[432px]">
// // //             <svg
// // //               id="grid"
// // //               xmlns="http://www.w3.org/2000/svg"
// // //               fill="none"
// // //               className="mask absolute size-[432px]"
// // //             >
// // //               <path
// // //                 className="stroke-gray-300"
// // //                 d="M48 0v432M96 0v432M144 0v432M192 0v432M240 0v432M288 0v432M336 0v432M384 0v432M0 48h432M0 96h432M0 144h432M0 192h432M0 240h432M0 288h432M0 336h432M0 384h432"
// // //               />
// // //             </svg>

// // //             <div className="pointer-events-none relative h-full select-none">
// // //               <div className="absolute top-[192px] left-[191.8px]">
// // //                 <div className="flex h-12 w-12 items-center justify-center bg-white ring-1 shadow-sm ring-black/15">
// // //                   <SolarMark className="h-8 w-8" />
// // //                 </div>
// // //               </div>
// // //               <div className="absolute top-[144px] left-[48px]">
// // //                 <div className="relative">
// // //                   <div className="absolute inset-0 size-12 animate-pulse bg-orange-200 blur-[3px]"></div>
// // //                   <div className="relative flex h-12 w-12 items-center justify-center bg-white ring-1 shadow-sm ring-black/15">
// // //                     <span className="text-sm font-medium text-gray-500">
// // //                       14°C
// // //                     </span>
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               <div className="absolute top-[48px] left-[144px]">
// // //                 <div className="relative">
// // //                   <div className="absolute inset-0 size-12 animate-pulse bg-orange-200 blur-[3px]"></div>
// // //                   <div className="relative flex h-12 w-12 items-center justify-center bg-white ring-1 shadow-sm ring-black/15">
// // //                     <span className="text-sm font-medium text-gray-500">
// // //                       18°C
// // //                     </span>
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               <div className="absolute top-[96px] left-[240px]">
// // //                 <div className="relative">
// // //                   <div className="absolute inset-0 size-12 animate-pulse bg-orange-200 blur-[3px]"></div>
// // //                   <div className="relative flex h-12 w-12 items-center justify-center bg-white ring-1 shadow-sm ring-black/15">
// // //                     <span className="text-sm font-medium text-gray-500">
// // //                       17°C
// // //                     </span>
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               <div className="absolute top-[240px] left-[385px]">
// // //                 <div className="relative">
// // //                   <div className="absolute inset-0 size-12 animate-pulse bg-orange-200 blur-[3px]"></div>
// // //                   <div className="relative flex h-12 w-12 items-center justify-center bg-white ring-1 shadow-sm ring-black/15">
// // //                     <span className="text-sm font-medium text-gray-500">
// // //                       14°C
// // //                     </span>
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               <div className="absolute top-[337px] left-[336px]">
// // //                 <div className="relative">
// // //                   <div className="absolute inset-0 size-12 animate-pulse bg-orange-200 blur-[3px]"></div>
// // //                   <div className="relative flex h-12 w-12 items-center justify-center bg-white ring-1 shadow-sm ring-black/15">
// // //                     <span className="text-sm font-medium text-gray-500">
// // //                       12°C
// // //                     </span>
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               <div className="absolute top-[288px] left-[144px]">
// // //                 <div className="relative">
// // //                   <div className="absolute inset-0 size-12 animate-pulse bg-orange-200 blur-[3px]"></div>
// // //                   <div className="relative flex h-12 w-12 items-center justify-center bg-white ring-1 shadow-sm ring-black/15">
// // //                     <span className="text-sm font-medium text-gray-500">
// // //                       17°C
// // //                     </span>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //         <div className="col-span-2 my-auto px-2">
// // //           <h2 className="relative text-lg font-semibold tracking-tight text-orange-500">
// // //             Easy Expansion
// // //             <div className="absolute top-1 -left-[7px] h-5 w-[3px] rounded-r-sm bg-orange-500" />
// // //           </h2>
// // //           <p className="mt-2 text-3xl font-semibold tracking-tighter text-balance text-gray-900 md:text-4xl">
// // //             Scale your smart farm with plug-and-play simplicity
// // //           </p>
// // //           <p className="mt-4 text-balance text-gray-700">
// // //             Add new sensors and capabilities to your farm network with zero
// // //             setup required. Our systems automatically connect and coordinate
// // //             with each other.
// // //           </p>
// // //         </div>
// // //         <div className="relative col-span-2 flex items-center justify-center overflow-hidden">
// // //           <svg
// // //             className="absolute size-full [mask-image:linear-gradient(white_10rem,transparent)]"
// // //             // style={{
// // //             //   maskImage:
// // //             //     "linear-gradient(transparent, white 20rem, white calc(100% - 20rem), transparent)",
// // //             // }}
// // //           >
// // //             <defs>
// // //               <pattern
// // //                 id="diagonal-feature-pattern"
// // //                 patternUnits="userSpaceOnUse"
// // //                 width="64"
// // //                 height="64"
// // //               >
// // //                 {Array.from({ length: 17 }, (_, i) => {
// // //                   const offset = i * 8
// // //                   return (
// // //                     <path
// // //                       key={i}
// // //                       d={`M${-106 + offset} 110L${22 + offset} -18`}
// // //                       className="stroke-gray-200/70"
// // //                       strokeWidth="1"
// // //                     />
// // //                   )
// // //                 })}
// // //               </pattern>
// // //             </defs>
// // //             <rect
// // //               width="100%"
// // //               height="100%"
// // //               fill="url(#diagonal-feature-pattern)"
// // //             />
// // //           </svg>
// // //           <div className="pointer-events-none relative flex size-full h-[26rem] items-center justify-center p-10 select-none">
// // //             <div className="relative">
// // //               <div className="absolute top-[6rem] left-[6rem] z-20">
// // //                 <div className="relative mx-auto w-fit rounded-full bg-gray-50 p-1 ring-1 shadow-md shadow-black/10 ring-black/10">
// // //                   <div className="w-fit rounded-full bg-linear-to-b from-white to-gray-100 p-3 ring-1 shadow-[inset_0px_-2px_6px_rgba(0,0,0,0.09),0_3px_5px_0_rgba(0,0,0,0.19)] ring-white/50 ring-inset">
// // //                     <RiNotification2Line
// // //                       className="size-5 text-gray-900"
// // //                       aria-hidden="true"
// // //                     />
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //               <div className="absolute top-[6rem] right-[6rem] z-20">
// // //                 <div className="relative mx-auto w-fit rounded-full bg-gray-50 p-1 ring-1 shadow-md shadow-black/10 ring-black/10">
// // //                   <div className="w-fit rounded-full bg-linear-to-b from-white to-gray-100 p-3 ring-1 shadow-[inset_0px_-2px_6px_rgba(0,0,0,0.05),0_7px_10px_0_rgba(0,0,0,0.10)] ring-white/50 ring-inset">
// // //                     <RiContrast2Line
// // //                       className="size-5 text-gray-900"
// // //                       aria-hidden="true"
// // //                     />
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //               <div className="absolute right-[6rem] bottom-[6rem] z-20">
// // //                 <div className="relative mx-auto w-fit rounded-full bg-gray-50 p-1 ring-1 shadow-md shadow-black/10 ring-black/10">
// // //                   <div className="w-fit rounded-full bg-linear-to-b from-white to-gray-100 p-3 ring-1 shadow-[inset_0px_-2px_6px_rgba(0,0,0,0.05),0_7px_10px_0_rgba(0,0,0,0.10)] ring-white/50 ring-inset">
// // //                     <RiCodepenLine
// // //                       className="size-5 text-gray-900"
// // //                       aria-hidden="true"
// // //                     />
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //               <div className="absolute bottom-[6rem] left-[6rem] z-20">
// // //                 <div className="relative mx-auto w-fit rounded-full bg-gray-50 p-1 ring-1 shadow-md shadow-black/10 ring-black/10">
// // //                   <div className="w-fit rounded-full bg-linear-to-b from-white to-gray-100 p-3 ring-1 shadow-[inset_0px_-2px_6px_rgba(0,0,0,0.05),0_7px_10px_0_rgba(0,0,0,0.10)] ring-white/50 ring-inset">
// // //                     <RiFullscreenFill
// // //                       className="size-5 text-gray-900"
// // //                       aria-hidden="true"
// // //                     />
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //             <div className="relative">
// // //               {[0, 45, 135, 180, 225, 315, 360].map((rotation, index) => (
// // //                 <div
// // //                   key={rotation}
// // //                   className="absolute origin-left overflow-hidden"
// // //                   style={{ transform: `rotate(${rotation}deg)` }}
// // //                 >
// // //                   <div className="relative">
// // //                     <div className="h-0.5 w-60 bg-linear-to-r from-gray-300 to-transparent" />
// // //                     <div
// // //                       className="absolute top-0 left-0 h-0.5 w-28 bg-linear-to-r from-transparent via-orange-300 to-transparent"
// // //                       style={{
// // //                         animation: `gridMovingLine 5s linear infinite ${index * 1.2}s`,
// // //                         animationFillMode: "backwards",
// // //                       }}
// // //                     />
// // //                   </div>
// // //                 </div>
// // //               ))}
// // //               <div className="absolute -translate-x-1/2 -translate-y-1/2">
// // //                 <ChipViz />
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   )
// // // }

// // import {
// //   RiBodyScanFill,
// //   RiCheckLine,
// //   RiCircleLine,
// //   RiHeartPulseFill,
// //   RiMentalHealthFill,
// //   RiRunFill,
// //   RiLoaderFill,
// //   RiNotification2Line,
// //   RiUserHeartFill,
// //   RiHealthBookFill,
// // } from "@remixicon/react"
// // import { SolarMark } from "../../../public/SolarMark"
// // import { Orbit } from "../Orbit"
// // import ChipViz from "./ChipViz"

// // export default function Features() {
// //   return (
// //     <section aria-label="AI Physiotherapy Features" id="solutions" className="relative mx-auto max-w-6xl scroll-my-24">
// //       {/* Vertical Lines */}
// //       <div className="pointer-events-none inset-0 select-none">
// //         {/* Left */}
// //         <div
// //           className="absolute inset-y-0 my-[-5rem] w-px"
// //           style={{
// //             maskImage: "linear-gradient(transparent, white 5rem, white calc(100% - 5rem), transparent)",
// //           }}
// //         >
// //           <svg className="h-full w-full" preserveAspectRatio="none">
// //             <line x1="0" y1="0" x2="0" y2="100%" className="stroke-gray-300" strokeWidth="2" strokeDasharray="3 3" />
// //           </svg>
// //         </div>

// //         {/* Right */}
// //         <div
// //           className="absolute inset-y-0 right-0 my-[-5rem] w-px"
// //           style={{
// //             maskImage: "linear-gradient(transparent, white 5rem, white calc(100% - 5rem), transparent)",
// //           }}
// //         >
// //           <svg className="h-full w-full" preserveAspectRatio="none">
// //             <line x1="0" y1="0" x2="0" y2="100%" className="stroke-gray-300" strokeWidth="2" strokeDasharray="3 3" />
// //           </svg>
// //         </div>
// //         {/* Middle */}
// //         <div
// //           className="absolute inset-y-0 left-1/2 -z-10 my-[-5rem] w-px"
// //           style={{
// //             maskImage: "linear-gradient(transparent, white 5rem, white calc(100% - 5rem), transparent)",
// //           }}
// //         >
// //           <svg className="h-full w-full" preserveAspectRatio="none">
// //             <line x1="0" y1="0" x2="0" y2="100%" className="stroke-gray-300" strokeWidth="2" strokeDasharray="3 3" />
// //           </svg>
// //         </div>
// //         {/* 25% */}
// //         <div
// //           className="absolute inset-y-0 left-1/4 -z-10 my-[-5rem] hidden w-px sm:block"
// //           style={{
// //             maskImage: "linear-gradient(transparent, white 5rem, white calc(100% - 5rem), transparent)",
// //           }}
// //         >
// //           <svg className="h-full w-full" preserveAspectRatio="none">
// //             <line x1="0" y1="0" x2="0" y2="100%" className="stroke-gray-300" strokeWidth="2" strokeDasharray="3 3" />
// //           </svg>
// //         </div>
// //         {/* 75% */}
// //         <div
// //           className="absolute inset-y-0 left-3/4 -z-10 my-[-5rem] hidden w-px sm:block"
// //           style={{
// //             maskImage: "linear-gradient(transparent, white 5rem, white calc(100% - 5rem), transparent)",
// //           }}
// //         >
// //           <svg className="h-full w-full" preserveAspectRatio="none">
// //             <line x1="0" y1="0" x2="0" y2="100%" className="stroke-gray-300" strokeWidth="2" strokeDasharray="3 3" />
// //           </svg>
// //         </div>
// //       </div>
// //       <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-0">
// //         {/* Content */}
// //         <div className="col-span-2 my-auto px-2">
// //           <h2 className="relative text-lg font-semibold tracking-tight text-orange-500">
// //             Smart Physio Solutions
// //             <div className="absolute top-1 -left-[8px] h-5 w-[3px] rounded-r-sm bg-orange-500" />
// //           </h2>
// //           <p className="mt-2 text-3xl font-semibold tracking-tighter text-balance text-gray-900 md:text-4xl">
// //             An AI-driven network for complete physiotherapy care
// //           </p>
// //           <p className="mt-4 text-balance text-gray-700">
// //             Deliver intelligent assessments, real-time posture tracking, personalized exercise guidance, and progress
// //             monitoring with our all-in-one AI physiotherapy platform.
// //           </p>
// //         </div>
// //         <div className="relative col-span-2 flex items-center justify-center overflow-hidden">
// //           <svg className="absolute size-full [mask-image:linear-gradient(transparent,white_10rem)]">
// //             <defs>
// //               <pattern id="diagonal-feature-pattern" patternUnits="userSpaceOnUse" width="64" height="64">
// //                 {Array.from({ length: 17 }, (_, i) => {
// //                   const offset = i * 8
// //                   return (
// //                     <path
// //                       key={i}
// //                       d={`M${-106 + offset} 110L${22 + offset} -18`}
// //                       className="stroke-gray-200/70"
// //                       strokeWidth="1"
// //                     />
// //                   )
// //                 })}
// //               </pattern>
// //             </defs>
// //             <rect width="100%" height="100%" fill="url(#diagonal-feature-pattern)" />
// //           </svg>
// //           <div className="pointer-events-none h-[26rem] p-10 select-none">
// //             <div className="relative flex flex-col items-center justify-center">
// //               <Orbit
// //                 durationSeconds={40}
// //                 radiusPx={140}
// //                 keepUpright
// //                 orbitingObjects={[
// //                   <div key="obj1" className="relative flex items-center justify-center">
// //                     <RiBodyScanFill className="z-10 size-5 text-gray-900" />
// //                     <div className="absolute size-10 rounded-full bg-white/50 ring-1 shadow-lg ring-black/5"></div>
// //                     <div className="absolute -top-5 left-4">
// //                       <div className="flex gap-1">
// //                         <div className="flex items-center justify-center rounded-l-full bg-red-500 p-1 text-xs ring-1 ring-gray-200">
// //                           <RiCircleLine className="size-3 shrink-0 text-white" />
// //                         </div>
// //                         <div className="rounded-r-full bg-white/50 py-0.5 pr-1.5 pl-1 text-xs whitespace-nowrap ring-1 ring-gray-200">
// //                           Posture Alert
// //                         </div>
// //                       </div>
// //                     </div>
// //                     <div
// //                       style={{
// //                         animationDelay: "1s",
// //                       }}
// //                       className="absolute size-10 animate-[ping_7s_ease_infinite] rounded-full ring-1 ring-orange-500/50"
// //                     ></div>
// //                   </div>,

// //                   <div key="obj2" className="relative flex items-center justify-center">
// //                     <RiHeartPulseFill className="z-10 size-5 text-gray-900" />
// //                     <div className="absolute size-10 rounded-full bg-white/50 ring-1 shadow-lg ring-black/5"></div>
// //                     <div className="absolute -top-5 left-4">
// //                       <div className="flex gap-1">
// //                         <div className="flex items-center justify-center rounded-l-full bg-gray-500 p-1 text-xs ring-1 ring-gray-200">
// //                           <RiLoaderFill className="size-3 shrink-0 animate-spin text-white" />
// //                         </div>
// //                         <div className="rounded-r-full bg-white/50 py-0.5 pr-1.5 pl-1 text-xs ring-1 ring-gray-200">
// //                           Monitoring
// //                         </div>
// //                       </div>
// //                     </div>
// //                     <div
// //                       style={{
// //                         animationDelay: "4s",
// //                       }}
// //                       className="absolute size-10 animate-[ping_7s_ease_infinite] rounded-full ring-1 ring-orange-500/50"
// //                     ></div>
// //                   </div>,

// //                   <div key="obj3" className="relative flex items-center justify-center">
// //                     <RiRunFill className="z-10 size-5 text-gray-900" />
// //                     <div className="absolute size-10 rounded-full bg-white/50 ring-1 shadow-lg ring-black/5"></div>
// //                     <div
// //                       style={{
// //                         animationDelay: "2s",
// //                       }}
// //                       className="absolute size-10 animate-[ping_7s_ease_infinite] rounded-full ring-1 ring-orange-500/50"
// //                     ></div>
// //                   </div>,
// //                   <div key="obj4" className="relative flex items-center justify-center">
// //                     <RiMentalHealthFill className="z-10 size-5 text-gray-900" />
// //                     <div className="absolute size-10 rounded-full bg-white/50 ring-1 shadow-lg ring-black/5"></div>
// //                     <div className="absolute -top-5 left-4">
// //                       <div className="flex gap-1">
// //                         <div className="flex items-center justify-center rounded-l-full bg-emerald-500 p-1 text-xs ring-1 ring-gray-200">
// //                           <RiCheckLine className="size-3 shrink-0 text-white" />
// //                         </div>
// //                         <div className="rounded-r-full bg-white/50 py-0.5 pr-1.5 pl-1 text-xs ring-1 ring-gray-200">
// //                           Recovery
// //                         </div>
// //                       </div>
// //                     </div>

// //                     <div
// //                       style={{
// //                         animationDelay: "6s",
// //                       }}
// //                       className="absolute size-10 animate-[ping_7s_ease_infinite] rounded-full ring-1 ring-orange-500/50"
// //                     ></div>
// //                   </div>,
// //                   <div key="obj5" className="relative flex items-center justify-center">
// //                     <RiUserHeartFill className="z-10 size-5 text-gray-900" />
// //                     <div className="absolute size-10 rounded-full bg-white/50 ring-1 shadow-lg ring-black/5"></div>
// //                     <div
// //                       style={{
// //                         animationDelay: "3s",
// //                       }}
// //                       className="absolute size-10 animate-[ping_7s_ease_infinite] rounded-full ring-1 ring-orange-500/50"
// //                     ></div>
// //                   </div>,
// //                 ]}
// //               >
// //                 <div className="relative flex h-48 w-48 items-center justify-center">
// //                   <div className="rounded-full p-1 ring-1 ring-black/10">
// //                     <div className="relative z-10 flex size-20 items-center justify-center rounded-full bg-white ring-1 shadow-[inset_0px_-15px_20px_rgba(0,0,0,0.1),0_7px_10px_0_rgba(0,0,0,0.15)] ring-black/20">
// //                       <SolarMark className="size-10" />
// //                     </div>
// //                     <div className="absolute inset-12 animate-[spin_8s_linear_infinite] rounded-full bg-linear-to-t from-transparent via-orange-400 to-transparent blur-lg" />
// //                   </div>
// //                 </div>
// //               </Orbit>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="col-span-2 my-auto px-2">
// //           <h2 className="relative text-lg font-semibold tracking-tight text-orange-500">
// //             Precision Assessment
// //             <div className="absolute top-1 -left-[8px] h-5 w-[3px] rounded-r-sm bg-orange-500" />
// //           </h2>
// //           <p className="mt-2 text-3xl font-semibold tracking-tighter text-balance text-gray-900 md:text-4xl">
// //             Turn every movement into actionable health data
// //           </p>
// //           <p className="mt-4 text-balance text-gray-700">
// //             Revolutionize your physiotherapy practice with edge-computing AI that transforms patient movement data into
// //             actionable insights in real-time. Make informed treatment decisions faster, reduce recovery time, and
// //             maximize patient outcomes.
// //           </p>
// //         </div>
// //         <div className="relative col-span-2 flex items-center justify-center overflow-hidden">
// //           <svg className="absolute size-full">
// //             <defs>
// //               <pattern id="diagonal-feature-pattern" patternUnits="userSpaceOnUse" width="64" height="64">
// //                 {Array.from({ length: 17 }, (_, i) => {
// //                   const offset = i * 8
// //                   return (
// //                     <path
// //                       key={i}
// //                       d={`M${-106 + offset} 110L${22 + offset} -18`}
// //                       className="stroke-gray-200/70"
// //                       strokeWidth="1"
// //                     />
// //                   )
// //                 })}
// //               </pattern>
// //             </defs>
// //             <rect width="100%" height="100%" fill="url(#diagonal-feature-pattern)" />
// //           </svg>
// //           <div className="relative h-[432px] w-[432px]">
// //             <svg id="grid" xmlns="http://www.w3.org/2000/svg" fill="none" className="mask absolute size-[432px]">
// //               <path
// //                 className="stroke-gray-300"
// //                 d="M48 0v432M96 0v432M144 0v432M192 0v432M240 0v432M288 0v432M336 0v432M384 0v432M0 48h432M0 96h432M0 144h432M0 192h432M0 240h432M0 288h432M0 336h432M0 384h432"
// //               />
// //             </svg>

// //             <div className="pointer-events-none relative h-full select-none">
// //               <div className="absolute top-[192px] left-[191.8px]">
// //                 <div className="flex h-12 w-12 items-center justify-center bg-white ring-1 shadow-sm ring-black/15">
// //                   <SolarMark className="h-8 w-8" />
// //                 </div>
// //               </div>
// //               <div className="absolute top-[144px] left-[48px]">
// //                 <div className="relative">
// //                   <div className="absolute inset-0 size-12 animate-pulse bg-orange-200 blur-[3px]"></div>
// //                   <div className="relative flex h-12 w-12 items-center justify-center bg-white ring-1 shadow-sm ring-black/15">
// //                     <span className="text-sm font-medium text-gray-500">85%</span>
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="absolute top-[48px] left-[144px]">
// //                 <div className="relative">
// //                   <div className="absolute inset-0 size-12 animate-pulse bg-orange-200 blur-[3px]"></div>
// //                   <div className="relative flex h-12 w-12 items-center justify-center bg-white ring-1 shadow-sm ring-black/15">
// //                     <span className="text-sm font-medium text-gray-500">92%</span>
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="absolute top-[96px] left-[240px]">
// //                 <div className="relative">
// //                   <div className="absolute inset-0 size-12 animate-pulse bg-orange-200 blur-[3px]"></div>
// //                   <div className="relative flex h-12 w-12 items-center justify-center bg-white ring-1 shadow-sm ring-black/15">
// //                     <span className="text-sm font-medium text-gray-500">78%</span>
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="absolute top-[240px] left-[385px]">
// //                 <div className="relative">
// //                   <div className="absolute inset-0 size-12 animate-pulse bg-orange-200 blur-[3px]"></div>
// //                   <div className="relative flex h-12 w-12 items-center justify-center bg-white ring-1 shadow-sm ring-black/15">
// //                     <span className="text-sm font-medium text-gray-500">65%</span>
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="absolute top-[337px] left-[336px]">
// //                 <div className="relative">
// //                   <div className="absolute inset-0 size-12 animate-pulse bg-orange-200 blur-[3px]"></div>
// //                   <div className="relative flex h-12 w-12 items-center justify-center bg-white ring-1 shadow-sm ring-black/15">
// //                     <span className="text-sm font-medium text-gray-500">88%</span>
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="absolute top-[288px] left-[144px]">
// //                 <div className="relative">
// //                   <div className="absolute inset-0 size-12 animate-pulse bg-orange-200 blur-[3px]"></div>
// //                   <div className="relative flex h-12 w-12 items-center justify-center bg-white ring-1 shadow-sm ring-black/15">
// //                     <span className="text-sm font-medium text-gray-500">71%</span>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //         <div className="col-span-2 my-auto px-2">
// //           <h2 className="relative text-lg font-semibold tracking-tight text-orange-500">
// //             Personalized Care
// //             <div className="absolute top-1 -left-[7px] h-5 w-[3px] rounded-r-sm bg-orange-500" />
// //           </h2>
// //           <p className="mt-2 text-3xl font-semibold tracking-tighter text-balance text-gray-900 md:text-4xl">
// //             Scale your therapy practice with AI-powered simplicity
// //           </p>
// //           <p className="mt-4 text-balance text-gray-700">
// //             Add new patients to your care network with zero setup required. Our AI systems automatically adapt to each
// //              unique needs, creating personalized treatment plans that evolve with their progress.
// //           </p>
// //         </div>
// //         <div className="relative col-span-2 flex items-center justify-center overflow-hidden">
// //           <svg className="absolute size-full [mask-image:linear-gradient(white_10rem,transparent)]">
// //             <defs>
// //               <pattern id="diagonal-feature-pattern" patternUnits="userSpaceOnUse" width="64" height="64">
// //                 {Array.from({ length: 17 }, (_, i) => {
// //                   const offset = i * 8
// //                   return (
// //                     <path
// //                       key={i}
// //                       d={`M${-106 + offset} 110L${22 + offset} -18`}
// //                       className="stroke-gray-200/70"
// //                       strokeWidth="1"
// //                     />
// //                   )
// //                 })}
// //               </pattern>
// //             </defs>
// //             <rect width="100%" height="100%" fill="url(#diagonal-feature-pattern)" />
// //           </svg>
// //           <div className="pointer-events-none relative flex size-full h-[26rem] items-center justify-center p-10 select-none">
// //             <div className="relative">
// //               <div className="absolute top-[6rem] left-[6rem] z-20">
// //                 <div className="relative mx-auto w-fit rounded-full bg-gray-50 p-1 ring-1 shadow-md shadow-black/10 ring-black/10">
// //                   <div className="w-fit rounded-full bg-linear-to-b from-white to-gray-100 p-3 ring-1 shadow-[inset_0px_-2px_6px_rgba(0,0,0,0.09),0_3px_5px_0_rgba(0,0,0,0.19)] ring-white/50 ring-inset">
// //                     <RiNotification2Line className="size-5 text-gray-900" aria-hidden="true" />
// //                   </div>
// //                 </div>
// //               </div>
// //               <div className="absolute top-[6rem] right-[6rem] z-20">
// //                 <div className="relative mx-auto w-fit rounded-full bg-gray-50 p-1 ring-1 shadow-md shadow-black/10 ring-black/10">
// //                   <div className="w-fit rounded-full bg-linear-to-b from-white to-gray-100 p-3 ring-1 shadow-[inset_0px_-2px_6px_rgba(0,0,0,0.05),0_7px_10px_0_rgba(0,0,0,0.10)] ring-white/50 ring-inset">
// //                     <RiHealthBookFill className="size-5 text-gray-900" aria-hidden="true" />
// //                   </div>
// //                 </div>
// //               </div>
// //               <div className="absolute right-[6rem] bottom-[6rem] z-20">
// //                 <div className="relative mx-auto w-fit rounded-full bg-gray-50 p-1 ring-1 shadow-md shadow-black/10 ring-black/10">
// //                   <div className="w-fit rounded-full bg-linear-to-b from-white to-gray-100 p-3 ring-1 shadow-[inset_0px_-2px_6px_rgba(0,0,0,0.05),0_7px_10px_0_rgba(0,0,0,0.10)] ring-white/50 ring-inset">
// //                     <RiHeartPulseFill className="size-5 text-gray-900" aria-hidden="true" />
// //                   </div>
// //                 </div>
// //               </div>
// //               <div className="absolute bottom-[6rem] left-[6rem] z-20">
// //                 <div className="relative mx-auto w-fit rounded-full bg-gray-50 p-1 ring-1 shadow-md shadow-black/10 ring-black/10">
// //                   <div className="w-fit rounded-full bg-linear-to-b from-white to-gray-100 p-3 ring-1 shadow-[inset_0px_-2px_6px_rgba(0,0,0,0.05),0_7px_10px_0_rgba(0,0,0,0.10)] ring-white/50 ring-inset">
// //                     <RiBodyScanFill className="size-5 text-gray-900" aria-hidden="true" />
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="relative">
// //               {[0, 45, 135, 180, 225, 315, 360].map((rotation, index) => (
// //                 <div
// //                   key={rotation}
// //                   className="absolute origin-left overflow-hidden"
// //                   style={{ transform: `rotate(${rotation}deg)` }}
// //                 >
// //                   <div className="relative">
// //                     <div className="h-0.5 w-60 bg-linear-to-r from-gray-300 to-transparent" />
// //                     <div
// //                       className="absolute top-0 left-0 h-0.5 w-28 bg-linear-to-r from-transparent via-orange-300 to-transparent"
// //                       style={{
// //                         animation: `gridMovingLine 5s linear infinite ${index * 1.2}s`,
// //                         animationFillMode: "backwards",
// //                       }}
// //                     />
// //                   </div>
// //                 </div>
// //               ))}
// //               <div className="absolute -translate-x-1/2 -translate-y-1/2">
// //                 <ChipViz />
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// // 0087d3

// import {
//   RiBodyScanFill,
//   RiCheckLine,
//   RiCircleLine,
//   RiVideoFill,
//   RiLoaderFill,
//   RiStethoscopeFill,
//   RiComputerFill,
//   RiSmartphoneFill,
//   RiTimeFill,
//   RiHandHeartFill,
//   RiHospitalFill,
//   RiUserFollowFill,
//   RiShieldCheckFill,
//   RiCalendarCheckFill,
// } from "@remixicon/react"
// import { SolarMark } from "../../../public/SolarMark"
// import { Orbit } from "../Orbit"

// export default function Features() {
//   return (
//     <section aria-label="AI Physiotherapy Features" id="solutions" className="relative mx-auto max-w-6xl scroll-my-24">
//       {/* Vertical Lines */}
//       <div className="pointer-events-none inset-0 select-none">
//         {/* Left */}
//         <div
//           className="absolute inset-y-0 my-[-5rem] w-px"
//           style={{
//             maskImage: "linear-gradient(transparent, white 5rem, white calc(100% - 5rem), transparent)",
//           }}
//         >
//           <svg className="h-full w-full" preserveAspectRatio="none">
//             <line x1="0" y1="0" x2="0" y2="100%" className="stroke-gray-300" strokeWidth="2" strokeDasharray="3 3" />
//           </svg>
//         </div>

//         {/* Right */}
//         <div
//           className="absolute inset-y-0 right-0 my-[-5rem] w-px"
//           style={{
//             maskImage: "linear-gradient(transparent, white 5rem, white calc(100% - 5rem), transparent)",
//           }}
//         >
//           <svg className="h-full w-full" preserveAspectRatio="none">
//             <line x1="0" y1="0" x2="0" y2="100%" className="stroke-gray-300" strokeWidth="2" strokeDasharray="3 3" />
//           </svg>
//         </div>
//         {/* Middle */}
//         <div
//           className="absolute inset-y-0 left-1/2 -z-10 my-[-5rem] w-px"
//           style={{
//             maskImage: "linear-gradient(transparent, white 5rem, white calc(100% - 5rem), transparent)",
//           }}
//         >
//           <svg className="h-full w-full" preserveAspectRatio="none">
//             <line x1="0" y1="0" x2="0" y2="100%" className="stroke-gray-300" strokeWidth="2" strokeDasharray="3 3" />
//           </svg>
//         </div>
//         {/* 25% */}
//         <div
//           className="absolute inset-y-0 left-1/4 -z-10 my-[-5rem] hidden w-px sm:block"
//           style={{
//             maskImage: "linear-gradient(transparent, white 5rem, white calc(100% - 5rem), transparent)",
//           }}
//         >
//           <svg className="h-full w-full" preserveAspectRatio="none">
//             <line x1="0" y1="0" x2="0" y2="100%" className="stroke-gray-300" strokeWidth="2" strokeDasharray="3 3" />
//           </svg>
//         </div>
//         {/* 75% */}
//         <div
//           className="absolute inset-y-0 left-3/4 -z-10 my-[-5rem] hidden w-px sm:block"
//           style={{
//             maskImage: "linear-gradient(transparent, white 5rem, white calc(100% - 5rem), transparent)",
//           }}
//         >
//           <svg className="h-full w-full" preserveAspectRatio="none">
//             <line x1="0" y1="0" x2="0" y2="100%" className="stroke-gray-300" strokeWidth="2" strokeDasharray="3 3" />
//           </svg>
//         </div>
//       </div>

//       {/* Main Heading */}
//       <div className="text-center mb-16">
//         <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
//           Choose Your Physiotherapy Plan
//         </h2>
//         <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
//           We offer two comprehensive plans to meet your rehabilitation needs - whether you prefer AI-powered virtual care or in-person professional treatment.
//         </p>
//       </div>

//       {/* Basic Plan */}
//       <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-0 mb-24">
//         <div className="col-span-2 my-auto px-2">
//           <div className="inline-block px-4 py-1 rounded-full bg-orange-100 text-orange-800 text-sm font-medium mb-4">
//             Basic Plan
//           </div>
//           <h2 className="relative text-lg font-semibold tracking-tight text-orange-500">
//             AI-Powered Virtual Care
//             <div className="absolute top-1 -left-[8px] h-5 w-[3px] rounded-r-sm bg-orange-500" />
//           </h2>
//           <p className="mt-2 text-3xl font-semibold tracking-tighter text-balance text-gray-900 md:text-4xl">
//             Virtual therapy sessions with AI guidance
//           </p>
//           <p className="mt-4 text-balance text-gray-700">
//             Access our platform via web or mobile app to receive instant AI-powered physiotherapy. Choose from our network of virtual therapists for personalized sessions and follow guided exercises with real-time form correction.
//           </p>

//           <div className="mt-6 grid grid-cols-2 gap-4">
//             <div className="flex items-center gap-2">
//               <RiCheckLine className="text-green-500 flex-shrink-0" />
//               <span className="text-sm text-gray-600">Web & App Access</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <RiCheckLine className="text-green-500 flex-shrink-0" />
//               <span className="text-sm text-gray-600">AI Form Correction</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <RiCheckLine className="text-green-500 flex-shrink-0" />
//               <span className="text-sm text-gray-600">Virtual Therapists</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <RiCheckLine className="text-green-500 flex-shrink-0" />
//               <span className="text-sm text-gray-600">Instant Service</span>
//             </div>
//           </div>
//         </div>
//         <div className="relative col-span-2 flex items-center justify-center overflow-hidden">
//           <svg className="absolute size-full [mask-image:linear-gradient(transparent,white_10rem)]">
//             <defs>
//               <pattern id="diagonal-feature-pattern" patternUnits="userSpaceOnUse" width="64" height="64">
//                 {Array.from({ length: 17 }, (_, i) => {
//                   const offset = i * 8
//                   return (
//                     <path
//                       key={i}
//                       d={`M${-106 + offset} 110L${22 + offset} -18`}
//                       className="stroke-gray-200/70"
//                       strokeWidth="1"
//                     />
//                   )
//                 })}
//               </pattern>
//             </defs>
//             <rect width="100%" height="100%" fill="url(#diagonal-feature-pattern)" />
//           </svg>
//           <div className="pointer-events-none h-[26rem] p-10 select-none">
//             <div className="relative flex flex-col items-center justify-center">
//               <Orbit
//                 durationSeconds={40}
//                 radiusPx={140}
//                 keepUpright
//                 orbitingObjects={[
//                   <div key="obj1" className="relative flex items-center justify-center">
//                     <RiComputerFill className="z-10 size-5 text-gray-900" />
//                     <div className="absolute size-10 rounded-full bg-white/50 ring-1 shadow-lg ring-black/5"></div>
//                     <div className="absolute -top-5 left-4">
//                       <div className="flex gap-1">
//                         <div className="flex items-center justify-center rounded-l-full bg-blue-500 p-1 text-xs ring-1 ring-gray-200">
//                           <RiCircleLine className="size-3 shrink-0 text-white" />
//                         </div>
//                         <div className="rounded-r-full bg-white/50 py-0.5 pr-1.5 pl-1 text-xs whitespace-nowrap ring-1 ring-gray-200">
//                           Web Access
//                         </div>
//                       </div>
//                     </div>
//                     <div
//                       style={{
//                         animationDelay: "1s",
//                       }}
//                       className="absolute size-10 animate-[ping_7s_ease_infinite] rounded-full ring-1 ring-orange-500/50"
//                     ></div>
//                   </div>,

//                   <div key="obj2" className="relative flex items-center justify-center">
//                     <RiSmartphoneFill className="z-10 size-5 text-gray-900" />
//                     <div className="absolute size-10 rounded-full bg-white/50 ring-1 shadow-lg ring-black/5"></div>
//                     <div className="absolute -top-5 left-4">
//                       <div className="flex gap-1">
//                         <div className="flex items-center justify-center rounded-l-full bg-green-500 p-1 text-xs ring-1 ring-gray-200">
//                           <RiLoaderFill className="size-3 shrink-0 animate-spin text-white" />
//                         </div>
//                         <div className="rounded-r-full bg-white/50 py-0.5 pr-1.5 pl-1 text-xs ring-1 ring-gray-200">
//                           App Access
//                         </div>
//                       </div>
//                     </div>
//                     <div
//                       style={{
//                         animationDelay: "4s",
//                       }}
//                       className="absolute size-10 animate-[ping_7s_ease_infinite] rounded-full ring-1 ring-orange-500/50"
//                     ></div>
//                   </div>,

//                   <div key="obj3" className="relative flex items-center justify-center">
//                     <RiVideoFill className="z-10 size-5 text-gray-900" />
//                     <div className="absolute size-10 rounded-full bg-white/50 ring-1 shadow-lg ring-black/5"></div>
//                     <div
//                       style={{
//                         animationDelay: "2s",
//                       }}
//                       className="absolute size-10 animate-[ping_7s_ease_infinite] rounded-full ring-1 ring-orange-500/50"
//                     ></div>
//                   </div>,
//                   <div key="obj4" className="relative flex items-center justify-center">
//                     <RiTimeFill className="z-10 size-5 text-gray-900" />
//                     <div className="absolute size-10 rounded-full bg-white/50 ring-1 shadow-lg ring-black/5"></div>
//                     <div className="absolute -top-5 left-4">
//                       <div className="flex gap-1">
//                         <div className="flex items-center justify-center rounded-l-full bg-emerald-500 p-1 text-xs ring-1 ring-gray-200">
//                           <RiCheckLine className="size-3 shrink-0 text-white" />
//                         </div>
//                         <div className="rounded-r-full bg-white/50 py-0.5 pr-1.5 pl-1 text-xs ring-1 ring-gray-200">
//                           Instant Service
//                         </div>
//                       </div>
//                     </div>

//                     <div
//                       style={{
//                         animationDelay: "6s",
//                       }}
//                       className="absolute size-10 animate-[ping_7s_ease_infinite] rounded-full ring-1 ring-orange-500/50"
//                     ></div>
//                   </div>,
//                   <div key="obj5" className="relative flex items-center justify-center">
//                     <RiBodyScanFill className="z-10 size-5 text-gray-900" />
//                     <div className="absolute size-10 rounded-full bg-white/50 ring-1 shadow-lg ring-black/5"></div>
//                     <div
//                       style={{
//                         animationDelay: "3s",
//                       }}
//                       className="absolute size-10 animate-[ping_7s_ease_infinite] rounded-full ring-1 ring-orange-500/50"
//                     ></div>
//                   </div>,
//                 ]}
//               >
//                 <div className="relative flex h-48 w-48 items-center justify-center">
//                   <div className="rounded-full p-1 ring-1 ring-black/10">
//                     <div className="relative z-10 flex size-20 items-center justify-center rounded-full bg-white ring-1 shadow-[inset_0px_-15px_20px_rgba(0,0,0,0.1),0_7px_10px_0_rgba(0,0,0,0.15)] ring-black/20">
//                       <SolarMark className="size-10" />
//                     </div>
//                     <div className="absolute inset-12 animate-[spin_8s_linear_infinite] rounded-full bg-linear-to-t from-transparent via-orange-400 to-transparent blur-lg" />
//                   </div>
//                 </div>
//               </Orbit>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Advanced Plan */}
//       <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-0">
//         <div className="col-span-2 my-auto px-2">
//           <div className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-4">
//             Advanced Plan
//           </div>
//           <h2 className="relative text-lg font-semibold tracking-tight text-purple-500">
//             In-Person Professional Care
//             <div className="absolute top-1 -left-[8px] h-5 w-[3px] rounded-r-sm bg-purple-500" />
//           </h2>
//           <p className="mt-2 text-3xl font-semibold tracking-tighter text-balance text-gray-900 md:text-4xl">
//             Physical doctor visits with hands-on therapy
//           </p>
//           <p className="mt-4 text-balance text-gray-700">
//             Experience the highest level of care with in-person visits from qualified physiotherapists. Receive hands-on treatment, personalized exercise plans, and direct physical guidance for optimal recovery and rehabilitation.
//           </p>

//           <div className="mt-6 grid grid-cols-2 gap-4">
//             <div className="flex items-center gap-2">
//               <RiCheckLine className="text-green-500 flex-shrink-0" />
//               <span className="text-sm text-gray-600">In-Person Visits</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <RiCheckLine className="text-green-500 flex-shrink-0" />
//               <span className="text-sm text-gray-600">Hands-On Treatment</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <RiCheckLine className="text-green-500 flex-shrink-0" />
//               <span className="text-sm text-gray-600">Physical Assessment</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <RiCheckLine className="text-green-500 flex-shrink-0" />
//               <span className="text-sm text-gray-600">Scheduled Sessions</span>
//             </div>
//           </div>
//         </div>
//         <div className="relative col-span-2 flex items-center justify-center overflow-hidden">
//           <svg className="absolute size-full">
//             <defs>
//               <pattern id="diagonal-feature-pattern" patternUnits="userSpaceOnUse" width="64" height="64">
//                 {Array.from({ length: 17 }, (_, i) => {
//                   const offset = i * 8
//                   return (
//                     <path
//                       key={i}
//                       d={`M${-106 + offset} 110L${22 + offset} -18`}
//                       className="stroke-gray-200/70"
//                       strokeWidth="1"
//                     />
//                   )
//                 })}
//               </pattern>
//             </defs>
//             <rect width="100%" height="100%" fill="url(#diagonal-feature-pattern)" />
//           </svg>
//           <div className="relative h-[432px] w-[432px]">
//             <svg id="grid" xmlns="http://www.w3.org/2000/svg" fill="none" className="mask absolute size-[432px]">
//               <path
//                 className="stroke-gray-300"
//                 d="M48 0v432M96 0v432M144 0v432M192 0v432M240 0v432M288 0v432M336 0v432M384 0v432M0 48h432M0 96h432M0 144h432M0 192h432M0 240h432M0 288h432M0 336h432M0 384h432"
//               />
//             </svg>

//             <div className="pointer-events-none relative h-full select-none">
//               <div className="absolute top-[192px] left-[191.8px]">
//                 <div className="flex h-12 w-12 items-center justify-center bg-white ring-1 shadow-sm ring-black/15">
//                   <SolarMark className="h-8 w-8" />
//                 </div>
//               </div>
//               <div className="absolute top-[144px] left-[48px]">
//                 <div className="relative">
//                   <div className="absolute inset-0 size-12 animate-pulse bg-purple-200 blur-[3px]"></div>
//                   <div className="relative flex h-12 w-12 items-center justify-center bg-white ring-1 shadow-sm ring-black/15">
//                     <RiHandHeartFill className="text-purple-500" />
//                   </div>
//                 </div>
//               </div>

//               <div className="absolute top-[48px] left-[144px]">
//                 <div className="relative">
//                   <div className="absolute inset-0 size-12 animate-pulse bg-purple-200 blur-[3px]"></div>
//                   <div className="relative flex h-12 w-12 items-center justify-center bg-white ring-1 shadow-sm ring-black/15">
//                     <RiHospitalFill className="text-purple-500" />
//                   </div>
//                 </div>
//               </div>

//               <div className="absolute top-[96px] left-[240px]">
//                 <div className="relative">
//                   <div className="absolute inset-0 size-12 animate-pulse bg-purple-200 blur-[3px]"></div>
//                   <div className="relative flex h-12 w-12 items-center justify-center bg-white ring-1 shadow-sm ring-black/15">
//                     <RiUserFollowFill className="text-purple-500" />
//                   </div>
//                 </div>
//               </div>

//               <div className="absolute top-[240px] left-[385px]">
//                 <div className="relative">
//                   <div className="absolute inset-0 size-12 animate-pulse bg-purple-200 blur-[3px]"></div>
//                   <div className="relative flex h-12 w-12 items-center justify-center bg-white ring-1 shadow-sm ring-black/15">
//                     <RiShieldCheckFill className="text-purple-500" />
//                   </div>
//                 </div>
//               </div>

//               <div className="absolute top-[337px] left-[336px]">
//                 <div className="relative">
//                   <div className="absolute inset-0 size-12 animate-pulse bg-purple-200 blur-[3px]"></div>
//                   <div className="relative flex h-12 w-12 items-center justify-center bg-white ring-1 shadow-sm ring-black/15">
//                     <RiStethoscopeFill className="text-purple-500" />
//                   </div>
//                 </div>
//               </div>

//               <div className="absolute top-[288px] left-[144px]">
//                 <div className="relative">
//                   <div className="absolute inset-0 size-12 animate-pulse bg-purple-200 blur-[3px]"></div>
//                   <div className="relative flex h-12 w-12 items-center justify-center bg-white ring-1 shadow-sm ring-black/15">
//                     <RiCalendarCheckFill className="text-purple-500" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Plan Comparison */}
//       <div className="mt-24 bg-gray-50 rounded-xl p-8 shadow-sm">
//         <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Plan Comparison</h3>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="col-span-1">
//             <h4 className="font-medium text-gray-900 mb-4">Features</h4>
//             <ul className="space-y-4">
//               <li className="py-2 border-b border-gray-200">Platform Access</li>
//               <li className="py-2 border-b border-gray-200">Exercise Guidance</li>
//               <li className="py-2 border-b border-gray-200">Professional Support</li>
//               <li className="py-2 border-b border-gray-200">Real-time Feedback</li>
//               <li className="py-2 border-b border-gray-200">Personalized Plans</li>
//               <li className="py-2">Physical Assessment</li>
//             </ul>
//           </div>

//           <div className="col-span-1">
//             <h4 className="font-medium text-orange-500 mb-4">Basic Plan</h4>
//             <ul className="space-y-4">
//               <li className="py-2 border-b border-gray-200">Web & Mobile App</li>
//               <li className="py-2 border-b border-gray-200">AI-Guided Videos</li>
//               <li className="py-2 border-b border-gray-200">Virtual Therapists</li>
//               <li className="py-2 border-b border-gray-200">AI Form Correction</li>
//               <li className="py-2 border-b border-gray-200">AI-Generated</li>
//               <li className="py-2">Virtual Assessment</li>
//             </ul>
//           </div>

//           <div className="col-span-1">
//             <h4 className="font-medium text-purple-500 mb-4">Advanced Plan</h4>
//             <ul className="space-y-4">
//               <li className="py-2 border-b border-gray-200">Web, Mobile & In-Person</li>
//               <li className="py-2 border-b border-gray-200">Hands-On Guidance</li>
//               <li className="py-2 border-b border-gray-200">Physical Therapists</li>
//               <li className="py-2 border-b border-gray-200">In-Person Correction</li>
//               <li className="py-2 border-b border-gray-200">Doctor-Created</li>
//               <li className="py-2">In-Person Evaluation</li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className="mt-16 text-center">
//         <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ready to start your recovery journey?</h3>
//         <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
//           Choose the plan that fits your needs and begin your personalized physiotherapy experience today.
//         </p>
//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <button className="px-6 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors">
//             Get Started with Basic
//           </button>
//           <button className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors">
//             Upgrade to Advanced
//           </button>
//         </div>
//       </div>
//     </section>
//   )
// }

import {
  RiBodyScanFill,
  RiCheckLine,
  RiCircleLine,
  RiVideoFill,
  RiLoaderFill,
  RiStethoscopeFill,
  RiComputerFill,
  RiSmartphoneFill,
  RiTimeFill,
  RiHandHeartFill,
  RiHospitalFill,
  RiUserFollowFill,
  RiShieldCheckFill,
  RiCalendarCheckFill,
} from "@remixicon/react"
// import { SolarMark } from "../../../public/SolarMark"
import { Orbit } from "../Orbit"
import Image from "next/image"
import physio from "../../../public/physio.svg"

export default function Features() {
  return (
    <section
      aria-label="AI Physiotherapy Features"
      id="solutions"
      className="relative mx-auto max-w-6xl scroll-my-24"
    >
      {/* Vertical Lines */}
      <div className="pointer-events-none inset-0 select-none">
        {/* Left */}
        <div
          className="absolute inset-y-0 my-[-5rem] w-px"
          style={{
            maskImage:
              "linear-gradient(transparent, white 5rem, white calc(100% - 5rem), transparent)",
          }}
        >
          <svg className="h-full w-full" preserveAspectRatio="none">
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              className="stroke-gray-300"
              strokeWidth="2"
              strokeDasharray="3 3"
            />
          </svg>
        </div>

        {/* Right */}
        <div
          className="absolute inset-y-0 right-0 my-[-5rem] w-px"
          style={{
            maskImage:
              "linear-gradient(transparent, white 5rem, white calc(100% - 5rem), transparent)",
          }}
        >
          <svg className="h-full w-full" preserveAspectRatio="none">
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              className="stroke-gray-300"
              strokeWidth="2"
              strokeDasharray="3 3"
            />
          </svg>
        </div>
        {/* Middle */}
        <div
          className="absolute inset-y-0 left-1/2 -z-10 my-[-5rem] w-px"
          style={{
            maskImage:
              "linear-gradient(transparent, white 5rem, white calc(100% - 5rem), transparent)",
          }}
        >
          <svg className="h-full w-full" preserveAspectRatio="none">
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              className="stroke-gray-300"
              strokeWidth="2"
              strokeDasharray="3 3"
            />
          </svg>
        </div>
        {/* 25% */}
        <div
          className="absolute inset-y-0 left-1/4 -z-10 my-[-5rem] hidden w-px sm:block"
          style={{
            maskImage:
              "linear-gradient(transparent, white 5rem, white calc(100% - 5rem), transparent)",
          }}
        >
          <svg className="h-full w-full" preserveAspectRatio="none">
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              className="stroke-gray-300"
              strokeWidth="2"
              strokeDasharray="3 3"
            />
          </svg>
        </div>
        {/* 75% */}
        <div
          className="absolute inset-y-0 left-3/4 -z-10 my-[-5rem] hidden w-px sm:block"
          style={{
            maskImage:
              "linear-gradient(transparent, white 5rem, white calc(100% - 5rem), transparent)",
          }}
        >
          <svg className="h-full w-full" preserveAspectRatio="none">
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              className="stroke-gray-300"
              strokeWidth="2"
              strokeDasharray="3 3"
            />
          </svg>
        </div>
      </div>

      {/* Main Heading */}
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Choose Your Physiotherapy Plan
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
          We offer two comprehensive plans to meet your rehabilitation needs -
          whether you prefer AI-powered virtual care or in-person professional
          treatment.
        </p>
      </div>

      {/* Basic Plan */}
      <div className="mb-24 grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-0">
        <div className="col-span-2 my-auto px-2">
          <div className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-800">
            Basic Plan
          </div>
          <h2 className="relative text-lg font-semibold tracking-tight text-blue-500">
            AI-Powered Virtual Care
            <div className="absolute top-1 -left-[8px] h-5 w-[3px] rounded-r-sm bg-blue-500" />
          </h2>
          <p className="mt-2 text-3xl font-semibold tracking-tighter text-balance text-gray-900 md:text-4xl">
            Virtual therapy sessions with AI guidance
          </p>
          <p className="mt-4 text-balance text-gray-700">
            Access our platform via web or mobile app to receive instant
            AI-powered physiotherapy. Choose from our network of virtual
            therapists for personalized sessions and follow guided exercises
            with real-time form correction.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <RiCheckLine className="flex-shrink-0 text-blue-500" />
              <span className="text-sm text-gray-600">Web & App Access</span>
            </div>
            <div className="flex items-center gap-2">
              <RiCheckLine className="flex-shrink-0 text-blue-500" />
              <span className="text-sm text-gray-600">AI Form Correction</span>
            </div>
            <div className="flex items-center gap-2">
              <RiCheckLine className="flex-shrink-0 text-blue-500" />
              <span className="text-sm text-gray-600">Virtual Therapists</span>
            </div>
            <div className="flex items-center gap-2">
              <RiCheckLine className="flex-shrink-0 text-blue-500" />
              <span className="text-sm text-gray-600">Instant Service</span>
            </div>
          </div>
        </div>
        <div className="relative col-span-2 flex items-center justify-center overflow-hidden">
          <svg className="absolute size-full [mask-image:linear-gradient(transparent,white_10rem)]">
            <defs>
              <pattern
                id="diagonal-feature-pattern"
                patternUnits="userSpaceOnUse"
                width="64"
                height="64"
              >
                {Array.from({ length: 17 }, (_, i) => {
                  const offset = i * 8
                  return (
                    <path
                      key={i}
                      d={`M${-106 + offset} 110L${22 + offset} -18`}
                      className="stroke-gray-200/70"
                      strokeWidth="1"
                    />
                  )
                })}
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#diagonal-feature-pattern)"
            />
          </svg>
          <div className="pointer-events-none h-[26rem] p-10 select-none">
            <div className="relative flex flex-col items-center justify-center">
              <Orbit
                durationSeconds={40}
                radiusPx={140}
                keepUpright
                orbitingObjects={[
                  <div
                    key="obj1"
                    className="relative flex items-center justify-center"
                  >
                    <RiComputerFill className="z-10 size-5 text-gray-900" />
                    <div className="absolute size-10 rounded-full bg-white/50 ring-1 shadow-lg ring-black/5"></div>
                    <div className="absolute -top-5 left-4">
                      <div className="flex gap-1">
                        <div className="flex items-center justify-center rounded-l-full bg-blue-500 p-1 text-xs ring-1 ring-gray-200">
                          <RiCircleLine className="size-3 shrink-0 text-white" />
                        </div>
                        <div className="rounded-r-full bg-white/50 py-0.5 pr-1.5 pl-1 text-xs whitespace-nowrap ring-1 ring-gray-200">
                          Web Access
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        animationDelay: "1s",
                      }}
                      className="absolute size-10 animate-[ping_7s_ease_infinite] rounded-full ring-1 ring-blue-500/50"
                    ></div>
                  </div>,

                  <div
                    key="obj2"
                    className="relative flex items-center justify-center"
                  >
                    <RiSmartphoneFill className="z-10 size-5 text-gray-900" />
                    <div className="absolute size-10 rounded-full bg-white/50 ring-1 shadow-lg ring-black/5"></div>
                    <div className="absolute -top-5 left-4">
                      <div className="flex gap-1">
                        <div className="flex items-center justify-center rounded-l-full bg-blue-500 p-1 text-xs ring-1 ring-gray-200">
                          <RiLoaderFill className="size-3 shrink-0 animate-spin text-white" />
                        </div>
                        <div className="rounded-r-full bg-white/50 py-0.5 pr-1.5 pl-1 text-xs ring-1 ring-gray-200">
                          App Access
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        animationDelay: "4s",
                      }}
                      className="absolute size-10 animate-[ping_7s_ease_infinite] rounded-full ring-1 ring-blue-500/50"
                    ></div>
                  </div>,

                  <div
                    key="obj3"
                    className="relative flex items-center justify-center"
                  >
                    <RiVideoFill className="z-10 size-5 text-gray-900" />
                    <div className="absolute size-10 rounded-full bg-white/50 ring-1 shadow-lg ring-black/5"></div>
                    <div
                      style={{
                        animationDelay: "2s",
                      }}
                      className="absolute size-10 animate-[ping_7s_ease_infinite] rounded-full ring-1 ring-blue-500/50"
                    ></div>
                  </div>,
                  <div
                    key="obj4"
                    className="relative flex items-center justify-center"
                  >
                    <RiTimeFill className="z-10 size-5 text-gray-900" />
                    <div className="absolute size-10 rounded-full bg-white/50 ring-1 shadow-lg ring-black/5"></div>
                    <div className="absolute -top-5 left-4">
                      <div className="flex gap-1">
                        <div className="flex items-center justify-center rounded-l-full bg-blue-500 p-1 text-xs ring-1 ring-gray-200">
                          <RiCheckLine className="size-3 shrink-0 text-white" />
                        </div>
                        <div className="rounded-r-full bg-white/50 py-0.5 pr-1.5 pl-1 text-xs ring-1 ring-gray-200">
                          Instant Service
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        animationDelay: "6s",
                      }}
                      className="absolute size-10 animate-[ping_7s_ease_infinite] rounded-full ring-1 ring-blue-500/50"
                    ></div>
                  </div>,
                  <div
                    key="obj5"
                    className="relative flex items-center justify-center"
                  >
                    <RiBodyScanFill className="z-10 size-5 text-gray-900" />
                    <div className="absolute size-10 rounded-full bg-white/50 ring-1 shadow-lg ring-black/5"></div>
                    <div
                      style={{
                        animationDelay: "3s",
                      }}
                      className="absolute size-10 animate-[ping_7s_ease_infinite] rounded-full ring-1 ring-blue-500/50"
                    ></div>
                  </div>,
                ]}
              >
                {/* <div className="relative flex h-44 w-48 items-center justify-center">
                  <div className="rounded-full p-1 ring-1 ring-black/10">
                    <div className="relative z-10 flex size-20 items-center justify-center rounded-full bg-white ring-1 shadow-[inset_0px_-15px_20px_rgba(0,0,0,0.1),0_7px_10px_0_rgba(0,0,0,0.15)] ring-black/20">
                      <Image 
                        src={physio}
                        alt="Physiotherapy"
                        
                        className="absolute top-0 left-0 h-14 w-14 object-cover "
                      />
                    </div>
                    <div className="absolute inset-12 animate-[spin_8s_linear_infinite] rounded-full bg-gradient-to-t from-transparent via-blue-400 to-transparent blur-lg" />
                  </div>
                </div> */}

                <div className="relative flex h-44 w-48 items-center justify-center">
                  <div className="rounded-full p-1 ring-1 ring-black/10">
                    <div className="relative z-10 flex size-20 items-center justify-center rounded-full bg-white ring-1 shadow-[inset_0px_-15px_20px_rgba(0,0,0,0.1),0_7px_10px_0_rgba(0,0,0,0.15)] ring-black/20">
                      {/* Centered Image */}
                      <Image
                        src={physio}
                        alt="Physiotherapy"
                        className="h-14 w-14 object-cover"
                      />
                    </div>

                    <div className="absolute inset-12 animate-[spin_8s_linear_infinite] rounded-full bg-gradient-to-t from-transparent via-blue-400 to-transparent blur-lg" />
                  </div>
                </div>
              </Orbit>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Plan */}
      <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-0">
        <div className="col-span-2 my-auto px-2">
          <div className="mb-4 inline-block rounded-full bg-blue-50 px-4 py-1 text-sm font-medium text-[#7fb3f5]">
            Advanced Plan
          </div>
          <h2 className="relative text-lg font-semibold tracking-tight text-[#7fb3f5]">
            In-Person Professional Care
            <div className="absolute top-1 -left-[8px] h-5 w-[3px] rounded-r-sm bg-[#7fb3f5]" />
          </h2>
          <p className="mt-2 text-3xl font-semibold tracking-tighter text-balance text-gray-900 md:text-4xl">
            Physical doctor visits with hands-on therapy
          </p>
          <p className="mt-4 text-balance text-gray-700">
            Experience the highest level of care with in-person visits from
            qualified physiotherapists. Receive hands-on treatment, personalized
            exercise plans, and direct physical guidance for optimal recovery
            and rehabilitation.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <RiCheckLine className="flex-shrink-0 text-[#7fb3f5]" />
              <span className="text-sm text-gray-600">In-Person Visits</span>
            </div>
            <div className="flex items-center gap-2">
              <RiCheckLine className="flex-shrink-0 text-[#7fb3f5]" />
              <span className="text-sm text-gray-600">Hands-On Treatment</span>
            </div>
            <div className="flex items-center gap-2">
              <RiCheckLine className="flex-shrink-0 text-[#7fb3f5]" />
              <span className="text-sm text-gray-600">Physical Assessment</span>
            </div>
            <div className="flex items-center gap-2">
              <RiCheckLine className="flex-shrink-0 text-[#7fb3f5]" />
              <span className="text-sm text-gray-600">Scheduled Sessions</span>
            </div>
          </div>
        </div>
        <div className="relative col-span-2 flex items-center justify-center overflow-hidden">
          <svg className="absolute size-full">
            <defs>
              <pattern
                id="diagonal-feature-pattern"
                patternUnits="userSpaceOnUse"
                width="64"
                height="64"
              >
                {Array.from({ length: 17 }, (_, i) => {
                  const offset = i * 8
                  return (
                    <path
                      key={i}
                      d={`M${-106 + offset} 110L${22 + offset} -18`}
                      className="stroke-gray-200/70"
                      strokeWidth="1"
                    />
                  )
                })}
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#diagonal-feature-pattern)"
            />
          </svg>
          <div className="relative h-[432px] w-[432px]">
            <svg
              id="grid"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="mask absolute size-[432px]"
            >
              <path
                className="stroke-gray-300"
                d="M48 0v432M96 0v432M144 0v432M192 0v432M240 0v432M288 0v432M336 0v432M384 0v432M0 48h432M0 96h432M0 144h432M0 192h432M0 240h432M0 288h432M0 336h432M0 384h432"
              />
            </svg>

            <div className="pointer-events-none relative h-full select-none">
              <div className="absolute top-[192px] left-[191.8px]">
                <div className="flex h-12 w-12 items-center justify-center bg-white ring-1 shadow-sm ring-black/15">
                  <Image
                    src={physio}
                    alt="Physiotherapy"
                    className="h-8 w-8 object-cover"
                  />
                </div>
              </div>
              <div className="absolute top-[144px] left-[48px]">
                <div className="relative">
                  <div className="absolute inset-0 size-12 animate-pulse bg-blue-100 blur-[3px]"></div>
                  <div className="relative flex h-12 w-12 items-center justify-center bg-white ring-1 shadow-sm ring-black/15">
                    <RiHandHeartFill className="text-[#7fb3f5]" />
                  </div>
                </div>
              </div>

              <div className="absolute top-[48px] left-[144px]">
                <div className="relative">
                  <div className="absolute inset-0 size-12 animate-pulse bg-blue-100 blur-[3px]"></div>
                  <div className="relative flex h-12 w-12 items-center justify-center bg-white ring-1 shadow-sm ring-black/15">
                    <RiHospitalFill className="text-[#7fb3f5]" />
                  </div>
                </div>
              </div>

              <div className="absolute top-[96px] left-[240px]">
                <div className="relative">
                  <div className="absolute inset-0 size-12 animate-pulse bg-blue-100 blur-[3px]"></div>
                  <div className="relative flex h-12 w-12 items-center justify-center bg-white ring-1 shadow-sm ring-black/15">
                    <RiUserFollowFill className="text-[#7fb3f5]" />
                  </div>
                </div>
              </div>

              <div className="absolute top-[240px] left-[385px]">
                <div className="relative">
                  <div className="absolute inset-0 size-12 animate-pulse bg-blue-100 blur-[3px]"></div>
                  <div className="relative flex h-12 w-12 items-center justify-center bg-white ring-1 shadow-sm ring-black/15">
                    <RiShieldCheckFill className="text-[#7fb3f5]" />
                  </div>
                </div>
              </div>

              <div className="absolute top-[337px] left-[336px]">
                <div className="relative">
                  <div className="absolute inset-0 size-12 animate-pulse bg-blue-100 blur-[3px]"></div>
                  <div className="relative flex h-12 w-12 items-center justify-center bg-white ring-1 shadow-sm ring-black/15">
                    <RiStethoscopeFill className="text-[#7fb3f5]" />
                  </div>
                </div>
              </div>

              <div className="absolute top-[288px] left-[144px]">
                <div className="relative">
                  <div className="absolute inset-0 size-12 animate-pulse bg-blue-100 blur-[3px]"></div>
                  <div className="relative flex h-12 w-12 items-center justify-center bg-white ring-1 shadow-sm ring-black/15">
                    <RiCalendarCheckFill className="text-[#7fb3f5]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Plan Comparison */}
      <div className="mt-24 rounded-xl bg-gray-50 p-8 shadow-sm">
        <h3 className="mb-6 text-center text-2xl font-semibold text-gray-900">
          Plan Comparison
        </h3>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="col-span-1">
            <h4 className="mb-4 font-medium text-gray-900">Features</h4>
            <ul className="space-y-4">
              <li className="border-b border-gray-200 py-2">Platform Access</li>
              <li className="border-b border-gray-200 py-2">
                Exercise Guidance
              </li>
              <li className="border-b border-gray-200 py-2">
                Professional Support
              </li>
              <li className="border-b border-gray-200 py-2">
                Real-time Feedback
              </li>
              <li className="border-b border-gray-200 py-2">
                Personalized Plans
              </li>
              <li className="py-2">Physical Assessment</li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="mb-4 font-medium text-blue-500">Basic Plan</h4>
            <ul className="space-y-4">
              <li className="border-b border-gray-200 py-2">
                Web & Mobile App
              </li>
              <li className="border-b border-gray-200 py-2">
                AI-Guided Videos
              </li>
              <li className="border-b border-gray-200 py-2">
                Virtual Therapists
              </li>
              <li className="border-b border-gray-200 py-2">
                AI Form Correction
              </li>
              <li className="border-b border-gray-200 py-2">AI-Generated</li>
              <li className="py-2">Virtual Assessment</li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="mb-4 font-medium text-[#7fb3f5]">Advanced Plan</h4>
            <ul className="space-y-4">
              <li className="border-b border-gray-200 py-2">
                Web, Mobile & In-Person
              </li>
              <li className="border-b border-gray-200 py-2">
                Hands-On Guidance
              </li>
              <li className="border-b border-gray-200 py-2">
                Physical Therapists
              </li>
              <li className="border-b border-gray-200 py-2">
                In-Person Correction
              </li>
              <li className="border-b border-gray-200 py-2">Doctor-Created</li>
              <li className="py-2">In-Person Evaluation</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <h3 className="mb-4 text-2xl font-semibold text-gray-900">
          Ready to start your recovery journey?
        </h3>
        <p className="mx-auto mb-8 max-w-2xl text-gray-600">
          Choose the plan that fits your needs and begin your personalized
          physiotherapy experience today.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <button className="rounded-lg bg-blue-500 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-600">
            Get Started with Basic
          </button>
          <button className="rounded-lg bg-[#7fb3f5] px-6 py-3 font-medium text-white transition-colors hover:bg-[#6da3e5]">
            Upgrade to Advanced
          </button>
        </div>
      </div>
    </section>
  )
}
