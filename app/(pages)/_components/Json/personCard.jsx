import Image from "next/image";

export default function TitleCard({ title, image }) {
    return (
        <div className="flex flex-col items-center gap-12 w-[357px] p-6 shadow-lg rounded-lg bg-white">
            {/* Image Placeholder */}
            <div className="flex h-[357px] justify-center items-center w-full shadow-md">
                <Image src={image} alt={title} width={357} height={357} className="object-cover rounded-lg" />
            </div>
            {/* Title */}
            <h3 className="text-center text-[#323232] font-[Be Vietnam Pro] text-3xl font-medium">
                {title}
            </h3>
        </div>
    );
}
