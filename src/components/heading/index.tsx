
import '../../commonStyles.css'

interface Props {
    step: number;
    title: string;
}
function Heading({ step, title }: Props) {
    return (
        <div className="heading bold-font heading-font text-center">
            <span>Step {step}</span>
            <span> : {title}</span>
        </div>
    );
}

export default Heading;
