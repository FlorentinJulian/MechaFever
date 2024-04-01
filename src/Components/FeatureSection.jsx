import { features } from "../Constants/index";

const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking wide">
          Mis{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            Recomendaciones
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div
              className="flex gap-2 md:gap-5 p-2 px-5 md:px-16
            "
            >
              <div className="flex">
                <h5 className="mt-1 mb-6 text-xl text-center py-8">
                  {feature.text}
                  <img
                    className="mx-2 my-4 w-96 h-80 object-cover flex border-[2px] border-gray-600
                    rounded-lg hover:scale-110 transition-all duration-300
                    ease-in-out relative shadow-xl 
                    shadow-gray-800"
                    src={feature.IMG}
                  />
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
