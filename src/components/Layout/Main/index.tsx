import { Box, GridItem, Heading, Text } from '@chakra-ui/react';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  BarChart,
  Rectangle
} from 'recharts';

import Card from '../../../components/Card';
import useFinancialStore from '../../../store/financialStore';

function Main() {
  const { financialInfo } = useFinancialStore();

  return (
    <GridItem
      p="4"
      bg="#15113A"
      area={'main'}
      display={'flex'}
      gap={8}
      flexWrap={'wrap'}
      justifyContent={'center'}
    >
      <Card
        title={'Cash in Bank'}
        subtitle={financialInfo?.cashInBank.total}
        content={
          <>
            <Heading size="md" color="#E0E1E7">
              Past 6 months
            </Heading>
            <ComposedChart
              width={500}
              height={300}
              data={financialInfo?.cashInBank.graph}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: -10
              }}
            >
              <CartesianGrid stroke="#E0E1E7" />
              <XAxis dataKey="name" tick={{ fill: '#E0E1E7' }} />
              <YAxis tick={{ fill: '#E0E1E7' }} unit="k" />
              <Tooltip />
              <Legend />
              <Bar dataKey="total" barSize={20} fill="#02D1FF" />
              <Line type="monotone" dataKey="total" stroke="#ff7300" />
            </ComposedChart>
          </>
        }
      />
      <Card
        title={'Burn'}
        subtitle={financialInfo?.burn.total}
        content={
          <>
            <Heading size="md" color="#E0E1E7">
              Past 6 months
            </Heading>
            <LineChart
              width={500}
              height={300}
              data={financialInfo?.burn.graph}
              margin={{
                top: 20,
                right: 30,
                left: -1,
                bottom: 5
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ fill: '#E0E1E7' }} />
              <YAxis tick={{ fill: '#E0E1E7' }} unit="k" />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="total"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </>
        }
      />
      <Card
        title="Expenses"
        subtitle={`Total: ${financialInfo?.expenses.total}`}
        content={
          <>
            <Heading size="md" color="#E0E1E7">
              Past 6 months
            </Heading>
            <LineChart
              width={500}
              height={300}
              data={financialInfo?.expenses.graph}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ fill: '#E0E1E7' }} />
              <YAxis tick={{ fill: '#E0E1E7' }} unit="k" />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="salary"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="fixed" stroke="#82ca9d" />
              <Line type="monotone" dataKey="expenses" stroke="blue" />
            </LineChart>
          </>
        }
      />
      <Card
        title="Solvency"
        subtitle={financialInfo?.solvency.total}
        content={
          <>
            <Heading size="md" color="#E0E1E7">
              Income / outgoings
            </Heading>
            <BarChart
              width={550}
              height={300}
              data={financialInfo?.solvency.graph}
              margin={{
                top: 5,
                right: 30,
                left: 8,
                bottom: 5
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ fill: '#E0E1E7' }} />
              <YAxis tick={{ fill: '#E0E1E7' }} unit="k" />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="income"
                fill="#8884d8"
                activeBar={<Rectangle fill="pink" stroke="blue" />}
              />
              <Bar
                dataKey="outgoing"
                fill="#82ca9d"
                activeBar={<Rectangle fill="gold" stroke="purple" />}
              />
            </BarChart>
          </>
        }
      />
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
    </GridItem>
  );
}

export default Main;
