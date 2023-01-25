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
