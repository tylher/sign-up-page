import SignUp from "./page/signup";
import { createUser } from "./features/user/user_slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log(user);
  // }, [dispatch]);
  // useEffect(() => {
  //   dispatch(
  //     createUser({
  //       first_name: "",
  //       second_name: "",
  //       email: "test31@test.com",
  //       password: "password",
  //     })
  //   );
  // }, []);

  return (
    <div className=" bg-gradient-to-br from-fuchsia-500 to-violet-700 h-screen flex items-center justify-center">
      <SignUp />
    </div>
  );
}

export default App;
