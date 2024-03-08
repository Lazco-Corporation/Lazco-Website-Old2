import Image from "next/image";

import { Box, Flex, Link } from "@radix-ui/themes";

import { linkData } from "@/config/homeLinks";

import style from "@/styles/home/HeaderBar.module.scss";

export default function HeaderBar() {
  return (
    <Box className={style.headerBar} width={"100%"}>
      <Flex align={"center"} justify={"between"} width={"100%"}>
        <Box className={style.logoName}>
          <Link href="/">
            <Image
              src={"/images/logo_transparent.png"}
              alt={"logo"}
              width={48}
              height={48}
              priority
            ></Image>
          </Link>
        </Box>
        <Box className={style.linkList}>
          <ul>
            {linkData.map((link) => (
              <li key={link.name}>
                <Link href={link.href} rel="noreferrer">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </Box>
      </Flex>
    </Box>
  );
}
