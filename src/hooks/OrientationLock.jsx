import React, { useEffect, useState } from "react";

const OrientationLock = () => {
  const [isPortrait, setIsPortrait] = useState(true);

  useEffect(() => {
    const isMobileDevice =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    if (!isMobileDevice) {
      return; // Exit early if not a mobile device
    }

    const lockOrientation = () => {
      const isCurrentlyPortrait = window.innerWidth < window.innerHeight;

      if (!isCurrentlyPortrait) {
        if (
          window.screen &&
          window.screen.orientation &&
          window.screen.orientation.lock
        ) {
          window.screen.orientation
            .lock("portrait")
            .then(() => setIsPortrait(true))
            .catch((error) => {
              console.log("Failed to lock the screen orientation:", error);
              setIsPortrait(false);
            });
        } else {
          setIsPortrait(false);
        }
      } else {
        setIsPortrait(true);
      }
    };

    lockOrientation();

    window.addEventListener("resize", lockOrientation);

    return () => {
      window.removeEventListener("resize", lockOrientation);
    };
  }, []);

  return !isPortrait ? (
    <div className="w-full h-screen overflow-hidden bg-black z-[9999] fixed flex justify-center items-center text-5xl">
      <h1>This site works only in portrait</h1>
    </div>
  ) : null;
};

export default OrientationLock;
