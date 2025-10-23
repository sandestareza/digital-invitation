
export default function AdminLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="p-4 bg-gray-900 text-cream w-full min-h-screen">
			<div className="flex flex-col items-center mb-6">
				{children}
			</div>
		</div>
	);
}
