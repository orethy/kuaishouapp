import React, { useState } from 'react';
import FitersItem from './FitersItem';
import Table from './Table/Table';

const SocialIndexPage = ({ locations1, location2, jobCategories, texttips, n, data }) => {

  const [active, setActive] = useState(0)
  const [search, setSearch] = useState(false)
  const [tag, setTag] = useState(locations1[0])
  const [tag3, setTag3] = useState(jobCategories[0]); // 职位类型

  // 点击texttips切换样式
  const handleTips = (index) => {
    setActive(index)
  }

  const handleSearch = () => {
    setSearch(!search)
  }

  // 负责改变工作地点的按钮样式
  const handleLocationChange = (item) => {
    setTag(item);
  };
  // 负责改变职位类别按钮的样式
  const handleLocationChange3 = (item) => {
    setTag3(item);
  };
  // 根据选定的地点和类别来过滤职位信息。
  return (
    <div className="k-social-index-page">
      <div className="social social-index-banner"></div>
      <div className="social-index-filters">
        <div className="k-common-filters">
          <div className="k-common-filters-title">工作地点</div>
          <div className="k-common-filters-items-row">
            <FitersItem key={locations1[0]}  data={locations1} onLocationChange={handleLocationChange} tag={tag} />
            {location2 && <FitersItem key={location2[0]} data={location2} onLocationChange={handleLocationChange} tag={tag} />}
          </div>
        </div>
        <div className="k-common-filters">
          <div className="k-common-filters-title">职位类别</div>
          <FitersItem data={jobCategories} onLocationChange={handleLocationChange3} tag={tag3} />
        </div>
      </div>
      <div className="social-index-search">
        <div className="social-index-search-hot">
          <span className='search-hot-title'>热门搜索:</span>
          <div class="k-common-text-tips">
            {texttips && texttips.map((tip, index) => (
              <>
                <div key = {index} className={`k-common-text-tips-item ${active === index ? 'tip-active' : ''}`} onClick={() => handleTips(index)}>{tip}</div>
                {(index !== n) ?
                  <i className="k-common-text-tip-i"></i> : ''}
              </>
            ))}
          </div>
        </div>

        {/* 搜索框 */}
        <div className="k-common-search">
          <div className="ant-input-search">
            <input type="text" placeholder='搜索职位' onClick={handleSearch} className={search === true ? 'active' : ''} />
          </div>
        </div>
      </div>
      {/* 表格 */}
      <Table data={data} />

    </div>
  );
};

export default SocialIndexPage;
