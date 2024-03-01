import React from "react";

const ProjectCardSec = () => {
	return (
		<div className="border-[1px] border-gray-200 rounded-md p-2 flex">
			<div className="flex gap-3">
				<img
					className="rounded-md w-2/5 h-26 object-cover"
					src="/img/thumb.png"
					alt=""
				/>
				<div className="flex flex-col">
					<span className="text-primary text-xs tracking-wider font-medium">
						REACT JS
					</span>
					<span className="">
						5 fastest runner in the world that change your mind
					</span>
					<span className="text-sm text-gray-400">Akshay Saini</span>
					<div className="flex justify-between">
						<div className="flex gap-1 items-center">
							<i class="bi bi-eye-fill text-gray-400"></i>
							<span className="text-xs text-gray-400">1.5 K</span>
						</div>
						<div className="flex gap-1 items-center">
							<i class="bi bi-arrow-down-circle text-gray-400"></i>
							<span className="text-xs text-gray-400">1.5 K</span>
						</div>
						<div className="flex gap-1 items-center">
							<i class="bi bi-clock-fill text-gray-400"></i>
							<span className="text-xs text-gray-400">1 m </span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export const ProjectCardSecRemove = (Card) => {
	return (...props) => {
		return (
			<div className="relative">
				<div className="absolute top-0 right-0 flex items-center gap-2 p-1 bg-gray-100 px-2 rounded-bl-xl">
                    <i class="bi bi-trash3-fill text-gray-400 text-xs"></i>
                    <span className="text-xs text-gray-400">Remove</span>
                </div>
				<Card />
			</div>
		);
	};
};

export default ProjectCardSec;