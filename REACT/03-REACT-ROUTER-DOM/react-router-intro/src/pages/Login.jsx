import PropTypes from "prop-types"
function Login( { handleLogin }) {
  return (
    <>
    <h2>Login Page</h2>
    <h3>Login Form Yapısı Gelecek</h3>
    <button className="btn btn-primary" onClick={handleLogin}>Giriş Yap</button>
    </>
  )
}

export default Login

Login.propTypes = {
    handleLogin : PropTypes.func    
}