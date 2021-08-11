import React from "react";
import { Image as ImageComponent } from "./styles";

interface ImageProps {
  w: string;
  h: string;
  uri: any;
}
export default function Image({ w, h, uri }: ImageProps) {
  return <ImageComponent w={w} h={h} source={uri} />;
}
