import React from 'react'
import SocialIndexPage from '../components/SocialIndexPage'

const social = () => {
    const locations1 = ['国内', '北京', '上海', '广州', '深圳', '天津', '杭州', '成都', '武汉', '济南', '青岛', '烟台', '沈阳', '哈尔滨', '长春', '石家庄', '无锡', '淮安', '铜仁', '吉首', '苏州', '澄迈', '郑州', '重庆', '东莞', '唐山', '临沂', '保定']
    const location2 = ['国外', '圣保罗', '雅加达']
    const jobCategories = [
        '全部', '工程类', '算法类',
        '产品类', '运营类', '设计类',
        '分析类', '战略类', '市场类',
        '职能类', '客服类', '审核类',
        '内容评级类', '销售及支持类', '其它类'
    ];
    const texttips = ['不限', '产品经理', '效果设计', '推荐算法', '音视频', 'Android']
    const n = texttips.length - 1

    const data = [
        {
            key: '1',
            name: '搜索产品增长运营-【主站】',
            category: '运营类',
            address: '北京',
            date: '3-5年',
            renew: '2023.10.17',
        },
        {
            key: '2',
            name: '行业运营经理（中小方向）-【商业化】',
            category: '运营类',
            date: '3-5年',
            address: '北京',
            renew: '2023.10.17',
        },
        {
            key: '3',
            name: '产品运营专家（中小方向）-【商业化】',
            category: '运营类',
            date: '3-5年',
            address: '北京',
            renew: '2023.10.17',
        },
    ];

    return (
        <SocialIndexPage locations1={locations1} location2={location2} jobCategories={jobCategories} texttips={texttips} n={n} data={data}/>
    )
}

export default social