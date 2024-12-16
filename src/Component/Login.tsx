// import { useState } from "react"

// const Login = () => {

//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const handleLogin = async () => {
//         const response = await fetch('https://localhost:3001/users');
//         const users = await response.json();

//         const user = users.find(
//             (user) => user.username === username && user.password === password
//         );

//         if (user) {
//             localStorage.setItem('userID', user.id);
//             setUser(user)
//         } else {
//             alert('invalid username or password')
//         }
//     }

//     return (
//         <div className='login'>
//             <h2>Login</h2>
//             <input type="username" name="username" placeholder="username" value={username} onChange={e => { setUsername(e.target.value) }} />
//             <input type="password" name="password" placeholder="password" value={password} onChange={e => { setPassword(e.target.value) }} />
//             <button onClick={handleLogin}>Login</button>
//         </div>
//     )
// }

// export default Login