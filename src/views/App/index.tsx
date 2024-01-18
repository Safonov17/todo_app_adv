import React from 'react'
import { Input } from '../components/Input'
import { useToDoStore } from '../../data/stores/useToDoStore'
import styles from './index.module.scss'

export const App: React.FC = () => {
	const [tasks, createTask, updateTask, removeTask] = useToDoStore(state => [
		state.tasks,
		state.createTask,
		state.updateTask,
		state.removeTask
	])

	return (
		<article className={styles.article}>
			<h1 className={styles.articleTitle}>Список задач</h1>
			<section className={styles.articleSection}>
				<Input
					onAdd={title => {
						if (title) createTask(title)
					}}
				/>
			</section>
			<section className={styles.articleSection}></section>
		</article>
	)
}
