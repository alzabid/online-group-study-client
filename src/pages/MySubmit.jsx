import Container from "../components/Container";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const MySubmit = () => {
  const { user } = useContext(AuthContext);
  const [submits, setSubmits] = useState([]);
  const [currentData, setCurrentData] = useState({});

  const url = `http://localhost:5000/mysubmits?email=${user?.email}`;
  useEffect(() => {
    fetch(url, { credentials: "include" })
      .then((res) => res.json())
      .then((data) => setSubmits(data));
  }, [url]);
  return (
    <div>
      <Container>
        <h2 className="md:text-3xl text-center font-semibold py-10">
          Your Submitted Assignment: {submits.length}
        </h2>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Thumbnail</th>
                <th>Assignment Title</th>
                <th>Marks</th>
                <th>Examinee name</th>
                <th>Subject</th>
                <th>Status</th>
                <th> Result </th>
              </tr>
            </thead>
            {/* body */}
            <tbody>
              {submits.map((submit) => (
                <>
                  <tr>
                    <td>
                      <div className="avatar">
                        <div className="rounded w-24 h-24">
                          {submit.image && <img src={submit.image} alt="" />}
                        </div>
                      </div>
                    </td>
                    <td>{submit.title}</td>
                    <td>{submit.marks}</td>
                    <td>{submit.name}</td>
                    <td>{submit.category}</td>
                    <th>
                      {submit.status === "confirm" ? (
                        <button className="btn btn-accent btn-xs">
                          Completed
                        </button>
                      ) : (
                        <button className="btn btn-warning btn-xs">
                          Pending
                        </button>
                      )}
                    </th>
                    <th>
                      {/* Open the modal */}

                      <button
                        onClick={() => {
                          setCurrentData(submit);
                          document.getElementById("my_modal_1").showModal();
                        }}
                        className="btn btn-primary btn-xs"
                      >
                        See Marks
                      </button>

                      <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                          <h3 className="text-xl mb-5">
                            Your Marks: {currentData.newMarks}
                          </h3>
                          <h3 className="mb-10  text-justify">
                            Feedback : {currentData.feedback}
                          </h3>
                          <div className="modal-action">
                            <form method="dialog">
                              <button className="btn btn-sm md:btn-md">
                                Close
                              </button>
                            </form>
                          </div>
                        </div>
                      </dialog>
                    </th>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
};

export default MySubmit;
