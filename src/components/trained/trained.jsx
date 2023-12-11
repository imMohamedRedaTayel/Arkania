import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/swiper.min.css';





const Trained = () => {
    return <>

        <section className='trained' >
            <div className="container">
                <div className="text ">
                    <div>
                        <h5>أشخاص رئيسين</h5>
                        <h3>قابل مُدربينا</h3>
                    </div>
                    <div className="buttons">
                        <button>قدم كمدرب</button>
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
                        <div className="train_info">
                            <img src="/Image/trained/1.png" alt="" />
                            <h5> محمد رضا </h5>
                            <p>رئيس قسم الهندسة المدنية</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>                        
                        <div className="train_info">
                            <img src="/Image/trained/2.png" alt="" />
                            <h5> هدي الشريف </h5>
                            <p>رئيس قسم الهندسة المدنية</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>                        
                        <div className="train_info">
                            <img src="/Image/trained/3.png" alt="" />
                            <h5> محمد رضا </h5>
                            <p>رئيس قسم الهندسة المدنية</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>                        
                        <div className="train_info">
                            <img src="/Image/trained/2.png" alt="" />
                            <h5> هدي الشريف </h5>
                            <p>رئيس قسم الهندسة المدنية</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>                        
                        <div className="train_info">
                            <img src="/Image/trained/1.png" alt="" />
                            <h5> محمد رضا </h5>
                            <p>رئيس قسم الهندسة المدنية</p>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>
        </section>

    </>
}

export default Trained