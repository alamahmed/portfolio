import React, { useEffect, useState } from "react";
import { Card, Flex, Text, Title, ActionIcon, Badge } from "@mantine/core";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { useMediaQuery } from "@mantine/hooks";

export interface cardData {
  technology: string[],
  title: string,
  description: string,
  color: string,
  transform: string,
  transition: string,
  opacity: number,
  zIndex: number,
  link: string,
}

interface cardDataArray {
  cardData: cardData[],
}

const StackCarousel = ( { cardData }:cardDataArray ) => {
  const matches = useMediaQuery('(min-width: 56.25em)');
  const [ cards, setCards ] = useState(cardData);
  const [count, setCount] = useState(2);

  console.log('StackCarousel received data:', cardData);
  console.log('Current cards state:', cards);

  useEffect(() => {
    console.log('Setting initial cards:', cardData);
    setCards(cardData);
  }, [cardData]);

  const delay = (delayTime: number) => {
    return new Promise(resolve => {
      setTimeout(() => {
        setCount((count + 3 - 1) % 3);
      }, delayTime);
    });
  }

  useEffect(() => {
    setTimeout(() => {
      animation(count);
      delay(2000);
    }, 1000);
  // eslint-disable-next-line
  }, [count]);

  const animation = (i: number) => {
    const transformValues = matches 
      ? {
          top: "translate(-20px, -15px)",
          middle: "translate(20px, 15px)",
          bottom: "translate(40px, 30px)",
          back: "translate(80px, 45px)"
        }
      : {
          top: "translate(-10px, -10px)",
          middle: "translate(10px, 10px)",
          bottom: "translate(20px, 20px)",
          back: "translate(40px, 30px)"
        };

    // To update the top card location to move top forward in the stack and disappear
    setCards((prevCards) => {
      return prevCards.map((card, index) => ({
        ...card,
        transform: 
          index === i
            ? transformValues.top
            : i === 0 
              ? index === i + 1
                ? transformValues.bottom
                : transformValues.middle
              : index === i - 1
                ? transformValues.middle
                : transformValues.bottom,
        opacity: index === i ? 0 : 1,
      }));
    });

    // To update the top card location to start from far back
    setTimeout(() => {
      setCards((prevCards) => {
        return prevCards.map((card, index) => ({
          ...card,
          transform:
            index === i
              ? transformValues.back
              : i === 0 
                ? index === i + 1
                  ? transformValues.bottom
                  : transformValues.middle
                : index === i - 1
                  ? transformValues.middle
                  : transformValues.bottom,
          transition: "transform 0ms, opacity 500ms ease-in-out, background-color 500ms ease-in-out",
        }));
      });
    }, 500);
      
    // To update all the card locations in the back to move forward and the last top card to appear at the back
    setTimeout(() => {
      setCards((prevCards) => {
        return prevCards.map((card, index) => ({
          ...card,
          transform:
            index === i
              ? transformValues.bottom
              : i === 0 
                ? index === i + 1
                  ? transformValues.middle
                  : "translate(0px, 0px)"
                : index === i - 1
                  ? "translate(0px, 0px)"
                  : transformValues.middle,
          opacity: index === 2 ? 1 : 1,
          zIndex: 
            index === i ? 1 
            : i === 0 ? index === i + 1 ? 2 : 3 
            : index === i - 1 ? 3 : 2,
          color: 
            index === i ? 'var(--mantine-color-dark-1)' 
            : i === 0 ? index === i + 1 
              ? 'var(--mantine-color-dark-4)' 
              : 'var(--mantine-color-dark-8)' 
            : index === i - 1 
              ? 'var(--mantine-color-dark-8)' 
              : 'var(--mantine-color-dark-4)',
          transition: "transform 500ms, opacity 500ms ease-in-out, background-color 500ms ease-in-out",
        }));
      });
    }, 520);
  }
  
  return (
    <Flex justify={'center'} w={'100%'}>
      <div style={{ 
        position: 'relative', 
        width: matches ? '500px' : '100%', 
        height: matches ? '400px' : '350px',
        maxWidth: '500px',
      }}>
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              width: '95%',
              height: '90%',
              transform: card.transform,
              transition: card.transition,
              opacity: card.opacity,
              zIndex: card.zIndex,
            }}
          >
            <Card 
              bg={card.color} 
              radius={'xl'}
              p={matches ? 'xl' : 'md'}
              h={'100%'}
              style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <Card.Section px={matches ? 'lg' : 'lg'} py={'lg'}>
                <Flex gap={'xs'} wrap={'wrap'}>
                  {card.technology.map((tech, index) => (
                    <Badge 
                      key={index}
                      variant={'outline'} 
                      p={'md'} 
                      radius={'sm'} 
                      color={'white'}
                      size={matches ? 'md' : 'sm'}
                    >
                      {tech}
                    </Badge>
                  ))}
                </Flex>
              </Card.Section>
              <Card.Section px={matches ? 'lg' : 'md'} py={'md'} style={{ flexGrow: 1 }}>
                <Title c={'white'} mb={'sm'} order={matches ? 2 : 3}>
                  {card.title}
                </Title>
                <Text c={'white'} size={matches ? 'md' : 'sm'} style={{ 
                  display: '-webkit-box',
                  WebkitLineClamp: matches ? 4 : 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  minHeight: matches ? '80px' : '60px',
                  lineHeight: '1.5'
                }}>
                  {card.description}
                </Text>
              </Card.Section>
              <Card.Section px={matches ? 'lg' : 'md'} py={'md'}>
                <Flex justify={'flex-end'}>
                  <ActionIcon 
                    variant={'light'} 
                    radius={'lg'} 
                    c={'white'}
                    component="a"
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    size={matches ? 'lg' : 'md'}
                  >
                    <ExternalLinkIcon />
                  </ActionIcon>
                </Flex>
              </Card.Section>
            </Card>
          </div>
        ))}
      </div>
    </Flex>
  );
}

export default StackCarousel;