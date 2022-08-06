import { collectionGroup, getDocs } from "firebase/firestore";
import { db } from "../firebase.config";

export const getfromFirebase = () => async (dispatch) => {
  try {
    await getDocs(collectionGroup(db, "home")).then((res) => {
      const data = {
        about_content: res.docs[0].data(),
        home_content: res.docs[1].data(),
        projects: res.docs[2].data(),
      };
      dispatch({ type: "FETCH", payload: data });

    });
  } catch (error) {
    console.log(error);
  }
};
