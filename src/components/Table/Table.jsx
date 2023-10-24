import React from 'react';
import Wrapper1 from './Wrapper1';
import Wrapper2 from './Wrapp2';

 const Table = ({data}) => {
    return (
        <div className="social-index-table">
            <div className="k-common-table">
                <div className="ant-table-wrapper">
                    <div className="ant-spin-nested-loading">
                        <div className="ant-spin-container">
                            <div className="ant-table-body">
                                <Wrapper1 data={data}/>
                                <Wrapper2 />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Table;