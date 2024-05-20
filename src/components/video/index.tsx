import React from "react";
import "./styles.scss";
import MobileLayout from "./Layouts/mobile";
import DesktopLayout from "./Layouts/desktop";
interface VideoProps {
  title: string;
  url: string;
  views: string;
  channelName: string;
  tags: string[];
  isSmallScreen: boolean;
  duration: string;
}

const Video: React.FC<VideoProps> = ({
  isSmallScreen,
  title,
  views,
  channelName,
  url,
  tags,
  duration,
}) => {
  return isSmallScreen ? (
    <MobileLayout
      isSmallScreen={isSmallScreen}
      url={url}
      tags={tags}
      title={title}
      views={views}
      channelName={channelName}
      duration={duration}
    />
  ) : (
    <DesktopLayout
      isSmallScreen={isSmallScreen}
      url={url}
      tags={tags}
      title={title}
      views={views}
      channelName={channelName}
      duration={duration}
    />
  );
};

export default Video;
