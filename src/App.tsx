import './App.css'
import {Table} from "./Table.tsx";
import {useState} from "react";

export const App = () => {
    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'},
    ]

    let [a, setA] = useState(0);

    const OnclickFunction = () => {
        setA(++a);
    }
    const OnclickFunction1 = () => {
        setA(a = 0);
    }
    const OnclickFunction2 = () => {
        setA(--a);
    }

    return (
        <div className="app">
            <Table cars={topCars}/>
            <h1>{a}</h1>
            <button onClick={OnclickFunction}>+</button>
            <button onClick={OnclickFunction2}>-</button>
            <button onClick={OnclickFunction1}>0</button>
        </div>
    )
}
