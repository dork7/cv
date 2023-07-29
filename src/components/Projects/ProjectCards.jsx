import { Flex } from '@chakra-ui/react'
import React from 'react'
import { useUserDataSet } from '../../hooks/useUserDataSet'
import ProjectCardComponent from './ProjectCard.component'
import './project-card.styles.css'

const ProjectCards = ({ projects }) => {
    const userData = useUserDataSet()
    return (

        <div className='project-container' >
            {
                projects?.map((project, idx) => {
                    return (<ProjectCardComponent key={idx} {...{ project }} />
                    )
                })
            }

        </div >

    )
}

export default ProjectCards