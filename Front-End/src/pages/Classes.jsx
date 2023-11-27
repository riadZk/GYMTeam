import React from "react";
import fitnessActivities from "../data/fitnessActivities";


const Classes = () => {
  const [selectedClass, setSelectedClass] = React.useState("Fitness");


  const selectedClassData = fitnessActivities.find(
    (classe) => classe.name === selectedClass
  );
  return (
    <div className="w-full h-auto text-light bg-dark">
      <div className="contactPage w-full h-[70vh]">
        <div className="flex justify-center h-full items-center">
          <h2 className="font-[400]  text-4xl">Classes Page</h2>
        </div>
      </div>
      <div className="w-full h-auto">
        <div className="flex justify-between p-4 md:p-6 md:flex-row flex-col-reverse">
          <div className="w-full md:w-2/3">
            <h1 className="text-2xl font-bold mb-3">GROUP FITNESS CLASSES</h1>
            <h1 className="text-2xl font-bold mb-3">
              {selectedClassData.title}
            </h1>
            <p className="text-para md:p-6">{selectedClassData.body}</p>
          </div>
          <div className="classesFilter bg-sliderBg text-white py-10 w-full  md:w-1/3 h-80 rounded-[1px]">
            <h1 className="text-2xl font-bold pl-7">Classes</h1>
            <ul className="pl-10">
              {fitnessActivities.map((classe, index) => (
                <li key={index} className="font-bold text-xl hover:text-link">
                  <button onClick={() => setSelectedClass(classe.name)}>
                    {classe.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex justify-between gap-4 p-4 md:p-6 md:flex-row flex-col-reverse">
          <div className="w-full md:w-1/2">
            <p className="text-para mb-1">{selectedClassData.description}</p>
            <ul className="md:pl-4 pl-2 mb-10 list-disc list-inside">
              {selectedClassData.benefits.map((classe, index) => (
                <li key={index} className="text-para">
                  {classe}
                </li>
              ))}
            </ul>
            <p className=" mb-3 text-para">{selectedClassData.instructors}</p>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src={selectedClassData.image}
              className="w-full rounded-lg h-96"
              alt={selectedClassData.name}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;
