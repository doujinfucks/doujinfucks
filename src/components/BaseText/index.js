import React from "react";

export default function BaseText({ ...props }) {
  return <p style={{ color: "black" }}>{props.children}</p>;
}
