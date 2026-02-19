/* eslint-disable react-refresh/only-export-components */
import type {IPayment} from "../shared/interfaces/payment.interface.ts";
import {createContext, type FC, type ReactNode, useContext, useState} from "react";

interface IPaymentContext {
    payments: IPayment[];
    setPayments: (payments: IPayment[]) => void;
}

const PaymentContext = createContext<IPaymentContext | null>(null);

export const usePaymentContext = () => {
    const context = useContext(PaymentContext);
    if (!context) {
        throw new Error("Payment context must be used within a provider.");
    }
    return context;
};

interface IProps {
    children: ReactNode;
}

export const PaymentContextProvider: FC<IProps> = ({children}) => {
    const [payments, setPayments] = useState<IPayment[]>([]);

    return (
        <PaymentContext.Provider value={{ payments, setPayments }}>
            {children}
        </PaymentContext.Provider>
    )
}

