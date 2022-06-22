import BottomTabScreen from "./BottomTabScreen";
import LoginNavigate from "./LoginNavigate";
import { useSelector } from "react-redux";

const IndexNavigate = () => {
  const isLogin = useSelector((state) => state.users.isLogin);
  return isLogin ? (
    <BottomTabScreen></BottomTabScreen>
  ) : (
    <LoginNavigate></LoginNavigate>
  );
};
export default IndexNavigate;
