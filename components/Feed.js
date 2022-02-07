import React from "react";
import Stories from "./Stories";
import InputBox from "./InputBox";

function Feed() {
  return (
    <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto">
      <div className="max-auto max-w-md md:max-w-lg lg:max-w-2xl">
        {/* Stories */}
        <Stories />
        {/* inputBox */}
        <InputBox />
        {/* Posts */}
      </div>
    </div>
  );
}

export default Feed;

Stories;
