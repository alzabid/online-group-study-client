import AssignmentsCard from "./AssignmentsCard";
import Container from "../components/Container";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [selectLevel, setSelectLevel] = useState("All");

  const url = "https://online-group-study-server-beta.vercel.app/assignments";
  useEffect(() => {
    // const url = "https://online-group-study-server-beta.vercel.app/assignments";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAssignments(data));
  }, []);

  const filterItem = assignments.filter((x) => {
    return selectLevel === "All" || x.level === selectLevel;
  });

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
        fetch(
          `https://online-group-study-server-beta.vercel.app/assignments/${_id}`,
          {
            method: "DELETE",
          }
        )
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
          <h1 className="md:text-2xl">Filter by Difficulty Level: </h1>
          <select
            onChange={(e) => setSelectLevel(e.target.value)}
            value={selectLevel}
            className="select select-bordered w-32 md:w-full max-w-xs"
          >
            <option value="All">Select All</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
        {filterItem.length === 0 ? (
          <div className=" h-[80vh] flex justify-center items-center">
            <p className="md:text-2xl">
              No Assignment found for the selected level.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-10">
            {filterItem.map((element) => (
              <AssignmentsCard
                key={element._id}
                element={element}
                handleDelete={handleDelete}
              ></AssignmentsCard>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default Assignments;
