import React, { useState } from "react";

// Tạo context
export const UserContext = React.createContext(null);

// Tạo provider để cung cấp giá trị cho các component con
export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null); // State quản lý thông tin user

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};
