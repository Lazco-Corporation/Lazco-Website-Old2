// Radix-ui Components
import { Box } from "@radix-ui/themes";

// Components
import HeaderBar from "./HeaderBar";

// Styles
import style from "@/styles/home/Header.module.scss";

export default function Header() {
  return (
    <Box width={"100%"} className={style.Header}>
      <HeaderBar></HeaderBar>
    </Box>
  );
}
