
export default function AdminLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="container mx-auto p-4 bg-gray-900 text-cream h-screen">
			<div className="flex flex-col items-center mb-6">
				{children}
			</div>
		</div>
	);
}
