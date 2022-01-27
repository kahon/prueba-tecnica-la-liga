import React from "react";
import { UserItem } from "services/API/usersAPI";
import { UserListItem } from "./UserListItem";

const UserList = (attributes: { users: Array<UserItem> }) => {
  const { users } = attributes;
  return (
    <div>
      {users?.map((user: UserItem) => (
        <UserListItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export { UserList };
