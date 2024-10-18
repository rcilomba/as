// src/components/ElfsightInstagramFeed.js
import React, { useEffect } from "react";

const ElfsightInstagramFeed = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js"; // Elfsight SDK
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="flex justify-center">
      <div className="max-w-7xl w-full">
        <div
          className="elfsight-app-a96197ae-eeda-4246-bc72-ac6ebb0eae4"
          data-elfsight-app-lazy
        ></div>{" "}
        <script
          src="https://static.elfsight.com/platform/platform.js"
          async
        ></script>
        <div
          class="elfsight-app-a96197ae-eeda-4246-bc72-ac6ebb0eaee4"
          data-elfsight-app-lazy
        ></div>
      </div>
    </div>
  );
};

export default ElfsightInstagramFeed;
