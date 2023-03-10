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
import { AuthContext } from "../contexts/authContext";
import { Entypo } from "@expo/vector-icons";
import { deleteUser } from "../services/userService";

export default function DeleteTagDialog() {
	const [isOpen, setIsOpen] = React.useState(false);
	const [confirmPassword, setConfirmPassword] = React.useState("");
	const onClose = () => setIsOpen(false);
	const cancelRef = React.useRef(null);
	const { user, setUser } = React.useContext(AuthContext);
	const toast = useToast();

	return (
		<Center>
			<Button colorScheme="danger" onPress={() => setIsOpen(!isOpen)}>
				<Icon as={<Entypo name="trash" />} size="sm" color="white" />
			</Button>
			<AlertDialog
				leastDestructiveRef={cancelRef}
				isOpen={isOpen}
				onClose={onClose}
				motionPreset="slideInBottom">
				<AlertDialog.Content>
					<AlertDialog.CloseButton />
					<AlertDialog.Header>
						<Text>
							Delete User{" "}
							<Text bold italic>
								{user.username}
							</Text>
						</Text>
					</AlertDialog.Header>
					<AlertDialog.Body>
						<Text>
							This will remove the user{" "}
							<Text bold italic>
								{user.username}.
							</Text>
							This action cannot be reversed. Deleted data can not
							be recovered.
						</Text>
						<FormControl>
							<FormControl.Label>
								Confirm Password
							</FormControl.Label>
							<Input
								type="password"
								value={confirmPassword}
								onChangeText={setConfirmPassword}
							/>
						</FormControl>
					</AlertDialog.Body>
					<AlertDialog.Footer>
						<Button.Group space={2}>
							<Button
								variant="unstyled"
								colorScheme="coolGray"
								onPress={onClose}
								ref={cancelRef}>
								Cancel
							</Button>
							<Button
								colorScheme="danger"
								onPress={async () => {
									try {
										await deleteUser(
											user._id,
											user._token,
											confirmPassword
										);
										setUser(null);
										toast.show({
											title: "User deleted.",
											status: "success",
										});
									} catch (err) {
										toast.show({
											title: "Error deleting user.",
											status: "error",
										});
									}
								}}>
								Delete
							</Button>
						</Button.Group>
					</AlertDialog.Footer>
				</AlertDialog.Content>
			</AlertDialog>
		</Center>
	);
}
