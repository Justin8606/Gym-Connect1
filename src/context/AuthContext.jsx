// import { createContext, useEffect, useState } from "react";

// export const AuthContext = createContext();

// export const AuthContextProvider = ({ children }) => {

//     const [currentUser, setCurrentUser] = useState(
//         JSON.parse(localStorage.getItem("user")) || null
//     );

//     const updateUser = (data) => {
//         // Allow null values to be set when logging out
//         setCurrentUser(data);
//     };

//     useEffect(() => {
//         // Update localStorage even if currentUser is null (for logout)
//         localStorage.setItem("user", JSON.stringify(currentUser));
//     }, [currentUser]);

//     return (
//         <AuthContext.Provider value={{ currentUser, updateUser }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };


import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(() => {
        const storedUser = localStorage.getItem("user");
        try {
            return storedUser ? JSON.parse(storedUser) : null;
        } catch (error) {
            console.error("Error parsing stored user data:", error);
            return null;
        }
    });

    const updateUser = (data) => {
        // Allow null values to be set when logging out
        setCurrentUser(data);
    };

    useEffect(() => {
        // Update localStorage even if currentUser is null (for logout)
        try {
            localStorage.setItem("user", JSON.stringify(currentUser));
        } catch (error) {
            console.error("Error saving user data to localStorage:", error);
        }
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, updateUser }}>
            {children}
        </AuthContext.Provider>
    );
};
