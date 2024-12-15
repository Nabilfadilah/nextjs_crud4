"use client";

import axios from "axios";
import {useParams} from "next/navigation";
import React, {useEffect, useState} from "react";

// Definisikan tipe data untuk user
interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}

const page = () => {
  // state untuk menyimpan user detail
  const [user, setUser] = useState<User | null>(null);

  // memnaggil id karena berdasarkan id
  const {id} = useParams();
  console.log(id);

  // fetch api get user
  const fetchUser = async () => {
    try {
      const result = await axios.get("http://localhost:3001/api/getuser/" + id);
      console.log(result.data[0]);
      setUser(result.data[0]);
    } catch (err) {
      console.log("Something Wrong");
    }
  };

  useEffect(() => {
    fetchUser();
  }, [id]);

  return (
    <div className="max-w-2xl mx-auto mt-5">
      <h1 className="text-2xl text-center mb-2">View User</h1>
      <table className="table table-zebra">
        <thead className="text-sm text-gray-700 uppercase bg-gray-50">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {user ? (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
            </tr>
          ) : (
            <tr>
              <td colSpan={4} className="text-center">
                Loading...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default page;
