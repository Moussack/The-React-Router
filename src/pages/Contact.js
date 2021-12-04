import { useLocation } from 'react-router-dom';

export default function Contact() {
   const queryString = useLocation().search;
   console.log(queryString);

   const queryParams = new URLSearchParams(queryString);
   const name = queryParams.get('name');

   return (
      <div>
         <h2>Hey {name}, Contact</h2>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, possimus?</p>
      </div>
   );
}
