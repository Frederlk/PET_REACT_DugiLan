import { FC, memo } from "react";
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";
import { Autoplay, Keyboard, EffectFade } from "swiper";

import { data } from "../../constants";
import { Picture } from "../../_components";

const swiperProps: SwiperProps = {
    modules: [Autoplay, Keyboard, EffectFade],
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
};

const benefitsSlides = data.homeSliderItems.map(({ alt, img, webp }, i) => {
    if (i < 3) {
        return (
            <SwiperSlide key={i} className="slider-home__slide">
                <div className="slider-home__image-ibg">
                    <Picture srcWebp={webp!} fallbackSrc={img} alt={alt} />
                </div>
            </SwiperSlide>
        );
    }
});

const HomeSlider: FC = () => {
    return (
        <Swiper
            {...swiperProps}
            className="home__slider slider-home"
            effect="fade"
            speed={500}
            observer={true}
            observeParents={true}
        >
            {benefitsSlides}
        </Swiper>
    );
};

export default memo(HomeSlider);
