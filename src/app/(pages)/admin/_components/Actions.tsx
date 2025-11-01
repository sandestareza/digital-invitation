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
			<DropdownMenu modal={false}>
				<DropdownMenuTrigger className="p-2 border rounded-md cursor-pointer">
          <EllipsisVertical size={20}/>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="bg-gray-900 text-cream">
					<DropdownMenuItem onClick={handleEdit} className="cursor-pointer">
						<Pencil /> Edit
					</DropdownMenuItem>
					<DropdownMenuItem onClick={handleDelete} className="text-red-400 cursor-pointer">
						<Trash /> Hapus
					</DropdownMenuItem>
					<DropdownMenuItem onClick={handleViewLink} className="cursor-pointer">
						<Globe /> Lihat Undangan
					</DropdownMenuItem>
					<DropdownMenuItem onClick={handleShareLink} className="text-green-400 cursor-pointer">
					  <Share2 /> Bagikan ke Whatsapp
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};
