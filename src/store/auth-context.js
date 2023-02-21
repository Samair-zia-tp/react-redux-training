import React from "react";

//Context is just app or component wide state, it can be anything, string, object etc
const AuthContext =  React.createContext({
  isLoggedIn: false
})

export default AuthContext;