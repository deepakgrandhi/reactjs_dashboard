import FeedIcon from '@mui/icons-material/Feed';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';

const navConfig = [
  {
    title: 'Live feed',
    path: '/dashboard/app',
    icon: <FeedIcon />,
  },
  {
    title: 'Recordings',
    path: '/dashboard/recordings',
    icon: <MusicVideoIcon />,
  }
];

export default navConfig;
