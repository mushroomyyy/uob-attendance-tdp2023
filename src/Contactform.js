import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Trainers from './Trainers';

//1. Setting State
    function ContactForm() {
        const newDate = new Date().toISOString().split("T")[0]

const[name1, setName1] = useState('');
const[date, setDate] = useState(newDate);
const[sTime, setsTime] = useState('');
const[eTime, seteTime] = useState('');
//  const[isToggled, setIsToggled] = useState('');
    
//2. Parsing the Data into the State
    useEffect(() => {
        console.log('Name',name1);
        console.log('sTime',Date.parse(`${date} ${sTime} GMT+8`));
        console.log('eTime',Date.parse(`${date} ${eTime} GMT+8`));
    }, [name1, date, sTime, eTime]);
    
//3. Setting Submit State for the Form, Setting Submit link to the Hyperlink
    const handleSubmit = (e) => {
        e.preventDefault();

        const url = `https://trainer.ntuclearninghub.com/QR/attendance?id=${name1}&date=${date}&start_time=${Date.parse(`${date} ${sTime} GMT+8`)/1000}&end_time=${Date.parse(`${date} ${eTime} GMT+8`)/1000}`;
        console.log(url);

        setName1('');
        setDate('');
        setsTime('');
        seteTime('');

        window.location.href = url;
    }

    const handleClickMorning = () => {
        setsTime('09:00:00');
        seteTime('13:00:00');
    }


    const handleClickAfternoon = () => {
        setsTime('14:00:00');
        seteTime('17:30:00');
    }



//4. Linking the Form Inputs/Options to the Form State
    return (
        <form className='fit' onSubmit={handleSubmit}>
            <div className='form_text'>
                <label htmlFor='name'>Trainer Name: </label>
                {/* <input type='text' id="name" value={name1} onChange={(e)=>setName1(e.target.value)}/> */}
                &nbsp; &nbsp;
                <select id="name" value={name1} onChange={(e)=>setName1(e.target.value)}>
                    <option value={null}>Please Select Option</option>
                    {Trainers.map((trainer) => (<option value={trainer.id}>{trainer.name}</option>))}
                </select>
            </div>

            <div className='form_text'>
                <label htmlFor='date'>Date: </label>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <input type='date' id="date" value={date} onChange={(e)=>setDate(e.target.value)}/>
            </div>

<Button variant="info" onClick={handleClickMorning}> Morning Session: 09:00 - 12:30 </Button>{' '}
<Button variant="info"  onClick={handleClickAfternoon}>Afternoon Session: 13:30 - 17:00</Button>{' '}

            <div>
            <Button variant="light"><button type='submit'>Submit</button></Button>
            </div>
            
        </form>
        );

}
export default ContactForm;