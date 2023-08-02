// src/stories/HelloWorld.stories.js

import React from "react";

import ButtonCompoenty from "../Containers/ButtonCompoenty";

export default {
  title: "Components/Containers",
  component: ButtonCompoenty,
};

export const Button = {
  args: { children: "Button" },
};
