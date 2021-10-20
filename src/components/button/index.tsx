
import '../../commonStyles.css'
import './style.css'


function Button(props: any) {
    return (
        <button onClick={() => { props.onPress() }} className='go-to-next bold-font clickable medium-font'>{props.text}</button>
    );
}

export default Button;
