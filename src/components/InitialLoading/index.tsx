import { Box, Text } from '@chakra-ui/react';
import Lottie from 'lottie-react';

import graphsAnimation from '../../lottie/graphsAnimation.json';

function InitialLoading() {
  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'column'}
      height={'80vh'}
    >
      <Lottie
        animationData={graphsAnimation}
        loop={true}
        style={{
          width: '60vw',
          height: '60vh'
        }}
      />
      <Text>We are processing your data ...</Text>
    </Box>
  );
}

export default InitialLoading;
