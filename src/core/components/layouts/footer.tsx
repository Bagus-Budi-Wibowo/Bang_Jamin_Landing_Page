import Image from "next/image";
import Link from "next/link";
import Divider from "@/src/core/components/common/divider";
import FacebookSvg from "@/src/core/components/svg/facebook";
import InstagramSvg from "@/src/core/components/svg/instagram";
import MailSvg from "@/src/core/components/svg/mail";
import PhoneSvg from "@/src/core/components/svg/phone";
import WhatsappSvg from "@/src/core/components/svg/whatsapp";

const Footer = () => {
  return (
    <section className="w-full overflow-hidden">
      <div className="relative lg:max-w-7xl flex flex-col justify-center mx-auto p-4 py-6 lg:py-8 z-10">
        <Link href="/">
          <Image 
            src="/assets/images/logo.webp"
            alt="Bang Jamin"
            width={115}
            height={115}
          />
        </Link>
        
        <div className="grid gap-8 sm:gap-8 sm:grid-cols-3 md:grid-cols-6 xl:grid-cols-6 mt-8 p-4 md:p-0">
          <div className="sm:col-span-3 md:col-span-3 sm:p-4 md:p-0">
            <div className="flex flex-col gap-2">
              <h1 className="text-base font-bj-content font-bold">Alamat</h1>
              <p className="text-base text-bj-text-muted font-bj-content font-medium">Cyber 2 Tower Jl. H.R. Rasuna Said Blok X-5 No.13, H.R. Rasuna Said, Rasuna Said, Jakarta Selatan</p>
            </div>

            <div className="flex flex-col gap-2 mt-[40px]">
              <h1 className="text-base font-bj-content font-bold">Hubungi Kami</h1>
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-2">
                  <MailSvg className="w-5 h-5" />
                  <a 
                    href="mailto:[EMAIL_ADDRESS]" 
                    className="text-base text-bj-text-muted font-bj-content font-medium hover:underline"
                  >
                    hello@bangjamin.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <PhoneSvg className="w-5 h-5" />
                  <a 
                    href="tel:+628112234567" 
                    className="text-base text-bj-text-muted font-bj-content font-medium hover:underline"
                  >
                    021-30944567
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <WhatsappSvg className="w-6 h-6" />
                  <a 
                    href="https://wa.me/+6281286261100" 
                    className="text-base text-bj-text-muted font-bj-content font-medium hover:underline"
                  >
                    +62 812-8626-1100 (Chat Only)
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col mt-[40px]">
              <h1 className="text-base font-bj-content font-bold">Waktu Operational</h1>
              <p className="text-base text-bj-text-muted font-bj-content font-medium">Senin - Jumat | 09.00 - 18.00 WIB</p>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-2">
            <div className="flex flex-col gap-2">
              <h1 className="text-base font-bj-content font-bold">Produk</h1>
              <ul className="flex flex-col gap-3">
                <li className="flex gap-2">
                  <a 
                    href="#"
                    className="text-base text-bj-text-muted font-bj-content font-medium hover:underline"
                  >
                    Kendaraan
                  </a>
                </li>
                <li className="flex gap-2">
                  <a 
                    href="#"
                    className="text-base text-bj-text-muted font-bj-content font-medium hover:underline"
                  >
                    Hewan
                  </a>
                </li>
                <li className="flex gap-2">
                  <a 
                    href="#"
                    className="text-base text-bj-text-muted font-bj-content font-medium hover:underline"
                  >
                    Kesehatan
                  </a>
                </li>
                <li className="flex gap-2">
                  <a 
                    href="#"
                    className="text-base text-bj-text-muted font-bj-content font-medium hover:underline"
                  >
                    Perjalanan
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-2 mt-[40px]">
              <div className="flex flex-col gap-2">
                <Image
                  src="/assets/images/ojk-logo.webp"
                  alt="OJK"
                  width={100}
                  height={100}
                />
                <p className="text-base text-bj-text-muted font-bj-content font-medium">Bekerja sama dengan broker BJP, dalam pengawasan OJK</p>
              </div>

              <div className="mt-[30px]">
                <ul className="flex items-center gap-4">
                  <li>
                    <a 
                      href="https://www.instagram.com/bangjamin_id?igsh=N25kZmlqbnVnMXF2"
                      aria-label="Instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <InstagramSvg />
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.facebook.com/share/vurFRCqsy2tC5MAS/?mibextid=LQQJ4d"
                      aria-label="Facebook"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FacebookSvg />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <div className="flex flex-col gap-2">
              <h1 className="text-base font-bj-content font-bold">Perusahaan</h1>
              <ul className="flex flex-col gap-2">
                <li className="flex gap-2">
                  <a 
                    href="#"
                    className="text-base text-bj-text-muted font-bj-content font-medium hover:underline"
                  >
                    Tentang Kami
                  </a>
                </li>
                <li className="flex gap-2">
                  <a 
                    href="#"
                    className="text-base text-bj-text-muted font-bj-content font-medium hover:underline"
                  >
                    Blog
                  </a>
                </li>
                <li className="flex gap-2">
                  <a 
                    href="#"
                    className="text-base text-bj-text-muted font-bj-content font-medium hover:underline"
                  >
                    Konsultan
                  </a>
                </li>
                <li className="flex gap-2">
                  <a 
                    href="#"
                    className="text-base text-bj-text-muted font-bj-content font-medium hover:underline"
                  >
                    Klaim
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Divider 
          orientation="horizontal"
          className="mb-[22px] md:mt-[100px]"
        />

        <div className="grid gap-2 grid-cols-1 md:grid-cols-6 justify-between">
          <div className="col-span-1 md:col-span-3">
            <p className="text-base text-bj-text-muted font-bj-content font-medium">© 2022 - {new Date().getFullYear()} PT Arkana Advance Technology. All Rights Reserved.</p>
          </div>
          <div className="col-span-1">
            <a 
              href="#"
              className="text-base text-bj-text-muted font-bj-content font-medium hover:underline"
            >
              Kebijakan Privasi
            </a>
          </div>
          <div className="col-span-1 md:col-span-2">
            <a 
              href="#"
              className="text-base text-bj-text-muted font-bj-content font-medium hover:underline"
            >
              SBJ App Term and Disclaimer
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;