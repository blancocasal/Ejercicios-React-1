import React from 'react';
import Avatar from './Avatar';

function NavigationBar(props) {
  return <Avatar userName={props.userName} totalOrders={props.totalOrders} />;
}

export default NavigationBar;