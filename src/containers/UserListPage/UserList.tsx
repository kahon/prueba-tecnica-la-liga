import React from "react";
import { UserItem } from "services/API/usersAPI";
import { Pagination } from "./Pagination";
import { UserListItem } from "./UserListItem";

const UserList = (attributes: {
  users: Array<UserItem>;
  totalPages: number;
  page: number;
}) => {
  const { users, totalPages, page } = attributes;
  return (
    <div>
      {users?.map((user: UserItem) => (
        <UserListItem key={user.id} user={user} />
      ))}
      <Pagination totalPages={totalPages} page={page} />
    </div>
  );
};

export { UserList };
