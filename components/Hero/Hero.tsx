import styles from './Hero.module.scss'
import Image from 'next/future/image'
import { ArrowRight, Video } from '@carbon/icons-react'
import { Grid } from 'components/Grid'
import { StaticImageData } from 'next/image'
import cx from 'classnames'

const Hero = ({ src }: { src: StaticImageData }) => {
	return (
		<section className={styles.container}>
			<div className={styles.imageWrapper}>
				<Image
					className={styles.image}
					placeholder='blur'
					priority
					src={src}
					alt='A surface under an electron microscope'
				/>
			</div>
			<Grid className={styles.grid}>
				<div className={styles.title}>
					Focus on science, <br />
					not your code.
				</div>
				<div className={styles.cta}>
					<p className={styles.pitch}>
						Use the Discovery Platform to automate workflows with
						built-for-science data, compute, and collaboration
						capabilities.
					</p>
					<div className={styles.actions}>
						<a
							href='https://pages.github.ibm.com/Accelerated-Discovery/Discovery-Platform/user-guide/user-guide/'
							className={cx(styles.action)}
						>
							<span className={styles.heading}>
								Read the Docs
							</span>

							<ArrowRight
								width='24'
								height='24'
								className={styles.arrow}
							/>
						</a>
						<a
							href='#signup'
							className={cx(styles.action, styles.primary)}
						>
							<span className={styles.heading}>Sign Up</span>

							<ArrowRight
								width='24'
								height='24'
								className={styles.arrow}
							/>
						</a>
					</div>
				</div>
			</Grid>
		</section>
	)
}

export default Hero
