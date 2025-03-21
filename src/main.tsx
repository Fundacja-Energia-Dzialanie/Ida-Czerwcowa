import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from 'App'
import './compiled/css/index.css'
import ClickSpark from 'y/ClickSpark/ClickSpark'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ClickSpark
			sparkColor='#e3276e'
			sparkSize={10}
			sparkRadius={15}
			sparkCount={8}
			duration={200}
		>
			<App />
		</ClickSpark>
	</StrictMode>,
)
