import React from 'react'
import { CircularProgress } from '@mui/material';

type Props = {
    size: number;
    thickness: number;
}

const Loader: React.FC<Props> = ({ size, thickness }) => {
  return (
    <CircularProgress
      variant='indeterminate'
      disableShrink
      sx={{
        color: (theme) =>
          theme.palette.mode === "light" ? "#c0d6eb" : "#308fe8",
        animationDuration: "600ms",
      }}
      size={size || 17}
      thickness={thickness || 4}
    />
  );
}

export default Loader