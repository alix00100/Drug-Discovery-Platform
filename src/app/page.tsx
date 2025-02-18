import Index from "@/components/Dashboard";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title:
    "PyNome",
  description: "Revolutionizing drug discovery with AI—faster research, lower costs, and smarter therapeutics.",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <Index />
      </DefaultLayout>
    </>
  );
}
