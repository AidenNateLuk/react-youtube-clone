interface SorterItem {
  id: number;
  subject: string;
  selected: boolean;
}

export const dummyArraySorters: SorterItem[] = [
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
];

export const [selectedSorters, setSelectedSorters] = <SorterItem[]>[
  ...dummyArraySorters,
];
