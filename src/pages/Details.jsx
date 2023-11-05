import { useLoaderData } from "react-router-dom";


const Details = () => {
    const assignments = useLoaderData();
    const { name, marks, category, date, description, image, level } = assignments;
    console.log(name, marks, category, date, description, image, level);

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
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Details;