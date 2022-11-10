import { createClient } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const supabase = createClient(
    "https://gptmxpmpjhkgntmlgsvm.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdwdG14cG1wamhrZ250bWxnc3ZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY4MTM0NjUsImV4cCI6MTk4MjM4OTQ2NX0.J_-NNWPwvXdr2mwJqoRqHCderOow7KW9aK1EIx7IHPk"
)

function Success() {
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        async function getUserData() {
            await supabase.auth.getUser().then((value) => {
                // valuse.data.user
                if (value.data?.user) {
                    console.log(value.data.user)
                    setUser(value.data.user)
                }
            })
        }
        getUserData();
    }, [])

    async function signOutUser() {
        const { eror } = await supabase.auth.signOut();
        navigate("/");
    }

    return (
        <div className='App'>
            {Object.keys(user).length !== 0 ?
                <>
                    <h1>HELLO</h1>
                    <button onClick={() => signOutUser()}>Sign Out</button>
                </>
                :
                <>
                    <h1>User is not logged in</h1>
                    <button onClick={() => { navigate("/") }}>Go Back home</button>
                </>
            }
        </div>
    );
}

export default Success;
