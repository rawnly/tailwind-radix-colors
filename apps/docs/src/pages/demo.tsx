import React from "react";
import { NextPage } from "next";

interface PageProps {}

const Page: NextPage<PageProps> = (props) => {
  return (
    <div className="w-screen h-screen flex items-center justify-center rx-bg-neutral-1 rx-text-neutral-11">
      <h1 className="text-3xl font-bold uppercase invert:rx-text-neutral-12">
        Hello World
      </h1>
    </div>
  );
};

Page.displayName = "demoPage";

export default Page;
