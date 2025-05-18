import DocsSidebar from "./DocsSidebar";
import Footer from "./Footer";
import Header from "./Header";

const DocsLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex flex-col min-h-screen bg-gray-900 text-white">
			<Header />
			<div className="flex flex-1 container mx-auto pt-6 pb-12 px-4 sm:px-6 lg:px-8">
				<DocsSidebar />
				<main className="flex-1 ml-8 p-4 bg-gray-800 rounded-lg shadow">
					{children}
				</main>
			</div>
			<Footer />
		</div>
	);
};

export default DocsLayout;
