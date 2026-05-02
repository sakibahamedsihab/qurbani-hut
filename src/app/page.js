import Feature from "./components/Feature";
import Hero from "./components/Hero";
import QurbaniTips from "./components/QurbaniTips";

export default function Home() {
  return (
    <div>
      <section className="min-h-80vh">
        <Hero />
      </section>
      <Feature />
      <QurbaniTips />
    </div>
  );
}
