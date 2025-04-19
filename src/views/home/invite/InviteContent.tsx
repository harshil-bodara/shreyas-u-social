import ConnectionCard from 'components/ConnectionCard'
import React from 'react'
import { FaUserPlus } from 'react-icons/fa'

const InviteContent = () => {
  return (
    <>
      <ConnectionCard
        name="Ashika Devi"
        title="BBA at Stanford University | Mumbai"
        location="Chennai"
        mutualConnections={123}
        mutualConnectionName="Vishwendra"
        imageUrl="/assets/images/profile1.png"
        btnText="Connect"
        icon={<FaUserPlus className="w-3.5 h-3.5" />}
        onConnect={() => alert("Connected!")}
        onIgnore={() => alert("Ignored!")}
      /> 
    </>
  )
}

export default InviteContent
