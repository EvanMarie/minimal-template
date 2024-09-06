import type { MetaFunction } from "@remix-run/node";
import { NavLink } from "@remix-run/react";
import Icon from "~/buildingBlockComponents/icon";
import {
  FlexFull,
  HStack,
  TransitionFull,
  VStackFull,
  Wrap,
} from "~/buildingBlockComponents/mainContainers";
import Text from "~/buildingBlockComponents/text";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  function NavButton({
    to,
    text,
    icon,
    isExternal = false,
    className = "bg-100-linear3op25 text-col-900 hover:bg-400-diagonal3op75 hover:text-col-100 shadowBroadNormal hover:metallicEdgesMd",
  }: {
    to: string;
    text?: string;
    isExternal?: boolean;
    icon?: React.ComponentType<{ className?: string }>;
    className?: string;
  }) {
    return (
      // eslint-disable-next-line react/jsx-no-target-blank
      <NavLink to={to} target={isExternal ? "_blank" : undefined}>
        <HStack
          className={`px-[1.5vh] py-[0.5vh] transition-400 text-center ${className} items-center group hover:cursor-pointer`}
        >
          {icon && (
            <Icon
              icon={icon}
              iconClassName="text-col-900 text-[2.5vh] group-hover:text-cyan-200 group-hover:transition-400"
            />
          )}
          <Text>{text}</Text>
        </HStack>
      </NavLink>
    );
  }
  return (
    <FlexFull>
      <TransitionFull className="w-full h-full justify-center items-center">
        <VStackFull className="text-center xxl:w-[60vw]" gap="gap-[4vh]">
          <Text className="font-cursive boldTextGlow text-col-900 text-stroke-8-900 text-[4.5vh] md:text-[8vh] lg:text-[10vh] text-center animate-slideInRight">
            Remix, Vite, & Tailwind
          </Text>
          <VStackFull className="text-col-100 text-[2vh] sm:text-[2.5vh] md:text-[3vh] textShadow text-center">
            <Text className="text-col-100 animate-slideInLeft">
              A Project Launchpad
            </Text>
          </VStackFull>
          <Wrap className="animate-slideInUp50vh gap-[3vh] duration-2200 justify-center">
            <NavButton text="Design Presets" to="/design" />{" "}
            <NavButton
              text="DarkViolet.ai"
              to="https://darkviolet.ai"
              className="shadowBroadLoose border-970-md bg-gradient-to-r from-[#cd36f4] via-[#ab00ff] to-[#9b82ee] text-col-100 textShadow hover:metallicEdgesXl hover:scale-105"
            />
          </Wrap>
        </VStackFull>
      </TransitionFull>
    </FlexFull>
  );
}
