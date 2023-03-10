export const getIcon = screenName => {
	switch (screenName) {
		case "Home":
			return "home";
		case "Control Panel":
			return "account-details";
		case "Sign In":
			return "login";
		case "Sign Up":
			return "account-plus";
		case "Sign Out":
			return "logout";
		case "Create Tag":
			return "tag-plus";
		case "Edit Tag":
			return "application-edit";
		case "Profile":
			return "account";
		default:
			return undefined;
	}
};
