import { useState } from "react";
import Section from "../../components/Landing/Section";
import Layout from "../../components/Layout/index";
import Card from "../../components/Portoflio/Card";

export type IState = "Mobile" | "E-Commerce" | "Landing" | "All" | "API";
export interface IStates {
  value: IState;
  label: string;
}
export type IProjects = {
  type: IState;
  name: string;
};

const Portfolio = () => {
  const States: IStates[] = [
    { value: "All", label: "All" },
    { value: "API", label: "API" },
    { value: "Mobile", label: "Mobile" },
    { value: "E-Commerce", label: "E-Commerce" },
    { value: "Landing", label: "Landing" },
  ];

  const [currentState, setState] = useState<IState>(States[0].value);

  const Projects: IProjects[] = [
    { type: "E-Commerce", name: "E-Commerce" },
    { type: "API", name: "API" },
    { type: "Landing", name: "Landing" },
    { type: "Mobile", name: "Mobile" },
    { type: "Mobile", name: "Another Mobile" },
  ];

  const ProjectToShow = () => {
    if (currentState === "All") {
      return Projects;
    } else {
      const a = Projects.filter((project) => project.type === currentState);
      return a;
    }
  };

  return (
    <Layout>
      <Section>
        <div className="container mx-auto flex flex-col space-y-4 pt-10 pb-10 ">
          <div className="">
            <p className="text-center text-3xl font-bold ">See Our Work</p>
          </div>
          <div className="flex">
            <ul className="flex flex-row space-x-1 pb-2 border-b-2 border-gray-400 ">
              {States.map((state) => {
                return (
                  <li
                    className={`p-2 bg-gray-400 rounded-lg ${
                      currentState === state.value
                        ? "underline bg-CdarkOrange text-white"
                        : ""
                    } hover:bg-gray-800 hover:text-white cursor-pointer `}
                    onClick={(e) => setState(state.value)}
                    key={state.value}
                  >
                    {state.label}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
            {ProjectToShow().map((project, index) => {
              return <Card key={index} project={project} />;
            })}
          </div>
        </div>
      </Section>
    </Layout>
  );
};
export default Portfolio;
