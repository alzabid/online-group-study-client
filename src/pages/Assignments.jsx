import AssignmentsCard from "./AssignmentsCard";
import Container from "../components/Container";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

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

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/assignments/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your Assignment has been deleted.",
                "success"
              );
              const remaining = assignments.filter((x) => x._id !== _id);
              setAssignments(remaining);
            }
          });
      }
    });
  };

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-10">
          {assignments.map((element) => (
            <AssignmentsCard
              key={element._id}
              element={element}
              handleDelete={handleDelete}
            ></AssignmentsCard>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Assignments;
