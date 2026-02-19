import Input from "../components/Input.tsx";
import Kelvin from "../components/Kelvin.tsx";
import Fahrenheit from "../components/Fahrenheit.tsx";
import {usePaymentContext} from "../contexts/PaymentContext.tsx";
import {useEffect} from "react";

const Home = () => {
    const {setPayments} = usePaymentContext()

    useEffect(() => {
        setPayments([
            {
                id: '123',
                amount: '400$',
                date: '02.19.2026',
            }
        ])
    })

  return (
      <div className={'App'}>
        <h1>⛄ Temperature converter 🔥</h1>
        <Input
            render={(value) => (
              <>
                <Kelvin value={value} />
                <Fahrenheit value={value} />
              </>
            )}
        />
      </div>
  )
}


export default Home;
