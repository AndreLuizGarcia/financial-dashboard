import { Heading } from '@chakra-ui/react';
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  Rectangle
} from 'recharts';

import useFinancialStore from '../../store/financialStore';
import Card from '../Card';

function SolvencyChart() {
  const { financialInfo } = useFinancialStore();

  return (
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
  );
}

export default SolvencyChart;
