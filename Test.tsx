import { FC } from "react";

type Prop = {
    some: string
}

export const Test: FC<Prop> = ({some}) => {
    return (
        <div>
            wow: {some}
        </div>
    )
}
const add = (a: number, b: number) => {
    return a + b;
}
const Main: FC = () => {
    const q = 4;
    add(1, 3);
    return (
        <>
            <div></div>

            <Test some=""></Test>
            
            <If condition={true}>
                <></>
            </If>
        </>
    )
}