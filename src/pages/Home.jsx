import React from 'react'

const Home = () => {
    return (
        <div className="k-layout-content ant-layout-content">
            <div className="k-home-index-page">
                <div className="k-home-bg">
                    <video src="https://static.yximgs.com/udata/pkg/KS-EFF/recruit/official/index-bg.mp4"
                        className="k-home-bg-video"
                        id="k-home-bg-video"
                        autoPlay
                        muted
                        loop
                        data-object-fit="cover">
                        抱歉，您的浏览器不支持内嵌视频
                    </video>

                </div>
                <div className="home-index-title">
                    <div className="home-index-title-main">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home