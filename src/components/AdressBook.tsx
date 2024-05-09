import { useState, useEffect } from "react";
import SearchBox from "./common/SearchBox";
import UserCard from "./UserCard";
import "@fortawesome/fontawesome-free/css/all.css";
import { User } from "../types";
// import Pagination from "./common/Pagination";

function AddressBook() {
  const [users, setUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOption, setSearchOption] = useState("firstName");
  // const [currentPage, setCurrentPage] = useState(1);
  // const resultsPerPage = 10;
  // const seed = "abc";

  useEffect(() => {
    fetch("https://randomuser.me/api/?seed=foobar&results=50")
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

  // const fetchUsers = async (page: number) => {
  //   try {
  //     const response = await fetch(
  //       `https://randomuser.me/api/?page=${page}&results=${resultsPerPage}&seed=${seed}`
  //     );
  //     const data = await response.json();
  //     setUsers(data.results);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchUsers(currentPage);
  // }, [currentPage]);

  // const totalCount = 100;

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center">
        <i className="fa-solid fa-address-book text-2xl"></i>
        <h1 className="text-2xl font-semibold mb-4 m-4">Address Book</h1>
      </div>
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
      {/* <div>
        <Pagination
          totalCount={totalCount}
          pageSize={resultsPerPage}
          selectedPage={currentPage}
          onPageSelect={setCurrentPage}
        />
      </div> */}
    </div>
  );
}

export default AddressBook;
