import { Badge, Button, Card, Flex, Image, Space, Text, Title } from "@mantine/core";
import { useMediaQuery, useColorScheme } from "@mantine/hooks";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { get_data } from "../../api";
import { useEffect, useState } from "react";
import classes from './index.module.css';

interface project_data_type {
  color: string,
  description: string,
  image_link: string,
  link: string,
  name: string,
  technologies_used: string[],
}

const Project = () => {
  const matches = useMediaQuery('(min-width: 56.25em)');
  const colorScheme = useColorScheme();
  const [projects, setProjects] = useState<project_data_type[]>([]);
  
  const set_data = (data: {projects: project_data_type[]}) => {
    setProjects(data.projects);
  }

  useEffect(() => {
    get_data("Projects", set_data);
  }, [])
  
  return (
    <Flex 
      direction={'column'} 
      align={matches ? 'flex-end' : 'center'}
      gap={'md'}
    >
        {
          projects.map((items) => (
            <Card
              bg={items.color}
              p={matches ? 'xl' : 'md'}
              radius={'lg'}
              w={'90%'}
              className={colorScheme === 'dark' ? classes.darkCard : ''}
            >
              <Card.Section p={matches ? 'xl' : 'md'}>
                <Flex wrap="wrap" gap="xs">
                  {items.technologies_used.map((item) => (
                    <Badge 
                      variant={'outline'}
                      p={'md'}
                      color={'darkgray'}
                      className={classes.techBadge}
                    >
                      {item}
                    </Badge>
                  ))}
                </Flex>
              </Card.Section>
              
              <Card.Section px={matches ? 'xl' : 'md'}>
                <Title ta={matches ? 'left' : 'center'}>
                  {items.name}
                </Title>
              </Card.Section>

              <Card.Section px={matches ? 'xl' : 'md'} py={'md'}>
                <Flex justify="center">
                  <Image 
                    w={matches ? '90%' : '100%'}
                    radius={'lg'}
                    src={items.image_link} 
                    alt='Project Image'
                  />
                </Flex>
              </Card.Section>

              <Card.Section px={matches ? 'xl' : 'md'}>
                <Text ta={matches ? 'left' : 'center'}>
                  {items.description}
                </Text>
              </Card.Section>
              
              <Card.Section px={matches ? 'xl' : 'md'} py={'lg'}>
                <Flex justify={matches ? 'flex-start' : 'center'}>
                  <Button
                    color={colorScheme === 'dark' ? 'gray' : 'black'}
                    radius={'md'}
                    onClick={() => window.open(items.link, '_blank')}
                  >
                    View Project
                    <Space w={'xs'} />
                    <ArrowRightIcon />
                  </Button>
                </Flex>
              </Card.Section>
            </Card>
          ))
        }
    </Flex>
  );
}

export default Project;