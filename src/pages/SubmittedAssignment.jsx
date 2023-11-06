import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";

const SubmittedAssignment = () => {
  const { user } = useContext(AuthContext);
  const [submits, setSubmits] = useState([]);


  const url = `http://localhost:5000/submits?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSubmits(data));
  }, []);



  return (
    <div>
      <Container>
        <h2 className="text-5xl text-center py-10">
          Your Submitted Assignment: {submits.length}
        </h2>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Delete</th>
                <th>Thumbnail</th>
                <th>Assignment Pdf Link</th>
                <th>Short Note</th>
                <th>Marks</th>
                <th>Subject</th>
                <th>Status</th>
              </tr>
            </thead>
            {/* body */}
            <tbody>
              {submits.map((submit) => (
                <>
                  <tr>
                    <td>
                      <button
                        // onClick={() => handleDelete(_id)}
                        className="btn btn-sm btn-circle"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </td>
                    <td>
                      <div className="avatar">
                        <div className="rounded w-24 h-24">
                          {submit.image && <img src={submit.image} alt="" />}
                        </div>
                      </div>
                    </td>
                    <td>
                      <Link to={submit.link}>{submit.link}</Link>
                    </td>
                    <td>{submit.note}</td>
                    <td>{submit.marks}</td>
                    <td>{submit.category}</td>
                    <th>
                      {status === "confirm" ? (
                        <span className="font-bold text-primary">
                          Confirmed
                        </span>
                      ) : (
                        <button
                          //   onClick={() => handleBookingConfirm(_id)}
                          className="btn btn-warning btn-xs"
                        >
                          Pending
                        </button>
                      )}
                    </th>
                  </tr>
                </>
                // <SubmittedCard
                //   key={submit._id}
                //   submit={submit}
                // //   handleDelete={handleDelete}
                // //   handleBookingConfirm={handleBookingConfirm}
                // ></SubmittedCard>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
};

export default SubmittedAssignment;
