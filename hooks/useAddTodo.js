import { useState } from "react";

export const useAddTodo = ({ name, deadline, directions }) => {

  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  

  const formData = {
    name: name,
    deadline: deadline,
    directions: directions,
  };

  const sessionToken = sessionStorage.getItem("Authorization");

  // 设置请求头
  const headers = {
    Authorization: `Bearer ${sessionToken}`,
  };

  axios
    .post(`/api/todos/new`, formData, { headers })
    .then((response) => {
        setLoading(true);
        return response.data;
    }).then((data) => {
        setLoading(false);
        setData(data.json());
    })
    .catch((error) => {
      setErr(true);
      console.error(error);
    });


    return [err, loading, data];
};
