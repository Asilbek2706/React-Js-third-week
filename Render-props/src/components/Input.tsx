import {type ReactNode, useState} from "react";

interface IProps {
    render: (value: number) => ReactNode;
}

function Input({ render }: IProps) {
    const [value, setValue] = useState(10);
    return (
        <>
            <input
                type="number"
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                placeholder="Temp in °C"
            />
            {render(value)}
        </>
    )
}

export default Input;