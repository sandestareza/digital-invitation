"use client";

import { createGuest, updateGuest } from "@/actions/guests";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toTitleCase } from "@/lib/utils";
import { Guest } from "@/types/guest";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface FormGuestProps {
	isOpen: boolean;
	onClose: () => void;
	selectedGuest: Guest | null;
}
function FormGuest({ isOpen, onClose, selectedGuest }: Readonly<FormGuestProps>) {
	const baseUrl =
		(process.env.NEXT_PUBLIC_BASE_URL as string) || "http://localhost:3000";

	const [id, setId] = useState<number | null>(null)
	const [guestName, setGuestName] = useState("");
	const [guestPhone, setGuestPhone] = useState("");
	const [guestLink, setGuestLink] = useState(baseUrl);

	const [isLoading, setIsLoading] = useState(false);

	const labelSubmit = id ? "Update" : "Create";
	const labelForm = id ? "Form Update Guest" : "Form Create Guest";

	useEffect(() => {
		setId(selectedGuest?.id ?? null);
		setGuestName(selectedGuest?.name ?? "");
		setGuestPhone(selectedGuest?.whatsapp ?? "");
		setGuestLink(selectedGuest?.link ?? baseUrl);
	}, [selectedGuest]);

	const handleGenerate = (e: React.ChangeEvent<HTMLInputElement>) => {
		setGuestName(e.target.value);
		const encodedName = encodeURIComponent(
			toTitleCase(e.target.value.trim())
		);
		const fullLink = `${baseUrl}?to=${encodedName}`;
		setGuestLink(fullLink);
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		setIsLoading(true);
		const formData = new FormData();

		formData.append("name", guestName);
		formData.append("whatsapp", guestPhone);
		formData.append("link", guestLink);

		if (id) {
			formData.append("id", id.toString());			
		}

		const { success, message } = id ? await updateGuest(id, formData) : await createGuest(formData);

		if (success) {
			toast.success(message);
			onClose();
			resetForm();
		} else {
			toast.error(message);
		}

		setIsLoading(false);
	};

	const resetForm = () => {
		setId(null);
		setGuestName("");
		setGuestPhone("");
		setGuestLink(baseUrl);
	};

	return (
		<Dialog
			open={isOpen}
			onOpenChange={() => {
				onClose();
				resetForm();
			}}
		>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>{labelForm}</DialogTitle>
				</DialogHeader>
				<form onSubmit={handleSubmit}>
					<div className="grid gap-4 py-4">
						<div className="grid w-full items-center gap-1.5">
							<Label htmlFor="name">Nama Tamu</Label>
							<Input
								id="name"
								className="col-span-3 text-xs w-full"
								required
								placeholder="cth: Reza & Tira"
								onChange={(e) => handleGenerate(e)}
								value={guestName}
								autoComplete="off"
							/>
						</div>
						<div className="grid w-full items-center gap-1.5">
							<Label htmlFor="whatsapp">No WhatsApp</Label>
							<Input
								id="whatsapp"
								maxLength={14}
								className="col-span-3 text-xs w-full"
								required
								placeholder="cth: 628123456789"
								onChange={(e) => {
									const value = e.target.value;
									if (value.startsWith("0")) {
										e.target.value = value.slice(1);
										setGuestPhone(62 + e.target.value);

									} else {
										setGuestPhone(e.target.value);

									}
								}}
								value={guestPhone}
								autoComplete="off"
							/>
						</div>
						<div className="grid w-full items-center gap-1.5">
							<Label htmlFor="link">Link</Label>
							<Input
								type="text"
								id="link"
								className="col-span-3 read-only:bg-gray-100 text-xs w-full"
								readOnly
								value={guestLink}
							/>
						</div>
					</div>
					<DialogFooter>
						<Button
							type="submit"
							className="cursor-pointer"
							disabled={isLoading}
						>
							{isLoading ? "Loading..." : labelSubmit}
						</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
}

export default FormGuest;
