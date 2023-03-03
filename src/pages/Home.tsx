import React, { FC } from "react";

const Home: FC = () => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center h-screen  text-green-500">
      <h1 className="text-6xl">Welcome !</h1>
      <h1>You can go profile page with URL adress</h1>
      <h1>URL: http://localhost:5173/profile/id</h1>
    </div>
  );
};

export default Home;
