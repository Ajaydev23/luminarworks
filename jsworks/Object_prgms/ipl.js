var point_table=[
    {t_name:"csk",pld:10,won:8,loss:2,pts:16},
    {t_name:"dc",pld:11,won:8,loss:3,pts:16},
    {t_name:"rcb",pld:11,won:7,loss:4,pts:14},
    {t_name:"kkr",pld:11,won:5,loss:6,pts:10},
    {t_name:"mi",pld:11,won:5,loss:6,pts:10},
    {t_name:"pkb",pld:11,won:4,loss:7,pts:8},
    {t_name:"rr",pld:11,won:4,loss:7,pts:8},
    {t_name:"srh",pld:10,won:2,loss:8,pts:4}
]
point_table.forEach(team=>console.log(team.t_name))
//print team details whose pts >10
// for(let team of point_table)
// {
//     if(team.pts>10)
//     {
//         console.log(team);
//     }
// }
point_table.filter(team=>team.pts>10).forEach(team=>console.log(team));
//is there mi playing ipl
console.log(point_table.some(team=>team.t_name=="mi"))
//print details of kkr
var team_data=point_table.find(team=>team.t_name=="kkr")
console.log(team_data);
//print details of highest point team
var max=point_table.reduceRight((team1,team2)=>team1.pts>team2.pts?team1:team2)
console.log(max);

