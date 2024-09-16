
import React, { createContext, useEffect, useState } from 'react';
import { auth } from './firebase-config';
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const history = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate('/'); // Redirect to homepage after login
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const logout = async () => {
    await signOut(auth);
    navigate('/'); // Optionally redirect to homepage on logout
  };

  return (
    <AuthContext.Provider value={{ user, loginWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
};