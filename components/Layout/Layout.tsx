import { ReactNode } from 'react'
import Nav from './Nav'
import Dev from '../Dev'
import { Footer, FooterListLink } from './Footer'

type Props = {
	children: ReactNode
}

const Layout = ({ children }: Props) => {
	return (
		<>
			<Dev />
			<Nav />
			<main>{children}</main>
			<Footer heading='Accelerate.Science'>
				<FooterListLink href='#signup' title='Sign Up'>
					Sign Up
				</FooterListLink>
				<FooterListLink href='/case-studies' title='Case Studies'>
					Case Studies
				</FooterListLink>
				<FooterListLink
					href='https://pages.github.ibm.com/Accelerated-Discovery/Discovery-Platform/user-guide/user-guide/'
					title='Documentation'
				>
					Documentation
				</FooterListLink>
			</Footer>
		</>
	)
}

export default Layout
