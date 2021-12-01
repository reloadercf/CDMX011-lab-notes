import { useState } from "react";

export function ShowModal(value = false){
	const [open, setOpen] = useState(value);

	const openModal = () => setOpen(true);

	const closeModal = () => setOpen(false);

	return [open, openModal, closeModal];
};