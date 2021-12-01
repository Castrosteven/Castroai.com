import { NextPage } from "next";
import api from "./api";
const Carrers: NextPage = () => {
  const { fetchQuizzes, loading, quizzes } = api();

  const listOfQuizzes = (): JSX.Element[] => {
    return (
      quizzes &&
      quizzes.map((quiz, index) => {
        return (
          <li className="" key={index}>
            {quiz.name}
          </li>
        );
      })
    );
  };

  return (
    <div className="bg-gray-300 h-screen">
      <div className="container mx-auto bg-gay-800 flex">
        <div className="text-black">
          {loading ? "LOADING...." : listOfQuizzes()}
        </div>
        <button
          className="bg-gray-900 text-white p-2 rounded-lg"
          onClick={fetchQuizzes}
        >
          {" "}
          Fetch Quizzes
        </button>
      </div>
    </div>
  );
};
export default Carrers;
