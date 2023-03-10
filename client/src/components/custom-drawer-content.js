import React, { useContext } from "react";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
	Button,
	Box,
	HamburgerIcon,
	Pressable,
	Heading,
	VStack,
	Text,
	Center,
	HStack,
	Divider,
	Icon,
} from "native-base";
import { AuthContext } from "../contexts/authContext";
import { getIcon } from "../utils/getIcon";

export default function CustomDrawerContent(props) {
	const { user } = useContext(AuthContext);

	return (
		<DrawerContentScrollView {...props} safeArea>
			<VStack space="6" my="2" mx="1">
				<Box px="4">
					<Text bold color="gray.700">
						Account
					</Text>
					<Text
						fontSize="14"
						mt="1"
						color="gray.500"
						fontWeight="500">
						{user?.email ? user.email : "Not signed in"}
					</Text>
				</Box>
				<VStack divider={<Divider />} space="4">
					<VStack space="3">
						{props.state.routeNames.map((name, index) => (
							<Pressable
								px="5"
								py="3"
								rounded="md"
								bg={
									index === props.state.index
										? "rgba(6, 182, 212, 0.1)"
										: "transparent"
								}
								key={index}
								onPress={event => {
									props.navigation.navigate(name);
								}}>
								<HStack space="7" alignItems="center">
									<Icon
										color={
											index === props.state.index
												? "primary.500"
												: "gray.500"
										}
										size="5"
										as={
											<MaterialCommunityIcons
												name={getIcon(name)}
											/>
										}
									/>
									<Text
										fontWeight="500"
										color={
											index === props.state.index
												? "primary.500"
												: "gray.700"
										}>
										{name}
									</Text>
								</HStack>
							</Pressable>
						))}
					</VStack>
				</VStack>
			</VStack>
		</DrawerContentScrollView>
	);
}
