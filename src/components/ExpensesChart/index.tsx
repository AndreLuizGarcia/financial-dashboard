import { Heading } from '@chakra-ui/react';
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line
} from 'recharts';

import useFinancialStore from '../../store/financialStore';
import Card from '../Card';

function ExpensesChart() {
  const { financialInfo } = useFinancialStore();

  return (
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
  );
}

export default ExpensesChart;
