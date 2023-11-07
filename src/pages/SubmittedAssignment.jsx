import { useState } from "react";
import { useEffect } from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";

const SubmittedAssignment = () => {
  const [submits, setSubmits] = useState([]);
  const [currentData, setCurrentData] = useState({});
  const [newMarks, setNewMarks] = useState("");
  const [feedback, setFeedback] = useState("");
  console.log(newMarks, feedback);

  const url = "http://localhost:5000/submits";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSubmits(data));
  }, [url]);

  const handleConfirm = (id) => {
    

    fetch(`http://localhost:5000/submits/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm", newMarks, feedback }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          // update state
          const remaining = submits.filter((submit) => submit._id !== id);
          const updated = submits.find((submit) => submit._id === id);

          updated.status = "confirm";
          updated.newMarks = newMarks;
          updated.feedback = feedback;
          const newSubmits = [updated, ...remaining];
          setSubmits(newSubmits);
        }
      });
  };

  return (
    <div>
      <Container>
        <h2 className="md:text-3xl text-center font-semibold py-10">
          Total Submitted Assignment: {submits.length}
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
                <th>Give Mark</th>
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
                          Pending.....
                        </button>
                      )}
                    </th>
                    <th>
                      {/* Open the modal */}

                      {submit.status !== "confirm" && (
                        <button
                          onClick={() => {
                            setCurrentData(submit);
                            window.document
                              .getElementById("my_modal_5")
                              .showModal();
                          }}
                          className="btn btn-primary btn-xs"
                        >
                          Give Marks
                        </button>
                      )}
                      <dialog id="my_modal_5" className="modal sm:modal-middle">
                        <div className="modal-box">
                          <h3 className="mb-5">
                            Pdf Link :
                            <Link
                              className="link text-primary"
                              to={currentData.link}
                            >
                              {currentData.link}
                            </Link>
                          </h3>
                          <h3 className="mb-10  text-justify">
                            Note :{" "}
                            <span className="text-xs">{currentData.note}</span>
                          </h3>

                          <div className="form-control w-full">
                            <label className="label">
                              <span className="label-text"> Give Marks </span>
                            </label>
                            <input
                              onChange={(e) => setNewMarks(e.target.value)}
                              name="newMarks"
                              type="text"
                              className="input input-bordered w-full"
                              placeholder=" Give Marks"
                              defaultValue={currentData.marks}
                            />
                          </div>
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text"> Feedback </span>
                            </label>
                            <textarea
                              onChange={(e) => setFeedback(e.target.value)}
                              name="feedback"
                              className="textarea textarea-bordered h-24"
                              placeholder="Give feedback..."
                            ></textarea>
                          </div>

                          <div className="modal-action">
                            <input
                              onClick={() => handleConfirm(currentData._id)}
                              type="submit"
                              value="Submit"
                              className="btn btn-sm md:btn-md"
                            />
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

export default SubmittedAssignment;
