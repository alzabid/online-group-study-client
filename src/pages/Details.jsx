import { Button } from "@material-tailwind/react";
import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import swal from "sweetalert";

const Details = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  console.log(user);
  const assignments = useLoaderData();
  const { title, marks, category, date, description, image, level } =
    assignments;
  console.log(title, marks, category, date, description, image, level);
  const formateDate = date.slice(0, 10);

  const handleSubmitAssignment = (event) => {
    event.preventDefault();

    const form = event.target;
    const link = form.link.value;
    const note = form.note.value;
    const email = user?.email;
    const name = user?.displayName;

    const newAssignment = {
      link,
      note,
      email,
      name,
      title,
      marks,
      image,
      category,
    };
    console.log(newAssignment);
    // send data to server
    fetch("https://online-group-study-server-beta.vercel.app/submits", {
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
          navigate("/submits");
        }
      });
    form.reset();
  };
  const handleTakeAssignment = () => {
    const now = Date.now();

    if (new Date(date).getTime() < now) {
      swal("Error!", " Submit Deadline End, try another Assignment", "error");
    } else {
      document.getElementById("my_modal_1").showModal();
    }
  };

  return (
    <div className="max-w-3xl mx-6 md:mx-10 lg:mx-auto py-10">
      <div className="bg-base-100 shadow-xl">
        <figure>
          <img className="" src={image} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Title: {title}</h2>
          <p>Submission Date : {formateDate}</p>
          <p>Total Marks : {marks}</p>
          <p>{description}</p>
          <div className="card-actions justify-end">
            {/* Open the modal */}
            <Button
              onClick={handleTakeAssignment}
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
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Total Marks : {marks}</h3>
                <div className="">
                  <form onSubmit={handleSubmitAssignment} method="dialog">
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
                    <input
                      type="submit"
                      value="Submit"
                      className="btn mt-5 btn-outline w-full"
                    />
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
