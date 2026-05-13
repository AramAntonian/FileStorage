'use client'

import Modal from "@/components/Modal/Modal";
import React, { useRef, useState } from "react";

interface AddFileInterface {
    user: string,
    roomId: string,
}

function AddFile({user, roomId}: AddFileInterface) {
    const [open, setOpen] = useState(false);

    const inputRef = useRef<HTMLInputElement | null>(null);

    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

    const handleChooseFile = () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        inputRef.current?.click();
    };

    const handleFileChange = (
        e: React.ChangeEvent<HTMLInputElement>,
    ) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const files: File[] = e.target.files;

        if (!files) return;

        setSelectedFiles((prev) => [
            ...prev,
            ...Array.from(files),
        ]);

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        e.target.value = '';
    };

    const handleRemoveFile = (index: number) => {
        setSelectedFiles((prev) =>
            prev.filter((_, i) => i !== index)
        );
    };

    async function handleAddFiles() {
        const formData = new FormData();

        selectedFiles.forEach((file) => {
            formData.append("files", file);
        });


        const res = await fetch(`/api/files?user=${user}&roomId=${roomId}`, {
            method: "POST",
            body: formData,
        });

        const data = await res.json();

        console.log(data);

        setOpen(false);
        setSelectedFiles([])

    }

    return (
        <>
            <Modal
                handleClose={() => setOpen(false)}
                open={open}
            >
                <div
                    className='
                        flex flex-col gap-4
                        w-125
                        max-h-150
                        bg-white
                        absolute
                        z-51
                        top-1/2
                        left-1/2
                        -translate-x-1/2
                        -translate-y-1/2
                        rounded-xl
                        p-6
                    '
                >
                    <input
                        ref={inputRef}
                        type="file"
                        multiple
                        className="hidden"
                        onChange={handleFileChange}
                    />

                    <button
                        onClick={handleChooseFile}
                        className="
                            bg-purple-800
                            text-white
                            px-4
                            py-2
                            rounded-lg
                            hover:opacity-80
                            transition
                        "
                    >
                        Choose Files
                    </button>

                    {/* Scrollable container */}
                    <div
                        className="
                            flex flex-col gap-3
                            overflow-y-auto
                            pr-2
                            max-h-100
                        "
                    >
                        {selectedFiles.length === 0 && (
                            <p className="text-gray-500 text-sm">
                                No files selected
                            </p>
                        )}

                        {selectedFiles.map((file, index) => (
                            <div
                                key={`${file.name}-${index}`}
                                className="
                                    border
                                    rounded-lg
                                    p-3
                                    flex
                                    justify-between
                                    items-start
                                    gap-4
                                "
                            >
                                <div className="break-all">
                                    <p>
                                        <strong>Name:</strong>{" "}
                                        {file.name}
                                    </p>

                                    <p>
                                        <strong>Size:</strong>{" "}
                                        {(file.size / 1024).toFixed(2)} KB
                                    </p>

                                    <p>
                                        <strong>Type:</strong>{" "}
                                        {file.type || 'unknown'}
                                    </p>
                                </div>

                                <button
                                    onClick={() =>
                                        handleRemoveFile(index)
                                    }
                                    className="
                                        bg-red-500
                                        text-white
                                        px-3
                                        py-1
                                        rounded-lg
                                        hover:opacity-80
                                        transition
                                        shrink-0
                                    "
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                    <div
                        onClick={handleAddFiles}
                        className='w-full flex items-center justify-center border-2 border-purple-800 text-purple-800 rounded-lg cursor-pointer'
                    >
                        Add files
                    </div>
                </div>
            </Modal>

            <div
                onClick={() => setOpen(true)}
                className='
                    absolute
                    top-[calc(100%-100px)]
                    left-[calc(100%-100px)]
                    bg-purple-800
                    rounded-4xl
                    w-14
                    h-15
                    flex
                    justify-center
                    items-center
                    text-white
                    text-5xl
                    cursor-pointer
                '
            >
                +
            </div>
        </>
    )
}

export default AddFile