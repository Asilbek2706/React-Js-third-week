import Input from "../components/Input.tsx";
import Kelvin from "../components/Kelvin.tsx";
import Fahrenheit from "../components/Fahrenheit.tsx";
import {usePaymentContext} from "../contexts/PaymentContext.tsx";
import {useEffect, useRef} from "react";

const Home = () => {
    const h1Ref = useRef<HTMLHeadingElement | null>(null);
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

    // useEffect(() => {
    //     if (h1Ref.current) {
    //         setTimeout(() => {
    //             h1Ref.current.style.backgroundColor = "red";
    //         }, 3000)
    //     }
    // }, []);

  return (
      <div className={'App'}>
        <h1 ref={h1Ref}>⛄ Temperature converter 🔥</h1>
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
