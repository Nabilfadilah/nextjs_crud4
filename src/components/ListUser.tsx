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

  // delete user
  const deleteUser = (id: number) => {
    // Tampilkan konfirmasi sebelum menghapus
    const isConfirmed = window.confirm(
      "Apakah Anda yakin ingin menghapus data ini?"
    );

    if (isConfirmed) {
      // Jika user memilih 'OK', lakukan penghapusan
      axios
        .delete(`http://localhost:3001/api/delete/${id}`)
        .then(function (response) {
          getUsers(); // Refresh data setelah penghapusan
          console.log("User berhasil dihapus:", response.data);
          alert("Data berhasil dihapus!");
        })
        .catch(function (error) {
          console.error("Gagal menghapus user:", error);
          alert("Terjadi kesalahan saat menghapus data.");
        });
    } else {
      // Jika user memilih 'Cancel', batalkan penghapusan
      console.log("Penghapusan dibatalkan.");
    }
  };

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
        {users.map((user, index) => (
          <tr key={index} className="bg-white border-b">
            <td className="py-3 px-6">{index + 1}.</td>
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
                onClick={() => deleteUser(user.id)}
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
