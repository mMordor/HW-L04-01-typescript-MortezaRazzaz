
export const DATA = "Data";

export type costs = {
    id: number;
    name: string;
    value: number;
    desc: string;
    date: string;
    category: string;
}
export type incomes = {
    id: number;
    name: string;
    value: number;
    date: string;
    category: string;
}

export interface transactionStateType {
    costs: costs[];
    incomes: incomes[];
}

