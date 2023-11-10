import { useEffect, useState } from 'react';

import mockData from '../mock/financialDashboardData.json';
import useFinancialStore from '../store/financialStore';
import { FinancialInfo, User } from '../types';

type Data = FinancialInfo & { user: User };

function useLoadData() {
  const [isLoading, setIsLoading] = useState(true);
  const { setUser, setFinancialInfo } = useFinancialStore();

  useEffect(() => {
    async function loadData() {
      try {
        //Simulating a request to the server
        const data: Data = await new Promise((resolve) =>
          setTimeout(resolve, 2000, mockData)
        );

        const { user, ...financialInfo } = data;
        setUser(user);
        setFinancialInfo(financialInfo);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, []);

  return {
    isLoading
  };
}

export default useLoadData;
