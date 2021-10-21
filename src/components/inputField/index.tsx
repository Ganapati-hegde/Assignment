
import '../../commonStyles.css'

interface Props {
    field: string;
    value: number;
    onInputChange: (event: any) => void;
}
function InputField({ field, value, onInputChange }: Props) {
    return (
        <div className='flex mTopBottom-16'>
            <div className='bold-font width-100'>{field}:</div>
            <input type='number' value={value} onChange={(event) => { onInputChange(parseInt(event.target.value)) }}></input>
        </div>
    );
}

export default InputField;
