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
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { deleteRSPV } from "@/actions/deleteRSPV";
import toast from 'react-hot-toast';

interface RSVP {
	id: number;
	name: string;
	attendance: string;
	message: string;
}

interface RSVPTableProps {
	data: RSVP[];
}

export function RSVPTable({ data }: RSVPTableProps) {
	const [filter, setFilter] = React.useState("");
	const [isLoading, setIsLoading] = React.useState(false);

	const filteredData = React.useMemo(() => {
		return data.filter((rsvp) =>
			rsvp.name.toLowerCase().includes(filter.toLowerCase())
		);
	}, [data, filter]);

	const handleDelete = async (id: number) => {
		setIsLoading(true);
		try {
			const { success, message } = await deleteRSPV(id);
			if (success) {
				toast.success(message);

			} else {
				toast.error(message);
			}
		} catch (error) {
			console.error(error, "Error deleting RSPV");
		} finally {
			setIsLoading(false);
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
			<div className="rounded-md border">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Name</TableHead>
							<TableHead>Message</TableHead>
							<TableHead>Action</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{filteredData.length > 0 ? (
							filteredData.map((rsvp) => (
								<TableRow key={rsvp.id}>
									<TableCell className="whitespace-normal">
										<div>
											<p className="font-extrabold">
												{rsvp.name}
											</p>
											<p className="italic text-xs text-primary">
												{rsvp.attendance}
											</p>
										</div>
									</TableCell>
									<TableCell className="whitespace-normal">{rsvp.message}</TableCell>
									<TableCell>
										<Button
											variant="destructive"
											color="red"
											size="icon"
											className="cursor-pointer"
                      disabled={isLoading}
                      onClick={() => handleDelete(rsvp.id)}
										>
											<Trash />
										</Button>
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
		</div>
	);
}
