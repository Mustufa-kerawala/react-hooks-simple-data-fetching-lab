import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

    const [dog, setDog] = useState([])

    useEffect(()=> {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(res => setDog(res.message))
    })

    const img = <img src={dog} alt='A Random Dog' className='card-img-top mx-auto' style={{width: '50%'}}/>
    const loading = <p className='card-text mx-auto'>Loading..</p>
    return (
        <div className='card'>
            <h1 className='card-title mx-auto'>App</h1>
            {dog ? img : loading}
            
        </div>
    )
}


export default App