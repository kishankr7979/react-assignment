import React from 'react'
import Userdata from './data';
import '../styles/style.css';

const leaderboard = () => {
    return (
        <div>
            <Heading />
            <Head />
            {Userdata.map((data, key) => {
                for(let i=0; i<10; i++){
                return(
                    <div key={key}>
                    <Board 
                    avatar = {data.avatar}
                    name={data.name}
                    score = {data.score}
                    />
                    </div>
                );
                }
            })};
        </div>
    )
}
const Head = () => {
    return(
       <table>
           <thead>
               <tr>
                    <th>Avatar</th>
                   <th>Username</th>
                   <th>Credits</th>
               </tr>
           </thead>
           <tbody>
           </tbody>
       </table>
    );

}

const Board = ({name, score, avatar})=>{
   

  if(!name) return <div />;
    return (
        <table>
            <tr>
                <td>{avatar}</td>
                <td>{name}</td>
                <td>{score}</td>
            </tr>
           
            
        </table>
    )
};
const Heading = () => {
    return(
        <h2>Top 5 Users</h2>
    );
}
export default leaderboard
