import axios from "axios";
import { useQuery } from "react-query";

export const useTestReactQuery = () => {
  return useQuery({
    queryKey: ["test-react-query"],
    queryFn: getSomeValues,
    refetchOnWindowFocus: false,
  });
};

const getSomeValues = async () => {
  await timeout(1000);
  try {
    const { data } = await axios.get<{
      userId: number;
      id: number;
      title: string;
      body: string;
    }>("https://jsonplaceholder.typicode.com/posts/1");

    return { data };
  } catch (error) {
    console.error("Error hitting example API", error);
    throw error;
  }
};

const timeout = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
