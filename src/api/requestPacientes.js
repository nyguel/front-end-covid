import axios from "axios";

export const listPacientes = () => {
  const token = localStorage.getItem("token");
  return axios
    .get("http://localhost:3333/pacientes", {
      headers: { Authorization: "Bearer " + token },
    })
    .then(({ data }) => data);
};
