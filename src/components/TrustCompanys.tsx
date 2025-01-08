"use client"

import Image from "next/image";
import { TrustCompanysType } from "@/types/types";
import { TrustCompanysData,} from "@/data/aboutUsData";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

const TrustCompanys = () => {
    return (
      <div className="bg-[#064E3B] px-5 my-28 py-20 mb-8 grid justify-items-center">
        <h1 className="text-2xl pb-8 text-center md:text-3xl">Trusted by Leading Eductional Institutions</h1>
        <Swiper
          loop={true}
          slidesPerView={4}
          spaceBetween={20}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          freeMode={true}
          modules={[Autoplay, FreeMode]}
          className="w-[100%] md:w-[80%]"
          >
          <div>
            {
              TrustCompanysData.map((trust, index) => (
                <SwiperSlide key={index}>
                  <ImagesTrustCompany key={index} ImageUrl={trust.ImageUrl} />
                </SwiperSlide>
              ))
            }
          </div>
        </Swiper>
      </div>
    );
  };
  
  const ImagesTrustCompany = (props: TrustCompanysType) => {
    return <Image src={props.ImageUrl} alt="" width={100} height={0} className='w-[180px]'/>
  }

export default TrustCompanys