import React, { useState } from 'react'

const FitersItem = ({ data, onLocationChange, tag, isJob }) => {
    const [expaned, setExpanded] = useState(false); // 追踪是否展开状态

    // 展开处理函数
    const handleExpand = () => {
        setExpanded(!expaned)
    }

    return (
        <div className={`k-common-filters-items ${expaned === true ? 'tag-expand' : ''}`}>
            <div className="k-common-filters-items-tags">
                {/* 这里循环渲染工作地点标签 */}
                {data.map((item) => (
                    <div className="filters-item" key={item}>
                        <div
                            // 用户点击时按钮也发生相应的变化
                            className={`ant-tag ant-tag-checkable ${tag === item? 'ant-tag-checkable-checked' : ''
                                }`}
                            onClick={() => onLocationChange(item)}
                        >
                            {item}
                        </div>
                    </div>
                ))}
            </div>
            <div className="k-common-filters-items-expand" onClick={handleExpand}>
                {expaned ? <span className='iconfont' >&#xe647;</span> : <span className='iconfont'>&#xe648;</span>}
            </div>
        </div>
    )
}

export default FitersItem