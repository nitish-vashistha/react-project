import { useState } from 'react'
import './color-generator.css'

function RandomColorGenerator() {
    const [color, setColor] = useState('#000000');
    const [typeOfColor, setTypeOfColor] = useState('hex');

    function generateRandomHexColor() {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        setColor(randomColor);
    }
    function generateRandomRgbColor() {
        const randomColor = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
        setColor(randomColor);
    }
    return (
        <>
        <div className='color-generator'>
            <div className="color-buttons-wrapper">
                <button onClick={()=>{setTypeOfColor('hex')}}>Generate Hex Color</button>
                <button onClick={()=>{setTypeOfColor('rgb')}}>Generate RGB Color</button>
                <button onClick={typeOfColor === 'hex' ? generateRandomHexColor: generateRandomRgbColor}>Generate Random Color</button>
            </div>
            <div className='color-generator-result'>
                <div className='color-generator-result-color' style={{backgroundColor: color}}></div>
                <div className='color-generator-result-color-code'>{color}</div>
            </div>
        </div>
        </>
    )
}

export default RandomColorGenerator
