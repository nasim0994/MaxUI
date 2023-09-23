import ComponentList from "../../components/HomeComponents/ComponentList/ComponentList";
import Hero from "../../components/HomeComponents/Hero/Hero";
import PageList from "../../components/HomeComponents/PageList/PageList";
import PaymentGateways from "../../components/HomeComponents/PaymentGateways/PaymentGateways";
import Services from "../../components/HomeComponents/Services/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <PaymentGateways />
      <ComponentList />
      <PageList />
    </>
  );
}
