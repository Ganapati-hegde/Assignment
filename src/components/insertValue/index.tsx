
import { useState } from 'react';
import Heading from '../heading'
import './style.css'
import SelectShape from '../selectShape'
import Result from '../result';
import Button from '../button';
import InputField from '../inputField'

interface Props {
    selected: string
}

function InsertValue({ selected }: Props) {
    const [result, setResult] = useState(false)
    const [selectShape, setSelectShape] = useState(false)
    const [area, setArea] = useState(0)

    const [length, setLength] = useState(0)
    const [width, setWidth] = useState(0)

    const [diameter, setDiameter] = useState(0)
    const [side, setSide] = useState(0)

    const [xAxis, setXAxis] = useState(0)
    const [yAxis, setYAxis] = useState(0)


    const renderBody = () => {
        switch (selected) {
            case "Rectangle":
                return (
                    <>
                        <InputField field='Length' value={length} onInputChange={setLength} />
                        <InputField field='Width' value={width} onInputChange={setWidth} />
                    </>
                )
            case "Circle":
                return (
                    <InputField field='Diameter' value={diameter} onInputChange={setDiameter} />
                )
            case "Square":
                return (
                    <InputField field='Side' value={side} onInputChange={setSide} />
                )
            default:
                return (
                    <>
                        <InputField field='Major Axis' value={xAxis} onInputChange={setXAxis} />
                        <InputField field='Minor Axis' value={yAxis} onInputChange={setYAxis} />
                    </>
                )

        }
    }
    const calculateArea = () => {
        let result: number = 0;
        switch (selected) {
            case 'Rectangle':
                result = length * width;
                break;
            case 'Circle':
                let radius: number = diameter / 2
                result = Math.PI * radius * radius;
                break;
            case 'Square':
                result = side * side;
                break;
            default:
                result = Math.PI * xAxis * yAxis
                break;
        }
        setArea(result)
    }
    const onPress = () => {
        setResult(true);
        calculateArea();
    }

    return (
        <>
            {!result && !selectShape ?
                <>
                    <Heading step={2} title='Insert your values'></Heading>
                    <div className='mTop-16 mBottom-32'>You have selected a <span className='bold-font'>{selected}</span>, please input the required variables</div>

                    {renderBody()}

                    <div className='button-wrapper flex flex-center'>
                        <Button onPress={onPress} text='Go to step 3' />
                        <span className="mHorizontal-16">or</span>
                        <div
                            onClick={() => [setSelectShape(true), setResult(false)]}
                            className='clickable'> Cancel
                        </div>
                    </div>
                </>
                : result ?
                    <Result selected={selected} area={area} /> :
                    <SelectShape />}
        </>
    );
}

export default InsertValue;
