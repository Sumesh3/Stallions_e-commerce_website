import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <>
            <div className=" footer">
                <div className="row footer_main">
                    {/* Footer Column */}
                    <div className="col-lg-4 footer_column">
                        <div className="footer_col">
                            <div className="footer_content footer_about">
                                <div className="logo_container footer_logo">
                                    <div className="logo"><img className='footer_img' src="/stallions_logo.png" height={'40px'} />
                                    <img className='footer_log' src="/stallions_name.png" height={'130px'}/>
                                    </div>
                                </div>
                                <p className="footer_about_text">Good quality product is supplied on our site</p>
                                <ul className="footer_social_list">
                                    <li className="footer_social_item"><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li className="footer_social_item"><a href="#"><i className="fa fa-instagram" /></a></li>
                                    <li className="footer_social_item"><a href="#"><i className="fa fa-twitter" /></a></li>
                                    <li className="footer_social_item"><a href="#"><i className="fa fa-linkedin" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Footer Column */}
                    <div className="col-lg-4 footer_column">
                        <div className="footer_col">
                            <div className="footer_title">tags</div>
                            <div className="footer_content footer_tags">
                                <ul className="tags_list clearfix">
                                    <li className="tag_item"><a href="">travel</a></li>
                                    <li className="tag_item"><a href="">adventure</a></li>
                                    <li className="tag_item"><a href="">explore</a></li>
                                    <li className="tag_item"><a href="">music</a></li>
                                    <li className="tag_item"><a href="">video</a></li>
                                    <li className="tag_item"><a href="">party</a></li>
                                    <li className="tag_item"><a href="">photography</a></li>
                                    <li className="tag_item"><a href="">sleep</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Footer Column */}
                    <div className="col-lg-3 footer_column">
                        <div className="footer_col">
                            <div className="footer_title">contact info</div>
                            <div className="footer_content footer_contact">
                                <ul className="contact_info_list">
                                    <li className="contact_info_item d-flex flex-row">
                                        <div className="contact_info_text">Kozhikode, Kerala</div>
                                    </li>
                                    <li className="contact_info_item d-flex flex-row">
                                        <div className="contact_info_text">+91 9539451245</div>
                                    </li>
                                    <li className="contact_info_item d-flex flex-row">
                                        <div className="contact_info_text"><a href="mailto:sumeshmkx@gmail.com?Subject=Hello" target="_top">sumeshmkx@gmail.com</a></div>
                                    </li>
                                    <li className="contact_info_item d-flex flex-row">
                                        <div className="contact_info_text"><a href="">www.stallions.com</a></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
