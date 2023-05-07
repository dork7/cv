import { AddIcon } from '@chakra-ui/icons';
import React, { useState } from 'react';
import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';
import { HStack, Icon, Link } from '@chakra-ui/react';
// import { useUserDataSet } from '../hooks/useUserDataSet';
import { useUserDataSet } from '../../hooks/useUserDataSet';
import {
    FaFacebookF,
    FaGithub,
    FaInstagram,
    FaLinkedinIn,
} from 'react-icons/fa';
import { FiLinkedin } from 'react-icons/fi'
import { motion } from 'framer-motion';

const iconStyle = {
    backgroundColor: '#2b2b2b',
}

const FloatingButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { links } = useUserDataSet();

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={{
                hidden: {
                    // scale: 0.8,
                    opacity: 0,
                },
                visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                        delay: 0.4,
                    },
                },
            }}
        >
            <Fab
                mainButtonStyles={{
                    color: '#FF6347',
                    backgroundColor: '#2b2b2b',
                }}
                actionButtonStyles={{
                    color: 'red',
                }}
                style={{
                    bottom: '10px',
                    right: '20px',
                }}
                icon={<AddIcon />}
                // event={event}
                alwaysShowTitle={true}
            >
                {links.linkedin && (
                    <Action
                        text="LinkedIn"
                        style={iconStyle}
                    >
                        <Link href={links.linkedin} isExternal>
                            <Icon as={FiLinkedin} color="#FF6347" />
                        </Link>
                    </Action>
                )}
                {links.github && (
                    <Action
                        text="Github"
                        style={iconStyle}
                    >
                        <Link href={links.github} isExternal>
                            <Icon as={FaGithub} w={6} h={6} color="#FF6347" />
                        </Link>
                    </Action>
                )}
                {links.facebook && (
                    <Action
                        text="Facebook"
                        style={iconStyle}
                    >
                        <Link href={links.facebook} isExternal>
                            <Icon as={FaFacebookF} w={6} h={6} color="#FF6347" />
                        </Link>{' '}
                    </Action>
                )}
                {links.instagram && (
                    <Action
                        text="Instagram"
                        style={iconStyle}
                    >
                        <Link href={links.instagram} isExternal>
                            <Icon as={FaInstagram} w={6} h={6} color="#FF6347" />
                        </Link>{' '}
                    </Action>
                )}
            </Fab>
        </motion.div>
    );
};

export default FloatingButton;