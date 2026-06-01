import { ViteReactSSG } from 'vite-react-ssg'
import '@fontsource/cormorant-garamond/300.css'
import '@fontsource/cormorant-garamond/300-italic.css'
import '@fontsource/cormorant-garamond/500.css'
import '@fontsource/cormorant-garamond/500-italic.css'
import './index.css'
import App from './App.jsx'

export const createRoot = ViteReactSSG(
  { routes: [{ path: '/', element: <App /> }] },
)
