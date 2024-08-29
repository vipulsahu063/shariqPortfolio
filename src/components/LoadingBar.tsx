import React, { useEffect, useState, useCallback } from 'react';

const LoadingBar: React.FC = () => {
  const [progress, setProgress] = useState<number>(0);

  // Memoized effect callback
  const updateProgress = useCallback(() => {
    setProgress(prev => {
      if (prev >= 100) {
        return 100;
      }
      return prev + 1;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(updateProgress, 20); // Adjust the speed of progress

    return () => clearInterval(interval);
  }, [updateProgress]);

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full bg-black relative">
      <div
        className="absolute top-1/2 transform -translate-y-1/2 bg-white h-1 transition-all duration-200"
        style={{ width: `${progress}%` }}
      />
      <div className="text-white text-2xl absolute top-2/3">
        {progress}%
      </div>
    </div>
  );
};

export default React.memo(LoadingBar);
