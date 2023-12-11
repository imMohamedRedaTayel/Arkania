import React from 'react'

const Rate = () => {
    return <>
        <section className='RateUs' >
            <div className="container">
                <div className="text">
                    <h5>لماذا تختارنا؟</h5>
                    <h3>قِيمُنا</h3>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="rate_text">
                            <img src="/Image/RateUs/Glass Icons.png" alt="" />
                            <p>رحلة عمل يقودها <br /> الشغــف</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="rate_text">
                            <img src="/Image/RateUs/Glass Icons (1).png" alt="" />
                            <p>  برامج تدريبية توفر الخبرة العملية
                                <br />                                اللازمة لدخول سوق العمل </p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="rate_text">
                            <img src="/Image/RateUs/Glass Icons (2).png" alt="" />
                            <p>تطبيق محتوى المواد العلمية
                                <br />   عن طريق حالات عملية</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="rate_text">
                            <img src="/Image/RateUs/Glass Icons (3).png" alt="" />
                            <p>التعلم بالتجربة من خلال خبرات
                                <br /> مدربي الأكاديمية</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Rate