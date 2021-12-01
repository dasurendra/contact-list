import React, { useEffect, useState } from "react";

const ContactTable = ({ users }) => {
  const [selectedUser, setSelectUser] = useState();

  return (
    <div className="text-secondary ">
      {users.map((user, index) => (
        <div
          key={index}
          className="single-contact   "
          onClick={() => setSelectUser(user.id)}
        >
          <div className=" user-name"> {user.name}</div>
          {selectedUser === user.id && (
            <div className="user-info fs-5">
              <i className="fas fa-phone "></i> {user.phone}
              <br />
              <i className="fas fa-globe"></i> {user.website}
              <br />
              <i className="far fa-envelope"></i> {user.email}
              <br />
            </div>
          )}

          <hr />
        </div>
      ))}
    </div>
  );
};

export default ContactTable;
