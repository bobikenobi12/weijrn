import React from "react";
import {
	AlertDialog,
	Button,
	Center,
	useToast,
	Icon,
	Text,
	FormControl,
	Input,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { AuthContext } from "../contexts/authContext";
import { useNavigation } from "@react-navigation/native";

import { updateTag } from "../services/tagService";

export default function EditTagDialog(props) {
	const [isOpen, setIsOpen] = React.useState(false);
	const [nickname, setNickname] = React.useState(props.tag.nickname);
	const onClose = () => setIsOpen(false);

	const cancelRef = React.useRef(null);
	const toast = useToast();
	const { user } = React.useContext(AuthContext);
	const navigation = useNavigation();

	return (
		<Center>
			<Button colorScheme="amber" onPress={() => setIsOpen(!isOpen)}>
				<Icon
					as={<AntDesign name="edit" size={24} color="black" />}
					size="sm"
					color="white"
				/>
			</Button>
			<AlertDialog
				leastDestructiveRef={cancelRef}
				isOpen={isOpen}
				onClose={onClose}
				motionPreset="slideInBottom">
				<AlertDialog.Content>
					<AlertDialog.CloseButton />
					<AlertDialog.Header>
						<Text>Edit Tag</Text>
					</AlertDialog.Header>
					<AlertDialog.Body>
						<FormControl>
							<FormControl.Label>New Nickname</FormControl.Label>
							<Input
								placeholder="Enter nickname"
								_light={{
									placeholderTextColor: "blueGray.400",
								}}
								_dark={{
									placeholderTextColor: "blueGray.50",
								}}
								onChangeText={text => setNickname(text)}
							/>
						</FormControl>
					</AlertDialog.Body>
					<AlertDialog.Footer>
						<Button
							variant="unstyled"
							colorScheme="coolGray"
							onPress={onClose}
							ref={cancelRef}>
							Cancel
						</Button>
						<Button
							colorScheme="amber"
							onPress={async () => {
								updateTag(
									props.tag.nickname,
									user._token,
									nickname
								)
									.then(() => {
										toast.show({
											title: "Tag updated",
											status: "success",
										});
										onClose();
										navigation.navigate("Control Panel", {
											refresh: ++global.refresh,
										});
									})
									.catch(alert);
							}}>
							Edit
						</Button>
					</AlertDialog.Footer>
				</AlertDialog.Content>
			</AlertDialog>
		</Center>
	);
}
