import {useRef, useState, useEffect} from 'react';


const Login = () => {

    const userRef = useRef();
    cont errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    
    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user, pwd);
        setUser('');
        setPwd('');
        setSuccess(true)
    }

    return (
      
        <div>
            <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live='assertive'>{errMsg}</p>
            <h3>Log In</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input 
                type="text" id="username" ref={userRef} autoComplete="off" 
                onChange={(e) => setUser(e.target.value)} value={user} required
                />
                <label htmlFor="password">Password</label>
                <input 
                type="password" id="password"
                onChange={(e) => setPwd(e.target.value)} value={pwd} required
                />
                <button>Log In</button>
            </form>
        </div>
    )
}

export default Login