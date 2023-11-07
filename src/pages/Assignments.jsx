
import AssignmentsCard from "./AssignmentsCard";
import Container from "../components/Container";
import { useEffect, useState } from "react";

const Assignments = () => {

  const [assignments, setAssignments] = useState([]);
const [categoryFilter, setCategoryFilter] = useState("");
  // const url = "http://localhost:5000/assignments";
  useEffect(() => {
    const url = `http://localhost:5000/assignments${
      categoryFilter ? `?category=${categoryFilter}` : ""
    }`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAssignments(data));
  }, [categoryFilter]);

  // const handleFilter = (event) =>{
  //   const level = event.target.value;
  //   console.log(level)
  // }
  
  return (
    <div>
      <Container>
        <div className="flex justify-center items-center mt-10 gap-5">
          <h1 className="text-2xl">Filter by Difficulty Level: </h1>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="select select-bordered w-full max-w-xs"
          >
            <option value="" disabled selected>
              Select One
            </option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-10 lg:px-28 py-10">
          {assignments.map((element) => (
            <AssignmentsCard
              key={element._id}
              element={element}
            ></AssignmentsCard>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Assignments;
