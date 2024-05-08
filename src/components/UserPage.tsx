import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface User {
  login: {
    uuid: string;
  };
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  location: {
    city: string;
    state: string;
    country: string;
  };
  phone: string;
  picture: {
    large: string;
  };
}

function UserPage() {
  const { email } = useParams<{ email: string }>();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (!email) {
      setUser(null);
      return;
    }

    fetch(`https://randomuser.me/api/?seed=foobar&results=100`)
      .then((response) => response.json())
      .then((data) => {
        const foundUser = data.results.find(
          (user: User) => user.email === email
        );

        if (foundUser) {
          setUser(foundUser);
        } else {
          setUser(null);
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setUser(null);
      });
  }, [email]);

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="container mx-auto p-4 items-center">
      <img
        src={user.picture.large}
        alt={`${user.name.first} ${user.name.last}'s portrait`}
        className="rounded-full w-48 h-48 mb-4"
      />
      <h1 className="text-xl font-bold mb-4">
        {user.name.title} {user.name.first} {user.name.last}
      </h1>

      <div>
        <strong>Email:</strong> {user.email}
      </div>
      <div>
        <strong>Phone:</strong> {user.phone}
      </div>
      <div>
        <strong>Location:</strong> {user.location.state}, {user.location.city},
        {user.location.country}
      </div>
    </div>
  );
}

export default UserPage;
