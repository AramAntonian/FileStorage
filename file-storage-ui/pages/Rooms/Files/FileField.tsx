"use client"

import {FileProps} from "@/consts/file";

function FileField({file}: {file: FileProps}) {

    function remove() {

    }

    function download() {
        window.location.assign(`/api/files?id=${file.id}`);
    }

    return (
        <div className='flex justify-between w-1/2 border p-2 items-center'>
            <div>
                <div>{file ? file.name : ''}</div>
                <div>{file ? ((file.size/1024)/1024).toFixed(2) : ''}mb</div>
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