import React from "react";
import { UserItem } from "services/API/usersAPI";
const UserList = (att: { users: Array<UserItem> }) => {
  const { users } = att;
  return (
    <div>
      {users.map((user: UserItem) => (
        <UserListItem key={user.id} user={user} />
      ))}
    </div>
  );
};

function UserListItem(attribute: { user: UserItem }) {
  const { user } = attribute;
  return <p>{user.first_name}</p>;
}
export { UserList };
