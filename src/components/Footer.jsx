import React from 'react'
import { useLocation } from 'react-router'

const Footer = () => {
    const location = useLocation()
    const footerStyle = location.pathname === '/official' ? { color: '#FFFFF' } : { color: '#333333'}

    return (
        <div className='footer' style={location.pathname === '/official' ? { flexDirection: 'column', border:'none' } : { flexDirection: 'row' }}>
            <div style={footerStyle}>
                Copyright © 2023 北京快手科技有限公司 All Rights Reserved.
            </div>
            <div>
                <a href="http://www.beian.gov.cn/portal/registerSystemInfo" target="blank" style={footerStyle}>
                    京ICP备15023266号-4
                    <span className="license-icon"></span>
                </a>
                <a href="http://www.beian.gov.cn/portal/registerSystemInfo" target="blank" style={footerStyle}>
                    <span className="police-icon"></span>
                    京公网安备11010802021190号
                </a>
            </div>
        </div>
    )
}

export default Footer