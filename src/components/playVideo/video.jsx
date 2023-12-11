import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { FaPlay } from 'react-icons/fa';


import 'swiper/css';
import 'swiper/css/navigation';

const Video = () => {
    return <>

        <section className='Video' >
            <div className="container">
                <div className="text ">
                    <div>
                        <h5>أبرز الأحداث </h5>
                        <h3>  ذكرياتنا</h3>
                    </div>
                </div>

                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}


                    
                    breakpoints={{
                        // نطاق شاشة الهواتف الذكية
        
                        400: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                          },
        
                        500: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                          },
        
                        640: {
                          slidesPerView: 1,
                          spaceBetween: 10,
                        },
                        // نطاق شاشة الأجهزة اللوحية
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        // نطاق شاشة الحواسب المكتبية
                        1024: {
                          slidesPerView: 3,
                          spaceBetween: 30,
                        },
                      }}

                >
                    <SwiperSlide>
                        <div className="video_info">
                            <div className="play">
                                <img className='position-relative ' src="/Image/video/Rectangle 11828 (1).png" alt="" />
                                <i> <FaPlay /> </i>
                            </div>
                            <p>فعاليات الإعلان الرسمي عن "Be Partner"</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="video_info">
                            <div className="play">
                                <img className='position-relative ' src="/Image/video/Rectangle 11827 (2).png" alt="" />
                                <i> <FaPlay /> </i>
                            </div>                            
                            <p>فعاليات الإعلان الرسمي عن "Be Partner"</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="video_info">
                            <div className="play">
                                <img className='position-relative ' src="/Image/video/Rectangle 11826 (3).png" alt="" />
                                <i> <FaPlay /> </i>
                            </div>                            
                            <p>فعاليات الإعلان الرسمي عن "Be Partner"</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="video_info">
                            <div className="play">
                                <img className='position-relative ' src="/Image/video/Rectangle 11828 (1).png" alt="" />
                                <i> <FaPlay /> </i>
                            </div>                            
                            <p>فعاليات الإعلان الرسمي عن "Be Partner"</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="video_info">
                            <div className="play">
                                <img className='position-relative ' src="/Image/video/Rectangle 11828 (1).png" alt="" />
                                <i> <FaPlay /> </i>
                            </div>                 
                            <p>فعاليات الإعلان الرسمي عن "Be Partner"</p>           
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>
        </section>


    </>
}

export default Video