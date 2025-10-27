"use client";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import BtnCopy from "@/components/BtnCopy";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Combobox } from "@/components/ui/combobox";
import { Guest } from "@/types/guest";

interface ShareGuestProps {
	isOpen: boolean;
	onClose: () => void;
	selectedGuest: Guest | null;
}
export function ShareGuest({ isOpen, onClose, selectedGuest }: Readonly<ShareGuestProps>) {
	const options = [
		{
			value: "formal",
			label: "Formal",
		},
		{
			value: "santai",
			label: "Santai",
		},
		{
			value: "keluarga",
			label: "Keluarga",
		},
	];
	const [messageStyle, setMessageStyle] = useState<
		"formal" | "santai" | "keluarga"
	>("formal");

	const handleShare = () => {
		const message = generateWhatsAppMessage(selectedGuest!);
		const phone = selectedGuest?.whatsapp ? `phone=${selectedGuest?.whatsapp}` : "";
		let url = ``;
    if (selectedGuest?.whatsapp === '628') {
      url = `https://api.whatsapp.com/send/?text=${encodeURIComponent(message)}`
    } else {
      url = `https://api.whatsapp.com/send?${phone}&text=${encodeURIComponent(message)}`
    }
		window.open(url, "_blank");
	};


	const generateWhatsAppMessage = (guest: Guest) => {
		const link = guest.link;
		const name = guest.name;

		switch (messageStyle) {
			case "santai":
				return `Hai ${name}! 🎉\nAku mau ngundang kamu ke acara pernikahan kami nih!\n\nCek undangannya di sini ya:\n${link}\n\nJangan lupa datang yaa!😊`;
			case "keluarga":
				return `Assalamu’alaikum Warahmatullahi Wabarakatuh.\n\nKami sekeluarga mengundang *${name}* sekeluarga untuk hadir dalam acara pernikahan kami.\n\nBerikut link undangannya:\n${link}\n\nSemoga bisa hadir ya. Terima kasih!`;
			case "formal":
				return `Assalamu’alaikum Warahmatullahi Wabarakatuh.\n\nDengan hormat,\nKami mengundang Bapak/Ibu/Saudara/i *${name}* untuk hadir dalam acara pernikahan kami.\n\nBerikut link undangan digitalnya:\n${link}\n\nMerupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir.\n\nTerima kasih.\nWassalamu’alaikum Warahmatullahi Wabarakatuh.\n\n_Hormat kami_,\n*Keluarga Kedua Mempelai*`;
		}
	};

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className="sm:max-w-md text-cream bg-gray-900">
				<DialogHeader>
					<DialogTitle>Bagikan ke WhatsApp</DialogTitle>
					<DialogDescription>
						Anda dapat membagikan link undangan ini ke WhatsApp.
					</DialogDescription>
				</DialogHeader>
				<div className="flex items-center space-x-2">
					<div className="grid flex-1 gap-2">
						<Label htmlFor="link" className="sr-only">
							Link Undangan
						</Label>
						<Input
							id="link"
							defaultValue={selectedGuest?.link}
							className="w-full read-only:bg-grsy-700 text-xs"
							readOnly
						/>
					</div>
					<BtnCopy text={selectedGuest?.link ?? ""} />
				</div>
				<div className="flex items-center space-x-2">
					<div className="grid flex-1 gap-2">
						<Label htmlFor="messageStyle">Template Pesan:</Label>
						<Combobox
							options={options}
							onChange={(value) => setMessageStyle(value as "formal" | "santai" | "keluarga")}
							selected={messageStyle}
						/>
					</div>
				</div>

				{selectedGuest && (
					<div
						className="mt-2 p-2 border border-gray-200 rounded-md bg-gray-700 text-sm relative"
					>
						<h3 className="mb-1">📄 Preview Pesan WhatsApp</h3>
						<p>
							<strong>Untuk:</strong> {selectedGuest?.name}
						</p>
						<pre
							className="mt-2 whitespace-pre-wrap break-all border border-gray-200 rounded-md bg-gray-800 text-xs p-2"
						>
							{generateWhatsAppMessage(selectedGuest)}
						</pre>		
						<BtnCopy text={generateWhatsAppMessage(selectedGuest)} className="absolute top-2 right-2" />				
					</div>
				)}

				<DialogFooter>
					<Button
						type="button"
						className="cursor-pointer"
						size={"sm"}
            variant={"outline"}
						onClick={handleShare}
					>
						Bagikan
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
