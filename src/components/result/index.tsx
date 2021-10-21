
import { useState } from 'react';
import Heading from '../heading';
import SelectShape from '../selectShape';
import Button from '../button';
import '../../commonStyles.css';
import './style.css';


interface Props {
    selected: string,
    area: number
}
function Result({ selected, area }: Props) {


    const [selectShape, setSelectShape] = useState(false)

    const onPress = () => {
        setSelectShape(true)
    }

    return (
        <div>

            {!selectShape ? <>
                <Heading step={3} title='Your Result'></Heading>
                <div className='mTop-16 mBottom-32'><span>You have calculated the area of a </span><span className='bold-font'>{selected}</span>. Below is your result:</div>
                <h2 className='flex flex-center result'>The Area is {area}</h2>

                <div className='button-wrapper'>
                    <Button onPress={onPress} text='Start over' />
                </div>
            </> : <SelectShape />}
        </div>
    );
}

export default Result;
