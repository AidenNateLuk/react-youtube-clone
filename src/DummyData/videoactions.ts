import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import OutlinedFlagOutlinedIcon from "@mui/icons-material/OutlinedFlagOutlined";
interface VideoAction {
  id: number;
  action: string;
  content: React.ElementType;
  amount: string;
}

export const videoActions: VideoAction[] = [
  {
    id: 1,
    action: "like",
    content: ThumbUpAltOutlinedIcon,
    amount: "47k",
  },
  {
    id: 2,
    action: "dislike",
    content: ThumbDownOffAltOutlinedIcon,
    amount: "2k",
  },
  {
    id: 3,
    action: "share",
    content: ReplyOutlinedIcon,
    amount: "3k",
  },
  {
    id: 4,
    action: "save",
    content: BookmarkBorderOutlinedIcon,
    amount: "1k",
  },
  {
    id: 5,
    action: "report",
    content: OutlinedFlagOutlinedIcon,
    amount: "500",
  },
];
