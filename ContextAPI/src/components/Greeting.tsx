import {memo} from "react";

interface IProps {
    name: string;
}

const Greeting = memo(function Greeting({ name }: IProps) {
    console.log("Greeting was rendering at", new Date().toLocaleTimeString());
    return (
        <h3>
            Hello{name && ', '}
            {name}!
        </h3>
    )
})

export default Greeting;