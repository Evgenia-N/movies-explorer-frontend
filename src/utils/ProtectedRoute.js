import React from 'react';
import { useHistory } from "react-router-dom";

export default function ProtectedRoute({ loggedIn, children }) {
  const history = useHistory();
  return loggedIn ? children : history.push("/signin")
}