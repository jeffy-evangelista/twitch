import { Flex, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { Heart } from "react-feather";
import { ArrowLeft } from "react-feather";
import Channels from "./Channels";
type SidebarProps = {};

const Sidebar: React.FC<SidebarProps> = () => {
  const channels = [
    {
      name: "YapzOrdota",
      game: "Dota 2",
      viewers: "2.8K",
    },
    {
      name: "BLAST",
      game: "Counter-Strike: Global Offensive",
      viewers: "33.2K",
    },
    {
      name: "AdmiralBulldog",
      game: "Just Chatting",
      viewers: "4.6K",
    },
    {
      name: "Riot Games",
      game: "League of legends",
      viewers: "21.6K",
    },
  ];
  return (
    <Flex
      border={"1px solid black"}
      pos={"absolute"}
      h={"calc(100vh - 50px)"}
      mt={"50px"}
      w={{ base: "50px", xl: "240px" }}
      flexDirection={"column"}
      alignItems={"center"}
    >
      {/* Header */}
      <Flex
        w={"full"}
        p={"5px 10px"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Text fontWeight={"bold"} fontSize={"13px"} textTransform={"uppercase"}>
          recommended channels
        </Text>

        <ArrowLeft />
      </Flex>
      <IconButton
        display={{ base: "flex", xl: "none" }}
        bg={"transparent"}
        boxSize={"30px"}
        icon={<Heart />}
        aria-label={""}
      />
      {channels.map((channel, index) => {
        return <Channels key={`channel-${index}`} {...channel} />;
      })}
      <Flex w={"full"} p={"5px 10px"}>
        <Text fontSize={"12px"} color={"brand.PrimaryColor"}>
          Show More
        </Text>
      </Flex>
    </Flex>
  );
};
export default Sidebar;
