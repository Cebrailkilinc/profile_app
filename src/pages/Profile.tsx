import React, { FC, useState, useEffect, Suspense } from "react";

//COMPONENTS
import Navbar from "../layout/navbar/Navbar";
import Content from "../layout/content/Content";
import Pro from "../layout/content/Pro";
import Sidebar from "../layout/sidebar/Sidebar";

//STATE MANAGEMENT
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useParams } from "react-router-dom";
import { getAllPerson, getPersonById } from "../features/service/personService";

const Profile: FC = () => {
  // Get redux data
  const { isLoading, errorMessage, currentUser } = useAppSelector(
    (state) => state.person
  );
  const { isOpenMenu } = useAppSelector((state) => state.menu);
  console.log(isOpenMenu + " şuan bu");

  const dispatch = useAppDispatch();

  const { id } = useParams();

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
        <div
          className={
            !isOpenMenu
              ? "block ld:hidden fixed top-0 left-0 w-[55%] h-full bg-indigo-100  duration-1000  "
              : "fixed h-full w-[55%] top-0 left-[-100%] duration-1000  "
          }
        >
          <Sidebar />
        </div>
        <div>
          <Navbar />
        </div>
        <div className="grid grid-cols-6 gap-10 mt-5 px-3 sm:px-10">
          <div className="col-span-6 xl:col-span-4">
            <Content
              isLoading={isLoading}
              errorMessage={errorMessage}
              currentUser={currentUser}
            />
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
