import React from 'react'

const Contact = () => {
    return <>

    <html>
        <head>
            <meta charSet='UTF-8' />
            <title>عنوان الصفحة</title>
            <link rel="stylesheet" href="styles.css" />
        </head>
    </html>

        <section className='Contact' >
            <div className="container">
                <div className='text' >
                    <h5>ارسل طلبك</h5>
                    <h3>انضم لنا</h3>
                </div>
                <div className="row  mb-4 ">
                    <div className="col-md-8 d-flex align-items-center  ">
                        <div className="row alCenter">

                        <div className=" col-md-6  ">
                            <div className='contact_info ' >
                                <input type="text" class="form-control" placeholder="الإسم" />
                                <img src="/Image/contact/Profile.svg" alt="" />
                            </div>
                            <div className='contact_info' >
                                <input type="text" class="form-control" placeholder="رقم الهاتف" />
                                <img src="/Image/contact/Calling.svg" alt="" />
                            </div>
                            <div className='contact_info' >
                                <input type="text" class="form-control" placeholder="التدريب" />
                                <img src="/Image/contact/Work.svg" alt="" />
                            </div>
                            
                        </div>
                            <div className="col-md-6">
                                <div className="alCenter ">
                                    <div className='contact_info' >
                                        <input type="text" class="form-control" placeholder="البريد الإلكتروني" />
                                        <img src="/Image/contact/Message.svg" alt="" />
                                    </div>
                                    <div className='contact_info' >
                                        <input type="text" class="form-control" placeholder="رقم الواتساب " />
                                        <img src="/Image/contact/Chat.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                            <div className="contact_infoo">
                                <button><img src="/Image/contact/Send.png" alt="" />  إرسال </button>
                            </div>
                            </div>
                        </div>
                        

                    </div>
                    <div className="col-md-4   ">
                        <div className="img_contact">
                            <img className='w-100 ' src="/Image/contact/Rectangle 11830.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
}

export default Contact
