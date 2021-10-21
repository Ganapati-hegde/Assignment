
import '../../commonStyles.css'
import './style.css'


interface Props {
    value: string;
    selected: string;
    onInputChange: (event: any) => void

}

function RadionButtons({ value, selected, onInputChange }: Props) {
    return (
        <div className='mTopBottom-16'>
            <input type="radio" id={value} name={value} value={value} checked={selected === value} onChange={(event) => { onInputChange(event) }} />
            <label htmlFor={value}>{value}</label>
        </div>
    );
}

export default RadionButtons;
