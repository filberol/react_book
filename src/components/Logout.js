import { Navigate } from "react-router-dom";
import { logout } from "../auth/auth";

export default function Logout(props) {
  if (props.currentUser) {
    console.log("processing logout")
    logout();
    return null;
  }
  return <Navigate to="/login" replace/>
}