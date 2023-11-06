import { Button } from "@material-tailwind/react";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import swal from "sweetalert";

const Details = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const assignments = useLoaderData();
  const { name, marks, category, date, description, image, level } =
    assignments;
  console.log(name, marks, category, date, description, image, level);

  const handleSubmitAssignment = (event) => {
    event.preventDefault();

    const form = event.target;
    const link = form.link.value;
    const note = form.note.value;
    const email = user?.email;

    const newAssignment = { link, note, email, name, marks, image, category };
    console.log(newAssignment);
    // send data to server
    fetch("http://localhost:5000/submits", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newAssignment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          swal("Good job!", "successfully submitted assignment!", "success");
        }
      });
       form.reset();
  };

  return (
    <div className="max-w-4xl mx-6 md:mx-10 lg:mx-auto py-10">
      <div className="card h-[500px] lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img className="w-[400px]" src={image} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {name}</h2>
          <p>Submitted Date : {date}</p>
          <p>Total Marks : {marks}</p>
          <p>{description}</p>
          <div className="card-actions justify-end">
            {/* Open the modal */}
            <Button
              onClick={() => document.getElementById("my_modal_5").showModal()}
              variant="text"
              className="flex items-center gap-2 btn-warning"
            >
              Take Assignment
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
            <form onSubmit={handleSubmitAssignment}>
              <dialog
                id="my_modal_5"
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box">
                  <h3 className="font-bold text-lg">Total Marks : {marks}</h3>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text"></span>
                    </label>
                    <input
                      name="link"
                      type="text"
                      className="input input-bordered w-full"
                      placeholder="Your Assignment Pdf link here..."
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text"></span>
                    </label>
                    <textarea
                      name="note"
                      className="textarea textarea-bordered h-24"
                      placeholder="Write a short note about your Assignment..."
                    ></textarea>
                  </div>
                  <div className="modal-action">
                    <input
                      type="submit"
                      method="dialog"
                      value="Submit"
                      className="btn"
                    />
                  </div>
                </div>
              </dialog>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
