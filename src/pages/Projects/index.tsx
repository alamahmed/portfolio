import React from "react";
import { Button, Card, Container, Flex, ScrollArea, Title } from "@mantine/core";
import Project from '../../components/Project/index';
import classes from './index.module.css';
import { useMediaQuery } from "@mantine/hooks";

const Projects = () => {
    const matches = useMediaQuery('(min-width: 56.25em)');

    return (
        <Container size={'xl'}>
            <Flex
                h={matches ? '88vh' : 'fit-content'}
                w={'100%'}
                justify={'space-between'}
                mt={matches ? '0' : 'md'}
                direction={matches ? 'row' : 'column'}
            >
                <Flex 
                    align={'center'}
                    w={matches ? '45%' : '100%'}
                > 
                    <Card 
                        withBorder
                        radius={'lg'}
                        p={'xl'}
                        w={'100%'}
                        h={'90%'}
                    >
                        <Flex 
                            h={"100%"}
                            direction={'column'}
                            justify={'end'}

                        >
                            <Title 
                                order={2}
                                mb={"md"}
                            >
                                Over the Past Few Years, <br /> I've worked on various Projects. <br />Here's few of my best:
                            </Title>
                            <Button 
                                w={'25%'} 
                                color={"black"}
                                radius={'md'}
                            >
                                Get in touch
                            </Button>
                        </Flex>
                    </Card>
                </Flex>
                <ScrollArea 
                    w={matches ? '55%' : '100%'} 
                    classNames={classes}
                    >
                    <Project />
                </ScrollArea>
            </Flex>
        </Container>
    );
}

export default Projects;