"use client"

import React, { useEffect, useState } from 'react'
import { Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react";
import AppDetails from './AppDetails';
const Apps = () => {

    const [Application, setApplication] = useState([]);
    const [Applications, setApplications] = useState([]);
    const fetchData = async () => {
        try {
            const response = await fetch('/api/applications', {
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
           
            if (result.status == 200) {
                console.log("Get apps",result)
                setApplications(result.apps);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    function onAppselect(item : any){
        console.log("selectd")
        setApplication(item)
    }

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className='flex gap-4 w-screen'>
            <div className="gap-4 grid grid-cols-1 sm:grid-cols-1">
                {Applications.map((item : any) => (
                    <Card shadow="sm"  isPressable onPress={() =>onAppselect(item)}>
                        <CardHeader className="flex gap-3">
                            <Image
                                alt="app logo"
                                height={40}
                                radius="sm"
                                src={item.image}
                                width={40}
                            />
                            <div className="">
                                <p className="text-md">{item.name}</p>
                                <p className="text-xs text-default-500">connected</p>
                            </div>
                        </CardHeader>
                    </Card>
                ))}
            </div>
            <div>
               <AppDetails selectedapp={Application}></AppDetails>
            </div>
        </div>
    )
}

export default Apps