import HomeGallery from "../components/HomeGallery";
import ElfsightInstagramFeed from "../components/ElfsightInstagramEmbed";

const Home = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-24 mb-24">
        <div className="max-w-2xl text-center">
          {" "}
          <h1 className="text-5xl pb-6 text-blue-800">
            Allstars Training Center
          </h1>
          <p className="text-xl">
            Joining Allstars Training Center is a great way to enhance your
            overall health and well-being, both physically and mentally. We
            offer a variety of training programs in Brazilian Jiu-Jitsu, MMA,
            boxing, thaiboxing, Submission Wrestling/Grappling and Wrestling,
            led by experienced instructors dedicated to helping you achieve your
            goals. Whether you're a beginner or have experience, we welcome you
            to come and discover the benefits of martial arts, including
            improved fitness, discipline, confidence, and self-defense skills.
          </p>
          <br />
        </div>
      </div>

      <HomeGallery />

      <h2 className="text-blue-800 text-3xl pb-10">Instagram</h2>

      <ElfsightInstagramFeed />
    </>
  );
};

export default Home;
