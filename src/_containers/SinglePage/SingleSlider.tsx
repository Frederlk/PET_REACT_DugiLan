import { FC } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { IImageItem } from "../../models";
import { Picture } from "../../_components";

const swiperProps: SwiperProps = {
    modules: [Pagination],
    pagination: {
        type: "bullets",
    },
};

const SingleSlider: FC<{ images: IImageItem[] }> = ({ images }) => {
    const singleSlides = images.map(({ alt, img, webp }, i) => (
        <SwiperSlide key={i} className="content-workshop__slide-ibg">
            <Picture srcWebp={webp!} fallbackSrc={img} alt={alt} />
        </SwiperSlide>
    ));

    return (
        <div className="content-workshop__slider">
            <Swiper
                {...swiperProps}
                className="content-workshop__swiper"
                speed={500}
                observer={true}
                observeParents={true}
            >
                {singleSlides}
            </Swiper>
            <div className="content-workshop__pagination"></div>
        </div>
    );
};

export default SingleSlider;
