import React from "react";
import { useCopyToClipboard } from "@/hook/useCopyToClipboard";
import { Copy, Check } from "lucide-react";
import { Button } from "./ui/button";
import clsx from "clsx";
import toast from "react-hot-toast";

type BtnCopyProps = {
	text: string;
	children?: React.ReactNode;
	className?: string;
};

const BtnCopy: React.FC<BtnCopyProps> = ({
	text,
	children,
	className,
}) => {
	const { copied, copy } = useCopyToClipboard();

	return (
		<Button
			onClick={() => {
        copy(text);
        if (!copied) {
          toast.success("Copied to clipboard");
        } else {
          toast.error("Failed to copy");
        }
      }}
			type="button"
			size="sm"
      variant={"outline"}
			className={clsx("p-3 m-0", className)} 
		>
			<span className="sr-only">
				{copied ? "Copied!" : children || "Copy"}
			</span>
			{copied ? <Check /> : <Copy />}
		</Button>
	);
};

export default BtnCopy;
