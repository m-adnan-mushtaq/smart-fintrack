"use client";

import GlobalError from "@/components/Layout/GlobalError";

const error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return <GlobalError error={error} reset={reset} />;
};

export default error;
