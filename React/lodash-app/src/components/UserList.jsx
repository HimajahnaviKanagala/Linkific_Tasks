import { useState } from "react";
import users from "../data/users";
import filter from "lodash/filter";
import {
  chunk,
  cloneDeep,
  get,
  groupBy,
  random,
  sample,
  shuffle,
  some,
  sortBy,
  uniqBy,
} from "lodash";

function UserList({ query }) {
  const [data, setData] = useState(users);

  const filtered = filter(data, (u) =>
    u.name.toLowerCase().includes(query.toLowerCase()),
  );

  const sorted = filtered;

  const grouped = groupBy(sorted, "role");

  return (
    <div>
      <h2>Users</h2>
      <p>City: {get(data[0], "address.city", "Not Available")}</p>
      <div className="buttons">
        <button onClick={() => setData(shuffle(data))}>Shuffle</button>
        <button
          onClick={() => {
            const user = sample(data);
            alert(`${user.name} - ${user.age}`);
          }}
        >
          Random User
        </button>
        <button onClick={() => setData(uniqBy(data, "age"))}>
          Unique by Age
        </button>
        <button onClick={() => setData(sortBy(data, "age"))}>
          Sort by Age
        </button>
        <button onClick={() => console.log(chunk(data, 2))}>Chunk Users</button>
        <button
          onClick={() => {
            const copy = cloneDeep(data);
            console.log(copy);
          }}
        >
          Clone data
        </button>
        <button onClick={() => alert(random(1, 100))}>Random Number</button>
        <button onClick={() => alert(some(data, { role: "ADMIN" }))}>
          Any Admin?
        </button>
      </div>
      {Object.keys(grouped).map((role) => (
        <div className="card" key={role}>
          <h3 className="role-title">{role}</h3>
          {grouped[role].map((user) => (
            <p key={user.id}>
              {user.name} - {user.age}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}
export default UserList;
