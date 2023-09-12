import { styled } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';

const Bar = styled('div')(({ theme }) => ({
  width: '100%',
  '& > * + *': {
    marginTop: theme.spacing(2),
  },
}));

const Progress = () => {
  return (
    <Bar>
      <LinearProgress />
    </Bar>
  );
};

export default Progress;
