import { FC } from 'react';

type Prop = {
    some: string;
};

export const Test: FC<Prop> = ({ some }) => {
    return (
        <div>
            wow: {some}
        </div>
    );
};
const add = (a: number, b: number) => {
    return a + b;
};
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
    );
};

import React, { useMemo, useRef, useState } from 'react';



const styles = {
    base: 'base-cn',
};
const list = [
    'some',
    'data',
];
// export const App: FC = () => {
// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function App() {
    const [val, setVal] = useState('');
    const filtered = useMemo(() => {
        return list.filter((v) => v !== val);
    }, [val]);
    // const filtered = listRef.current.filter((v) => v !== val)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVal(e.target.value);
    };

    return (
        <div className={styles.base}>
            <div>wow</div>

            <input value={val} onChange={handleChange} type="text" />

            {filtered.map((val) => (
                <div key={val}>{val}</div>
            ))}
        </div>
    );
};