import React from 'react'
import { Button } from "@nextui-org/react";
const AppDetails = ({ selectedapp }) => {

    return (
        <div className='gap-4'>
            <h4>{selectedapp.name}</h4>
            <Button color="primary">
                Enable
            </Button>

            <Button >
                Disable
            </Button>
        </div>
    )
}

export default AppDetails