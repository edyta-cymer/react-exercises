import React from "react";
import photo from "../photos/fototwo-kopia.jpg";

const Avatar = () => {
  return (
    <div>
      <img src={photo} className="avatar" alt="author" />
    </div>
  );
};

export default Avatar;
