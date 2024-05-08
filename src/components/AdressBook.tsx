import { useState, useEffect } from "react";
import SearchBox from "./SearchBox";
import UserCard from "./UserCard";

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

function AddressBook() {
  const [users, setUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOption, setSearchOption] = useState("firstName");

  useEffect(() => {
    fetch("https://randomuser.me/api/?seed=foobar&results=100")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const filteredUsers = users.filter((user) => {
    const queryLower = searchQuery.toLowerCase();

    if (searchOption === "firstName") {
      return user.name.first.toLowerCase().includes(queryLower);
    }

    if (searchOption === "lastName") {
      return user.name.last.toLowerCase().includes(queryLower);
    }

    if (searchOption === "country") {
      return user.location.country.toLowerCase().includes(queryLower);
    }

    return false;
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 m-4">Address Book</h1>
      <div className="mb-4">
        <SearchBox value={searchQuery} onChange={setSearchQuery} />
        <select
          value={searchOption}
          onChange={(e) => setSearchOption(e.target.value)}
          className="select select-bordered w-full mt-2"
        >
          <option value="firstName">Search by first name</option>
          <option value="lastName">Search by last name</option>
          <option value="country">Search by country</option>
        </select>
      </div>
      <ul>
        {filteredUsers.map((user) => (
          <UserCard key={user.email} user={user} />
        ))}
      </ul>
    </div>
  );
}

export default AddressBook;
