import { PropsWithChildren } from 'react';

import { Grid } from '@chakra-ui/react';

function MainGridTemplate({ children }: PropsWithChildren) {
  return (
    <Grid
      templateAreas={`
        "header"
        "main"
        "footer"`}
      gridTemplateRows={'60px 1fr 25px'}
      gridTemplateColumns={'1fr'}
      h="100vh"
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      {children}
    </Grid>
  );
}

export default MainGridTemplate;
