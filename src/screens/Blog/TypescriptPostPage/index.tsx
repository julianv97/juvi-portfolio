import React from 'react';
import { Flex, HStack, Stack, Heading, Image, Text, Code, Box } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import POSTS from '../../../data/postsList';

const TypescriptPostPage: React.FC = () => {
  const location = useLocation();
  const post = POSTS.find((postItem) => postItem.path === location.pathname);
  return (
    <Flex flexDirection="column" alignItems="center" w="full">
      <HStack marginTop={20} w="80%">
        <Image w={100} h={100} src={post?.image} />
        <Stack w="100%" justifyContent="flex-start">
          <Heading fontSize={30}>{post?.title}</Heading>
        </Stack>
      </HStack>
      <Box w="80%" marginTop={20}>
        <Heading fontSize={30}>Basic Introduction</Heading>
        <Text my={10} fontSize={20}>
          As our project scales, the time that must be allocated to maintenance, understanding the
          code written months ago, becomes more and more complicated. At the same time, it also
          becomes more likely that when a new feature needs to be programmed, we tend to make
          mistakes and have bugs.
        </Text>
        <Text my={10} fontSize={20}>
          This is where the power of Typescript comes to the rescue.
        </Text>
        <Text my={10} fontSize={20}>
          Typescript is a Javascript superset, that´s mean, it is JS but with some new features,
          among them, the possibility of giving our variables, functions, components and so on a
          static typing.
        </Text>
        <Text my={10} fontSize={20}>
          This is the reason why we can use the type keyword to declare the type of our variables,
          functions, components and so on.
        </Text>
        <Text my={10} fontSize={20}>
          Static typing means that once we have assigned a type to an element, we will not be able
          to assign a value of a different type to the one declared.
        </Text>
        <Heading my={10} fontSize={30}>
          Error prevention in production
        </Heading>
        <Box my={10}>
          <Code p={5}>
            const foo = &apos;bar&apos;;
            <br />
            const sumOne = (param) `&gt;` param + 1;
            <br />
            console.log(baz(foo));
          </Code>
        </Box>
        <Text my={10} fontSize={20}>
          If we were programming in Javascript the result of the above function would be bar1, which
          could lead to a malfunction of our software and the error would only exploit us at
          runtime.
        </Text>
        <Text my={10} fontSize={20}>
          With Typescript we can assign types both in the parameters of the functions and in the
          variables to make sure that the parameter we are passing to the sumOne function be yes or
          yes a number as follows.
        </Text>
        <Box my={10}>
          <Code p={5}>
            const foo:string = &apos;bar&apos;;
            <br />
            const sumOne = (param: numer) `&gt;` param + 1;
            <br />
            console.log(baz(foo));
          </Code>
        </Box>
        <Text my={10} fontSize={20}>
          Here Typescript is going to throw us an error that the parameter that we are passing to
          the function is of type string but that a number type is necessary.
        </Text>
        <Text my={10} fontSize={20}>
          This is a super important feature of Typescript as we can avoid these types of errors and
          bugs at runtime by refactoring or correcting our code as we write it.
        </Text>
        <Heading my={10} fontSize={30}>
          Easy code maintenance.
        </Heading>
        <Text my={10} fontSize={20}>
          Sometimes reading code from long ago can be a difficult task, even if the code is your
          own.
        </Text>
        <Text my={10} fontSize={20}>
          In this aspect Typescript can also give us a hand, since when we declare our variables or
          type our functions from the parameters it receives to the data type it will return, the
          data type that our component receives through props, becomes a task much easier if we
          actually know the type of data we need to work with, instead of having to guess the type
          or having to search for the trace of what is needed.
        </Text>
        <Text my={10} fontSize={20}>
          The great thing about strictly typed programming languages is that they allow your
          developers to work on their task without relying on the other team members too much.
        </Text>
        <Text my={10} fontSize={20}>
          Additionally, providing types is a form of documenting code. Having even brief
          documentation at hand can be beneficial to your developers, at the very least because they
          don’t need to spend their valuable time doing it themselves. This is often referred to as
          “self-documenting code”—one developer writes something, and others know what it does and
          how just by looking at it.
        </Text>
      </Box>
    </Flex>
  );
};

export default TypescriptPostPage;
