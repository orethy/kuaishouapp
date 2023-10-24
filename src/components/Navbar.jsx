import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router';

const Navbar = ({ isLogin }) => {
    // 获取当前路由的信息
    const location = useLocation();
    const flag = location.pathname === '/official'

    const [menuItem, setMenuItem] = useState([
        { name: '社会招聘', href: '/official/social/', active: true },
        { name: '实习招聘', href: '/official/trainee/', active: false },
        { name: '校园招聘', href: 'https://campus.kuaishou.cn/recruit/campus/e/#/campus/index/', active: false },
        { name: '关于快手', href: '/official/jianghu/', active: false },
    ])

    // 由于每次刷新页面时，menuItem 都会重新初始化为原始状态。你需要在组件挂载时（即 useEffect 或 componentDidMount 生命周期中）检查 URL，然后设置相应的 active 状态
    useEffect(() => {
        // 遍历item,当路由等于item.href时才改变item的样式
        const updatedItems = menuItem.map(item => ({
            ...item,
            active: location.pathname === item.href
        }));
        setMenuItem(updatedItems);
    }, [location, menuItem]);

    return (
        <div className='k-home-header' style={flag ? { background: 'transparent' } : { background: '#ffffff' }}>
            <a className="k-home-header-logo" href="/official">
                <div className={`k-home-header-logo-img ${flag ? '' : 'logo'}`}  >
                </div>
            </a>
            {!isLogin &&
                <ul>
                    {menuItem.map(item => (
                        <li key={item.name} className={`k-home-header-menu-item ${item.active && !flag ? 'active' : ''}`}>
                            <a href={item.href} className={flag ? 'activeA' : 'activeNo'}>{item.name}</a>
                        </li>
                    ))}
                </ul>
            }
            {!isLogin && <div className="k-home-header-dropdown">
                <i className="common-presenter k-common-avatar"></i>
                <a href="/official/login/" style={flag ? { color: '#ffffff' } : { color: '#333333' }}>注册/登录</a>
            </div>
            }
        </div>
    )
}

export default Navbar