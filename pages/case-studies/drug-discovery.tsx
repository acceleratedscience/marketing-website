import type { NextPage } from "next";
import { useState } from "react";
import { HighlyAvailable, ChooseHowToGetStarted, Security_02 } from "@carbon/pictograms-react";
// import LiteYouTubeEmbed from "react-lite-youtube-embed";

import Hero from "components/Hero";
import Head from "components/Head";
import Callout, { CalloutBody, CalloutHeading } from "components/Callout";
import Lightbox from "components/Lightbox";
import { FeatureList, FeatureListFeature } from "components/FeatureList";
import LearnMore, { LearnMoreCard } from "components/LearnMore";
import FormSignUp from "components/FormSignUp";

import heroImage from "media/979477161_a_surface_under_an_electron_microscope__photorealistic__matte_painting__colorful.png";
import videoSrc from "media/codeflare.mp4";

const Home: NextPage = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  return (
    <>
      <Head />
      <Hero src={heroImage} />
      {/* <Hero setLightboxOpen={setLightboxOpen} src={heroImage} /> */}
      {/* <Lightbox open={lightboxOpen} setOpen={setLightboxOpen}>
        <video
          onEnded={() => setLightboxOpen(false)}
          onPlay={() => {
            if ((window as any).plausible) {
              (window as any).plausible("Video played");
            }
          }}
          preload="auto"
          autoPlay
          playsInline
          controls
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </Lightbox> */}
      <Callout background="#161616" leftText="Case Study">
        <CalloutHeading>
          Intelligent target-to-lead discovery of new drugs
        </CalloutHeading>
        <CalloutBody>
          <p>A computational chemist working on the discovery of new medicines for atopic dermatitis and rheumatoid arthritis grappled with time-intensive manual processes at each phase of the discovery cycle. The Discovery Platform served as a central point to leverage tools to accelerate traditional discovery tasks with AI and automation. The scientist first wanted to screen and identify compounds with selectivity for his JAK1 protein target. Expert-based review of existing scientific literature was replaced by a natural language processing based function to explore a public knowledge base for relevant compounds using a single call within the SciDK. He then used one of the Platform’s ready-to-use generative AI models to design molecules based on binding affinities to his target to compare against his candidates derived from screening. He fed the top candidates into docking and molecular dynamics simulations to further optimize the leads. Whereas these tools usually call for extensive calibration and setup, he was able to access them in fewer lines of code using the Platform’s default setting, and run the workloads faster using the Platform’s advanced compute capabilities. What the user previously managed in a large code base full of manual steps was transformed into an intelligence-driven abbreviated workflow that helped the user get from target to optimized lead in a fraction of the time.</p>
        </CalloutBody>
      </Callout>

      <Callout background="#333333" color="#ffffff" leftText="Case Studies">
        {/* <CalloutHeading>
          Learn how these early adopters use the Discovery Platform.
        </CalloutHeading> */}
        <CalloutBody>
          <LearnMore>
            <LearnMoreCard href="/case-studies/drug-discovery">
               Intelligent target-to-lead discovery of new drugs
            </LearnMoreCard>
            <LearnMoreCard href="/case-studies/materials-discovery">
              Collaborative use of generative and foundation models for materials discovery
            </LearnMoreCard>
            <LearnMoreCard href="/case-studies/patient-monitoring">
               Secure data access for digital health research
            </LearnMoreCard>
          </LearnMore>
        </CalloutBody>
      </Callout>

      <Callout id="signup" background="#a7f0ba" color="#044317" leftText="Sign Up">
        <CalloutHeading>
          Sign up for the SciDK to run scientific workflows on the Discovery Platform today and get access to new features as they roll out.
        </CalloutHeading>
        <CalloutBody>
          <div id="signup-form"></div>
          <FormSignUp />
        </CalloutBody>
      </Callout>
    </>
  );
};

export default Home;
