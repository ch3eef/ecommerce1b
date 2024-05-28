import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NmQ1NzQ1MGQ4MWM2YTQ5NTA0ZmMwOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwMTc1Mjg2NCwiZXhwIjoxNzAyMDEyMDY0fQ.pqegAzChDsMip8li19ewh3nVERQT80wLvOT0lOu7uAw"
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

const publicRequest = axios.create({
  baseURL: BASE_URL,
});

const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});

export { publicRequest, userRequest };