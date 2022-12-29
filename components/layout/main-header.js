import Link from "next/link";

const MainHeader = () => {
	return (
		// header
		<header className="flex items-center w-full justify-between align-baseline py-4 px-[10%] h-20 bg-[#202020]">
			{/* logo */}
			<div className="text-2xl text-white font-[Fira] h-full color-[#94fdfd] md:text-4xl">
				<Link href="/" className="no-underline text-[#94fdfd]">
					NextEvents
				</Link>
			</div>
			{/* navigation */}
			<nav>
				<ul>
					<li>
						<Link
							href="events"
							className="no-underline text-[#74dacc] text-base md:text-2xl"
						>
							Browse All Events
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainHeader;
