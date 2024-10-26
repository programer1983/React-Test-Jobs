import "./Prezent.scss"
import prezentData from "./prezent-data"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Prezent = () => {
    
    return (
       <div className="prezent">
          <div className="container">
            <h2 className="prezent__title">Presentation</h2>
            <Swiper
                className="slider swiper"
                loop={true}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={20}
                slidesPerView={2}
                breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    700: {
                      slidesPerView: 2,
                    }
                  }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {prezentData.map(slide => 
                    <SwiperSlide className="slide__item" key={slide.id}>
                        <div className="slide__item-inner">
                            <img className="slide__item-img" src={slide.image} alt={slide.title} />
                            <h2 className="slide__item-title">{slide.title}</h2>
                            <p className="slide__item-text">{slide.description}</p>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>   
           </div>
       </div>
    )
}


export default Prezent;









