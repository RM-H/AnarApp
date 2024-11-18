import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import {Scrollbar,Autoplay} from 'swiper/modules'

const SupermarketSlider = () => {
    return (
        <>
            <div className='column is-12   slider-container    '>
                <Swiper
                    loop={true}
                    autoplay={{
                        delay: 3236,
                    }}


                    speed={1618}

                    scrollbar={{
                        hide: true,

                    }}
                    modules={[Scrollbar,Autoplay]}
                    className="mySwiper borderradone   shadowtwo "
                    style={{height:'100%'}}
                >
                    <SwiperSlide>
                        <img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/a0323e99bd97027bef2384cf97aa7c035956db61_1728501971.jpg?x-oss-process=image/quality,q_95/format,webp" alt=""/>

                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/478a83303d765386ed2adeea62b9e4d5eb9898db_1731400149.gif?x-oss-process=image?x-oss-process=image/format,webp" alt=""/>

                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/38c17afaddfa264b964152a20ceed2496bc15af1_1731141880.jpg?x-oss-process=image/quality,q_95/format,webp" alt="" />

                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/f34bb5ac64df320bb9d062bb39be5ed93e776444_1731503532.jpg?x-oss-process=image/quality,q_95/format,webp" alt="" />

                    </SwiperSlide>




                </Swiper>

            </div>




        </>
    )
}
export default SupermarketSlider;