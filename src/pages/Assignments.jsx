import { useLoaderData } from "react-router-dom";
import AssignmentsCard from "./AssignmentsCard";

const Assignments = () => {
  const assignments = useLoaderData();
  
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-10 lg:px-28 py-10">
        {assignments.map((element) => (
          <AssignmentsCard
            key={element._id}
            element={element}
          ></AssignmentsCard>
        ))}
      </div>
    </div>
  );
};

export default Assignments;
