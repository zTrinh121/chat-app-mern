import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext);
  }

// eslint-disable-next-line react/prop-types
export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuthContext();

  useEffect(() => {
    if (authUser) {
        //console.log("AuthUser ID:", authUser._id); 
      const socket = io("https://chat-app-mern-dv4w.onrender.com", {
        query:{
            userId: authUser._id,
        }
      });
      setSocket(socket);

      socket.on("getOnlineUsers", (users) => {
        console.log("getOnlineUsers", users);
        setOnlineUsers(users);
      });
      console.log(onlineUsers);

      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);

  return <SocketContext.Provider value={{socket, onlineUsers}}>{children}</SocketContext.Provider>;
};
