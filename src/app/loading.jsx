import Image from 'next/image';

export default function Loading() {
	return (
		<div className="backdrop">
			<div className="logo">
				<Image src="/logo.png" alt="Memento logo" fill />
			</div>
		</div>
	);
}
