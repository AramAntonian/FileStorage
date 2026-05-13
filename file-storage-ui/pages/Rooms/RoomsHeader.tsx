'use client'

import Link from "next/link";
import {useParams} from "next/navigation";
import {RoomProps} from "@/consts/room";

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
                            <Link href={`/rooms/${room.id}`} key = {room.id}>
                                <div
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
                                    {room.name}
                                    {isActive && (
                                        <span className="absolute -bottom-px left-0 right-0 h-0.5 bg-white" />
                                    )}
                                </div>
                            </Link>
                        );
                    }
                    )
                }
                <Link href={'/rooms/addRoom'}>
                    <div
                     className='border-2 bg-purple-800 text-white rounded-2xl w-7.5 h-8 text-center cursor-pointer flex justify-center items-center'
                     >
                            +
                    </div>
                </Link>
            </div>
        </div>
        </>

    );
}

export default RoomsHeader;