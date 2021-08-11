import { Alert } from "react-native";

export function alertPromiseMultiParams(
  msg = "",
  nameButtonResolve = "",
  nameButtonReject = "",
  title = ""
) {
  return new Promise((resolve, reject) => {
    Alert.alert(
      title,
      msg,
      [
        {
          text: nameButtonResolve,
          onPress: () => resolve(true),
        },
        {
          text: nameButtonReject,
          onPress: () => resolve(false),
        },
      ],
      { cancelable: false }
    );
  });
}
