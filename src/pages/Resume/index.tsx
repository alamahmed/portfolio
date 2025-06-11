import { Card, Container, Flex, Title } from "@mantine/core";
import React from "react";
// import classes from './index.module.css';
  
const Resume = () => {
    return (
        <Container size='xl' pt={'md'}>
            <Card
                withBorder
                radius={'md'}
            >
                <Card.Section>
                    <Flex 
                        justify={'center'} 
                    >
                        <Title 
                            py={'1.5em'}
                            px={'5em'}
                            ta={'center'}
                            styles={{
                                root: {
                                    border: '1px solid black',
                                    borderRadius: 'var(--mantine-spacing-md)',
                                }
                            }}
                        >
                            AHMED ALAM
                            <Title order={4} fw={400}>
                                Software Engineer
                            </Title>
                        </Title>
                    </Flex>
                </Card.Section>
                <Card.Section>
                    
                </Card.Section>
            </Card>
        </Container>
    );
}

export default Resume;