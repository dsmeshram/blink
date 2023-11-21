"use client"


import { ChevronDownIcon, Square2StackIcon } from '@heroicons/react/24/outline';
import { Button, ButtonGroup, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';
import React, { useEffect, useState } from 'react'

const ProjectsDropdown = () => {

    const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0 h-8 w-8";


    const [Projects, setProjects] = useState([]);

    var selectedOption = "";

    const fetchData = async () => {
        try {
            const response = await fetch('/api/projects', {
                method: 'GET', // or 'POST', 'PUT', etc.
                headers: {
                    'Content-Type': 'application/json', // Adjust the content type based on your API's requirements
                    'Authorization': 'Bearer YOUR_ACCESS_TOKEN', // Add any other headers as needed
                },
                // You can include a body for POST or PUT requests
                // body: JSON.stringify({ key: 'value' }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log(result)
            if (result.status == 200) {
                // handleOpenDialog() 

                setProjects(result.projects);

                // projectsItems = result.projects;
                // selectedOption = projectsItems[0];
                // console.log("projects -----", projectsItems)
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    async function setSelectedOption(e: any) {
        console.log(e)
    }

    return (
        <ButtonGroup variant="flat">
            <Button>Select your project</Button>
            <Dropdown placement="bottom-end">
                <DropdownTrigger>
                    <Button isIconOnly>
                        <ChevronDownIcon className=' w-6 h-6' />
                    </Button>
                </DropdownTrigger>


                <DropdownMenu
                    disallowEmptySelection
                    aria-label="Merge options"
                    selectedKeys={selectedOption}
                    selectionMode="single"
                    onSelectionChange={() => setSelectedOption}
                    className="max-w-[300px]"
                >
                    {Projects.map((item : any) => {
                        return (
                            <DropdownItem 
                            key={item.name} 
                            description={item.desc}
                            startContent={<Square2StackIcon className={iconClasses}    />}>
                                {item.name}
                            </DropdownItem>
                        );
                    })}
                </DropdownMenu>
            </Dropdown>
        </ButtonGroup>
    )
}

export default ProjectsDropdown