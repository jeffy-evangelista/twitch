import { Flex } from "@chakra-ui/react";
import Chatbar from "components/Chatbar/Chatbar";
import Navbar from "components/Navbar.tsx/Navbar";
import Sidebar from "components/Sidebar/Sidebar";
import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Flex direction={"column"} minH={"100vh"}>
      <Navbar />
      <Sidebar />
      <main>
        <Flex bg={"gray"} mx={" 50px"}>
          {children}
        </Flex>
      </main>
      <Chatbar />
    </Flex>
  );
};
export default Layout;
