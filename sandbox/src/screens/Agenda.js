const weekdays = [
    "Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"
]

function Agenda(props) {
    weekdays.forEach((day) => {
        console.log(day)
    })

    const capitalizeWeeddays = weekdays.map((day) => {
        return day.toUpperCase();
    })    

    return (
        <div className="m-3">
            <ul>
            {capitalizeWeeddays.map((day) => 
            
            <li
            key={day}
            className={day == props.day && "fw-bold"}
            >{day}</li>)}
            </ul>
        </div>
    )
}

export default Agenda