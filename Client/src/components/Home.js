import React, { useEffect } from "react";
import Header from "./Header";
import TopDevelopers from "./TopDevelopers";
import LatestProjects from "./LatestProjects";
import { Domains } from "./Domains";
import PopularProjects from "./PopularProjects";
import SearchBar from "./SearchBar";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
	addCategory,
	addLatest,
	addPopular,
	addTopDevelopers,
} from "../utils/projectSlice";
import { Link } from "react-router-dom";
import Banner from "./Banner";
import Footer from "./Footer";

const Home = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		async function call() {
			const list = await axios.get("/getlatest");
			dispatch(addLatest(list?.data));
			const topDevelopers = await axios.get("/getdevelopers");
			dispatch(addTopDevelopers(topDevelopers?.data));
			const popular = await axios.get("/getpopular");
			dispatch(addPopular(popular?.data));
			const categories = await axios.get("/getallcategories");
			dispatch(addCategory(categories?.data));
		}
		call();
	}, []);

	return (
		<div className="relative mb-12 md:mb-0">
			<Header />
			<div className="md:hidden">
				<SearchBar title={"Search Projects..."} />
			</div>
			<Banner/>
			<TopDevelopers />
			<div className=" hidden md:block">
			 <Domains />
			</div>
			
			<LatestProjects />
			<div className=" md:hidden">
			 <Domains />
			</div>
			
			<PopularProjects />
			<Link to={'/addproject'}>
				<button className="bg-primary rounded-full md:hidden h-16 w-16 p-2 text-white fixed z-30 right-2 bottom-2">
					<i class="bi bi-plus text-white text-3xl"></i>
				</button>
			</Link>
			<div className="md:block">
				<Footer/>
			</div>
		</div>
	);
};

export default Home;
