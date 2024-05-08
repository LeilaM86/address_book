import { Link } from "react-router-dom";

interface User {
  login: {
    uuid: string;
  };
  name: {
    first: string;
    last: string;
  };
  email: string;
  location: {
    city: string;
    country: string;
  };
  phone: string;
  picture: {
    medium: string;
  };
}

interface Props {
  user: User;
}

function UserCard({ user }: Props) {
  return (
    <li key={user.email} className="mb-4 p-4 border rounded shadow">
      <Link to={`/user/${encodeURIComponent(user.email)}`}>
        <img
          src={user.picture.medium}
          alt={`${user.name.first} ${user.name.last}'s portrait`}
          className="rounded-full w-16 h-16 mb-2"
        />
        <div>
          <strong>Name:</strong> {user.name.first} {user.name.last}
        </div>
        <div>
          <strong>Email:</strong> {user.email}
        </div>
        <div>
          <strong>Phone:</strong> {user.phone}
        </div>
        <div>
          <strong>Location:</strong> {user.location.city},
          {user.location.country}
        </div>
      </Link>
    </li>
  );
}

export default UserCard;
