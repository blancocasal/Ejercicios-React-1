import React from 'react';
import NavigationBar from './NavigationBar';

function Page(props) {
  return <NavigationBar userName={props.userName} totalOrders={props.totalOrders} />;
}

export default Page;