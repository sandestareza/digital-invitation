"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

interface Options {
	label: string;
	value: string;
}

interface ComboboxProps {
	options: Options[];
	onChange: (value: string) => void;
	placeholder?: string;
	selected?: string;
	className?: string;
	classNameItem?: string;
}

export function Combobox({
	options,
	onChange,
	placeholder = "Select item...",
	selected,
	className,
	classNameItem,
}: Readonly<ComboboxProps>) {
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState(selected || "");

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					role="combobox"
					aria-expanded={open}
					className={cn("w-[200px] justify-between", className)}
				>
					{value
						? options.find((item) => item.value === value)?.label
						: placeholder}
					<ChevronsUpDown className="opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className={cn("w-[200px] p-0", classNameItem)}>
				<Command>
					<CommandInput
						placeholder="Search item..."
						className="h-9"
					/>
					<CommandList>
						<CommandEmpty>No item found.</CommandEmpty>
						<CommandGroup>
							{options.map((item) => (
								<CommandItem
									key={item.value}
									value={item.value}
									onSelect={(currentValue) => {
										setValue(
											currentValue === value
												? ""
												: currentValue
										);
										setOpen(false);
										onChange(
											currentValue === value
												? ""
												: currentValue
										);
									}}
								>
									{item.label}
									<Check
										className={cn(
											"ml-auto",
											value === item.value
												? "opacity-100"
												: "opacity-0"
										)}
									/>
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
