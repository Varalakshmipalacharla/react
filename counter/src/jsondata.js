import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const JsonData = () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const [a, setA] = useState(null);

    useEffect(() => {
        axios.get(url).then(res => { setA(res.data) })
    }, [url])

    if (a === null) {
        return <div>hello</div>
    }
    else {
        return (
            <div>
                {a.map(item => <div key={item.id}>
                    <button className="user">
                        <p>
                            <b>Name:{item.name}</b><br />
                            User Name:{item.username}<br />
                            Email:{item.email}<br />
                            Street:{item.address.street}<br />
                            City{item.address.city}<br />
                            ZipCode:{item.address.zipcode}
                        </p>
                    </button>
                </div>)}
            </div>
        );
    }


}

export default JsonData;
