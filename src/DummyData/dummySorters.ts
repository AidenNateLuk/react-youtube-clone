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
];

export const [selectedSorters, setSelectedSorters] = <SorterItem[]>[
  { id: 1, subject: "All", selected: true },
  { id: 2, subject: "Gaming", selected: false },
  { id: 3, subject: "React", selected: false },
  { id: 4, subject: "History", selected: false },
];
