"use client";

import { EllipsisVertical, Pencil, Trash, Share2, Globe } from "lucide-react";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type TActions = {
  handleDelete: () => void;
  handleViewLink: () => void;
	handleShareLink: () => void;
	handleEdit: () => void
};

export const Actions = ({handleDelete, handleViewLink, handleShareLink, handleEdit} : TActions) => {
	return (
		<div className="flex items-center gap-2">
			<DropdownMenu>
				<DropdownMenuTrigger className="p-2 border rounded-md cursor-pointer">
          <EllipsisVertical size={20}/>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuItem onClick={handleEdit}>
						<Pencil /> Edit
					</DropdownMenuItem>
					<DropdownMenuItem onClick={handleDelete}>
						<Trash /> Hapus
					</DropdownMenuItem>
					<DropdownMenuItem onClick={handleViewLink}>
						<Globe /> Lihat Undangan
					</DropdownMenuItem>
					<DropdownMenuItem onClick={handleShareLink}>
					  <Share2 /> Bagikan ke Whatsapp
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};
