export type User = {
  name: string;
  lastname: string;
  avatar: string;
};

type CashInBank = {
  total: string;
  graph: {
    name: string;
    total: number;
  }[];
};

type Burn = {
  total: string;
  graph: {
    name: string;
    total: number;
  }[];
};

type Expenses = {
  total: string;
  graph: {
    name: string;
    salary: number;
    fixed: number;
    expenses: number;
  }[];
};

type Solvency = {
  total: string;
  graph: {
    name: string;
    income: number;
    outgoing: number;
  }[];
};

export type FinancialInfo = {
  cashInBank: CashInBank;
  burn: Burn;
  expenses: Expenses;
  solvency: Solvency;
};
