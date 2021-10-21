
import { useState } from 'react';
import Heading from '../heading';
import RadioButtons from '../radioButtons';
import InsertValue from '../insertValue';
import Button from '../button'
import '../../commonStyles.css'


function SelectShape() {
  const shapes = ['Rectangle', 'Circle', 'Square', 'Ellipse']
  const [selected, setSelected] = useState('Rectangle');
  const [insertValueComponent, setInsertValueComponent] = useState(false)

  const onInputChange = (e: { target: HTMLInputElement }) => {
    setSelected(e.target.value)
  }
  const onPress = () => {
    setInsertValueComponent(true)
  }

  return (
    <>
      {!insertValueComponent ?
        <>
          <Heading step={1} title="Select your shape"></Heading>

          <div className='mBottom-32 mTop-16'>Please select the shape that you would like to calculate the area of and press the button "Go to step 2"</div>

          {shapes.map((eachElem) => {
            return <RadioButtons value={eachElem} selected={selected} onInputChange={onInputChange} />
          })}

          <div className='button-wrapper'>
            <Button onPress={onPress} text='Go to step 2' />
          </div>

        </> :
        <InsertValue selected={selected} />}
    </>
  );
}

export default SelectShape;
