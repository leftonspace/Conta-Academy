import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { MethodSection } from "@/components/home/MethodSection";
import { ProofSection } from "@/components/home/ProofSection";
import { InvitationSection } from "@/components/home/InvitationSection";
import { AboutPreview } from "@/components/home/AboutPreview";
import { FinalCTA } from "@/components/home/FinalCTA";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ProblemSection />
      <MethodSection />
      <ProofSection />
      <InvitationSection />
      <AboutPreview />
      <FinalCTA />
    </Layout>
  );
};

export default Index;
