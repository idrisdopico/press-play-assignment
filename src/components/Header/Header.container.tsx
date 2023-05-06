import React from "react";
import Header, { HeaderProps } from "./Header";

const headerContainer = ({ title, imageSource }: HeaderProps) => <Header title={title} imageSource={imageSource} />

export default headerContainer;
