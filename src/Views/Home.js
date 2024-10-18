import Slider from "../components/Slider";

const Home = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-24 mb-24">
        <div className="max-w-xl text-center">
          {" "}
          <h1 className="text-3xl pb-6">Allstars Training Center</h1>
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
          <h2 className="text-2xl">
            Click{" "}
            <a href="" className="text-blue-500">
              here
            </a>{" "}
            to get to new schedule
          </h2>
        </div>
      </div>

      <Slider />

      <p>Instagram </p>
    </>
  );
};

export default Home;
