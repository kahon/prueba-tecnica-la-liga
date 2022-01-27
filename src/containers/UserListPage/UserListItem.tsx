import React from "react";
import { UserItem } from "services/API/usersAPI";

export function UserListItem(attribute: { user: UserItem }) {
  const { user } = attribute;
  return <p>{user.first_name}</p>;
}
