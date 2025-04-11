import { Button } from "@/components/Button"
import Link from "next/link"
import { siteConfig } from "./siteConfig"

// import { SolarLogo } from "../../public/SolarLogo"
import Image from "next/image"
import logo from "../../public/physio.svg"

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Link href={siteConfig.baseLinks.home}>
        {/* <span className="sr-only">Solar Tech Logo</span> */}
        <Image
          src={logo}
          alt="Solar Tech Logo"
          className="h-12 w-auto"
          priority
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        />
      </Link>
      <p className="mt-6 text-4xl font-semibold text-theme sm:text-5xl">
        Error 404
      </p>
      <h1 className="mt-4 text-2xl font-semibold text-gray-900">
        Page not found
      </h1>
      <p className="mt-2 text-sm text-gray-600">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <Button asChild className="group mt-8" variant="light">
        <Link href={siteConfig.baseLinks.home}>Go to the home page</Link>
      </Button>
    </div>
  )
}
