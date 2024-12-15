"use client";

import Link from "next/link";
import React from "react";

const ListUser = () => {
  return (
    <table className="table table-zebra">
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
        <tr key="" className="bg-white border-b">
          <td className="py-3 px-6">test</td>
          <td className="py-3 px-6">test</td>
          <td className="py-3 px-6">test</td>
          <td className="py-3 px-6">test</td>
          <td className="flex justify-center gap-1 py-3">
            <Link href={`/users/read/`} className="btn btn-success">
              Read
            </Link>
            <Link className="btn btn-info" href={`users/edit/`}>
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
      </tbody>
    </table>
  );
};

export default ListUser;
