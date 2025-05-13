import "./admin.css";

export default function AdminLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="container mx-auto mt-8 p-4">
			<div className="flex flex-col items-center mb-6">
				{children}
			</div>
		</div>
	);
}
