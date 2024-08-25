import axios from "axios";

export const signupHandler = async (username, number, email, password) => {
  try {
    console.log(username, number, email, password)
    const data = await axios.post(
      "https://travelappbackend-dnmq.onrender.com/api/auth/register",
      {
        username: username,
        number: number,
        email: email,
        password: password,
      }
    );
    console.log(data);
    
  } catch (err) {
    console.log("error adding user to database",err);
  }
};