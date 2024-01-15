import { useState } from 'react';

import Button from '../components/Button.js';
function Counter(props){

    // const [number, setNumber] = useState(
    //     {
    //         'value' : 2,
    //         'squareValue' : ''

    // });



    function increment() {
        setNumber(number + 1);
    }

    function decrementer() {
        setNumber(number - 1);
    }

    function add3() {
        setNumber(number + 3);
    }

    const [number, setNumber] = useState(0);

    return (
        <div>
            <h3 className="text-center">Counter</h3>
            <div>
                <h4>{number}</h4>
                <div>
                    <Button 
                    className="btn-secondary mx-5 "
                    onClick={increment}
                    name="incrementer"/>

                    <Button
                    className="btn-secondary mx-5 "
                    onClick={decrementer}
                    name="decrementer"/>

                    <Button
                    className="btn-secondary mx-5 "
                    onClick={add3}
                    name="Ajout de 3" />
                </div>
            </div>
        </div>
    )
}

export default Counter