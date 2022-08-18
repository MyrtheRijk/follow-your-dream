import './Info.css';
import GetStartedButton from '../getstartedbutton/GetStartedButton';
import writing from '../../assets/images/writing-vertical.jpg';
import mountains from '../../assets/images/mountains-vertical.jpg';
import languages from '../../assets/images/languages-vertical.jpg';

export default function Info() {
    return (
        <>
            <div className="info-container">
                <h2 className="info-title">Dreams come true</h2>
                <p className="info-para">
                    Everyone wants to achieve a goal in life. Whether you want to live healthier, expand your knowledge or find a new hobby, it can be anything.
                    Achieving a goal is not always that easy. Sometimes we need some help, and thats why your're in the right place! 
                    <br></br>
                    <br></br>
                    We're here the help you with your dream to achieve as a goal in life. We give you a schedule and a timeframe so you know where to start. 
                    We will ask you several questions to know which schedule fits into your lifestyle. Only then you have a high change to achieve your goal. 
                    <br></br>
                    <br></br>
                    Start today and make your dream come true!
                </p>
            </div>
            <div className="three-img-container">
                <img src={writing} alt="writing" className="threeImages ms-auto"></img>
                <img src={mountains} alt="mountains" className="threeImages"></img>
                <img src={languages} alt="languages" className="threeImages"></img>
            </div>
            <div className="button-three-img">
                < GetStartedButton />
            </div>
        </>
    )
}