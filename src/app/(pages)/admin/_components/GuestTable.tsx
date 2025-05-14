"use client";

import * as React from "react";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";
import { deleteGuest, getGuestById } from "@/actions/guests";
import { useRouter } from "next/navigation";
import { Actions } from "./Actions";
import FormGuest from "./FormGuest";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useDialog } from "@/hook/useDialog";
import { ShareGuest } from "./ShareGuest";
import { Guest } from "@/types/guest";

interface GuestTableProps {
	data: Guest[];
}

export function GuestTable({ data }: Readonly<GuestTableProps>) {
	const router = useRouter();
	const [filter, setFilter] = React.useState("");
	const [selectedGuest, setSelectedGuest] = React.useState<Guest | null>(
		null
	);

	const dialogCreate = useDialog();
	const dialogShare = useDialog();

	const filteredData = React.useMemo(() => {
		return data.filter((rsvp) =>
			rsvp.name.toLowerCase().includes(filter.toLowerCase())
		);
	}, [data, filter]);

	const handleDelete = async (id: number) => {
		try {
			const { success, message } = await deleteGuest(id);
			if (success) {
				toast.success(message);
			} else {
				toast.error(message);
			}
		} catch (error) {
			console.error(error, "Error deleting RSPV");
		}
	};

	const handleEdit = async(id: number) => {
		const { success,data,message } = await getGuestById(id);
		
		if (success) {
			setSelectedGuest(data ? data[0] : null);
			dialogCreate.openDialog();
			
		} else {
			toast.error(message);
		}
			
	};

	return (
		<div className="w-full">
			<div className="flex items-center py-4">
				<Input
					placeholder="Filter by name..."
					value={filter}
					onChange={(e) => setFilter(e.target.value)}
					className="max-w-sm"
				/>
			</div>
			<Button
				className="mb-2 cursor-pointer"
				size={"sm"}
				onClick={dialogCreate.openDialog}
			>
				<Plus /> Guest Book
			</Button>
			<div className="rounded-md border">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Name</TableHead>
							<TableHead>No. WhatsApp</TableHead>
							<TableHead>Action</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{filteredData.length > 0 ? (
							filteredData.map((guest) => (
								<TableRow key={guest.id}>
									<TableCell className="whitespace-normal">
										{guest.name}
									</TableCell>
									<TableCell className="whitespace-normal">
										{guest.whatsapp}
									</TableCell>
									<TableCell>
										<Actions
											handleEdit={() =>
												handleEdit(guest.id)
											}
											handleDelete={() =>
												handleDelete(guest.id)
											}
											handleViewLink={() =>
												router.push(guest.link)
											}
											handleShareLink={() => {
												dialogShare.openDialog();
												setSelectedGuest(guest);
											}}
										/>
									</TableCell>
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell
									colSpan={4}
									className="h-24 text-center"
								>
									No results.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
			<FormGuest
				isOpen={dialogCreate.isOpen}
				onClose={dialogCreate.closeDialog}
				selectedGuest={selectedGuest}
			/>
			<ShareGuest
				isOpen={dialogShare.isOpen}
				onClose={dialogShare.closeDialog}
				selectedGuest={selectedGuest}
			/>
		</div>
	);
}
