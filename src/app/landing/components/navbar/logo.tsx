import Link from "next/link"
import { Logo } from "@/components/logo"

export function NavbarLogo() {
  return (
    <Link href="/landing" className="flex items-center space-x-2 cursor-pointer">
      <div className="xl:hidden">
        <Logo size={34} />
      </div>
      <div className="hidden xl:block">
        <Logo size={40} />
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-semibold leading-[1.15]">Rumah Sakit Umum Daerah</span>
        <span className="text-sm font-bold leading-[1.15]">H. Abdurrahman Sayoeti</span>
        <span className="text-[10px] italic leading-[1.15]">Pemerintah kota jambi</span>
      </div>
    </Link>
  )
}
