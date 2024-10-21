import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importa os estilos do carousel
import { Carousel } from 'react-responsive-carousel'; // Importa o componente Carousel
import carouselImage from '../../assets/image.png';


export function CarouselHome() {
    return(
        <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        showStatus={false}
        dynamicHeight={false}
      >
            <div>
            <img src={carouselImage} alt="Imagem 1" className="w-full h-64 md:h-96 object-cover" />
            </div>
            <div>
            <img src={carouselImage} alt="Imagem 2" className="w-full h-64 md:h-96 object-cover" />
            </div>
      </Carousel>

    )
}