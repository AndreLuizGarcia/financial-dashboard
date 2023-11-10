import { create } from 'zustand';

import { FinancialInfo, User } from '../types';

type FinancialDashboardStore = {
  user: User | null;
  setUser: (currentUser: User) => void;
  financialInfo: FinancialInfo | null;
  setFinancialInfo: (financialInfoo: FinancialInfo) => void;
};

const useFinancialStore = create<FinancialDashboardStore>((set) => ({
  user: null,
  setUser: (currentUser) => set((state) => ({ ...state, user: currentUser })),
  financialInfo: null,
  setFinancialInfo: (financialInfo) =>
    set((state) => ({ ...state, financialInfo }))
}));

export default useFinancialStore;
