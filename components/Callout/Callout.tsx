import { Grid } from 'components/Grid'
import { ReactNode } from 'react'
import styles from './Callout.module.scss'
import cx from 'classnames'

type Props = {
	leftText: string
	leftSubText?: string
	children: ReactNode
	background?: string
	color?: string
	id?: string
	// Offset is used to align the text with the other modules.
	// Sometimes elements like buttons or panels have some padding
	// and the offset makes up for that padding.
	offsetLeft?: boolean // This offsets the left edge of the right panel with -1rem
	offsetRight?: boolean // This offsets the right edge of the right panel with -1rem
	// Removes the bottom padding of a panel
	// --> when two panals have the same color, the gap will become too big
	snugBottom?: boolean
	// This sets a max-width to the right panel for content
	// that doesn't look very good spread out.
	limitRightPanel?: boolean
}

const Callout = ({
	id,
	leftText,
	leftSubText = '',
	children,
	background = '#002d9c',
	color = '#ffffff',
	offsetLeft = false,
	offsetRight = false,
	snugBottom = false,
	limitRightPanel = undefined,
	...rest
}: Props) => {
	return (
		<div
			id={id}
			style={{ background, color }}
			className={cx(
				styles.wrapper,
				snugBottom ? styles.snugBottom : null
			)}
			{...rest}
		>
			<Grid style={{ background }}>
				<div className={styles.left}>
					<span className={styles.heading}>{leftText}</span>
					<span className={styles.copy}>{leftSubText}</span>
				</div>

				<div
					className={cx(
						styles.right,
						offsetLeft ? styles.offsetLeft : null,
						offsetRight ? styles.offsetRight : null,
						limitRightPanel ? styles.limitWidth : null
					)}
				>
					{children}
				</div>
			</Grid>
		</div>
	)
}

export const CalloutHeading = ({ children }: { children: ReactNode }) => {
	return <span className={styles.heading}>{children}</span>
}

export const CalloutBody = ({ children }: { children: ReactNode }) => {
	return <div className={styles.body}>{children}</div>
}

export default Callout
