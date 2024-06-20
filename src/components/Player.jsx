import { useState } from "react"

export default function Player({ initialName, symbol, isActive, onChangeName }) {
    //State for the initialName then setting it to the targert of the onChange event listener
    const [playerName, setPlayerName] = useState(initialName);
    //State for the edit button
    const [isEditing, setEditing] = useState(false);
    //Handles the click for Edit and then sets it true and then back to false using a function for best practicee
    function clickHandler() {
        setEditing((editing) => !editing);

        if (isEditing) {
            onChangeName(symbol, playerName);
        }
    }
    //Handles the onChange event listener where it returns an object which has a target that we can then grab the value from and then set it to the Player name
    function handleChange(event) {
        setPlayerName(event.target.value);
    }
    //initital Player name
    let initialPlayerName = <span className='player-name'>{playerName}</span>;
    //State Check that if the user is editing change the isEditing to True and render and input button
    if (isEditing) {
        initialPlayerName = (
            <input type="text" required value={playerName} onChange={handleChange} />
        );
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {initialPlayerName}
                <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={clickHandler}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}