import React, { createContext, useEffect, useState } from "react";

export const Context = createContext();

export const Provider = ({ children }) => {
  const [selectMenu, setMenu] = useState("_welcome");

  const [selectServicesMenu, setServicesMenu] = useState({
    text: "",
    path: "",
  });
  const [showServicesDetails, setServicesDetails] = useState("");

  const [selectProjectsMenu, setProjectsMenu] = useState({
    text: "",
    path: "",
  });

  const [selectAbout, setAbout] = useState("SancakSoft");

  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <Context.Provider
      value={{
        selectMenu,
        setMenu,
        selectServicesMenu,
        setServicesMenu,
        showServicesDetails,
        setServicesDetails,
        selectProjectsMenu,
        setProjectsMenu,
        selectAbout,
        setAbout,
        inputValues,
        handleInputChange,
      }}
    >
      {children}
    </Context.Provider>
  );
};
