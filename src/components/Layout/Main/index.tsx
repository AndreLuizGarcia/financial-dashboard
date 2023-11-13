import { PropsWithChildren } from 'react';

import { GridItem } from '@chakra-ui/react';

import AddMoreGraphsCard from '../../AddMoreGraphsCard';
import BurnChart from '../../BurnChart';
import CashInBankChart from '../../CashInBankChart';
import ExpensesChart from '../../ExpensesChart';
import SolvencyChart from '../../SolvencyChart';

//This array can be improved to the user be able to dynamic add more graphs and
//also the graphs components can be more isolated too
const charts = [
  {
    id: 'cashInBank',
    component: CashInBankChart
  },
  {
    id: 'burn',
    component: BurnChart
  },
  {
    id: 'expenses',
    component: ExpensesChart
  },
  {
    id: 'solvency',
    component: SolvencyChart
  }
];

const GridWrapper = ({ children }: PropsWithChildren) => {
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
      {children}
    </GridItem>
  );
};

function Main() {
  return (
    <GridWrapper>
      {charts.map((Chart) => (
        <Chart.component key={Chart.id} />
      ))}
      <AddMoreGraphsCard />
    </GridWrapper>
  );
}

export default Main;
