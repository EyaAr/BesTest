import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import Image from "@material-tailwind/react/Image";
import Progress from "@material-tailwind/react/Progress";
import Team1 from "assets/img/team-1-800x800.jpg";
import Team2 from "assets/img/team-2-800x800.jpg";
import Team3 from "assets/img/team-3-800x800.jpg";
import Team4 from "assets/img/team-4-470x470.png";
import Button from "@material-tailwind/react/Button";
import { get_parents_requests } from "JS/Actions/admin";
import { validate_parent } from "JS/Actions/admin";
import { deny_parent } from "JS/Actions/admin";

export default function Parent() {
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.adminReducer.errors);
  const ParentRequests = useSelector(
    (state) => state.adminReducer.ParentRequests
  );
  useEffect(() => {
    dispatch(get_parents_requests());
  }, [dispatch]);

  return (
    <Card>
      <CardHeader color="purple" contentPosition="left">
        <h2 className="text-white text-2xl">Parents requests</h2>
      </CardHeader>
      <CardBody>
        <a
          href="/ParentV"
          target="_blank"
          rel="noreferrer"
          className="text-purple-500 "
        >
          Parents Validated
        </a>
        <div className="overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Creation Date
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  FirstName
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  LastName
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Email
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Password
                </th>
                {/* <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Matricule
                                </th> */}
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Address
                </th>

                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  RIB
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left"></th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left"></th>
              </tr>
            </thead>
            {ParentRequests.length !== 0 ? (
              <tbody>
                {ParentRequests.map((el, i) => (
                  <tr key={i}>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      {el.createdAt.substr(0, 10)}
                    </th>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      {el.firstname}
                    </th>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      {el.lastname}
                    </th>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      {el.email}
                    </th>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      *****
                    </th>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      {el.address}
                    </th>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      {el.rib}
                    </th>
                    <th>
                      <Button
                        onClick={() => {
                          dispatch(validate_parent(el._id));
                          dispatch(get_parents_requests());
                        }}
                      >
                        Validate
                      </Button>
                    </th>
                    <th>
                      <Button
                        color="deepOrange"
                        onClick={() => {
                          dispatch(deny_parent(el._id));
                          dispatch(get_parents_requests());
                        }}
                      >
                        Deny
                      </Button>
                    </th>
                  </tr>
                ))}
              </tbody>
            ) : null}
          </table>
        </div>
      </CardBody>
    </Card>
  );
}
