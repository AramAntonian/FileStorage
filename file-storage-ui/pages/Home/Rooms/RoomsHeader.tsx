'use client'
import { RoomProps } from "@/consts/room";
import Link from "next/link";
import {useParams} from "next/navigation";
interface HeaderProps {
    rooms: RoomProps[];

}

function RoomsHeader({rooms}: HeaderProps) {
    const params = useParams()

    return (
        <>
        <div className="flex items-end border-b border-gray-300 bg-gray-100 px-2">
            <div className="flex space-x-1 overflow-hidden overflow-x-auto">
                {
                    rooms &&
                    rooms.map((room) => {
                        const isActive = String(room.id) === params?.id && -1

                        return (
                            <div
                                key={room.id}
                                className={`
                                    relative px-4 py-2 text-sm transition-all
                                    border border-b-0
                                    rounded-t-lg
                                    whitespace-nowrap
                                    
                                    ${
                                    isActive
                                        ? "bg-white text-black border-gray-300"
                                        : "bg-gray-200 text-gray-600 border-transparent hover:bg-gray-300"
                                }
                                `}
                            >
                                <Link href={`/rooms/${room.id}`} >
                                {room.name}
                                {isActive && (
                                    <span className="absolute -bottom-px left-0 right-0 h-0.5 bg-white" />
                                )}
                                </Link>
                            </div>
                        );
                    }
                    )
                }
                <div
                    className='border-2 bg-gray-700 text-white rounded-2xl w-7.5 h-8 text-center cursor-pointer'
                    >
                    <Link href={'/addRoom'}>+</Link>
                </div>
            </div>
        </div>
        </>

    );
}

export default RoomsHeader;