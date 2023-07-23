import React from 'react'
import CardComponent from './Card.component'
import { Flex } from '@chakra-ui/react'
import { useUserDataSet } from '../../hooks/useUserDataSet'

const CardsComponent = () => {
    const userData = useUserDataSet()
    return (
        <Flex gap='4rem' overflowY={"scroll"} marginX={"2rem"} alignItems={"center"} height="100%">
            {
                userData.projects.map(project => {
                    return (<CardComponent {...{ project }} />
                    )
                })
            }

        </Flex >
    )
}

export default CardsComponent