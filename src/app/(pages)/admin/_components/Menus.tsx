"use client";

import { Button } from "@/components/ui/button";
import { House } from "lucide-react";
import Link from "next/link";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "@/actions/auth";

type TUser = {
	id?: string;
	email?: string;
}
export const Menus = ({ user }: { user: TUser | null }) => {
	return (
		<div className="flex items-center gap-2">
			<DropdownMenu>
				<DropdownMenuTrigger className="p-2 border rounded-md cursor-pointer">
					<House size={20} />
				</DropdownMenuTrigger>
				<DropdownMenuContent className="bg-gray-900 text-cream">
					<DropdownMenuLabel>Hi, {user?.email ?? "User"}</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuItem>
						<Link href="/">Home</Link>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<Link href="/admin/rsvps">RSVPs</Link>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<Link href="/admin/guestbooks">Guest Books</Link>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<form action={signOut}>
							<Button
								type="submit"
								variant={"outline"}
								className="cursor-pointer"
							>
								Sign Out
							</Button>
						</form>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};
