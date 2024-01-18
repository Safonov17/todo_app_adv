import { useState, useRef, useEffect } from 'react'
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
	const [isEditMode, setIsEditMode] = useState(false)
	const [value, setValue] = useState(title)
	const editTitleInputRef = useRef<HTMLInputElement>(null)

	useEffect(() => {
		if (isEditMode) editTitleInputRef?.current?.focus()
	}, [isEditMode])

	return (
		<div className={styles.task}>
			<label className={styles.taskLabel}>
				<input
					type="checkbox"
					disabled={isEditMode}
					checked={checked}
					className={styles.taskCheckbox}
					onChange={evt => {
						setChecked(evt.target.checked)
						if (evt.target.checked) onDone(id)
					}}
				/>
				{isEditMode ? (
					<input
						className={styles.taskTitleEdit}
						value={value}
						ref={editTitleInputRef}
						onChange={evt => setValue(evt.target.value)}
						onKeyDown={evt => {
							if (evt.key === 'Enter') {
								onEdite(id, value)
								setIsEditMode(false)
							}
						}}
					/>
				) : (
					<h3 className={styles.taskTitle}>{title}</h3>
				)}
			</label>

			{isEditMode ? (
				<button
					aria-label="Sace"
					className={styles.taskSave}
					onClick={() => {
						onEdite(id, value)
						setIsEditMode(false)
					}}
				/>
			) : (
				<button
					aria-label="Edit"
					className={styles.taskEdit}
					onClick={() => {
						setIsEditMode(true)
					}}
				/>
			)}
			<button
				aria-label="Remove"
				className={styles.taskRemove}
				onClick={() => {
					if (confirm('Вы уверены?')) onRemove(id)
				}}
			/>
		</div>
	)
}
