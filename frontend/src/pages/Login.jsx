import Form from "../components/Forms";

function Login(){
    console.log('Login component rendered');
    return <Form route="/api/token/" method="login" />
    
}

export default Login;