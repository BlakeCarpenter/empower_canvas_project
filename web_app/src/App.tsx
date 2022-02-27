import React from 'react';
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Navigation from './navigation/Navigation';
import ListCanvasResult from './page/ListCanvasResult/ListCanvasResult';
import AddCanvasResult from './page/CanvasResultView/AddCanvasResult';
import PageWrap from './page/PageWrap';
import EditCanvasResult from './page/CanvasResultView/EditCanvasResult';

function App() {
	return (
		<Routes>
			<Route path="/" element={<PageWrap />}>
				<Route index element={<Home />} />
				<Route path="/canvas-results">
					<Route index element={<ListCanvasResult />} />
					<Route path="add" element={<AddCanvasResult/>}/>
					<Route path="edit/:id" element={<EditCanvasResult/>}/>
				</Route>
				<Route path="*" element={<NoMatch />} />
			</Route>
		</Routes>
	);
}

function Home() {
	return (
		<div>
			<h2>Home</h2>
		</div>
	);
}

function NoMatch() {
	return (
		<div>
			<h2>Nothing to see here!</h2>
			<p>
				<Link to="/">Go to the home page</Link>
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
