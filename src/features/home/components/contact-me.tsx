"use client";

import { Button } from "@/src/core/components/common/button";
import { Card } from "@/src/core/components/common/card";
import TextArea from "@/src/core/components/common/text-area";
import TextField from "@/src/core/components/common/text-field";
import CurveSVG from "@/src/core/components/svg/curve";
import MailSvg from "@/src/core/components/svg/mail";
import PhoneSvg from "@/src/core/components/svg/phone";
import WhatsappSvg from "@/src/core/components/svg/whatsapp";

const ContactMe = () => {
  return (
    <section className="relative w-full bg-[#F5F5F5] overflow-hidden">
      <div className="absolute w-full top-[30%] md:top-[50%] -translate-y-1/2 z-0">
        <CurveSVG strokeColor="#CFCFCF" />
      </div>
      <div className="relative lg:max-w-7xl mx-auto flex flex-col items-center justify-center pt-6 px-4 py-6 z-10">
        <div className="w-full flex flex-col md:flex-row justify-center lg:items-start xl:items-center gap-8 lg:gap-6 xl:gap-8 sm:py-8 lg:py-4 ">
          <div className="w-full flex flex-col gap-1 lg:w-1/2">
            {/* Header */}
            <div className="flex flex-col gap-1">
              <h1 
                data-aos="fade-right"
                data-aos-duration="1000"
                className="text-[28px] md:text-[44px] text-left md:text-center lg:text-left font-bj-heading font-semibold mb-2">
                Punya Pertanyaan?
                <span className="text-bj-primary">Silahkan Hubungi Kami</span>
              </h1>
              <p 
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="100"
                className="text-sm md:text-[22px] text-left md:text-center lg:text-left font-bj-content text-bj-text-muted"
              >
                Tim Bang Jamin selalu siap ngobrol langsung dengan Anda. Terkait produk, klaim, atau apapun kami akan dengan senang hati melayani.
              </p>
            </div>

            {/* Contact Info List */}
            <ul className="flex flex-col items-start md:items-center lg:items-start gap-4 mt-6">
              <li
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
                className="flex gap-2 group"
              >
                <div className="w-7 h-7 flex items-center justify-center rounded-lg group-hover:bg-bj-primary group-hover:text-white transition-all duration-300 ease-in-out">
                  <MailSvg className="w-4 h-4"/>
                </div>
                <a 
                  href="mailto:[EMAIL_ADDRESS]" 
                  className="text-sm md:text-base font-bj-content font-medium group-hover:text-bj-primary"
                >
                  hello@bangjamin.com
                </a>
              </li>
              <li 
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="300"
                className="flex gap-2 group"
              >
                <div className="w-7 h-7 flex items-center justify-center rounded-lg group-hover:bg-bj-primary group-hover:text-white transition-all duration-300 ease-in-out">
                  <PhoneSvg className="w-4 h-4 group-hover:text-white" />
                </div>
                <a 
                  href="tel:+628112234567" 
                  className="text-sm md:text-base font-bj-content font-medium group-hover:text-bj-primary"
                >
                  021-30944567
                </a>
              </li>
              <li 
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="400"
                className="flex gap-2 group"
              >
                <div className="w-7 h-7 flex items-center justify-center rounded-lg group-hover:bg-bj-primary group-hover:text-white transition-all duration-300 ease-in-out">
                  <WhatsappSvg className="w-5 h-5" />
                </div>
                <a 
                  href="https://wa.me/+6281286261100" 
                  className="text-sm md:text-base font-bj-content font-medium group-hover:text-bj-primary"
                >
                  +62 812-8626-1100 (Chat Only)
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2 group">
            <Card 
              data-aos="fade-left"
              data-aos-duration="1000"
              className="p-4 sm:p-6 md:p-8 group-hover:hover-scale-shadow transition-all duration-500 ease-in-out">
              <h1 
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="500"
                className="text-2xl font-bj-content font-bold mb-4"
              >
                Lengkapi Data
              </h1>
              <form className="flex flex-col gap-4">
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="600"
                >
                  <TextField 
                    label="Nama"
                    placeholder="Masukkan nama lengkap Anda"
                    required
                  />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="700"
                >
                  <TextField 
                    label="No HP"
                    placeholder="Masukkan nomor HP Anda"
                    leftAdornment="+62"
                    required
                  />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="800"
                >
                  <TextArea 
                    label="Pertanyaan"
                    placeholder="Tuliskan pertanyaan atau pesan Anda di sini..."
                    rows={4}
                    required
                  />
                </div>
                <Button 
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="900"
                  className="w-fit ml-auto px-9 py-6 rounded-xl!">
                  Kirim Pesan
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;