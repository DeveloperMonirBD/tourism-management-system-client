import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

import slide1 from "../../src/assets/slide/slide-1.jpg"
import slide2 from "../../src/assets/slide/slide-2.jpg"
import slide3 from "../../src/assets/slide/slide-3.jpg"
import slide4 from "../../src/assets/slide/slide-4.jpg"
import slide5 from "../../src/assets/slide/slide-5.jpg"
import slide6 from "../../src/assets/slide/slide-6.jpg"

const Category = () => {
    return (
        <div className="my-24 rounded-md container mx-auto md:px-3">
            <h2 className="text-4xl text-center font-bold mb-12">Tourist Category</h2>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper">
                <SwiperSlide>
                    <img src={slide1} alt="" className="h-[120px] md:h-[150px] lg:h-[308px] w-full bg-cover" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" className="h-[120px] md:h-[150px] lg:h-[308px] w-full bg-cover" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" className="h-[120px] md:h-[150px] lg:h-[308px] w-full bg-cover" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" className="h-[120px] md:h-[150px] lg:h-[308px] w-full bg-cover" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" className="h-[120px] md:h-[150px] lg:h-[308px] w-full bg-cover" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide6} alt="" className="h-[120px] md:h-[150px] lg:h-[308px] w-full bg-cover" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;
