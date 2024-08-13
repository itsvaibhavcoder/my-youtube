import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex overflow-x-auto whitespace-nowrap py-2">
      <Button name="All" />
      <Button name="Gaming" />
      <Button name="Songs" />
      <Button name="Live" />
      <Button name="Soccer" />
      <Button name="Cricket" />
      <Button name="Cooking" />
      <Button name="Valentines" />
      <Button name="Movies" />
      <Button name="Technology" />
      <Button name="Fitness" />
      <Button name="Travel" />
      <Button name="Comedy" />
      <Button name="Vlogs" />
      <Button name="News" />
      {/* <Button name="Tutorials" />
      <Button name="Music Videos" />
      <Button name="DIY" />
      <Button name="Food" />
      <Button name="ASMR" />
      <Button name="Pets" />
      <Button name="Science" />
      <Button name="Art" />
      <Button name="Motivation" />
      <Button name="Reviews" />
      <Button name="Unboxing" /> */}
    </div>
  );
};

export default ButtonList;
