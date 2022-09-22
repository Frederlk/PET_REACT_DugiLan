import React, { FC, useRef, useState } from "react";

const SingleVideo: FC<{ video: string }> = ({ video }) => {
    // const [playing, setPlaying] = useState(false);
    // const videoRef = useRef(null);
    // useEffect(() => {
    //     if (videoRef) {
    //         playing ? videoRef.current.play() : videoRef.current.pause();
    //     }
    // }, [playing]);

    return (
        <div className="content-workshop__video-wrap _video" id="video-wrap">
            <video /* ref={videoRef} */ className="content-workshop__video" id="video-file">
                <source type="video/webm" src="videos/video.webm" />
                <source type="video/mp4" src="videos/video.mp4" />
            </video>
            <button type="button" className="content-workshop__video-btn" id="video-btn">
                <img src="img/icons/play-circle.svg" alt="" />
            </button>
        </div>
    );
};

export default SingleVideo;
