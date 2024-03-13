import { Text } from "@radix-ui/themes";
import ProductCard from "@/components/service/ProductSeries/ProductCard";

// styles
import styles from "@/styles/service/ProductSeries/ProductSeries.module.scss";

interface Props {
  title: string;
  description: string;
  items: any;
}

export default function ProductSeries({ title, description, items }: Props) {
  return (
    <div className={styles.ProductSeries}>
      <>
        <Text size={"8"} className={styles.Heading}>
          {title}
        </Text>
        <Text size={"4"} color="gray">
          {description}
        </Text>
      </>
      <div className={styles.cards}>
        <ProductCard title="Bold typography">123</ProductCard>
      </div>
    </div>
  );
}
