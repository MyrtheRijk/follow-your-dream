import './HeaderTitle.css';
import GetStartedButton from '../../components/getstartedbutton/GetStartedButton';

export default function HeaderTitle(): JSX.Element {
    return (
        <div className="title-container">
            <h1 id="first-title">Follow Your Dream</h1>
            <h2 id="second-title">And become the person you always wanted to be</h2>
            <GetStartedButton />
        </div>
    )
}