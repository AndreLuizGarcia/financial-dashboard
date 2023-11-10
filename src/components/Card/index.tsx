import { ReactNode } from 'react';

import {
  Card as CardChakraUi,
  CardHeader,
  Heading,
  CardBody,
  Text
} from '@chakra-ui/react';

type CardProps = {
  title: string;
  subtitle?: string;
  content: ReactNode;
};

function Card({ title, subtitle, content }: CardProps) {
  return (
    <CardChakraUi maxWidth={'7000px'} height={'500px'} bg="#272953">
      <CardHeader>
        <Heading size="md" color="#E0E1E7">
          {title}
        </Heading>
        {subtitle ? (
          <Text color="#E0E1E7" fontSize="4xl">
            {subtitle}
          </Text>
        ) : null}
      </CardHeader>
      <CardBody>{content}</CardBody>
    </CardChakraUi>
  );
}

export default Card;
