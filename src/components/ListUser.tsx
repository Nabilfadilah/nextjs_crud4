"use client";

import axios from "axios";
import Link from "next/link";
import React, {use, useEffect, useState} from "react";

// Definisikan tipe data untuk user
interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}

const ListUser = () => {
  // state untuk menyimpan data user
  const [users, setUsers] = useState<User[]>([]);

  // fetch data user dari api
  function getUsers() {
    axios.get("http://localhost:3001/api/users").then(function (response) {
      setUsers(response.data);
      console.log("Data all User : ", response.data);
    });
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <table className="overflow-x-auto">
      <thead className="text-sm text-gray-700 uppercase bg-gray-50">
        <tr>
          <th className="py-3 px-6">No.</th>
          <th className="py-3 px-6">Name</th>
          <th className="py-3 px-6">Email</th>
          <th className="py-3 px-6">Username</th>
          <th className="py-3 px-6 text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, key) => (
          <tr key={key} className="bg-white border-b">
            <td className="py-3 px-6">{user.id}.</td>
            <td className="py-3 px-6">{user.name}</td>
            <td className="py-3 px-6">{user.email}</td>
            <td className="py-3 px-6">{user.username}</td>
            <td className="flex justify-center gap-1 py-3">
              <Link href={`/users/read/${user.id}`} className="btn btn-success">
                Read
              </Link>
              <Link className="btn btn-info" href={`users/edit/${user.id}`}>
                Edit
              </Link>
              <button
                // onClick={() => deleteUser(user.id)}
                className="btn btn-error"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListUser;
