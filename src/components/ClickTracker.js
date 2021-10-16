import React, {useState} from "react";


export default function Add1ToCount() {
    const [click, setClick] = React.useState(0);
    const [time, setTime] = React.useState(null);
    const date = new Date();
    var dayjs = require('dayjs');
    return (
    <div>
        <h1>Click counter</h1>
        <p>Number of clicks: {click}</p>
        <button onClick={ () => { setClick(click + 1) } }>
            Sumar 1 a la cuenta
        </button>   
        <p>Date: {time}</p>
        <button onClick={ () => { setTime( dayjs().date() + '/' + dayjs().month() + '/' + dayjs().year() ) } }>
            Que fecha es hoy
        </button>
    </div>
  );
}

