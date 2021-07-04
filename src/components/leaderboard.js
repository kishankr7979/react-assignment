import React from 'react'
import Userdata from './data';
import '../styles/style.css';

const leaderboard = () => {
    return (
        <div>
            <Heading />
            <Head />
            
            {Userdata.map((data, key) => {
                return(
                    <div key={key}>
                    <Board 
                    rank = {data.rank}
                    avatar = {data.avatar}
                    name={data.name}
                    score = {data.score}
                    />
                    </div>
                );
            })};
        </div>
    )
}
const Head = () => {
    const st1 = {
        width:"8%",
    }
    const st2 = {
        width:"3%",
    }
   
    return(
       <table>
           <thead>
               <tr>
               <th style={st2}>#</th>  
                    <th style={st1}>Avatar</th>
                   <th>Name</th>
                   <th>Credits</th>
               </tr>
           </thead>
           <tbody>
           </tbody>
       </table>
      
    );

}



const Board = ({name, score, avatar, rank})=>{
    const style11 = {
        fontSize: '29px',
        width:"8%",
    }
    const st1 = {
        width:"3%",
    }

  if(!name) return <div />;
 
    return (
        <table>
            <tr>
                <td style={st1}>{rank}</td>
                <td style={style11}> {avatar}</td>
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
