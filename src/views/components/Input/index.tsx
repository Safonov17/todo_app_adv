import { useState, useCallback } from 'react'
import styles from './index.module.scss'

interface InputProps {
	onAdd: (title: string) => void
}

export const Input: React.FC<InputProps> = ({ onAdd }) => {
	const [inputValue, setinputValue] = useState('')
	const addTask = useCallback(() => {
		onAdd(inputValue)
		setinputValue('')
	}, [inputValue])

	return (
		<div className={styles.input}>
			<input
				className={styles.inputValue}
				type="text"
				value={inputValue}
				onChange={evt => setinputValue(evt.target.value)}
				onKeyDown={evt => {
					if (evt.key === 'Enter') addTask()
				}}
				placeholder="Название задачи"
			/>
			<button
				className={styles.inputButton}
				onClick={addTask}
				aria-label="Add"
			></button>
		</div>
	)
}
