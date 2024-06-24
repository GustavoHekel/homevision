import { FC, ReactNode } from 'react';
import { Box } from '@mui/material';

interface MediaCardInterface {
  image: {
    src: string
    alt: string
  };
  content: ReactNode;
  actions: ReactNode;
}

const MediaCard: FC<MediaCardInterface> = ({ image, content, actions }) => {
  return (
    <Box
      sx={{
        border: 'solid 1px silver',
        borderRadius: '8px',
        padding: '8px',
        boxShadow: '2px 2px 8px grey'
      }}
    >
      <Box
        sx={{
          textAlign: 'center'
        }}
      >
        <img
          src={image.src}
          alt={image.alt}
          style={{
            width: '260px',
            height: '260px',
            objectFit: 'contain'
          }} />
      </Box>
      <Box
        sx={{
          width: '260px'
        }}
      >
        {content}
      </Box>
      <Box
        sx={{
          textAlign: 'center',
          marginTop: '16px',
          marginBottom: '16px'
        }}
      >
        {actions}
      </Box>
    </Box>
  );
};

export default MediaCard;
