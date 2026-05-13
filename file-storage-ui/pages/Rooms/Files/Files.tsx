import {FileProps} from "@/consts/file";
import FileField from "@/pages/Rooms/Files/FileField";

interface filesProps {
    files: FileProps[]
}

function Files({files}: filesProps) {

    return(
        <div className="flex flex-col gap-1 p-5 overflow-auto">
            {
            files.length?
                files.map(file => (
                    <FileField  key = {file.id} file={file}/>
                ))

            :
            <div className= 'flex flex-col justify-center items-center mt-40'>
                <div>Your storage is empty</div>
            </div>
            }
        </div>
    )
}

export default Files;