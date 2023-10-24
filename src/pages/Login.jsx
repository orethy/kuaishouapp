import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Login = () => {
    return (
        <div className='login'>
            <Navbar isLogin={true} />
            <div className="k-login-index-page">
                <div className='login-content'>
                    <div className="login-content-left"></div>
                    <div className="login-content-right">
                        <div className="right-form">
                            <div className="form-title">
                                <span class="form-title__active">手机号登录</span>
                            </div>
                            <div className="form-items">
                                <div className="login-name">
                                    <div className="item-content">
                                        {/* <span className='prefix'></span> */}
                                        <span className='is-edit'>
                                            <input type="text" />
                                        </span>
                                    </div>
                                </div>
                                <div className="captcha">
                                    <div className="login-captcha"></div>
                                    <span>
                                        <input type="text" />
                                    </span>
                                </div>
                                <div className="captcha2">
                                    <span>
                                        <input type="text" />
                                    </span>
                                </div>
                            </div>
                            <div className="login-content-right-bn">
                                <button type="button" className="ant-btn ant-btn-primary">
                                    <span>登 录</span>
                                </button>
                                <div style={{ color: 'rgb(153, 153, 153)', marginTop: '24px' }}>
                                    登录即同意
                                    <span style={{ color: 'rgb(23, 99, 251)', cursor: 'pointe' }}>用户协议</span>
                                    与
                                    <span style={{ color: 'rgb(23, 99, 251)', cursor: 'pointer' }}>隐私政策</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Login