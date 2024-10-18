import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";
import img4 from "../assets/img4.webp";
import img5 from "../assets/img5.webp";
import img6 from "../assets/img6.webp";
import img7 from "../assets/img7.webp";
import img8 from "../assets/img8.webp";
import img9 from "../assets/img9.webp";
import img10 from "../assets/img10.webp";
import img11 from "../assets/img11.webp";

const Slider = () => {
  return (
    <>
      <section className="mb-24 max-sm:block">
        <h1 className="text-5xl pt-10 pb-10">GALLERY</h1>

        <article className="sliderThree">
          <div
            style={{
              margin: "0 auto",
              position: "relative",
            }}
          >
            <Swiper
              slidesPerView={4}
              spaceBetween={0}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {" "}
              <SwiperSlide>
                <img src={img1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img3} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img4} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img5} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img6} alt="" />
              </SwiperSlide>
            </Swiper>
            <Swiper
              slidesPerView={3}
              spaceBetween={0}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper2"
            >
              <SwiperSlide>
                <img src={img7} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img8} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img9} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img10} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img11} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </article>
      </section>
    </>
  );
};

export default Slider;
