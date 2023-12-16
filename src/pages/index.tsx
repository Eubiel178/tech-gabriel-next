import {
  Header,
  DeveloperInfo,
  About,
  Skills,
  Projects,
  Contacts,
} from "@/components";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <DeveloperInfo />
        <About />
        <Skills />
        <Projects />
        <Contacts />
      </main>
    </>
  );
}
