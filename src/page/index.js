import React from "react";
import { Route } from "react-router-dom";
import { Main, StrongFire, GuestHouse } from ".";

const PageContainer = () => {
  return (
    <>
      <Route path="/" exact component={Main} />
      <Route path="/strongfire" component={StrongFire} />
      <Route path="/guesthouse" component={GuestHouse} />
    </>
  );
};

export default PageContainer;

export { default as Main } from "./main";
export { default as GuestHouse } from "./guesthouse";
export { default as StrongFire } from "./strongfire";
