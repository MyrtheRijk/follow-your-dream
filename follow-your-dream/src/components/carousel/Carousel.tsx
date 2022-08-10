import traveler from '../../assets/images/traveler.jpg';
import marathon from '../../assets/images/marathon.jpg';
import guitar from '../../assets/images/guitar.jpg';
import HeaderTitle from '../../components/headertitle/HeaderTitle';
import './Carousel.css';

export default function Carousel(): JSX.Element {
    return (
      <div className="carousel-container">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <HeaderTitle />
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={traveler} className="d-block w-100 img-item" alt="hikers" />
            </div>
            <div className="carousel-item">
              <img src={marathon} className="d-block w-100 img-item" alt="ropes" />
            </div>
            <div className="carousel-item">
              <img src={guitar} className="d-block w-100 img-item" alt="town" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    )
} 