// src/stories/HelloWorld.stories.js

import React from "react";

import ContactUs from "../Containers/ContactUs";

export default {
  title: "Components/Containers",
  component: ContactUs,
};

export const contactUsComp = () => <ContactUs />;
