/*logoUI组件  没有数据交互*/
import React from 'react';

import images from './images/logo.png';
import './logo.less'

/*函数创建组件创建没有状态的组件  就是不需要进行数据交互的租金*/
export default function Logo () {
  return (
    <div className='logoBox'>
      <img src={images} alt="logo" className='logo'/>
    </div>
  )
}