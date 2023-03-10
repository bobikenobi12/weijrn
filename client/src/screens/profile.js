import React, { useContext, useState } from "react";
import {
	Box,
	Button,
	Center,
	FormControl,
	Heading,
	HStack,
	Icon,
	Input,
	Item,
	Label,
	ScrollView,
	Text,
	VStack,
	useClipboard,
	useToast,
} from "native-base";
import { AuthContext } from "../contexts/authContext";
import { Feather } from "@expo/vector-icons";

import EditUserDialog from "../components/edit-user-dialog";
import DeleteUserDialog from "../components/delete-user-dialog";

export default function ProfileScreen({ navigation }) {
	const { user } = useContext(AuthContext);
	const toast = useToast();
	const { onCopy } = useClipboard();

	return (
		<Center>
			<Box
				_dark={{
					bg: "coolGray.800",
				}}
				_light={{
					bg: "white",
				}}
				rounded="lg"
				flex="1"
				safeAreaTop
				maxW="400px"
				w="100%"
				alignItems="center">
				<Heading p="4" pb="3" size="lg">
					Profile
				</Heading>
				<VStack space={4} p="4">
					<HStack space={4} alignItems="center">
						<Icon
							as={<Feather name="user" />}
							size="sm"
							color="coolGray.800"
						/>
						<Text
							_dark={{
								color: "warmGray.50",
							}}
							_light={{
								color: "coolGray.800",
							}}
							fontSize="sm"
							fontWeight={600}>
							{user.username}
						</Text>
					</HStack>
					<HStack space={4} alignItems="center">
						<Icon
							as={<Feather name="mail" />}
							size="sm"
							color="coolGray.800"
						/>
						<Text
							_dark={{
								color: "warmGray.50",
							}}
							_light={{
								color: "coolGray.800",
							}}
							fontSize="sm"
							fontWeight={600}>
							{user.email}
						</Text>
					</HStack>
					<HStack space={4} alignItems="center">
						<Icon
							as={<Feather name="key" />}
							size="sm"
							color="coolGray.800"
						/>
						<Text
							_dark={{
								color: "warmGray.50",
							}}
							_light={{
								color: "coolGray.800",
							}}
							fontSize="sm"
							fontWeight={600}>
							{user.macAddress}
						</Text>
						<Button
							onPress={() => {
								onCopy(user.macAddress);
								toast.show({
									title: "Copied to clipboard",
								});
							}}
							variant="unstyled"
							_text={{
								color: "blue.500",
							}}>
							<Icon as={<Feather name="copy" />} size="sm" />
						</Button>
					</HStack>
					<HStack
						space={4}
						alignItems="center"
						justifyContent="center">
						<EditUserDialog />
						<DeleteUserDialog />
					</HStack>
				</VStack>
			</Box>
		</Center>
	);
}
