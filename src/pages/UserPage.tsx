import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { User } from "../types";

function UserPage() {
  const { email } = useParams<{ email: string }>();
  const [user, setUser] = useState<User | null>(null);
  // const seed = "abc";

  useEffect(() => {
    if (!email) {
      console.error("Email parameter is undefined");
      setUser(null);
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await fetch(
          "https://randomuser.me/api/?seed=foobar&results=50"
        );
        const data = await response.json();

        const foundUser = data.results.find(
          (user: User) => user.email === email
        );

        if (foundUser) {
          setUser(foundUser);
        } else {
          console.error("User not found");
          setUser(null);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setUser(null);
      }
    };

    fetchUserData();
  }, [email]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4 items-center">
      <img
        src={user.picture.large}
        alt={`${user.name.first} ${user.name.last}'s portrait`}
        className="rounded-full w-48 h-48 mb-4"
      />
      <h1 className="text-xl font-bold mb-4">
        {user.name.first} {user.name.last}
      </h1>

      <div>
        <strong>Email:</strong> {user.email}
      </div>
      <div>
        <strong>Phone:</strong> {user.phone}
      </div>
      <div>
        <strong>Cell:</strong> {user.cell}
      </div>
      <div>
        <strong>Location:</strong> {user.location.state}, {user.location.city},
        {user.location.country}
      </div>
    </div>
  );
}

export default UserPage;
