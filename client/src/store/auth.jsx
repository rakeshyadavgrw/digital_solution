import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token")); // ya fir localStorage.getItem("token")
  const [user, setUser] = useState("");
  const [loading,setLoading]= useState(true)
  const [services, setServices] = useState([]);
  
  const API = import.meta.env.VITE_APP_URI;

  const authorizationtoken = `Bearer ${token}`
  
  //function to stored the token in local storage
  const storeTokenInLs = (serverToken) => {
    setToken(serverToken);
    
    return localStorage.setItem("token", serverToken);    
  };
   

  let isLoggedIn = !!token;
  
  
  const logoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  // jwt Authentication - to get the currently logged user data

  const userAuthentication = async () => {
   
    try {
      const response = await fetch(`${API}/api/auth/user`, {
        method: "GET",
        headers: { Authorization: authorizationtoken },
      });

      if (response.ok) {
        const data = await response.json();
        
        setUser(data.userData);
        setLoading(false);
      }
    } catch (error) {
      console.log("Error fetching user data");
    }
  };

  // to fetch the services data from the database
  const getServices = async () => {
    try {
      const response = await fetch(`${API}/api/data/service`, {
        method: "GET",
      });
      if (response.ok) { 
        const data = await response.json();
        setServices(data.msg)
        
       
      }
    } catch (error) {
      console.log(`services frontend error :${error}`);
    }
  };

  useEffect(() => {
    getServices();
   
  }, []);
  
  useEffect(()=>{userAuthentication();},[authorizationtoken])

  return (
    <AuthContext.Provider
      value={{ storeTokenInLs, logoutUser, isLoggedIn, user, services, authorizationtoken,loading,userAuthentication,API  }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};
