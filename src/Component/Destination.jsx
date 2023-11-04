import DesCard from "../DesCard/DesCard";
import img1 from "../assets/img/france2.jpeg"
import img2 from "../assets/img/dubai.webp"
import img3 from "../assets/img/italy1.jpeg"

const Destination = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center md:mx-32 mx-5">
      <h1 className="font-medium text-center text-4xl lg:mt-0 mt-16">Most Popular Destinations</h1>

      <div className="flex flex-col lg:flex-row gap-5 mt-14">
        <DesCard img={img1} title="Paris, France" para="Paris offers iconic landmarks like the Eiffel Tower and word class" />

        <DesCard img={img2} title="Dubai, UAE" para="Dubai offers iconic landmarks like the Eiffel Tower and word class" />

        <DesCard img={img3} title="Venice, Italy" para="Italy offers iconic landmarks like the Eiffel Tower and word class" />
      </div>
    </div>
  );
};

export default Destination;