import React from 'react';
import { Pagination } from 'antd';

// 分页器
const Wrapper2 = () => {
    const onShowSizeChange = (current, pageSize) => {
        console.log(current, pageSize);
    };
    return (
        <Pagination className='pagination'
            showSizeChanger
            onShowSizeChange={onShowSizeChange}
            defaultCurrent={1}
            total={500}
        />
    );

}

export default Wrapper2