import { Fade, Tooltip } from '@mui/material'
import React from 'react'
import { FiSettings } from 'react-icons/fi'

const SettingsIcon = () => {
  return (
    <Tooltip
        title='Settings'
        placement="bottom"
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 600 }}
      >
        <span>
          <FiSettings />
        </span>
      </Tooltip>
  )
}

export default SettingsIcon
