import DocsSidebar from "./DocsSidebar";
import Footer from "./Footer";
import Header from "./Header";

const DocsLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex min-h-screen flex-col bg-gray-900 text-white">
			<Header />
			<div className="container mx-auto flex flex-1 px-4 pt-6 pb-12 sm:px-6 lg:px-8">
				<DocsSidebar />
				<main className="ml-8 flex-1 rounded-lg bg-gray-800 p-4 shadow">
					{children}
				</main>
			</div>
			<Footer />
		</div>
	);
};

export default DocsLayout;
