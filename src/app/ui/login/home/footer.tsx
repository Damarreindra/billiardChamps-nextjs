"use client"
import { Button, Flex, Icon } from "@chakra-ui/react";
import Link from "next/link";
import { RiHome2Fill, RiStarFill, RiAddFill } from "react-icons/ri"; // Using Remix icons

export default async function Footer(){
    return(
        <Flex
        as="nav"
        justifyContent="center"
        alignItems="center"
        py={2}
        className="navbar navbar-expand-lg navbar-light bg-light sticky-bottom half-height-navbar"
      >
        <Flex className="container-fluid icons-container" justifyContent="space-between" px={5}>
          <Link href="/leaderboard">
            <Button variant="icon-circle" >
              <Icon as={RiStarFill} />
            </Button>
          </Link>
          <Button variant="icon-circle" >
            <Icon as={RiAddFill} />
          </Button>
          <Link href="/home">
            <Button variant="icon-circle">
              <Icon as={RiHome2Fill} />
            </Button>
          </Link>
        </Flex>
      </Flex>
    )

}