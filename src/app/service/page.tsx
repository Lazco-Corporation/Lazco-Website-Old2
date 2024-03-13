// Components
import Slogan from "@/components/service/Slogan/";
import ProductSeries from "@/components/service/ProductSeries";

export default function ServicePage() {
  return (
    <>
      <Slogan />
      <>
        <ProductSeries
          title="網站製作"
          description="網站製作"
          items={[]}
        ></ProductSeries>
      </>
    </>
  );
}
