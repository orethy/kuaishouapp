import React from 'react';
import { Table } from 'antd';
import { HeartFilled  } from '@ant-design/icons';

const Wrapper1 = ({data}) => {

    const columns = [
        {
            title: '职位名称',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a href='#'>{text}</a>,
        },
        {
            title: '职位类别',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: '工作地点',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '工作年限',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: '更新时间',
            key: 'renew',
            dataIndex: 'renew',
        },
        {
            title: '收藏',
            key: 'action',
            render: (_, record) => (
                <HeartFilled />
            ),
        },
    ];
    
    return (
        <Table columns={columns} dataSource={data} pagination={false} data={data}/>
    )
}

export default Wrapper1