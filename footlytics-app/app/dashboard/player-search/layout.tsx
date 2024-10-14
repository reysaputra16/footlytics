import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Player Search | Footlytics",
  description: "Footlytics Dashboard",
};

const layout = ({ children }: { children: any }) => {
  return children;
};

export default layout;
