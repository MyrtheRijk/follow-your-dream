import './HeaderTitle.css';
import GetStartedButton from '../../components/getstartedbutton/GetStartedButton';

export default function HeaderTitle(): JSX.Element {
    return (
        <div className="title-container">
            <h1 className="first-title">Follow Your Dream</h1>
            <h2 className="second-title">And become the person you always wanted to be</h2>
            <GetStartedButton />
        </div>
    )
}