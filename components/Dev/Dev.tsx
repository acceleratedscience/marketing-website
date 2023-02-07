import styles from './Dev.module.scss'
import { useState } from 'react'

export default function Dev() {
	const [gridToggle, setGridToggle] = useState(false)
	const isProd = process.env.NODE_ENV === "production";
	if (!isProd) {
		if (gridToggle) {
			return (
				<>
					<button
						className={styles.toggle}
						onClick={() => setGridToggle(!gridToggle)}
					>
						grid
					</button>
					<div className={styles.refGrid}>
						<div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
						</div>
					</div>
				</>
			)
		} else {
			return (
				<button
					className={styles.toggle}
					onClick={() => setGridToggle(!gridToggle)}
				>
					grid
				</button>
			)
		}
	} else {
		// don't show this in production
		return null
	}
}
