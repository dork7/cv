import React from 'react'
import ProjectCardComponent from './ProjectCard.component'
import { Flex } from '@chakra-ui/react'
import { useUserDataSet } from '../../hooks/useUserDataSet'

const ProjectCards = ({ projects }) => {
    const userData = useUserDataSet()
    return (
        <Flex gap='4rem' overflowY={"scroll"} marginX={"2rem"} alignItems={"center"} height="100%">
            {
                projects?.map((project, idx) => {
                    return (<ProjectCardComponent key={idx} {...{ project }} />
                    )
                })
            }

        </Flex >
    )
}

export default ProjectCards