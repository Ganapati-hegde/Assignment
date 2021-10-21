
import '../../commonStyles.css'
import './style.css'

interface Props {
    text: string;
    onPress: () => void
}
function Button({ text, onPress }: Props) {
    return (
        <button onClick={() => { onPress() }} className='p-8 bold-font clickable medium-font'>{text}</button>
    );
}

export default Button;
