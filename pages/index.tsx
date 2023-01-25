// React
import type { NextPage } from 'next'
import { useState } from 'react'
// import LiteYouTubeEmbed from "react-lite-youtube-embed";

// Carbon
import {
	HighlyAvailable,
	ChooseHowToGetStarted,
	Security_02,
	CollaborateWithTeams,
	Workflows,
} from '@carbon/pictograms-react'
import { Tabs, TabList, Tab, TabPanel, TabPanels } from '@carbon/react'

// Components
import Hero from 'components/Hero'
import Head from 'components/Head'
import Callout, { CalloutBody, CalloutHeading } from 'components/Callout'
import Lightbox from 'components/Lightbox'
import { FeatureList, FeatureListFeature } from 'components/FeatureList'
import LearnMore, { LearnMoreCard } from 'components/LearnMore'
import Cards, { CardsCard } from 'components/Cards'
import FormSignUp from 'components/FormSignUp'

// Media
import heroImage from 'media/979477161_a_surface_under_an_electron_microscope__photorealistic__matte_painting__colorful.png'
import videoSrc from 'media/codeflare.mp4'

const Home: NextPage = () => {
	const [lightboxOpen, setLightboxOpen] = useState(false)
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

			<Callout
				background='#161616'
				leftText='Run multi-step early discovery workflows with prebuilt, trainable AI tools.'
				leftSubText=''
				offsetLeft={true}
				offsetRight={true}
				snugBottom={true}
			>
				<CalloutBody>
					<div style={{ width: '100%', minHeight: '15rem' }}>
						<Tabs>
							<TabList
								aria-label='List of tabs'
								contained={false}
							>
								<Tab>1. Get started</Tab>
								<Tab>2. Set up your model</Tab>
								<Tab>3. Run the analysis</Tab>
								<Tab>4. Work with results</Tab>
							</TabList>
							<TabPanels>
								<TabPanel>
									<p>
										Install the SciDK for Python and start a
										new project.
									</p>
								</TabPanel>
								<TabPanel>
									<p>
										Choose a built-in model for your
										discovery task. Generate new molecule
										designs, search knowledge-based
										datasets, predict chemical reactions,
										assess patient data, or other tasks
										served by models in the external
										ecosystem. Pull data from the catalog to
										train and tune your model.
									</p>
								</TabPanel>
								<TabPanel>
									<p>
										Run an inference with advanced compute
										resources purpose-built for scientific
										workloads.
									</p>
								</TabPanel>
								<TabPanel>
									<p>
										Narrow leads through additional analyses
										like simulation of properties, energies,
										docking profiles or system models.
										Capture data processing, model
										configurations and results in the data
										catalog for reproducible reruns.
									</p>
								</TabPanel>
							</TabPanels>
						</Tabs>
					</div>
				</CalloutBody>
			</Callout>

			{/* <div style={{ width: '100%' }}>
        <Cards>
          <CardsCard icon={Security_02}>
            Simpler data management
            <p>Process sensitive information wherever and however you want. Access large remote datasets as fast as data on your hard-drive.</p>
          </CardsCard>
          <CardsCard icon={HighlyAvailable}>
            More efficient compute
            <p>Achieve faster execution times and expand beyond traditional HPC.</p>
          </CardsCard>
          <CardsCard icon={CollaborateWithTeams}>
            Cross-functional collaboration
            <p>Bring science and informatics teams together in a common view.</p>
          </CardsCard>
          <CardsCard icon={ChooseHowToGetStarted}>
            Built-in reproducibility
            <p>Save, store and share experiments to rerun or refine.</p>
          </CardsCard>
        </Cards>
    </div> */}

			<Callout
				background='#161616'
				leftText='Create, scale, and repeat your experiments.'
			>
				<CalloutBody>
					<FeatureList>
						<FeatureListFeature icon={Security_02}>
							Simpler data management
							<p>
								Access models for discovery tasks and datasets
								for model training through the data catalog
							</p>
						</FeatureListFeature>
						<FeatureListFeature icon={CollaborateWithTeams}>
							Easy-to-use AI tools
							<p>
								Train and run built-in AI and analytical models
								with preconfigured settings, parameters, and
								pipelines
							</p>
						</FeatureListFeature>
						<FeatureListFeature icon={HighlyAvailable}>
							More efficient compute
							<p>
								Autoscale compute to power AI and other
								intensive scientific workloads
							</p>
						</FeatureListFeature>
						<FeatureListFeature icon={ChooseHowToGetStarted}>
							Built-in reproducibility
							<p>
								Automatically record experiment artifacts
								including data tracking, versioning, and results
							</p>
						</FeatureListFeature>
					</FeatureList>
				</CalloutBody>
			</Callout>

			<Callout
				background='#333333'
				color='#ffffff'
				leftText='Case Studies'
			>
				{/* <CalloutHeading>
          Learn how these early adopters use the Discovery Platform.
        </CalloutHeading> */}
				<CalloutBody>
					<LearnMore>
						<LearnMoreCard href='/case-studies/drug-discovery'>
							Intelligent target-to-lead discovery of new drugs
						</LearnMoreCard>
						<LearnMoreCard href='/case-studies/materials-discovery'>
							Collaborative use of generative and foundation
							models for materials discovery
						</LearnMoreCard>
						<LearnMoreCard href='/case-studies/patient-monitoring'>
							Secure data access for digital health research
						</LearnMoreCard>
					</LearnMore>
				</CalloutBody>
			</Callout>

			<Callout
				id='signup'
				background='#a7f0ba'
				color='#044317'
				leftText='Sign Up'
				limitRightPanel={true}
			>
				<CalloutBody>
					<div>
						Sign up for the SciDK to run scientific workflows on the
						Discovery Platform today and get access to new features
						as they roll out.
					</div>
					<div id='signup-form'></div>
					<FormSignUp />
				</CalloutBody>
			</Callout>
		</>
	)
}

export default Home
