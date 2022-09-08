import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import Card from '../../data/Card.json'
import Navbar from '../../components/navbar/Navbar'

export default function Advice(): JSX.Element {
    const { id } = useParams();
    const [form, setForm] = useState('');
    const [checkedState, setCheckedState] = useState([{id: 0,day:""}]);

    // Changes name of dream based on the URL
    let name  = '';
    Object.keys(Card).forEach(function(_value: string, key: number){
        if (Card[key].idDream === Number(id)) {
            name = Card[key].name;
        }
    });

    var data = [
        {
            id: 1,
            day: "Monday",
        },
        {
            id: 2,
            day: "Tuesday",
        },
        {
            id: 3,
            day: "Wednesday",
        },
        {
            id: 4,
            day: "Thursday",
        },
        {
            id: 5,
            day: "Friday",
        },
        {
            id: 6,
            day: "Saturday",
        },
        {
            id: 7,
            day: "Sunday",
        },
    ];

    const [checked, setChecked] = useState(new Array(data.length).fill(false));

    // Destructuring
    const handleChange = (e: { target: { value: string; name: string, checked: any }; }) => {
        setForm( e.target.value )
    }

    return (
        <>
            <Navbar />
            <Link to='/dreams'>Back to dreams</Link>
            <h1> You choose the dream: { name } </h1>
            <form>
                <div>
                    <label>
                        Question 1: How much time would you like to spend?
                        <div>
                            <br />
                            <input onChange={handleChange} type="radio" value="Just a few hours per week" id="form" name="time" /> Just a few hours per week
                            <br />
                            <input onChange={handleChange} type="radio" value="Almost everyday of the week" id="form" name="time" /> Almost everyday of the week
                        </div>
                        <br />
                    </label>
                </div>
                    {data.map((item) => {
                        return (
                            <div key={item.id}>
                                <input
                                    onChange={(e) => {
                                        // add to list
                                        if (e.target.checked) {
                                            setCheckedState([
                                                ...checkedState, {
                                                    id: item.id,
                                                    day: item.day
                                                }
                                            ]);
                                        } else {
                                            // remove from list
                                            setCheckedState(
                                                checkedState.filter((element) => element.id !== item.id),
                                            );
                                        }
                                        setChecked(checked.map((value, index) => index === (item.id - 1)  ? !value : value));                                         
                                    }}
                                    id={ item.day }
                                    name={ item.day }
                                    value={ item.day }
                                    checked={ checked[item.id - 1] }
                                    type="checkbox"
                                />
                                { item.day }
                            </div>
                        )
                    })}
                <div>
                    <br />
                    <p>Question 3: How much experience do you have?</p>
                    <input type="radio" id="html" name="experience"></input>
                    <label>I have no experience</label><br/>
                    <input type="radio" id="html" name="experience"></input>
                    <label>I have some experience</label><br/>
                    <br />
                </div>
            </form>
            <p>Radio button is : { form }</p>
            { checkedState.map( item => { return <p>{item.day}</p> })}
        </>
    )
}