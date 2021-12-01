import axios from "axios";
import { useState } from "react";
const instance = axios.create({
  baseURL: "http://localhost:4000/",
});

interface IQuiz {
  name: string;
  id: string;
}

const api = () => {
  const [quizzes, setQuizzes] = useState<IQuiz[]>();
  const [loading, setLoading] = useState(false);
  const fetchQuizzes = async (): Promise<any> => {
    try {
      setLoading(true);
      const { data } = await instance.get("quizzes");
      setQuizzes(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  return { loading, quizzes, fetchQuizzes };
};
export default api;
