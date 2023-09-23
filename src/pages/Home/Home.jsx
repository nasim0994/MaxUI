import Hero from "../../components/HomeComponents/Hero/Hero";
import PaymentGateways from "../../components/HomeComponents/PaymentGateways/PaymentGateways";
import Services from "../../components/HomeComponents/Services/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <PaymentGateways />
    </>
  );
}
