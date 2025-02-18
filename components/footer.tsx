import { Building2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"


export function Footer() {
  return (
    <footer className="w-full border-t bg-[#2D221E] text-[#E8DCC0]">
      <div className="container flex flex-col gap-8 py-8 md:py-12">
        <div className="flex flex-col gap-6 md:flex-row md:justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center space-x-2">
 <Image 
            src="/images/p1.jpeg" 
            alt="PDA Logo" 
            width={150} 
            height={70} 
            className="object-contain h-auto w-auto max-h-[50px] max-w-[150px]"
          />
            </div>
            <p className="text-sm text-[#F5E6D0]/80">
              Psycho-Diagnostisch Analysecentrum
            </p>
          </div>
          <div className="grid grid-cols-2 gap-12 sm:grid-cols-3">
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium text-[#C4A77D]">Contact</h3>
              <address className="text-sm text-[#F5E6D0]/80 not-italic">
                Prinses Marijkestraat 50K<br />
                2404BD, Alphen aan den Rijn<br />
                Netherlands
              </address>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium text-[#C4A77D]">Links</h3>
              <nav className="flex flex-col gap-2">
                <Link href="/privacy" className="text-sm text-[#F5E6D0]/80 hover:text-[#C4A77D]">
                  Privacy Policy
                </Link>
                <Link href="/colophon" className="text-sm text-[#F5E6D0]/80 hover:text-[#C4A77D]">
                  Colophon
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-[#F5E6D0]/80">
          © {new Date().getFullYear()} PDA. All rights reserved.
        </div>
      </div>
    </footer>
  )
}