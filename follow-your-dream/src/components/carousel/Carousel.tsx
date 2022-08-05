import './Carousel.css';
import hikers from '../../assets/images/hikers.jpg';
import ropes from '../../assets/images/man-ropes.jpg';
import town from '../../assets/images/woman-above-town.jpg';

export default function Carousel(): JSX.Element {
    return (
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={hikers} className="d-block w-100" alt="Two people hiking in mountains" />
          </div>
          <div className="carousel-item">
            <img src={ropes} className="d-block w-100" alt="Man doing workout in gym with ropes" />
          </div>
          <div className="carousel-item">
            <img src={town} className="d-block w-100" alt="Women looking over a town" />
          </div>
        </div>
      </div>
    )
}