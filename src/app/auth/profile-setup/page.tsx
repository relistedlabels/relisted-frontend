import React from "react";
import ProfileSetUp from "../components/ProfileSetUp";
import { Protected } from "@/common/layer/Protected";

function page() {
  return (
    // <Protected>
      <div>
        <ProfileSetUp />
      </div>
    // </Protected>
  );
}

export default page;
