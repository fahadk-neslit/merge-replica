import React from "react";
import ReactPlayer from "react-player/lazy";
import { BsFillPlayCircleFill } from "react-icons/bs";
import Button from "@/components/atoms/button/Button";

function VideoPlay() {
  return (
    <ReactPlayer
      width="100%"
      height="100%"
      playing={true}
      loop
      playsinline
      light
      controls={true}
      url="https://player.vimeo.com/video/776518405?h=e3d3001621"
    />
  );
}

export default VideoPlay;
