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

const generateDummyVideosForSubject = (subject: string): VideoItem[] => {
  return Array.from({ length: 3 }, (_, index) => ({
    id: index + 1,
    title: `${subject} Video ${index + 1}`,
    channelName: "Dummy Channel",
    views: "0",
    url: `dummy_video_${index + 1}.mp4`,
    tags: [subject, "All"],
    duration: "10:00",
    description: `This is a dummy ${subject} video.`,
  }));
};

const dummyVideos: VideoItem[] = [
  // Generate dummy videos for each subject
  { id: 1, subject: "All", selected: true },
  { id: 2, subject: "Gaming", selected: false },
  { id: 3, subject: "React", selected: false },
  { id: 4, subject: "History", selected: false },
  { id: 5, subject: "Javascript", selected: false },
  { id: 6, subject: "CSS", selected: false },
  { id: 7, subject: "HTML", selected: false },
  { id: 8, subject: "Minecraft", selected: false },
  { id: 9, subject: "Anime", selected: false },
  { id: 10, subject: "Naruto", selected: false },
  { id: 11, subject: "One Piece", selected: false },
  { id: 12, subject: "My Hero Academia", selected: false },
  { id: 13, subject: "Art", selected: false },
  { id: 14, subject: "Science", selected: false },
  { id: 15, subject: "Technology", selected: false },
  { id: 16, subject: "Design", selected: false },
  { id: 17, subject: "Photography", selected: false },
  { id: 18, subject: "Music", selected: false },
  { id: 19, subject: "Books", selected: false },
  { id: 20, subject: "Movies", selected: false },
  { id: 21, subject: "Travel", selected: false },
  { id: 22, subject: "Food", selected: false },
  { id: 23, subject: "Fitness", selected: false },
  { id: 24, subject: "Fashion", selected: false },
].flatMap((sorter) =>
  sorter.subject !== "All" ? generateDummyVideosForSubject(sorter.subject) : []
);

const dummyVideosForAll: VideoItem[] = generateDummyVideosForSubject("All");

dummyVideos.push(...dummyVideosForAll);

export { dummyVideos };
