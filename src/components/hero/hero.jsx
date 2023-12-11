import React, { useEffect } from 'react'
import Header from '../header'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {

    useEffect(() => {
        AOS.init(); // Initialize AOS on component mount
      }, []);

  return <>
  
  <section className='Hero' >
    <div className="container">
    <Header/>
        <div className="row hightCalc ">
            <div className="col-md-6 ">
                <div className="hero_info  ">
                    <h2 data-aos="fade-up" data-aos-duration={200} > أكاديمية <span> أركــــانيا </span> </h2>
                    <p data-aos="fade-up" data-aos-duration={300} > نسعى دومًا لمعالجة فجوة التطبيق العملي حيث يمثل الجانب العملي جزءًا حيويًا من التعليم والتدريب، ويساعد الطلاب في تطوير مهاراتهم وتحسين أدائهم في سوق العمل. </p>
                    <div className="buttons" data-aos="fade-up" data-aos-duration={500} >
                        <button> انضم الآن </button>
                        <button className='defrint' >استكشف المزيد</button>
                    </div>
                </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center  ">
                <div className="hero_img"></div>
                <div className="IMG"  >
                <div className="info"> 
                <h6 data-aos="fade-up" data-aos-duration={400} >6+ دورات شاملة</h6> 
                <p data-aos="fade-up" data-aos-duration={500} > فئات متعددة</p>
                </div>
                <div className="clients">
                <div> 50+ </div>
                    <img  src="/Image/hero/Avatar (1).png" alt="" />
                    <img  src="/Image/hero/Avatar (2).png" alt="" />
                    <img  className='z-index-10' src="/Image/hero/Avatar (3).png" alt="" />
                    <img className='index' src="/Image/hero/Avatar.png" alt="" />
                </div>
                </div>

            </div>
        </div>
    </div>
  </section>

  </>
}

export default Hero