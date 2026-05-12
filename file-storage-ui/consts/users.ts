import {RoomProps} from "@/consts/room";

export interface UserProps {
    name: string,
    rooms?: RoomProps[]
}