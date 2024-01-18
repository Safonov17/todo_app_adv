import { useState } from 'react'
import styles from './index.module.scss'

interface TaskProps {
	id: string
	title: string
	onDone: (id: string) => void
	onEdite: (id: string, title: string) => void
	onRemove: (id: string) => void
}

export const Task: React.FC<TaskProps> = ({
	id,
	onDone,
	onEdite,
	onRemove,
	title
}) => {
	const [checked, setChecked] = useState(false)

	return (
		<div className={styles.task}>
			<label className={styles.taskLabel}>
				<input
					type="checkbox"
					checked={checked}
					className={styles.taskCheckbox}
					onChange={evt => {
						setChecked(evt.target.checked)
						if (evt.target.checked) onDone(id)
					}}
				/>
				<h3 className={styles.taskTitle}>{title}</h3>
				<button
					aria-label="Edit"
					className={styles.taslEdit}
					onClick={() => {}}
				/>
				<button
					aria-label="Remove"
					className={styles.taslRemove}
					onClick={() => {
						if (confirm('Вы уверены?')) onRemove(id)
					}}
				/>
			</label>
		</div>
	)
}
