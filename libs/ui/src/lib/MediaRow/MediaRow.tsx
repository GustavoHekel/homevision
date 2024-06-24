import { FC, ReactNode } from 'react';
import { Box } from '@mui/material';

interface MediaRowInterface {
  image: {
    src: string
    alt: string
  };
  content: ReactNode;
  actions: ReactNode;
}

const MediaRow: FC<MediaRowInterface> = ({ actions, content, image }) => {
  return <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      boxShadow: '2px 2px 8px grey',
      padding: '8px',
      margin: '8px',
      borderRadius: '8px'
    }}
  >
    <Box
      sx={{
        flexGrow: 1,
        maxWidth: '200px',
        textAlign: 'center',
        marginRight: 1
      }}
    >
      <img src={image.src} alt={image.alt}
           style={{
             height: '120px',
             width: '120px',
             objectFit: 'contain'
           }}
      />
    </Box>
    <Box
      sx={{
        width: '100%',
        display: {
          xs: 'flex'
        },
        flexDirection: {
          xs: 'column',
          sm: 'row'
        },
        alignItems: {
          sm: 'center'
        },
        justifyContent: {
          sm: 'space-between'
        }
      }}
    >
      <Box
        sx={{
          maxWidth: {
            xs: '190px',
            sm: '300px'
          }
        }}
      >
        {content}
      </Box>
      <Box>
        {actions}
      </Box>
    </Box>
  </Box>;
};

export default MediaRow;
