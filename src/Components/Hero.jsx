import Gundam from "../Videos/Gundam.mp4";
import Mazinger from "../Videos/Mazinger.mp4";

const Hero = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        The Mecha{" "}
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          Fever
        </span>
      </h1>

      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl ">
        Mecha se refiere a un género centrado en robots gigantes, generalmente
        pilotados por humanos. Estos mechas pueden ser de tamaño y forma
        variados, desde robots humanoides{" "}
        <span className="bg-gradient-to-r from-orange-500 to-red-300 text-transparent bg-clip-text">
          hasta complejas máquinas de batalla que requieren varios pilotos para
          operar.
        </span>
      </p>
      <div className="flex justify-center my-10">
        <a
          href="https://www.youtube.com/watch?v=rDUOSSDWOQ0"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md hover:scale-110 transition-all duration-300
          ease-in-out cursor-pointer relative shadow-xl 
          shadow-gray-800 "
          target="blank"
        >
          Mas información
        </a>
        <a
          href="https://en.wikipedia.org/wiki/Mecha#:~:text='Mecha'%20is%20an%20abbreviation%2C,vehicles%20from%20other%20mechanical%20devices."
          className="py-3 px-4 mx-3 rounded-md border hover:scale-110 transition-all duration-300
          ease-in-out cursor-pointer relative shadow-xl 
          shadow-gray-800  "
          target="blank"
        >
          Wikipedia
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
          src={Mazinger}
          type="video/mp4"
        ></video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4 object-cover"
          src={Gundam}
          type="video/mp4"
        ></video>
      </div>
    </div>
  );
};

export default Hero;
