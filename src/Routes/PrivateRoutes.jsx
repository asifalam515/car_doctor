import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (user?.email) {
    return children;
  }
  if (loading) {
    return <span className="loading loading-spinner text-error"></span>;
  }
  return <Navigate to="/login"></Navigate>;

  //   return <div></div>;
};

export default PrivateRoutes;
