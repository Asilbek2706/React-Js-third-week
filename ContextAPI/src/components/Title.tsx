import type {ReactNode} from "react";

interface IProps {
    render: () => ReactNode;
}

const Title = ({render}: IProps) => render();

export default Title;