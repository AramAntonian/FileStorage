'use client'

import {FileProps} from "@/consts/file";

interface filesProps {
    files: FileProps[]
}

function Files({files}: filesProps) {

    return(
        <div>
            {
            files.length?
                files.map(file => (
                    <div key = {file.id}>{file.name}</div>
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