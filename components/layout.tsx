import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <div className=" container mx-auto max-w-7xl flex-grow px-6">
      {props.children}
    </div>
  );
};

export default Layout;
