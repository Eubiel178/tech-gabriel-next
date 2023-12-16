import { Header, DeveloperInfo, About, Skills, Projects } from "@/components";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <DeveloperInfo />
        <About />
        <Skills />
        <Projects />
      </main>
    </>
  );
}
