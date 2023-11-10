import { GridItem, Avatar, Text, Box } from '@chakra-ui/react';

import useFinancialStore from '../../../store/financialStore';

function Header() {
  const { user } = useFinancialStore();

  return (
    <GridItem
      as="header"
      area={'header'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'space-between'}
      bg="gray.400"
      p={4}
      gap={4}
    >
      <Text fontSize="xl" color={'white'} alignSelf={'start'}>
        Financial Dashboard
      </Text>
      <Box display={'flex'} alignItems={'center'} gap={4}>
        <Text fontSize="lg" color={'white'} display={'flex'} gap={1}>
          Welcome
          <Text fontWeight={'700'}>{user?.name}</Text>
        </Text>
        <Avatar name={`${user?.name} ${user?.lastname}`} src={user?.avatar} />
      </Box>
    </GridItem>
  );
}

export default Header;
