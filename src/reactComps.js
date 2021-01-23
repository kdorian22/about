
function header(){
  return(
    <div id = 'header'>
      <div id = 'title'> KD </div>
      <div id = 'links'>
        <a className = 'headAnchor' href = "./project">PROJECTS</a> |
        <a className = 'headAnchor' href = "./">ABOUT</a>
      </div>
    </div>
  )
}


function Description(title, desc, desc2, desc3, link, git, dataAtt, dataAttName, inspoAtt, inspoAttName, img){
  if(desc != undefined){
    var description = <div className = 'desc'> {desc} <br></br><br></br> </div>
  }
  if(desc2 != undefined){
    var description2 = <div className = 'desc two'> {desc2} <br></br> <br></br> </div>
  }
  if(desc3 != undefined){
    var description3 = <div className = 'desc'> {desc3} <br></br><br></br> </div>
  }else{
    var description3 =<div> </div>
  }
  if(dataAtt != undefined | inspoAtt != undefined){
    var attWord = <h2>  <br></br> Attribution:</h2>
  }else{
    var attWord = <h2> </h2>
  }
  if(dataAtt != undefined){
    var dataAttribution = <span> <p className = 'bottom'> Data from <a href = {dataAtt} target = '_blank'> {dataAttName} </a> </p> </span>
  }
  if(inspoAtt != undefined){
    var dataInspiration =  <p className = 'bottom'> Inspired by <a href = {inspoAtt} target = '_blank'> {inspoAttName} </a> </p>
  }
  return (
    <div>
      <h1> {title} </h1>
      {description}
      <div> {description2}
        <img src = {img} className = 'projPic'>

        </img>
      </div>
      {description3}
      <h2> View: <br></br> </h2>
      <p className = 'bottom'> View <a href = {link} target = '_blank'> {title} </a> </p>
      <h2>  <br></br> Code:</h2>
      <p className = 'bottom'> Code on <a href = {git} target = '_blank'> Github </a>  </p>
      {attWord}
      {dataAttribution}
      {dataInspiration}
    </div>
  );
}
