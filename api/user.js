import api from "./axios";

const User = {
  user: (userData) => {
    return api.post("/users", {
      ...userData,
    });
  },
};

export default User;
