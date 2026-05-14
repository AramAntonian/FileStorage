import {UserProps} from "@/consts/users";

import {useState} from "react";
import Button from "@/components/Button/Button";

function AddUserList({users, handler} : { users: UserProps[], handler: (names: string[]) => void }) {
    const [selected, setSelected] = useState<string[]>([]);

    function select(name: string) {
        setSelected(prev => ([ ...prev, name ]));
    }

    function unselect(name: string) {
        setSelected(prev => prev.filter(el => el !== name))
    }

    return (
        <div className='flex flex-col gap-1'>
            {
                users && users.length ?
                    users.map(el => (
                        <div
                            key ={el.name}
                            className='flex w-full justify-between border p-2'
                        >
                            {el.name}
                            <div
                                onClick={() => selected.includes(el.name) ? unselect(el.name) : select(el.name)}
                                className='cursor-pointer'
                            >
                                {selected.includes(el.name) ? '-' : '+'}
                            </div>
                        </div>
                    ))
                    :null
            }
            <Button text='Add' click={() => handler(selected)} />
        </div>
    )
}

export default AddUserList