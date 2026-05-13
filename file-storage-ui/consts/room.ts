import {FileProps} from "@/consts/file";

export interface RoomProps {
    id: number;
    name: string;
    files?: FileProps[]
}

