import React from "react";

const Loading = () => {
  return (
    <div className="min-w-full h-[100dvh] flex justify-center items-center">
      <div
        className="animate-spin inline-block w-14 h-14 border-[6px] border-current border-t-transparent text-purple-600 rounded-full"
        // role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
