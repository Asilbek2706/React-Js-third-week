import {usePaymentContext} from "../contexts/PaymentContext.tsx";

const Payments = () => {
    const { payments } = usePaymentContext()
    return (
        <table>
            {payments.map((payment) => (
                <tr key={payment.id}>
                    <td>{payment.id}</td>
                    <td>{payment.amount}</td>
                    <td>{payment.date}</td>
                </tr>
            ))}
        </table>
    )
}

export default Payments;