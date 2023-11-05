import Container from "../components/Container";

const CreateAssignment = () => {
  return (
    <Container>
      <div className="bg-base-100 px-6 md:px-10 lg:px-52 py-10">
        <h2 className="text-3xl text-center  font-extrabold mb-5">
          Create an Assignment
        </h2>
        <form>
          {/* 1 */}
          <div className="md:flex gap-4 md:mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Assignment Title</span>
              </label>
              <label className="input-group">
                <input
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
                  type="text"
                  name="marks"
                  placeholder="Assignment Marks"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* 2 */}
          <div className="md:flex gap-4 md:mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="category"
                  placeholder="Category"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <label className="input-group">
                <input
                  type="date"
                  name="price"
                  placeholder="Price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* 3 */}
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
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Difficulty level</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="rating"
                  placeholder="Difficulty level"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* 4 */}
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
            <input type="submit" value="Add" className="btn btn-outline w-44" />
          </div>
        </form>
      </div>
    </Container>
  );
};

export default CreateAssignment;
