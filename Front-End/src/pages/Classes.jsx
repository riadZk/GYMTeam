import React, { useEffect, useState, useContext } from "react";
// import fitnessActivities from "../data/fitnessActivities";
import axios from "axios";
import { Page } from "../components/page/Page";

const Classes = () => {

  const [fitnessActivities, setFitnessActivities] = useState([])
  const [selectedClass, setSelectedClass] = useState("Fitness");
  const selectedClassData = fitnessActivities.find(
    (classe) => classe.name === selectedClass
  );

  const URL = process.env.REACT_APP_URL_BASE;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${URL}/classe`);
        setFitnessActivities(response.data.data);
      } catch (error) {
        console.error("Error sending message:");
      }
    };

    fetchData();
  }, []);


  return (
    <div className="w-full h-auto text-light bg-dark">
    <Page title="Contact Page" />
      {
        selectedClassData ?
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
                    {JSON.parse(selectedClassData.benefits).map((classe, index) => (
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
          :
            <div class="flex items-center justify-center h-[30vh]">
              <div class="relative">
                <div class="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
                <div class="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin">
                </div>
              </div>
            </div>
          }
    </div>
  );
};

export default Classes;
