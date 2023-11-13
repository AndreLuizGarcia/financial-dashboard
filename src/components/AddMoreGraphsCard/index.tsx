import { Box, Text } from '@chakra-ui/react';

import Card from '../Card';

function AddMoreGraphsCard() {
  return (
    <Card
      title="Add more graphs"
      content={
        <Box
          cursor={'pointer'}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          height={'100%'}
          border="dashed"
          borderColor={'white'}
          p={120}
        >
          <Text color="white">Click here to add more graphs</Text>
          <Text color="white" fontStyle={'italic'}>
            Released soon
          </Text>
        </Box>
      }
    />
  );
}

export default AddMoreGraphsCard;
