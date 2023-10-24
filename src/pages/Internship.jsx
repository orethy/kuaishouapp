import React from 'react'
import SocialIndexPage from '../components/SocialIndexPage'

const Internship = () => {
    const locations1 = ['国内', '北京', '上海', '广州', '深圳', '天津', '杭州', '成都', '武汉', '济南', '青岛', '烟台', '沈阳', '哈尔滨', '长春', '石家庄', '无锡', '淮安', '铜仁', '吉首', '苏州', '澄迈', '郑州', '重庆', '东莞', '唐山', '临沂', '保定']
    const jobCategories = [
        '全部', '工程类', '算法类',
        '产品类', '运营类', '设计类',
        '分析类', '战略类', '市场类',
        '职能类', '客服类', '审核类',
        '内容评级类', '销售及支持类', '其它类'
    ];
    const texttips = ['不限', '暑假实习']
    const n = texttips.length - 1

    // 实习招聘职位信息
    
    const data = [
        {
            key: '1',
            name: '电商规则运营实习生-【电商】',
            category: '运营类',
            address: '北京',
            date: '应届毕业生',
            renew: '2023.10.17',
        },
        {
            key: '2',
            name: 'hr实习生-【招聘】',
            category: '职能类',
            date: '不限',
            address: '北京',
            renew: '2023.10.17',
        },
        {
            key: '3',
            name: '策略产品实习生（激励广告)-【商业化】',
            category: '产品类',
            date: '不限',
            address: '北京',
            renew: '2023.10.17',
        },
    ];
    return (
        <div>
            <SocialIndexPage locations1={locations1} jobCategories={jobCategories} texttips={texttips} n={n} data={data} />
        </div>
    )
}

export default Internship