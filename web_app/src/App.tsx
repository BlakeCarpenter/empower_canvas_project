import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import './App.css';
import ListCanvasResult from './page/ListCanvasResult/ListCanvasResult';
import AddCanvasResult from './page/CanvasResultView/AddCanvasResult';
import PageWrap from './page/PageWrap';
import EditCanvasResult from './page/CanvasResultView/EditCanvasResult';

function App() {
	return (
		<Routes>
			<Route path="" element={<PageWrap />}>
				<Route index element={<Navigate to="canvas-results" />} />
				<Route path="canvas-results">
					<Route index element={<ListCanvasResult />} />
					<Route path="add" element={<AddCanvasResult/>}/>
					<Route path="edit/:id" element={<EditCanvasResult/>}/>
				</Route>
				<Route path="*" element={<NoMatch />} />
			</Route>
		</Routes>
	);
}

function NoMatch() {
	return (
		<div>
			<h2>Nothing to see here!</h2>
			<p>
				<Link to="/canvas-results">Return to Canvasing Notes</Link>
			</p>
		</div>
	);
}

const AppWrapper = () => {
	return <BrowserRouter>
		<App />
	</BrowserRouter>
}

export default AppWrapper;
