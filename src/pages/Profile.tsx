import React, { FC } from "react";
import Content from "../Layout/content/Content";
import Pro from "../Layout/content/Pro";
import Navbar from "../Layout/navbar/Navbar";
import Sidebar from "../Layout/sidebar/Sidebar";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useParams } from "react-router-dom";

const Profile: FC = () => {
  const datas = useAppSelector((state) => state.person.users);
  console.log(datas);

  const id = useParams();
  console.log(IDBCursor);
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
            <Content />
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
