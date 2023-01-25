import type { NextPage } from "next";
import { useState } from "react";
import { HighlyAvailable, ChooseHowToGetStarted, Security_02 } from "@carbon/pictograms-react";

import Hero from "components/Hero";
import Head from "components/Head";
import Callout, { CalloutBody, CalloutHeading } from "components/Callout";
import { FeatureList, FeatureListFeature } from "components/FeatureList";
import LearnMore, { LearnMoreCard } from "components/LearnMore";
import FormSignUp from "components/FormSignUp";

import heroImage from "media/979477161_a_surface_under_an_electron_microscope__photorealistic__matte_painting__colorful.png";

const Home: NextPage = () => {
  return (
    <>
      <Head />
      <Hero src={heroImage} />

      <Callout background="#161616" leftText="RXN for Chemistry" leftSubText="Language models for converting experimental procedures, predicting chemical reactions and retrosynthesis pathways, and automating chemical synthesis.">
        <CalloutHeading>
        Marketing page for on-platform RXN
      </CalloutHeading>
        <CalloutBody>

            <p>Tricky to balance what's going on here. We can use the grid below to point to press, open source work, etc.</p>

            <p>This page will be the only clear link to IBM throughout the site.</p>

            <p>Calls to action get a little muddy here. Do we want to focus on RXN in the hero and keep the Platform at the bottom of the page? Keep it RXN only?</p>

            <p>This website will not be public in the timeframe within which we are required to deploy. It will remain in stealth mode</p>

        </CalloutBody>
      </Callout>

      <Callout background="#333333" color="#ffffff" leftText="Case Studies">
        {/* <CalloutHeading>
          Learn how these early adopters use the Discovery Platform.
        </CalloutHeading> */}
        <CalloutBody>
          <LearnMore>
            <LearnMoreCard href="/case-studies/drug-discovery">
              Faster computation for deep learning-based modeling for drug discovery
            </LearnMoreCard>
            <LearnMoreCard href="/case-studies/materials-discovery">
              Collaborative use of generative and foundation models for materials discovery
            </LearnMoreCard>
            <LearnMoreCard href="/case-studies/patient-monitoring">
              Unified and compliant multi-modal data integration and modeling for patient pain reduction
            </LearnMoreCard>
          </LearnMore>
        </CalloutBody>
      </Callout>

      <Callout id="signup" background="#a7f0ba" color="#044317" leftText="Sign Up">
        <CalloutHeading>
          Sign up for the experimental API to run scientific workflows on the Discovery Platform today and get access to new features as they roll out.
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
