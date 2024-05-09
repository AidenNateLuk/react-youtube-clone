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
}

const Video: React.FC<VideoProps> = ({
  isSmallScreen,
  title,
  views,
  channelName,
  url,
  tags,
}) => {
  return isSmallScreen ? (
    <MobileLayout
      isSmallScreen={isSmallScreen}
      url={url}
      tags={tags}
      title={title}
      views={views}
      channelName={channelName}
    />
  ) : (
    <DesktopLayout
      isSmallScreen={isSmallScreen}
      url={url}
      tags={tags}
      title={title}
      views={views}
      channelName={channelName}
    />
  );
};

export default Video;
