export default function TodoLayout({ children }) {
	return (
		<main className="bg-slate-100">
			<div className="container py-10">
				<h1 className="text-3xl text-center mb-5 font-bold">Todo App</h1>
				{children}
			</div>
		</main>
	);
}
