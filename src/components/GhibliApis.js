import axios from 'axios';

export function Foobar(setter) {
    axios
        .get('https://ghibliapi.herokuapp.com/films')
        .then(res => setter(res.data))
        .catch(err => console.log(err));
}