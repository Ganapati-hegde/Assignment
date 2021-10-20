
import { useState } from 'react';
import Heading from '../heading'
import './style.css'
import SelectShape from '../selectShape'
import Result from '../result';
import Button from '../button'

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
                        <div className='flex spacing'>
                            <div className='bold-font width-100'>Length:</div>
                            <input type='number' value={length} onChange={(event) => { setLength(parseInt(event.target.value)) }}></input>
                        </div>
                        <div className='flex spacing'>
                            <div className='bold-font width-100'>Width:</div>
                            <input type='number' value={width} onChange={(event) => { setWidth(parseInt(event.target.value)) }}></input>
                        </div>
                    </>
                )
            case "Circle":
                return (
                    <>
                        <div className='flex spacing'>
                            <div className='bold-font width-100'>Diameter:</div>
                            <input type='number' value={diameter} onChange={(event) => { setDiameter(parseInt(event.target.value)) }}></input>
                        </div>
                    </>
                )

                break;
            case "Square":
                return (
                    <>
                        <div className='flex spacing'>
                            <div className='bold-font width-100'>Side:</div>
                            <input type='number' value={side} onChange={(event) => { setSide(parseInt(event.target.value)) }}></input>
                        </div>
                    </>
                )

                break;

            default:
                return (
                    <>
                        <div className='flex spacing'>
                            <div className='bold-font width-100'>Major Axis:</div>
                            <input type='number' value={xAxis} onChange={(event) => { setXAxis(parseInt(event.target.value)) }}></input>
                        </div>
                        <div className='flex spacing'>
                            <div className='bold-font width-100'>Minor Axis:</div>
                            <input type='number' value={yAxis} onChange={(event) => { setYAxis(parseInt(event.target.value)) }}></input>
                        </div>
                    </>)
                break;
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
                    <div className='description'>You have selected a <span className='bold-font'>{selected}</span>, please input the required variables</div>

                    {renderBody()}

                    <div className='button-wrapper flex flex-center'>
                        <Button onPress={onPress} text='Go to step 3' />
                        <div
                            onClick={() => [setSelectShape(true), setResult(false),]}
                            className='cancel clickable'>or Cancel
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
