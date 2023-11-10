import { GridItem, Text } from '@chakra-ui/react';

function Footer() {
  return (
    <GridItem
      as="footer"
      area={'footer'}
      display={'flex'}
      justifyContent={'center'}
    >
      <Text fontSize="sm" alignSelf={'start'}>
        Financial Dashboard Solutions © 2023
      </Text>
    </GridItem>
  );
}

export default Footer;
