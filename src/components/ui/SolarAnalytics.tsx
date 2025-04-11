// import {
//   RiDropFill,
//   RiNavigationFill,
//   RiPieChartFill,
//   RiRobot3Fill,
// } from "@remixicon/react"
// import { Divider } from "../Divider"
// import AnalyticsIllustration from "./AnalyticsIllustration"
// import { StickerCard } from "./StickerCard"

// export function SolarAnalytics() {
//   return (
//     <section
//       aria-labelledby="solar-analytics"
//       className="relative mx-auto w-full max-w-6xl overflow-hidden"
//     >
//       <div>
//         <h2
//           id="solar-analytics"
//           className="relative scroll-my-24 text-lg font-semibold tracking-tight text-theme"
//         >
//           Solar Analytics
//           <div className="absolute top-1 -left-[8px] h-5 w-[3px] rounded-r-sm bg-orange-500" />
//         </h2>
//         <p className="mt-2 max-w-lg text-3xl font-semibold tracking-tighter text-balance text-gray-900 md:text-4xl">
//           Turn field data into profitable harvests with real-time insights
//         </p>
//       </div>
//       <div className="*:pointer-events-none">
//         <AnalyticsIllustration />
//       </div>
//       <Divider className="mt-0"></Divider>
//       <div className="grid grid-cols-1 grid-rows-2 gap-6 md:grid-cols-4 md:grid-rows-1">
//         <StickerCard
//           Icon={RiNavigationFill}
//           title="Autonomous Navigation"
//           description="Smart tractors that navigate fields independently using GPS."
//         />
//         <StickerCard
//           Icon={RiRobot3Fill}
//           title="Robotic Harvesting"
//           description="AI-powered robots that identify and harvest crops at optimal ripeness."
//         />
//         <StickerCard
//           Icon={RiDropFill}
//           title="Smart Irrigation"
//           description="Automated irrigation systems that optimize water usage."
//         />
//         <StickerCard
//           Icon={RiPieChartFill}
//           title="Yield Analytics"
//           description="Advanced analytics platform that predicts crop yields."
//         />
//       </div>
//     </section>
//   )
// }


import {
  RiRobot3Fill,
  RiSmartphoneFill,
  RiStethoscopeFill,
  RiUserHeartFill,
} from "@remixicon/react"
import { Divider } from "../Divider"
import { StickerCard } from "./StickerCard"
import AnalyticsIllustration from "./AnalyticsIllustration"

export function SolarAnalytics() {
  return (
    <section
      aria-labelledby="physiofy-plans"
      className="relative mx-auto w-full max-w-6xl overflow-hidden"
    >
      <div>
        <h2
          id="physiofy-plans"
          className="relative scroll-my-24 text-lg font-semibold tracking-tight text-theme"
        >
          Physiofy Plans
          <div className="absolute top-1 -left-[8px] h-5 w-[3px] rounded-r-sm bg-orange-500" />
        </h2>
        <p className="mt-2 max-w-2xl text-3xl font-semibold tracking-tighter text-balance text-gray-900 md:text-4xl">
          Empowering recovery with smart therapy — anytime, anywhere.
        </p>
      </div>

      <div className="*:pointer-events-none">
        <AnalyticsIllustration />
      </div>

      <Divider className="mt-0" />

      <div className="grid grid-cols-1 grid-rows-2 gap-6 md:grid-cols-4 md:grid-rows-1">
        <StickerCard
          Icon={RiRobot3Fill}
          title="AI-Powered Therapy"
          description="Customized exercises tailored by AI, adapting to patient progress in real time."
        />
        <StickerCard
          Icon={RiSmartphoneFill}
          title="Multi-Platform Access"
          description="Seamless therapy access across web and mobile—anytime, anywhere."
        />
        <StickerCard
          Icon={RiUserHeartFill}
          title="Instant Support"
          description="Talk to a virtual therapist or schedule a live session directly from the app."
        />
        <StickerCard
          Icon={RiStethoscopeFill}
          title="Advanced Care Plan"
          description="Premium in-person sessions with certified physiotherapists at your doorstep."
        />
      </div>
    </section>
  )
}
