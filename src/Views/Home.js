import Slider from "../components/Slider";

const Home = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-24 mb-24">
        <div className="max-w-xl text-center">
          {" "}
          <p>
            Joining Allstars Training Center is a great way to enhance your
            overall health and well-being, both physically and mentally. We
            offer a variety of training programs in Brazilian Jiu-Jitsu, MMA,
            K-1, boxing, and fitness boxing, led by experienced instructors
            dedicated to helping you achieve your goals. Whether you're a
            beginner or have experience, we welcome you to come and discover the
            benefits of martial arts, including improved fitness, discipline,
            confidence, and self-defense skills.
          </p>
          <br />
          <h2>Link to new schedule</h2>
        </div>
      </div>

      <Slider />
    </>
  );
};

export default Home;
