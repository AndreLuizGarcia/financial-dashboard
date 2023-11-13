import { Heading } from '@chakra-ui/react';
import {
  ComposedChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  Line
} from 'recharts';

import useFinancialStore from '../../store/financialStore';
import Card from '../Card';

function CashInBankChart() {
  const { financialInfo } = useFinancialStore();

  return (
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
  );
}

export default CashInBankChart;
