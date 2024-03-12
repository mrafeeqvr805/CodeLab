import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import DevInfo from "./DevInfo";
import DevProjecInfo from "./DevProjecInfo";
import TechStackSection from "./TechStackSection";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProjectCardSecLoader from "./skelton/ProjectCardSecLoader";
import ProjectCardSec from "./ProjectCardSec";
import Header from "./Header";

const DeveloperPage = () => {
	const [emptyData, setEmptyData] = useState(false);
	const user = useSelector((store) => store?.user?.user);
	const [devinfo, setDevinfo] = useState(null);
	const [projects, setProjects] = useState(null);
	const { id } = useParams();
	const dispatch = useDispatch();
	const count = [1, 2];
	useEffect(() => {
		async function call() {
			await axios
				.get("/getDeveloperProjects/" + id)
				.then((res) => {
					console.log(res?.data);
					if (res?.data?.projects.length === 0) {
						setEmptyData(true);
					} else {
						setEmptyData(false);
						//dispatch(addDeveloperProjects(res?.data?.projects))
						setProjects(res?.data?.projects);
						setDevinfo(res?.data);
						console.log(res?.data);
					}
				})
				.catch((err) => {
					console.log(err);
				});
		}
		call();
	}, []);
	return (
		<div className="bg-slate-50 flex-col mt-16 md:mt-0">
			<Navbar title={devinfo?.details?.name} />
			<div className="hidden md:block">
				<Header />
			</div>
			<div className="md:flex w-full md:mt-12">
				<div className="md:w-5/12">
					<DevInfo data={devinfo?.details} />
					<div className=" p-4 px-8">
						<p className="text-gray-500 text-sm text-center">
							{devinfo?.details?.bio}
						</p>
					</div>
				</div>
				<div>
					<DevProjecInfo
						views={devinfo?.views}
						projects={devinfo?.projectsCount}
					/>
					<TechStackSection data={devinfo?.stacks_used} />
				</div>
			</div>

			{!emptyData && (
				<div className="px-2 mt-4  md:px-24">
					<span className="font-medium">
						Projects ({projects ? projects.length : 0})
					</span>

					<div className="mt-3 grid md:grid-cols-4 grid-flow-row gap-2 md:gap-4">
						{!projects &&
							count?.map((item) => <ProjectCardSecLoader key={item} />)}
						{projects &&
							projects?.map((item, index) => (
								<ProjectCardSec key={index} data={item} />
							))}
					</div>
				</div>
			)}
		</div>
	);
};

export default DeveloperPage;
