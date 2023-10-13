import { storage, database, app } from "firbaseConfig";
import { getDownloadURL, uploadBytesResumable, ref } from "firebase/storage";
import { addFiles } from "~/API/firestore";

export const fileUpload = (file: any) => {
  const storageRef = ref(storage, `files/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
      );
    },
    (error) => {
      alert(error);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        addFiles(downloadURL);
      });
    },
  );
};
