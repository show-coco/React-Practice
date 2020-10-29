import React, { useState, useReducer } from "react";

const firstUser = {
  id: "0392-94848-9344",
  firstName: "Bill",
  lastName: "Wildon",
  admin: false,
};

type FirstUser = typeof firstUser;

const User: React.FC = () => {
  const [user, setUser] = useReducer(
    (user: FirstUser, newDetails: Partial<FirstUser>) => ({
      ...user,
      ...newDetails,
    }),
    firstUser
  );

  return (
    <div>
      <h1>
        {user.firstName} {user.lastName} - {user.admin ? "Admin" : "User"}
      </h1>
      <button
        onClick={() => {
          setUser({ admin: true });
        }}
      >
        Make Admin
      </button>
    </div>
  );
};
