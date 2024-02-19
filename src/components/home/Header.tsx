// Components
import BannerText from "./BannerText";

// Radix-ui Components
import { Box } from "@radix-ui/themes";

// Styles
import style from "@/styles/home/Header.module.scss";

export default function Header() {
  return (
    <Box width={"100%"} className={style.Header}>
      <BannerText />
    </Box>
  );
}
