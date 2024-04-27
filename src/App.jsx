import styles from './App.module.css'
import Button from './components/Button/Button'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import List from './components/List/List'


function App() {
	return (
		<div className={styles['container']}>
			<div className={styles['div']}>
				<header>Заголовок</header>
			</div>
			<div className={styles['div1']}>
			<List />
			<div className={styles['con']}>
			</div>
            <Footer />
			</div>
		</div>
	)
}

export default App
