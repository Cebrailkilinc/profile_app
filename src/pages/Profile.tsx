import React, { FC, useEffect } from "react";
import Content from "../Layout/content/Content";
import Pro from "../Layout/content/Pro";
import Navbar from "../Layout/navbar/Navbar";
import Sidebar from "../Layout/sidebar/Sidebar";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useParams } from "react-router-dom";
import { getAllPerson, getPersonById } from "../features/service/personService";

const Profile: FC = () => {
  const { isLoading } = useAppSelector((state) => state.person);
  console.log(isLoading);

  const dispatch = useAppDispatch();

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    dispatch(getAllPerson());
    dispatch(getPersonById(id));
  }, []);

  return (
    <div className="grid grid-cols-6">
      <div className="hidden lg:block lg:col-span-2 xl:col-span-1">
        <Sidebar />
      </div>
      <div className=" col-span-6 lg:col-span-4 xl:col-span-5 bg-[#F8FAFB]">
        <div>
          <Navbar />
        </div>
        <div className="grid grid-cols-6 gap-10 mt-5 px-3 sm:px-10">
          <div className="col-span-6 xl:col-span-4">
            <Content isLoading={isLoading} />
          </div>
          <div className=" hidden xl:block xl:col-span-2">
            <Pro />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
