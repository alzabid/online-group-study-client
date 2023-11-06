/* eslint-disable react/prop-types */

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const AssignmentsCard = ({ element }) => {
  const { _id, title, marks, category, date, description, image, level } =
    element;
  console.log(title, marks, category, date, description, image, level);

  return (
    <div>
      <Card className="h-[500px] overflow-hidden">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
        >
          <img className="w-full" src={image} alt="" />
        </CardHeader>
        <CardBody>
          <Typography variant="h4" color="blue-gray">
            <div className="flex justify-between items-center ">
              <h2 className="card-title"> {title}</h2>
              <div className="badge badge-lg badge-warning badge-outline">
                {level}
              </div>
            </div>
          </Typography>
          <Typography variant="lead" color="gray" className="mt-3 font-normal">
            <p>Total Marks: {marks}</p>
            <p> Submitted Date : {date}</p>
            <p> Subject Name : {category}</p>
          </Typography>
        </CardBody>
        <CardFooter className="flex items-center justify-between">
          <Link to={`/update/${_id}`}>
            <Button
              variant="text"
              className="flex items-center gap-2 btn-warning"
            >
              Update
            </Button>
          </Link>
          <Link to={`/details/${_id}`}>
            <Button
              variant="text"
              className="flex items-center gap-2 btn-warning"
            >
              View Assignment
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
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AssignmentsCard;
