import { Link } from "react-router-dom";
import { User } from "../types";

interface Props {
  user: User;
}

function UserCard({ user }: Props) {
  return (
    <li key={user.email} className="mb-4 p-4 border rounded flex items-center">
      <Link
        to={`/user/${encodeURIComponent(user.email)}`}
        className="flex items-center"
      >
        <img
          src={user.picture.medium}
          alt={`${user.name.first} ${user.name.last}'s portrait`}
          className="rounded-full w-16 h-16 mr-4"
        />
        <div>
          <div>
            <strong>Name:</strong> {user.name.first} {user.name.last}
          </div>
          <div>
            <strong>Email:</strong> {user.email}
          </div>
          <div>
            <strong>Location:</strong>
            {user.location.country}
          </div>
        </div>
      </Link>
    </li>
  );
}

export default UserCard;
