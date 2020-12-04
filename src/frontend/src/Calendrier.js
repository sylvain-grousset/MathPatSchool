import React, { useState } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';


export function Calendrier() {
    const [dateState, setDateState] = useState(new Date())
    const changeDate = (e) => {
        setDateState(e)
    }
    return (
        <>
            <Calendar
                value={dateState}
                onChange={changeDate}
            />
            <p> La date s&eacute;lectionn&eacute;e actuellement est <b>{moment(dateState).format('MMMM Do YYYY')}</b></p>
        </>
    )
}

export default Calendrier;