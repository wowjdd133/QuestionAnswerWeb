import React from 'react';
import Header from "./Header";

const layoutStyle= {
  width: "100%",
  height: "100%"
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