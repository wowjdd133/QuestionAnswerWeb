import React from 'react';
import Header from "./Header";

const layoutStyle= {
  border: "1px solid #DDD"
};

const Layout = (props) => {
  return (
    <div style={layoutStyle}>
      <Header/>
      {props.children}
    </div>
  );
};

export default Layout;