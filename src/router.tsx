import {createBrowserRouter, Navigate} from 'react-router-dom'
import SearchPage from './pages/search/SearchPage'
import ResultPage from './pages/result/ResultPage';

const router = createBrowserRouter([
	{
		path: "/search",
		element: <SearchPage />,
	},
	{
		path: "/",
		element: <Navigate to="/search" />,
	},
	{
		path: "/result",
		element: <ResultPage />

	}
]);

export default router;