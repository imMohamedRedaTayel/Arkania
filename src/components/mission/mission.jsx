import React, { useEffect } from 'react'
import AOS from 'aos';
// import 'aos/dist/aos.css';

const Mission = () => {

    // useEffect(() => {
    //     AOS.init(); // Initialize AOS on component mount
    //   }, []);

    return <>

        <section className='mission' >

            <div class="container    ">
                <div class="row  ">
                    <div class="col-sm-4   ">
                        <div className="mission_img h-100 " data-aos="fade-up" data-aos-duration={500} >
                            <img className='h-100 ' src="/Image/mission/My project (3) 3.png" alt="" />
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div className="mission_info top">
                            <img data-aos="fade-up" data-aos-duration={300} src="/Image/mission/Wallet.png" alt="" />
                            <h4 data-aos="fade-up" data-aos-duration={400} >لماذا أكاديمية أركــــانيا؟</h4>
                            <p data-aos="fade-up" data-aos-duration={500} >منذ انطلاق أكاديمية أركـــــانيا عام 2019 وبلوغها لأكثر من 1500 ساعة تدريبية في مختلف المجالات من (إدارة المبيعات- التسويق الإلكتروني - الهندسة المعمارية - الهندسة المدنية) تسعى دومًا شركة أركـانيا للتطوير والإنشاءات على المشاركة المجتمعية وتطوير الشباب وإعدادهم وتزويدهم بالمواد العلمية والتدريبات العملية اللازمة لمحاكاة سوق العمل، حيث تخرَّج أكثر من دفعة من أكاديمية أركـانيا وبلغ عدد خريجي الأكاديمية أكثر من ٤٠٠ طالب وتطمح الأكاديمية هذا العام إلى تدريب ١٠٠ طالب علميًّا وعمليًّا في مختلف المجالات.</p>

                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mission_info">
                                    <img data-aos="fade-up" data-aos-duration={300} src="/Image/mission/Wallet3.png" alt="" />
                                    <h4 data-aos="fade-up" data-aos-duration={400} >مهمتنا</h4>
                                    <p data-aos="fade-up" data-aos-duration={500}>تأهيل الشباب لسوق العمل من خلال توفير تعليم وتدريب عالي الجودة يؤهل الطلاب الدخول في سوق العمل، ويساعدهم على تطوير المعرفة العلمية الأساسية والمهارات العملية الضرورية بما يتناسب مع احتياجات سوق العمل بمختلف المجالات.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mission_info">
                                    <img data-aos="fade-up" data-aos-duration={300} src="/Image/mission/Wallet2.png" alt="" />
                                    <h4 data-aos="fade-up" data-aos-duration={400} >رؤيتنا</h4>
                                    <p data-aos="fade-up" data-aos-duration={500} > نسعى دومًا لمعالجة فجوة التطبيق العملي حيث يمثل الجانب العملي جزءًا حيويًا من التعليم والتدريب، ويساعد الطلاب في تطوير مهاراتهم وتحسين أدائهم في سوق العمل. </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>



    </>
}

export default Mission