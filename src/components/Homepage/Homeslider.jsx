import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import {Scrollbar,Autoplay} from 'swiper/modules'

const Homeslider = () => {
  return (
      <>
          <div className='column is-12   slider-container   '>
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
                      <img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/bb065a8b60d55055ef6858ee8efcd5afea0bafe9_1731593634.jpg?x-oss-process=image/quality,q_95/format,webp" alt=""/>
                      
                  </SwiperSlide>

                  <SwiperSlide>
                      <img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/af86a94fb4cfebb6ccbbaa5919275148625f7aa7_1731506272.jpg?x-oss-process=image/quality,q_95/format,webp" alt=""/>

                  </SwiperSlide>
                  <SwiperSlide>
                      <img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/833bfbf801b46b23a54f28419ad8de264fed319d_1731502337.jpg?x-oss-process=image/quality,q_95/format,webp" alt="" />

                  </SwiperSlide>
                  <SwiperSlide>
                      <img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/ac2ef3485a55d1e41373e3ae77fd4e3124d8fb5c_1731504365.jpg?x-oss-process=image/quality,q_95/format,webp" alt="" />

                  </SwiperSlide>
                  
                  

              </Swiper>

          </div>




      </>
  )
}
export default Homeslider;