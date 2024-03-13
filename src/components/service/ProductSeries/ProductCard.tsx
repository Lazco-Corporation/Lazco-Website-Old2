import React from "react";

import { Text, Card, Inset } from "@radix-ui/themes";

// styles
import styles from "@/styles/service/ProductSeries/ProductCard.module.scss";
import Image from "next/image";

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function ProductCard({ title, children }: Props) {
  return (
    <div className={styles.ProductCard}>
      <Card size="2" style={{ maxWidth: 240 }}>
        <Inset clip="padding-box" side="top" pb="current">
          <Image
            src="/images/banner.jpg"
            alt="Bold typography"
            style={{
              display: "block",
              objectFit: "cover",
              width: "100%",
              height: 140,
              backgroundColor: "var(--gray-5)",
            }}
            width={50}
            height={50}
          />
        </Inset>
        <div className={styles.content}>
          <Text as="p" size="4">
            {title}
          </Text>
          {children}
        </div>
      </Card>
    </div>
  );
}
