import swal from "sweetalert";
import Container from "../components/Container";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const CreateAssignment = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [date, setDate] = useState(new Date());
  const handleAddAssignment = (event) => {
    event.preventDefault();

    const form = event.target;
    const title = form.title.value;
    const marks = form.marks.value;
    const category = form.category.value;
    // const date = form.date.value;
    const description = form.description.value;
    const image = form.image.value;
    const level = form.level.value;
    const email = user?.email;

    const newAssignment = {
      title,
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
    fetch("http://localhost:5000/assignments", {
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
          swal("Good job!", "successfully added an assignment!", "success");
        }
      });
       form.reset();
  };

  return (
    <Container>
      <div className="bg-[#F8F8F8] px-6 md:px-10 lg:px-52 py-10">
        <h2 className="text-3xl text-center  font-extrabold mb-5">
          Create an Assignment
        </h2>
        <form onSubmit={handleAddAssignment}>
          {/* row 1 */}
          <div className="md:flex gap-4 md:mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Assignment Title</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="title"
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
                <span className="label-text">Subject Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="category"
                  placeholder="Subject Name"
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
                  <DatePicker
                    selected={date}
                    onChange={(date) => setDate(date)}
                    className="input input-bordered w-full"
                  />
                  {/* <input
                  type="date"
                  name="date"
                  placeholder=""
                  className="input input-bordered w-full"
                /> */}
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
                <select name="level" className="select select-bordered w-full">
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
              value="Create"
              className="btn btn-outline w-44"
            />
          </div>
        </form>
      </div>
    </Container>
  );
};

export default CreateAssignment;
