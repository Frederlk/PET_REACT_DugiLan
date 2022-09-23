import { FC, useState } from "react";
import YouTube, { YouTubeProps } from "react-youtube";

const opts: YouTubeProps["opts"] = {
    playerVars: {
        autohide: 1,
        wmode: "opaque",
        origin: "http://localhost:3000",
        color: "white",
    },
    width: "100%",
    height: "100%",
};

const SingleVideo: FC<{ video: string }> = ({ video }) => {
    const [playing, setPlaying] = useState(false);
    return (
        <YouTube
            className={`content-workshop__video-wrap ${playing ? "_playing" : ""}`}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            videoId={video}
            opts={opts}
        />
    );
};

export default SingleVideo;
