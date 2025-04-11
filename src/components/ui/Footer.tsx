import {
  // RiGithubFill,
  // RiSlackFill,
  // RiTwitterXFill,
  // RiYoutubeFill,
  RiWhatsappFill,
  RiInstagramFill
} from "@remixicon/react"
import Link from "next/link"
import Image from "next/image"
import logo from "../../../public/physiofy.svg"
const CURRENT_YEAR = new Date().getFullYear()


const Footer = () => {
  // const sections = {
  //   solutions: {
  //     title: "Solutions",
  //     items: [
  //       { label: "Crop Monitoring", href: "#contact" },
  //       { label: "Irrigation Control", href: "#contact" },
  //       { label: "Soil Analytics", href: "#contact" },
  //       { label: "Weather Integration", href: "#contact" },
  //       { label: "Documentation", href: "#contact" },
  //       { label: "Smart Farming Guide", href: "#contact" },
  //       { label: "Equipment", href: "#contact" },
  //     ],
  //   },
  //   company: {
  //     title: "Company",
  //     items: [
  //       { label: "About us", href: "#contact" },
  //       { label: "Blog", href: "#contact" },
  //       { label: "Careers", href: "#contact" },
  //       { label: "Success Stories", href: "#contact" },
  //       { label: "Sustainability", href: "#contact" },
  //     ],
  //   },
  //   resources: {
  //     title: "Resources",
  //     items: [
  //       { label: "Farmer Network", href: "#contact" },
  //       {
  //         label: "Community",
  //         href: "#contact",
  //         external: true,
  //       },
  //       { label: "Contact", href: "#contact" },
  //       { label: "Support", href: "#contact" },
  //       { label: "Privacy Policy", href: "#contact" },
  //       { label: "Terms of Service", href: "#contact" },
  //       { label: "Report an Issue", href: "#contact" },
  //     ],
  //   },
  //   partners: {
  //     title: "Partners",
  //     items: [
  //       { label: "Dealer Network", href: "#contact", external: true },
  //       { label: "System Status", href: "#contact", external: true },
  //       { label: "Research Partners", href: "#contact", external: true },
  //       { label: "Integration Guide", href: "#contact" },
  //     ],
  //   },
  // }

  const sections = {
    // services: {
    //   title: "Services",
    //   items: [
    //     { label: "AI-Powered Virtual Therapy", href: "#contact" },
    //     { label: "In-Person Physiotherapy", href: "#contact" },
    //     { label: "Pain Management Programs", href: "#contact" },
    //     { label: "Post-Surgery Rehab", href: "#contact" },
    //     { label: "Elderly Care Therapy", href: "#contact" },
    //     { label: "Sports Injury Recovery", href: "#contact" },
    //     { label: "Chronic Condition Support", href: "#contact" },
    //   ],
    // },
    company: {
      title: "Our Links",
      items: [
        { label: "Home", href: "#home" },
        { label: "Solution", href: "#solution" },
        { label: "Contact", href: "#contact" },
        // { label: "Testimonials", href: "#contact" },
        // { label: "Contact", href: "#contact" },
      ],
    },
    resources: {
      title: "Resources",
      items: [
        { label: "Help Center", href: "#contact" },
        { label: "FAQs", href: "#contact" },
        { label: "Privacy Policy", href: "#contact" },
        { label: "Terms of Service", href: "#contact" },
        { label: "Report an Issue", href: "#contact" },
      ],
    },
    services: {
      title: "Services",
      items: [
        { label: "AI-Powered Virtual Therapy", href: "#contact" },
        { label: "In-Person Physiotherapy", href: "#contact" },
        { label: "Pain Management Programs", href: "#contact" },
        { label: "Post-Surgery Rehab", href: "#contact" },
        { label: "Elderly Care Therapy", href: "#contact" },
        { label: "Sports Injury Recovery", href: "#contact" },
        { label: "Chronic Condition Support", href: "#contact" },
      ],
    },
  };
  

  return (
    <div className="px-4 xl:px-0">
      <footer
        id="footer"
        className="relative mx-auto flex max-w-6xl px-1 flex-wrap pt-4"
      >
        {/* Vertical Lines */}
        <div className="pointer-events-none inset-0">
          {/* Left */}
          <div
            className="absolute inset-y-0 my-[-5rem] w-px"
            style={{
              maskImage: "linear-gradient(transparent, white 5rem)",
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
              maskImage: "linear-gradient(transparent, white 5rem)",
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
        <svg
          className="mb-10 h-20 w-full border-y border-dashed border-gray-300 stroke-gray-300"
          // style={{
          //   maskImage:
          //     "linear-gradient(transparent, white 10rem, white calc(100% - 10rem), transparent)",
          // }}
        >
          <defs>
            <pattern
              id="diagonal-footer-pattern"
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
                    stroke=""
                    strokeWidth="1"
                  />
                )
              })}
            </pattern>
          </defs>
          <rect
            stroke="none"
            width="100%"
            height="100%"
            fill="url(#contactdiagonal-footer-pattern)"
          />
        </svg>
        <div className="mr-auto flex w-full justify-between lg:w-fit lg:flex-col">
          <Link
            href="/"
            className="flex items-center font-medium text-gray-700 select-none sm:text-sm"
          >
            <Image
              src={logo}
              alt="Solar Logo"
              className="h-12 w-auto"
              priority
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />

          </Link>

          <div>
            <div className="mt-4 flex items-center">
              {/* Social Icons */}
              <Link
                href="https://www.instagram.com/officialphysiofy/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-200 hover:text-gray-900"
              >
                <RiInstagramFill className="size-5" />
              </Link>
              <Link
                href="https://api.whatsapp.com/send/?phone=916353295389&text=Try%20AI-Powered%20Personalized%20Physio&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-200 hover:text-gray-900"
              >
                <RiWhatsappFill className="size-5" />
              </Link>
              {/* <Link
                href="#contact"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-200 hover:text-gray-900"
              >
                <RiGithubFill className="size-5" />
              </Link>
              <Link
                href="#contact"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-200 hover:text-gray-900"
              >
                <RiSlackFill className="size-5" />
              </Link> */}
            </div>
            <div className="ml-2 hidden text-sm text-gray-700 lg:inline">
              &copy; {CURRENT_YEAR} Physiofy.
            </div>
          </div>
        </div>

        {/* Footer Sections */}
        {Object.entries(sections).map(([key, section]) => (
          <div key={key} className="mt-10 min-w-44 pl-2 lg:mt-0 lg:pl-0">
            <h3 className="mb-4 font-medium text-gray-900 sm:text-sm">
              {section.title}
            </h3>
            <ul className="space-y-4">
              {section.items.map((item) => (
                <li key={item.label} className="text-sm">
                  <Link
                    href={item.href}
                    className="text-gray-600 transition-colors duration-200 hover:text-gray-900"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </footer>
    </div>
  )
}

export default Footer
