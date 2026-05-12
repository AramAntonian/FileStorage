async function Room ({params}: {params: Promise<{id: string}>}) {
    const {id} = await params
    const res = await fetch(`http://localhost:3000/api/rooms/${id}`)
    const room = await res.json()

    return (
        <div>{room.name}</div>
    )

}

export  default  Room