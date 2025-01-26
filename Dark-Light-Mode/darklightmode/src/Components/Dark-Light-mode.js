import { FaSun, FaMoon } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function DarkLightMode() {

    const [bgColour, setBgColour] = useState('white');

    const backgroundColor = () => {

        setBgColour(() => bgColour === 'white' ? 'black' : 'white');

    }

    useEffect(() => {
        document.body.style.backgroundColor = bgColour;
    }, [bgColour]);



    return (
        <div >
            <div style={{ color: bgColour === 'white' ? 'black' : 'white' }}>
                <h1 > Toggle Dark/Light Mode </h1>

                <p>Click the button to toggle between dark and light mode for this page.</p>

                <button onClick={backgroundColor}>Toggle dark </button>
                {bgColour === 'white' ? <FaSun /> : <FaMoon />}
            </div>



        </div>
    );
}