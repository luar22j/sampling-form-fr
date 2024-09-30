import { useState } from "react";
import PulseLoader from "react-spinners/PulseLoader";

const Video = () => {
  const [loading, setLoading] = useState(true);

  const handleLoadedData = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && (
        <div className="w-full h-[300px] flex justify-center items-center">
          <PulseLoader color="#FE3D99" />
        </div>
      )}
      <video
        src="../../public/video/Alex.mp4"
        autoPlay
        loop
        muted
        playsInline
        className={`w-full mt-[40px] object-cover border-b-2 transition-opacity duration-500 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
        onLoadedData={handleLoadedData}
      ></video>
    </>
  );
};

export default Video;
