import { Text, Box, Heading, Link, Button } from "@radix-ui/themes";

// Styles
import style from "@/styles/home/BannerText.module.scss";

export default function BannerText() {
  return (
    <Box className={style.BannerText}>
      <Heading size={"8"} className={style.Heading}>
        規劃。開發。提供網路服務解決方案
      </Heading>
      <Heading size={"6"} className={style.SubHeading}>
        <Text>提供網頁設計，開發，與託管</Text>
      </Heading>
      <Link href="/contact">
        <Button variant="solid" color="iris" size={"4"}>
          免費諮詢
        </Button>
      </Link>
    </Box>
  );
}
