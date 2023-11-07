/* eslint-disable react/prop-types */

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const AssignmentsCard = ({ element, handleDelete }) => {
  const { user } = useContext(AuthContext);

  const { _id, title, marks, category, date, image, level } = element;
 
   const formateDate= date.slice(0,10)

  return (
    <div>
      <Card className="h-[600px] overflow-hidden">
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
            <h2 className="card-title"> {title}</h2>
          </Typography>
          <Typography variant="lead" color="gray" className="mt-3 font-normal">
            <div className="flex justify-between items-center ">
              <p>Total Marks: {marks}</p>
              <div className="badge badge-lg badge-primary badge-outline">
                {level}
              </div>
            </div>
            <p> Submitted Date : {formateDate}</p>
            <p> Subject Name : {category}</p>
          </Typography>
        </CardBody>
        <CardFooter className=" flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <Link to={`/update/${_id}`}>
              <Button
                // disabled={user?.email !== element?.email}
                variant="text"
                className="flex items-center gap-2 btn-accent"
              >
                Update
              </Button>
            </Link>
            <Button
              disabled={user?.email !== element?.email}
              onClick={() => handleDelete(_id)}
              variant="text"
              className="flex items-center gap-2 btn-warning"
            >
              Delete
            </Button>
          </div>
          <Link to={`/details/${_id}`}>
            <Button
              variant="text"
              className="flex items-center justify-between gap-2  border border-black w-full"
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
