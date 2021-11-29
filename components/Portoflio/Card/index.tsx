import { IProjects } from "../../../pages/portfolio";

interface Props {
  project: IProjects;
}

const Card = ({ project }: Props) => {
  const { name, type } = project;
  return <div className="bg-red-300 h-96 rounded-lg">{name}</div>;
};
export default Card;
