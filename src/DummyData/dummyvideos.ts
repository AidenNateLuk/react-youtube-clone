interface VideoItem {
  id: number;
  title: string;
  channelName: string;
  views: string;
  url: string;
  tags: string[];
}

export const dummyVideos: VideoItem[] = [
  {
    id: 1,
    title: "Minecraft Ep. 1",
    channelName: "PewDiePie",
    views: "1mil",
    url: "dummy_video_1.mp4",
    tags: ["Gaming", "All"],
  },
  {
    id: 2,
    title: "Building React YT clone",
    channelName: "Michael Parker",
    views: "200k",
    url: "dummy_video_2.mp4",
    tags: ["React", "All"],
  },
  {
    id: 3,
    title: "The Rise of the Roman Empire",
    channelName: "HistoryOfTheWorld",
    views: "800k",
    url: "dummy_video_3.mp4",
    tags: ["History", "All"],
  },
  {
    id: 4,
    title: "Minecraft Ep. 2",
    channelName: "PewDiePie",
    views: "800k",
    url: "dummy_video_3.mp4",
    tags: ["Gaming", "All"],
  },
  {
    id: 5,
    title: "Minecraft SkyFactory",
    channelName: "Ssundee",
    views: "1mil",
    url: "dummy_video_3.mp4",
    tags: ["Gaming", "All"],
  },
];
