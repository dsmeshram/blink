import { BellAlertIcon, Cog6ToothIcon, Cog8ToothIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { Avatar, Badge, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react'
import { signOut, useSession } from 'next-auth/react'
import React from 'react'
import ProjectsDropdown from './ProjectsDropdown'

const Profile = () => {
  const { data: session } = useSession()
  return (
    <div className="flex justify-end gap-4 items-center pr-8 pl-8">

      <ProjectsDropdown></ProjectsDropdown>
      <Badge className='h-6 w-6 font-medium' content="9+" shape="circle" color="danger">
        <Button
          radius="full"
          isIconOnly
          aria-label="more than 99 notifications"
          variant="light"
        >
          <BellAlertIcon className='h-6 w-6' />
        </Button>
      </Badge>

      {/* <Avatar isBordered color="primary" src={session?.user?.image} /> */}

      <Dropdown placement="bottom-end">
        <DropdownTrigger className='items-center"'>
          <Avatar
            size="sm"
            isBordered
            as="button"
            className="transition-transform"
            src={session?.user?.image}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">{session?.user?.name}</p>
          </DropdownItem>
          <DropdownItem key="settings">
            My Settings
          </DropdownItem>
          <DropdownItem key="team_settings">Team Settings</DropdownItem>
          <DropdownItem key="analytics">
            Analytics
          </DropdownItem>
          <DropdownItem key="system">System</DropdownItem>
          <DropdownItem key="configurations">Configurations</DropdownItem>
          <DropdownItem key="help_and_feedback">
            Help & Feedback
          </DropdownItem>
          <DropdownItem key="logout" color="danger" onClick={() => signOut}>
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
    //     <div className="flex gap-4 items-center">
    //     <img
    //       src={
    //         session?.user?.image
    //       }
    //       height={36}
    //       width={36}
    //       alt="profile image"
    //       className="rounded-full animate-pulse"
    //     />
    //     {/* <div className="flex flex-col ">
    //       <span className="text-black-500 my-0 text-sm">{session?.user?.name}</span>
    //       <Link href="/" className="text-black text-sm">
    //         View Profile
    //       </Link>
    //     </div> */}
    //   </div>
  )
}

export default Profile