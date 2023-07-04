import { useState, useCallback } from "react";

const useAsyncError = function () {

  const [_, setError] = useState();

  const handleAsyncError = useCallback(function (e) {

    setError(function () {
      throw e;
    });

  }, [setError]);

  return handleAsyncError;
};

export default useAsyncError;