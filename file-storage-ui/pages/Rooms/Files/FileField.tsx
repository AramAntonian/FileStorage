"use client"

import {FileProps} from "@/consts/file";

function FileField({file}: {file: FileProps}) {

    function remove() {

    }

    function download() {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        window.location.assign(`/api/files?id=${file.id}`);
    }

    return (
        <div className='flex justify-between w-1/2 border p-2 items-center'>
            <div>
                <div>{file.name}</div>
                <div>{((file.size/1024)/1024).toFixed(1)}mb</div>
            </div>
            <div className='flex gap-1 underline text-blue-800'>
                <div className='cursor-pointer' onClick={remove}>remove</div>
                <div className='cursor-pointer' onClick={download}>download</div>
            </div>
            <a className='hidden'></a>
        </div>
    )
}

export default FileField;