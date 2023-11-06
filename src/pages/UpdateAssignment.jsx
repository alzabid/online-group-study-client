import { useContext } from "react";
import Container from "../components/Container";
import { AuthContext } from "../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const UpdateAssignment = () => {
  const assignments = useLoaderData();
  const { _id, name, marks, category, date, description, image, level } = assignments;

  const { user } = useContext(AuthContext);
  console.log(user);

  const handleUpdateAssignment = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const marks = form.marks.value;
    const category = form.category.value;
    const date = form.date.value;
    const description = form.description.value;
    const image = form.image.value;
    const level = form.level.value;
    const email = user?.email;

    const newAssignment = {
      name,
      email,
      marks,
      category,
      date,
      description,
      image,
      level,
    };
    console.log(newAssignment);

    // send data to server
    fetch(`http://localhost:5000/assignments/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newAssignment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          swal("Good job!", "successfully Updated Assignment!", "success");
        }
      });

    //    form.reset();
  };
  return (
    <Container>
      <div className="bg-base-100 px-6 md:px-10 lg:px-52 py-10">
        <h2 className="text-3xl text-center  font-extrabold mb-5">
          Update an Assignment
        </h2>
        <form onSubmit={handleUpdateAssignment}>
          {/* row 1 */}
          <div className="md:flex gap-4 md:mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Assignment Title</span>
              </label>
              <label className="input-group">
                <input
                  defaultValue={name}
                  type="text"
                  name="name"
                  placeholder="Assignment Title"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Assignment Marks</span>
              </label>
              <label className="input-group">
                <input
                  defaultValue={marks}
                  type="text"
                  name="marks"
                  placeholder="Assignment Marks"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* row 2 */}
          <div className="md:flex gap-4 md:mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="input-group">
                <input
                  defaultValue={category}
                  type="text"
                  name="category"
                  placeholder="Category"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="md:w-1/2">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <label className="input-group">
                  <input
                    defaultValue={date}
                    type="date"
                    name="date"
                    placeholder=""
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
          </div>
          {/* row 3 */}
          <div className="md:flex gap-4 md:mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Assignment Description</span>
              </label>
              <label className="input-group">
                <input
                  defaultValue={description}
                  type="text"
                  name="description"
                  placeholder="Assignment Description"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="md:w-1/2">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">
                    Assignment Difficulty Level
                  </span>
                </label>
                <select
                  defaultValue={level}
                  name="level"
                  className="select select-bordered w-full"
                >
                  <option disabled selected>
                    Pick one
                  </option>
                  <option>Easy</option>
                  <option>Medium</option>
                  <option>Hard</option>
                </select>
              </div>
            </div>
          </div>
          {/* row 4 */}
          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Thumbnail Image URL</span>
              </label>
              <label className="input-group">
                <input
                  defaultValue={image}
                  type="text"
                  name="image"
                  placeholder="Thumbnail Image URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className=" flex justify-center items-center mb-8">
            <input
              type="submit"
              value="Update"
              className="btn btn-outline w-44"
            />
          </div>
        </form>
      </div>
    </Container>
  );
};

export default UpdateAssignment;
