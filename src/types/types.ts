export enum PaymentType {
    Cash = "Cash",
    Check = "Check"
}

export enum TransactionType {
    Income = "Income",
    Expense = "Expense"
}

export interface EntryData {
    id: number;
    transactionType: TransactionType;
    paymentType: PaymentType;
    amount: number;
}