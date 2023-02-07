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
	SelectRange,
	ErlenmeyerFlask,
	HeatMap_02,
	Customizable,
} from '@carbon/pictograms-react'
import { Tabs, TabList, Tab, TabPanel, TabPanels } from '@carbon/react'

// Components
import Hero from 'components/Hero'
import Head from 'components/Head'
import Callout, { CalloutBody, CalloutCTA, CalloutHeading } from 'components/Callout'
import Lightbox from 'components/Lightbox'
import { FeatureList, FeatureListFeature } from 'components/FeatureList'
import LearnMore, { LearnMoreCard } from 'components/LearnMore'
import Cards, { CardsCard } from 'components/Cards'
import FormSignUp from 'components/FormSignUp'

// Media
import heroImage from 'media/979477161_a_surface_under_an_electron_microscope__photorealistic__matte_painting__colorful.png'

const Home: NextPage = () => {
	return (
		<>
			<Head />
			<Hero src={heroImage} />

			<Cards headline="Prebuilt, trainable AI models for molecular discovery.">
				<CardsCard icon={HeatMap_02}>
					Compound Generation
					<p>Generate new molecule designs based on target properties or target a target protein.</p>
				</CardsCard>
				<CardsCard icon={SelectRange}>
					Compound Selection
					<p>Simulate properties and structures of candidate molecules.</p>
				</CardsCard>
				<CardsCard icon={ErlenmeyerFlask}>
					Compound Synthesis
					<p>Predict retro synthetic routes and forward reactions.</p>
				</CardsCard>
				<CardsCard icon={Customizable}>
					Bring Your Own
					<p>Easily upload your model and make it available via API.</p>
				</CardsCard>
			</Cards>

			<Callout
				background='#161616'
				leftText='How the Discovery Platform works.'
				leftSubText='Work from the command line using SciDK, our built-for-science developer kit.'
				offsetLeft={false}
				offsetRight={true}
				snugBottom={true}
				snugTop={true}
			>
				<CalloutBody>
					<p className="codesample">
						<span className="caption">Install SciDK and create a project.</span>
						pip install scidk<br />
						scidk new 'project_name'
						<span className="caption bump">Search public data and upload your own.</span>
						scidk chemistry search --index_key pubmed 'keyword'<br />
						scidk data upload training-data.txt 'training_data'
					</p>
				</CalloutBody>
			</Callout>

			<Callout
				background='#161616'
				leftText='Select and train'
				leftSubText='Choose from a library of built-in models, or use your own.'
				offsetLeft={false}
				offsetRight={true}
				snugBottom={true}
				snugTop={true}
			>
				<CalloutBody>
					<p className="codesample">
						<span className="caption">Use a pre-trained model or train your own.</span>
						scidk chemistry training_data train model
						<span className="caption bump">Set your target for compound generation.</span>
						scidk data upload target.txt 'target'
					</p>
				</CalloutBody>
			</Callout>

			<Callout
				background='#161616'
				leftText='Run and repeat'
				leftSubText='Run a prediction or inference with on-demand, auto-scaling advanced compute resources.'
				offsetLeft={false}
				offsetRight={true}
				snugBottom={true}
				snugTop={true}
			>
				<CalloutBody>
					<p className="codesample">
						<span className="caption">Generate candidate molecules.</span>
						scidk chemistry target generate PaccMannVAE -n 5
						<span className="caption bump">Results:<br />
						CN(Cc1cccc(c1)C(=O)c1cc(C)c2)cc1O2<br />
						O=NO<br />
						NNCCC1COcc2ccC3(=CN(C2)CCNc13)<br />
						COC(=O)CNC(=O)Nc1cccc(c1)N(O)<br />
						CC(C)c1c[nH]cc1S(=O)(=O)NCCCN(COCCNCC)</span>
					</p>
				</CalloutBody>
			</Callout>

			<Callout
				background='#161616'
				leftText='Collaborate and replicate'
				leftSubText='Save workflows to the data repository, including metadata for exact reproducibility.'
				offsetLeft={false}
				offsetRight={true}
				snugBottom={false}
				snugTop={true}
			>
				<CalloutBody>
					<p className="codesample">
						<span className="caption">Re-run this experiment.</span>
						scidk project_name run
						<span className="caption bump">Share results with collaborators</span>
						scidk project_name invite you@yours.com
						</p>
				</CalloutBody>
			</Callout>

			<Callout
				background='#333333'
				leftText='Try chemical synthesis models.'
				leftSubText='Use AI to predict outcomes of chemical reactions for optimized synthesis methods.'
				offsetLeft={false}
				offsetRight={true}
				snugBottom={false}
			>
				<CalloutBody>
					<img src="https://rxn.app.accelerate.science/images/rxn-app.png" alt="RXN app screenshot" />
				</CalloutBody>
				
				<CalloutCTA href="https://rxn.app.accelerate.science/">Get Started</CalloutCTA>
			</Callout>

			{/*<Callout
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
			</Callout>*/}

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
							Powerful compute
							<p>
								Autoscale compute with Quantum and AI-accelerated hardware.
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
