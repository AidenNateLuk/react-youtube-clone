export interface VideoItem {
  id: number;
  title: string;
  channelName: string;
  views: string;
  url: string;
  duration: string;
  tags: string[];
  description: string;
}

export const dummyVideos: VideoItem[] = [
  {
    id: 1,
    title: "Minecraft Ep. 1",
    channelName: "PewDiePie",
    views: "1mil",
    url: "dummy_video_1.mp4",
    tags: ["Gaming", "All"],
    duration: "11:21",
    description: "This is Minecraft Ep. 1 video by PewDiePie.",
  },
  {
    id: 2,
    title: "Building React YT clone",
    channelName: "Michael Parker",
    views: "200k",
    url: "dummy_video_2.mp4",
    tags: ["React", "All"],
    duration: "10:15",
    description:
      "This video is about building a React YT clone by Michael Parker.",
  },
  {
    id: 3,
    title: "The Rise of the Roman Empire",
    channelName: "HistoryOfTheWorld",
    views: "800k",
    url: "dummy_video_3.mp4",
    duration: "05:10",
    tags: ["History", "All"],
    description: "This video discusses the rise of the Roman Empire.",
  },
  {
    id: 4,
    title: "Minecraft Ep. 2",
    channelName: "PewDiePie",
    views: "800k",
    url: "dummy_video_3.mp4",
    duration: "07:02",
    tags: ["Gaming", "All"],
    description: "This is Minecraft Ep. 2 video by PewDiePie.",
  },
  {
    id: 5,
    title: "Minecraft SkyFactory",
    channelName: "Ssundee",
    views: "1mil",
    url: "dummy_video_3.mp4",
    duration: "20:50",
    tags: ["Gaming", "All"],
    description: "This video showcases Minecraft SkyFactory by Ssundee.",
  },
];
