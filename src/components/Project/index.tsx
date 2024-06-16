import { Button, Card, Flex, Image, Space, Text, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const Project = () => {
  const matches = useMediaQuery('(min-width: 56.25em)');
  
  const projects = [
    {
        color: 'cyan.1',
        technologies: ['reactJS'],
        title: "Project 1",
        image: "https://imgs.search.brave.com/wakDsFvTwhb9UdsJW7UslvRwy_kUpLFZteRylFwJ6tg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMzk2/NjczLmpwZw",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aperiam provident nam ad nesciunt libero sint quas ea! Fugit voluptates, cupiditate a quo earum ullam. Ut minus nesciunt rerum impedit!",
    },
    {
        color: 'lime.0',
        technologies: ['reactJS'],
        title: "Project 2",
        image: "https://imgs.search.brave.com/wakDsFvTwhb9UdsJW7UslvRwy_kUpLFZteRylFwJ6tg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMzk2/NjczLmpwZw",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aperiam provident nam ad nesciunt libero sint quas ea! Fugit voluptates, cupiditate a quo earum ullam. Ut minus nesciunt rerum impedit!",
    },
    {
        color: 'dark.0',
        technologies: ['reactJS', 'test1', 'test2', 'test3'],
        title: "Project 3",
        image: "https://imgs.search.brave.com/wakDsFvTwhb9UdsJW7UslvRwy_kUpLFZteRylFwJ6tg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMzk2/NjczLmpwZw",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aperiam provident nam ad nesciunt libero sint quas ea! Fugit voluptates, cupiditate a quo earum ullam. Ut minus nesciunt rerum impedit!",
    },
  ];

  return (
    <Flex 
      direction={'column'} 
      align={matches ? 'flex-end' : 'center'}
    >
        {
          projects.map((items) => (
            <Card
              bg={items.color}
              p={'xl'}
              radius={'lg'}
              mt={'xl'}
              w={'90%'}
            >
              
              <Card.Section p={'xl'}>
                {items.technologies.map((item) => (
                    <Button 
                      variant={'outline'}
                      color={'darkgray'}
                      styles={{
                        inner: {
                          color: 'black',
                        }
                      }}
                      mr={'md'}
                    >
                        {item}
                    </Button>
                ))}
              </Card.Section>
              
              <Card.Section px={'xl'}>
                <Title>
                  {items.title}
                </Title>
              </Card.Section>

              <Card.Section px={'xl'} py={'md'}>
                <Image 
                  w={'90%'}
                  radius={'lg'}
                  src={items.image} 
                  alt='Project Image'
                />
              </Card.Section>

              <Card.Section px={'xl'}>
                <Text>
                  {items.description}
                </Text>
              </Card.Section>
              
              <Card.Section px={'xl'} py={'lg'}>
                <Button
                  color={'black'}
                  radius={'md'}
                >
                  View Project
                  <Space w={'xs'} />
                  <ArrowRightIcon />
                </Button>
              </Card.Section>

            </Card>
          ))
        }
    </Flex>
  );
}

export default Project;