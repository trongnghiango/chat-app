import { Button, Col, Row } from "antd";
import Title from "antd/es/typography/Title";
import { auth } from "../../firebase/config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getRedirectResult, signInWithPopup } from "firebase/auth";

export default function Login({ }) {

  const fbLoginHandler = () => {

  }

  const emailLoginHandler = ({ email, password }: any) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  const ggLoginhandler = () => {
    console.log('gg');
    // getRedirectResult(auth)
    //   .then((result) => {
    //     // This gives you a Google Access Token. You can use it to access Google APIs.
    //     const credential = GoogleAuthProvider.credentialFromResult(result!);
    //     const token = credential?.accessToken;

    //     // The signed-in user info.
    //     const user = result?.user;
    //     // IdP data available using getAdditionalUserInfo(result)
    //     // ...
    //   }).catch((error) => {
    //     // Handle Errors here.
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // The email of the user's account used.
    //     const email = error.customData.email;
    //     // The AuthCredential type that was used.
    //     const credential = GoogleAuthProvider.credentialFromError(error);
    //     // ...
    //   });
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((result) => {
        console.log('Log::', result)
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        console.log('Error::', error);
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  return (
    <>
      <Row style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Col span={8}>
          <Title style={{ textAlign: 'center', marginBottom: '48px' }} level={2}>Fun chat</Title>
          <Button onClick={ggLoginhandler} style={{ width: '100%', marginBottom: '10px' }}>Đăng nhập bằng Google</Button>
          <Button style={{ width: '100%', marginBottom: '10px' }}>Đăng nhập bằng Facebook</Button>
        </Col>
      </Row>
    </>
  );
}