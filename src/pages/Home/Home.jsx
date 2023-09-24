import Benefits from "../../components/HomeComponents/Benefits/Benefits";
// import ClientSlider from "../../components/HomeComponents/ClientSlider/ClientSlider";
import Collection from "../../components/HomeComponents/Collection/Collection";
import ComponentList from "../../components/HomeComponents/ComponentList/ComponentList";
import Hero from "../../components/HomeComponents/Hero/Hero";
import PageList from "../../components/HomeComponents/PageList/PageList";
import PaymentGateways from "../../components/HomeComponents/PaymentGateways/PaymentGateways";
import Services from "../../components/HomeComponents/Services/Services";
import TopSlider from "../../components/HomeComponents/TopSlider/TopSlider";

export default function Home() {
  return (
    <>
      <Hero />
      <TopSlider />
      <Services />
      <PaymentGateways />
      <ComponentList />
      <PageList />
      {/* <ClientSlider /> */}
      <Benefits />
      <Collection />
    </>
  );
}
